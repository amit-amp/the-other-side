import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { MedicalHistoryWhereUniqueInput } from "../medicalHistory/MedicalHistoryWhereUniqueInput";

export type PatientUpdateInput = {
  age?: number;
  birthday?: Date | null;
  Doctors?: DoctorWhereUniqueInput | null;
  firstName?: string;
  lastName?: string;
  medicalHistory?: MedicalHistoryWhereUniqueInput | null;
};
