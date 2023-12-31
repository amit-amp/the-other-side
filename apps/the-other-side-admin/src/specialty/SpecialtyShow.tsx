import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { SPECIALTY_TITLE_FIELD } from "./SpecialtyTitle";

export const SpecialtyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="field_name" source="field_name" />
        <TextField label="ID" source="id" />
        <TextField label="SFID" source="SFID" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Doctor"
          target="specialtyId"
          label="Doctors"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
