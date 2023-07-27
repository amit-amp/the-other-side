import * as graphql from "@nestjs/graphql";
import { MedicalHistoryResolverBase } from "./base/medicalHistory.resolver.base";
import { MedicalHistory } from "./base/MedicalHistory";
import { MedicalHistoryService } from "./medicalHistory.service";

@graphql.Resolver(() => MedicalHistory)
export class MedicalHistoryResolver extends MedicalHistoryResolverBase {
  constructor(protected readonly service: MedicalHistoryService) {
    super(service);
  }
}
