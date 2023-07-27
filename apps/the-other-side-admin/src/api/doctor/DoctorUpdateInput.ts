import { PatientUpdateManyWithoutDoctorsInput } from "./PatientUpdateManyWithoutDoctorsInput";
import { SpecialtyWhereUniqueInput } from "../specialty/SpecialtyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorUpdateInput = {
  first_name?: string;
  IsPrivate?: boolean | null;
  last_name?: string;
  patients?: PatientUpdateManyWithoutDoctorsInput;
  PID?: number;
  specialty?: SpecialtyWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
