import { Doctor } from "../doctor/Doctor";
import { MedicalHistory } from "../medicalHistory/MedicalHistory";

export type Patient = {
  age: number;
  birthday: Date | null;
  createdAt: Date;
  Doctors?: Array<Doctor>;
  firstName: string;
  id: string;
  lastName: string;
  medicalHistory?: MedicalHistory | null;
  updatedAt: Date;
};
