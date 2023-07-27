import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MedicalHistoryService } from "./medicalHistory.service";
import { MedicalHistoryControllerBase } from "./base/medicalHistory.controller.base";

@swagger.ApiTags("medicalHistories")
@common.Controller("medicalHistories")
export class MedicalHistoryController extends MedicalHistoryControllerBase {
  constructor(protected readonly service: MedicalHistoryService) {
    super(service);
  }
}
