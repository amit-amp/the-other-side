import { PatientUpdateManyWithoutDoctorsInput } from "./PatientUpdateManyWithoutDoctorsInput";
import { SpecialtyWhereUniqueInput } from "../specialty/SpecialtyWhereUniqueInput";

export type DoctorUpdateInput = {
  first_name?: string;
  IsPrivate?: boolean | null;
  last_name?: string;
  patients?: PatientUpdateManyWithoutDoctorsInput;
  PID?: number;
  specialty?: SpecialtyWhereUniqueInput | null;
};
