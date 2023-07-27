import { MedicalHistory as TMedicalHistory } from "../api/medicalHistory/MedicalHistory";

export const MEDICALHISTORY_TITLE_FIELD = "name";

export const MedicalHistoryTitle = (record: TMedicalHistory): string => {
  return record.name || String(record.id);
};
