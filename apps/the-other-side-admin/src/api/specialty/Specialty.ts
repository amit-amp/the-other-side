import { Doctor } from "../doctor/Doctor";

export type Specialty = {
  createdAt: Date;
  description: string | null;
  doctors?: Array<Doctor>;
  field_name: string;
  id: string;
  SFID: number;
  updatedAt: Date;
};
