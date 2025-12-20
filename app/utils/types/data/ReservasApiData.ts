import {
  type CategoryData,
  type BranchData,
} from "#imports";

export default interface ReservasApiData {
  categories: CategoryData[];
  branches: BranchData[];
}
