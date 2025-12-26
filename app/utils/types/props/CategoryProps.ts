import type { CategoryAvailabilityData, VehicleCategory } from "#imports";

export default interface CategoryProps {
  category: CategoryAvailabilityData;
  vehicleCategory?: VehicleCategory;
  showButton?: boolean;
  stepper?: any;
}
