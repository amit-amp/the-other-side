import * as graphql from "@nestjs/graphql";
import { SpecialtyResolverBase } from "./base/specialty.resolver.base";
import { Specialty } from "./base/Specialty";
import { SpecialtyService } from "./specialty.service";

@graphql.Resolver(() => Specialty)
export class SpecialtyResolver extends SpecialtyResolverBase {
  constructor(protected readonly service: SpecialtyService) {
    super(service);
  }
}
