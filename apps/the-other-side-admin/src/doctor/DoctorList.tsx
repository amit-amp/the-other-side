import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { SPECIALTY_TITLE_FIELD } from "../specialty/SpecialtyTitle";

export const DoctorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Doctors"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
