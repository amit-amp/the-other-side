import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpecialtyServiceBase } from "./base/specialty.service.base";

@Injectable()
export class SpecialtyService extends SpecialtyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
