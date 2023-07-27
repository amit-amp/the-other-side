import { DoctorUpdateManyWithoutPatientsInput } from "./DoctorUpdateManyWithoutPatientsInput";
import { MedicalHistoryWhereUniqueInput } from "../medicalHistory/MedicalHistoryWhereUniqueInput";

export type PatientUpdateInput = {
  age?: number;
  birthday?: Date | null;
  Doctors?: DoctorUpdateManyWithoutPatientsInput;
  firstName?: string;
  lastName?: string;
  medicalHistory?: MedicalHistoryWhereUniqueInput | null;
};
