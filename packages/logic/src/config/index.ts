/**
 * Shared configuration exports
 *
 * This module exports all shared configuration that can be used across
 * multiple brands in the monorepo architecture.
 */

export { defaultConfig } from './defaults.config';
export { uiConfig } from './ui.config';
export { organizationConfig } from './organization.config';
export { branchesConfig, type Branch } from './branches.config';
export { faqsConfig, type FAQ } from './faqs.config';
export { citiesConfig, type City, type Testimonial } from './cities.config';
export {
  adminDataConfig,
  type AdminData,
  type AdminBranch,
  type VehicleCategory as AdminVehicleCategory,
  type VehicleModel,
  type MonthPrice,
} from './admin.config';
