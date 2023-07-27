import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DOCTOR_TITLE_FIELD } from "./DoctorTitle";
import { MEDICALHISTORY_TITLE_FIELD } from "../medicalHistory/MedicalHistoryTitle";
import { SPECIALTY_TITLE_FIELD } from "../specialty/SpecialtyTitle";

export const DoctorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="first_name" source="first_name" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsPrivate" source="IsPrivate" />
        <TextField label="last_name" source="last_name" />
        <TextField label="PID" source="PID" />
        <ReferenceField
          label="Specialty"
          source="specialty.id"
          reference="Specialty"
        >
          <TextField source={SPECIALTY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Patient"
          target="DoctorsId"
          label="Patients"
        >
          <Datagrid rowClick="show">
            <TextField label="age" source="age" />
            <TextField label="birthday" source="birthday" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Doctors"
              source="doctor.id"
              reference="Doctor"
            >
              <TextField source={DOCTOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="first name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="last name" source="lastName" />
            <ReferenceField
              label="medical_history"
              source="medicalhistory.id"
              reference="MedicalHistory"
            >
              <TextField source={MEDICALHISTORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
