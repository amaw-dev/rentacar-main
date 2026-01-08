/** imports */
import {
  useFetchCategoriesAvailabilityData,
  useCategory,
  useStoreAdminData,
  useStoreReservationForm
} from "#imports";

/** types */
import type {
  CategoryAvailabilityData,
  CategoryData,
  ErrorMessage,
  LocalizaErrorResponse,
} from "#imports";

const useStoreSearchData = defineStore("storeSearchData", () => {
  const storeAdminData = useStoreAdminData();
  const { categories: categoriesAdminData } = storeAdminData;
  const { haveMonthlyReservation, selectedPickupLocation } = storeToRefs(useStoreReservationForm());
  const { createErrorMessage } = useMessages();
  const categoriesAvailabilityData = ref<CategoryAvailabilityData[] | null>(
    null
  );

  const pending = ref<boolean>(false);
  const error = ref<ErrorMessage | null>(null);
  
  const selectedCategory = ref<ReturnType<typeof useCategory> | null >(null);
  const noAvailableCategories = ref<boolean>(false);

  const noMonthlyCategories: string[] = [
    'FU',
    'FL',
    'GL'
  ];

  const search = async () => {
    error.value = null;
    pending.value = true;
    categoriesAvailabilityData.value = null;

    const { data, error: errorResponse } = await useFetchCategoriesAvailabilityData();

    if(errorResponse.value)
      error.value = errorResponse.value;

    // if monthly reservation is selected
    if(haveMonthlyReservation.value){

      if(errorResponse.value){
        error.value = errorResponse.value;
        if(errorResponse.value.error != "no_available_categories_error")
          noAvailableCategories.value = true;
      }
      else {
        const dataArray = Array.isArray(data.value) ? data.value : [];
        categoriesAvailabilityData.value = categoriesAdminData?.filter((categoryAdmin: CategoryData) =>
          !(categoryAdmin.identification in noMonthlyCategories)
        ) // filter out categories FU, FL and GL when have monthly reservation
        .map((categoryAdmin: CategoryData) =>
          // create a category availability object for each category
          createCategoryAvailability(categoryAdmin)
        )
        .map((category: CategoryAvailabilityData) => {
          // add return fee amount to each category
          const categoryAvailability = dataArray.find((categoryAvailability: CategoryAvailabilityData) =>
            categoryAvailability.categoryCode == category.categoryCode
          );

          if(categoryAvailability)
            category['returnFeeAmount'] = categoryAvailability.returnFeeAmount;

          return category;
        }) as CategoryAvailabilityData[];
      }

    }
    else {

      // if there's any data response
      if (data.value && Array.isArray(data.value)) {
        noAvailableCategories.value = data.value.length == 0;
        categoriesAvailabilityData.value = data.value;
      } else if (errorResponse.value) {
        if(errorResponse.value.error == 'no_available_categories_error')
          noAvailableCategories.value = true;
        else
          createErrorMessage(errorResponse.value);

        categoriesAvailabilityData.value = [];
      } else {
        // data.value exists but is not an array (unexpected response)
        categoriesAvailabilityData.value = [];
      }
    }
    
    pending.value = false;
  };

  const categories = computed<CategoryAvailabilityData[] | []>(() => {
    
    // const allowedUnabledCatories: CategoryType[] = ["C","F", "FX", "LE", "GC", "G4", "GR", "FU", "FL", "GL"];
    
    /** if there's a error besides no_available_categories_error, don't show unable categories */
    if(error.value && error.value.error != "no_available_categories_error")
      return [];
    
    
    if (categoriesAvailabilityData.value && categoriesAdminData) {
      
      /** when there's no available categories, show unable categories */
      if(error.value && error.value.error == "no_available_categories_error")
        return categoriesAdminData.map((categoryAdmin: CategoryData) => 
          createCategoryAvailability(categoryAdmin, true)
        );

      return categoriesAdminData.map((categoryAdmin: CategoryData) => {
        const categoryAvailability = categoriesAvailabilityData.value?.find((categoryAvailability: CategoryAvailabilityData) => 
          categoryAvailability.categoryCode == categoryAdmin.id
        );

        if(categoryAvailability){
          
          categoryAvailability['categoryModels'] = categoryAdmin.models;
          categoryAvailability["categoryMonthPrices"] = categoryAdmin.month_prices;
          categoryAvailability["categoryDescription"] = categoryAdmin.category.replace(categoryAdmin.name, "");
          categoryAvailability["totalCoverageUnitCharge"] = categoryAdmin.total_coverage_unit_charge;
          
          return categoryAvailability
        }
        else return createCategoryAvailability(categoryAdmin, true);
      })
      .sort((a: CategoryAvailabilityData, b: CategoryAvailabilityData) => {
        if (a.estimatedTotalAmount < b.estimatedTotalAmount) return -1;
        else if (a.estimatedTotalAmount > b.estimatedTotalAmount) return 1;
        return 0;
      });
      
    } else return [];
    
  });

  
  const filteredCategories = computed<CategoryAvailabilityData[] | []>(() => {
    
    const bogotaBranches = ["AABOT", "ACBOT", "ACBEX", "ACBNN", "ACBOJ"];
    const onlyBogotaCategories: CategoryType[] = ["FU", "FL", "GL"];
    const onlyCategoryGRCityAllowed = [
      "bogota", 
      "bucaramanga", 
      "cali", 
      "medellin", 
      "barranquilla",
      "soledad",
      "cartagena",
      "santa-marta",
    ];
    const pickupLocationCode = selectedPickupLocation.value?.code;
    const pickupLocationCity = selectedPickupLocation.value?.city;
    
    //TODO fix this
    if(categories.value.length == 0){
      return [];
    }
    else return categories.value
      // .map((category: CategoryAvailabilityData) => new Category(category))
      // .filter((category: CategoryAvailabilityData) => {
      //   if (haveMonthlyReservation.value)
      //     return category.getCategoryMonthlyPriceTotalInsurancePrice();
      //   else return true;
      // })
      .filter((category: CategoryAvailabilityData) => {
        // filter categories that are not available when selected bogota
        if(pickupLocationCode){
          if ( 
            !bogotaBranches.includes(pickupLocationCode) &&
            onlyBogotaCategories.includes(category.categoryCode) 
          ) {
            return false;
          } else return true;
        }
      })
      .filter((category: CategoryAvailabilityData) => {
        // filter category GR that are not available when selected allowed city
        if(pickupLocationCity){
          if ( 
            !onlyCategoryGRCityAllowed.includes(pickupLocationCity) &&
            category.categoryCode == "GR"
          ) {
            return false;
          } else return true;
        }
      });
      
  });

  return { 
    categoriesAvailabilityData, 
    categories,
    filteredCategories,
    search, 
    pending, 
    error, 
    selectedCategory, 
    noAvailableCategories,
  };
});

const createCategoryAvailability = (category: CategoryData, unable: boolean = false) : CategoryAvailabilityData => ({
    categoryCode: category.id,
    categoryDescription: category.description,
    categoryModels: category.models,
    categoryMonthPrices: category.month_prices,
    totalAmount: 0,
    estimatedTotalAmount: (unable) ? 999999999 : 1,
    totalCoverageUnitCharge: category.total_coverage_unit_charge,
    returnFeeAmount: 0,
    vehicleDayCharge: 0,
    numberDays: 0,
    taxFeeAmount: 0,
    taxFeePercentage: 0,
    IVAFeeAmount: 0,
    coverageUnitCharge: 0,
    coverageQuantity: 0,
    coverageTotalAmount: 0,
    referenceToken: "",
    rateQualifier: "",
  } as CategoryAvailabilityData)

export default useStoreSearchData;