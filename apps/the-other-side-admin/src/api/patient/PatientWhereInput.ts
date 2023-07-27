import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MedicalHistoryWhereUniqueInput } from "../medicalHistory/MedicalHistoryWhereUniqueInput";

export type PatientWhereInput = {
  age?: FloatFilter;
  birthday?: DateTimeNullableFilter;
  Doctors?: DoctorWhereUniqueInput;
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  medicalHistory?: MedicalHistoryWhereUniqueInput;
};
