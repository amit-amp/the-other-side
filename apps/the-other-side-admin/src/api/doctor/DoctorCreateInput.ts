import { PatientCreateNestedManyWithoutDoctorsInput } from "./PatientCreateNestedManyWithoutDoctorsInput";
import { SpecialtyWhereUniqueInput } from "../specialty/SpecialtyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorCreateInput = {
  first_name: string;
  IsPrivate?: boolean | null;
  last_name: string;
  patients?: PatientCreateNestedManyWithoutDoctorsInput;
  PID: number;
  specialty?: SpecialtyWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
