import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PatientListRelationFilter } from "../patient/PatientListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { SpecialtyWhereUniqueInput } from "../specialty/SpecialtyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DoctorWhereInput = {
  first_name?: StringFilter;
  id?: StringFilter;
  IsPrivate?: BooleanNullableFilter;
  last_name?: StringFilter;
  patients?: PatientListRelationFilter;
  PID?: IntFilter;
  specialty?: SpecialtyWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
