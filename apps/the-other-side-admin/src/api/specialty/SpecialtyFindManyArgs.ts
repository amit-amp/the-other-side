import { SpecialtyWhereInput } from "./SpecialtyWhereInput";
import { SpecialtyOrderByInput } from "./SpecialtyOrderByInput";

export type SpecialtyFindManyArgs = {
  where?: SpecialtyWhereInput;
  orderBy?: Array<SpecialtyOrderByInput>;
  skip?: number;
  take?: number;
};
