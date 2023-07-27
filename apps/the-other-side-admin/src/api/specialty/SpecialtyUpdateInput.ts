import { DoctorUpdateManyWithoutSpecialtiesInput } from "./DoctorUpdateManyWithoutSpecialtiesInput";

export type SpecialtyUpdateInput = {
  description?: string | null;
  doctors?: DoctorUpdateManyWithoutSpecialtiesInput;
  field_name?: string;
  SFID?: number;
};
