import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DoctorListRelationFilter } from "../doctor/DoctorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicalHistoryWhereUniqueInput } from "../medicalHistory/MedicalHistoryWhereUniqueInput";

export type PatientWhereInput = {
  age?: FloatFilter;
  birthday?: DateTimeNullableFilter;
  Doctors?: DoctorListRelationFilter;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  medicalHistory?: MedicalHistoryWhereUniqueInput;
};
