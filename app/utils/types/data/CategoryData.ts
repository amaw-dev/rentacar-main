import {
  type CategoryMonthPriceData,
  type CategoryModelData,
  type CategoryType,
} from "#imports";

export default interface CategoryData {
  id: CategoryType;
  identification: CategoryType;
  name: string;
  category: string;
  description: string;
  image: string;
  ad: string;
  models: CategoryModelData[];
  month_prices: CategoryMonthPriceData[];
  total_coverage_unit_charge: number;
}
