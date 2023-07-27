import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicalHistoryWhereInput = {
  id?: StringFilter;
  MID?: IntFilter;
  name?: StringNullableFilter;
  patients?: PatientWhereUniqueInput;
};
