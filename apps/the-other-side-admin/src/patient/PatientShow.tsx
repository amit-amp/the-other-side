import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MEDICALHISTORY_TITLE_FIELD } from "../medicalHistory/MedicalHistoryTitle";

export const PatientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="age" source="age" />
        <TextField label="birthday" source="birthday" />
        <DateField source="createdAt" label="Created At" />
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
      </SimpleShowLayout>
    </Show>
  );
};
