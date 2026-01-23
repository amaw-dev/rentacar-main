import type CategoryData from './CategoryData';
import type BranchData from './BranchData';

export default interface ReservasApiData {
  categories: CategoryData[];
  branches: BranchData[];
}
