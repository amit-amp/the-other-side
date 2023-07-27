import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MedicalHistoryResolverBase } from "./base/medicalHistory.resolver.base";
import { MedicalHistory } from "./base/MedicalHistory";
import { MedicalHistoryService } from "./medicalHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MedicalHistory)
export class MedicalHistoryResolver extends MedicalHistoryResolverBase {
  constructor(
    protected readonly service: MedicalHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
