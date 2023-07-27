import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { SPECIALTY_TITLE_FIELD } from "../specialty/SpecialtyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

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
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
