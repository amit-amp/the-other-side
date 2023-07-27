import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DoctorTitle } from "../doctor/DoctorTitle";
import { MedicalHistoryTitle } from "../medicalHistory/MedicalHistoryTitle";

export const PatientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="age" source="age" />
        <DateTimeInput label="birthday" source="birthday" />
        <ReferenceArrayInput
          source="Doctors"
          reference="Doctor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DoctorTitle} />
        </ReferenceArrayInput>
        <TextInput label="first name" source="firstName" />
        <TextInput label="last name" source="lastName" />
        <ReferenceInput
          source="medicalHistory.id"
          reference="MedicalHistory"
          label="medical_history"
        >
          <SelectInput optionText={MedicalHistoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
