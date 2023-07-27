import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DoctorListRelationFilter } from "../doctor/DoctorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type SpecialtyWhereInput = {
  description?: StringNullableFilter;
  doctors?: DoctorListRelationFilter;
  field_name?: StringFilter;
  id?: StringFilter;
  SFID?: IntFilter;
};
