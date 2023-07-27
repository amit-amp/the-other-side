import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SpecialtyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Specialties"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="field_name" source="field_name" />
        <TextField label="ID" source="id" />
        <TextField label="SFID" source="SFID" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
