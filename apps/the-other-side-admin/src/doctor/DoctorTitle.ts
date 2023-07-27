import { Doctor as TDoctor } from "../api/doctor/Doctor";

export const DOCTOR_TITLE_FIELD = "first_name";

export const DoctorTitle = (record: TDoctor): string => {
  return record.first_name || String(record.id);
};
