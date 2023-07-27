import { Specialty as TSpecialty } from "../api/specialty/Specialty";

export const SPECIALTY_TITLE_FIELD = "field_name";

export const SpecialtyTitle = (record: TSpecialty): string => {
  return record.field_name || String(record.id);
};
