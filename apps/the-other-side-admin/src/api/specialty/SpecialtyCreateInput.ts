import { DoctorCreateNestedManyWithoutSpecialtiesInput } from "./DoctorCreateNestedManyWithoutSpecialtiesInput";

export type SpecialtyCreateInput = {
  description?: string | null;
  doctors?: DoctorCreateNestedManyWithoutSpecialtiesInput;
  field_name: string;
  SFID: number;
};
