/** types */
import type { BranchData } from "#imports";

const useStoreAdminData = defineStore("storeAdminData", () => {
  const { categories, branches } = useFetchRentacarData();

  const sortedBranches = computed<BranchData[] | []>(() =>
    branches
      ? branches.toSorted((a: BranchData, b: BranchData) =>
          a.name.localeCompare(b.name)
        )
      : []
  );

  function searchBranchByCity(city: string | string[]): BranchData | undefined {
    return sortedBranches.value.find(
      (branch: BranchData) => branch.city == city
    );
  }

  function searchBranchByCode(branch_code: string): BranchData | undefined {
    return sortedBranches.value.find(
      (branch: BranchData) => branch.code == branch_code
    );
  }
  
  function isBranchCode(branch_code: string): boolean {
    const branch = searchBranchByCode(branch_code);
    return (branch) ? true : false;
  }

  return {
    categories,
    branches,
    sortedBranches,
    searchBranchByCity,
    searchBranchByCode,
    isBranchCode,
  };
});

export default useStoreAdminData;