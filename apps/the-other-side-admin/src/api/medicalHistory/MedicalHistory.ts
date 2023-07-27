import { Patient } from "../patient/Patient";

export type MedicalHistory = {
  createdAt: Date;
  id: string;
  MID: number;
  name: string | null;
  patients?: Patient | null;
  updatedAt: Date;
};
