import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicalHistoryUpdateInput = {
  MID?: number;
  name?: string | null;
  patients?: PatientWhereUniqueInput | null;
};
