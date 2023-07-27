import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PatientTitle } from "../patient/PatientTitle";
import { SpecialtyTitle } from "../specialty/SpecialtyTitle";
import { UserTitle } from "../user/UserTitle";

export const DoctorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="first_name" source="first_name" />
        <BooleanInput label="IsPrivate" source="IsPrivate" />
        <TextInput label="last_name" source="last_name" />
        <ReferenceArrayInput
          source="patients"
          reference="Patient"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PatientTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="PID" source="PID" />
        <ReferenceInput
          source="specialty.id"
          reference="Specialty"
          label="Specialty"
        >
          <SelectInput optionText={SpecialtyTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
