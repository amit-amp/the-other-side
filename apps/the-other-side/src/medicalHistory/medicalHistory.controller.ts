import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MedicalHistoryService } from "./medicalHistory.service";
import { MedicalHistoryControllerBase } from "./base/medicalHistory.controller.base";

@swagger.ApiTags("medicalHistories")
@common.Controller("medicalHistories")
export class MedicalHistoryController extends MedicalHistoryControllerBase {
  constructor(
    protected readonly service: MedicalHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
