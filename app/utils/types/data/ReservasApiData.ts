import {
  type CategoryData,
  type BranchData,
  type PageConfigData,
} from "#imports";

export default interface ReservasApiData extends Response {
  categories: CategoryData[];
  page_config: PageConfigData;
  branches: BranchData[];
}
