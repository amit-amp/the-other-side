import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  age?: SortOrder;
  birthday?: SortOrder;
  createdAt?: SortOrder;
  DoctorsId?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  medicalHistoryId?: SortOrder;
  updatedAt?: SortOrder;
};
