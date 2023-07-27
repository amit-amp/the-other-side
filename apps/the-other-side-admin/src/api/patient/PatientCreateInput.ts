import { DoctorCreateNestedManyWithoutPatientsInput } from "./DoctorCreateNestedManyWithoutPatientsInput";
import { MedicalHistoryWhereUniqueInput } from "../medicalHistory/MedicalHistoryWhereUniqueInput";

export type PatientCreateInput = {
  age: number;
  birthday?: Date | null;
  Doctors?: DoctorCreateNestedManyWithoutPatientsInput;
  firstName: string;
  lastName: string;
  medicalHistory?: MedicalHistoryWhereUniqueInput | null;
};
