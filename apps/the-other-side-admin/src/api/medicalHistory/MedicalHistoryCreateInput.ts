import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicalHistoryCreateInput = {
  MID: number;
  name?: string | null;
  patients?: PatientWhereUniqueInput | null;
};
