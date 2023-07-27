import { MedicalHistoryWhereInput } from "./MedicalHistoryWhereInput";
import { MedicalHistoryOrderByInput } from "./MedicalHistoryOrderByInput";

export type MedicalHistoryFindManyArgs = {
  where?: MedicalHistoryWhereInput;
  orderBy?: Array<MedicalHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
