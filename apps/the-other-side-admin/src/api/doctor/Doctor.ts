import { Patient } from "../patient/Patient";
import { Specialty } from "../specialty/Specialty";
import { User } from "../user/User";

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
  user?: User | null;
};
