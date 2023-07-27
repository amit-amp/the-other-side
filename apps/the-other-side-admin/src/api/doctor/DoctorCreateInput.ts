import { PatientCreateNestedManyWithoutDoctorsInput } from "./PatientCreateNestedManyWithoutDoctorsInput";
import { SpecialtyWhereUniqueInput } from "../specialty/SpecialtyWhereUniqueInput";

export type DoctorCreateInput = {
  first_name: string;
  IsPrivate?: boolean | null;
  last_name: string;
  patients?: PatientCreateNestedManyWithoutDoctorsInput;
  PID: number;
  specialty?: SpecialtyWhereUniqueInput | null;
};
