import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MedicalHistoryServiceBase } from "./base/medicalHistory.service.base";

@Injectable()
export class MedicalHistoryService extends MedicalHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
