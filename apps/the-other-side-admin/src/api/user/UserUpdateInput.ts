import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  doctor?: DoctorWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
