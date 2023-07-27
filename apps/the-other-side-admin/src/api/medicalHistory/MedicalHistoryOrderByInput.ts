import { SortOrder } from "../../util/SortOrder";

export type MedicalHistoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  MID?: SortOrder;
  name?: SortOrder;
  patientsId?: SortOrder;
  updatedAt?: SortOrder;
};
