import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DoctorTitle } from "../doctor/DoctorTitle";
import { MedicalHistoryTitle } from "../medicalHistory/MedicalHistoryTitle";

export const PatientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="age" source="age" />
        <DateTimeInput label="birthday" source="birthday" />
        <ReferenceInput source="Doctors.id" reference="Doctor" label="Doctors">
          <SelectInput optionText={DoctorTitle} />
        </ReferenceInput>
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
    </Create>
  );
};
