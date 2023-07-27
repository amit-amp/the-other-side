import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpecialtyService } from "./specialty.service";
import { SpecialtyControllerBase } from "./base/specialty.controller.base";

@swagger.ApiTags("specialties")
@common.Controller("specialties")
export class SpecialtyController extends SpecialtyControllerBase {
  constructor(protected readonly service: SpecialtyService) {
    super(service);
  }
}
