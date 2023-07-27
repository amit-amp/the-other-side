import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  createdAt?: SortOrder;
  first_name?: SortOrder;
  id?: SortOrder;
  IsPrivate?: SortOrder;
  last_name?: SortOrder;
  PID?: SortOrder;
  specialtyId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
