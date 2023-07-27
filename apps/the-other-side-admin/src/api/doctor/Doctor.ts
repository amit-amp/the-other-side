import { Patient } from "../patient/Patient";
import { Specialty } from "../specialty/Specialty";

export type Doctor = {
  createdAt: Date;
  first_name: string;
  id: string;
  IsPrivate: boolean | null;
  last_name: string;
  patients?: Array<Patient>;
  PID: number;
  specialty?: Specialty | null;
  updatedAt: Date;
};
