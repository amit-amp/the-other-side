import { Doctor } from "../doctor/Doctor";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  doctor?: Doctor | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
