import { Module } from "@nestjs/common";
import { MedicalHistoryModuleBase } from "./base/medicalHistory.module.base";
import { MedicalHistoryService } from "./medicalHistory.service";
import { MedicalHistoryController } from "./medicalHistory.controller";
import { MedicalHistoryResolver } from "./medicalHistory.resolver";

@Module({
  imports: [MedicalHistoryModuleBase],
  controllers: [MedicalHistoryController],
  providers: [MedicalHistoryService, MedicalHistoryResolver],
  exports: [MedicalHistoryService],
})
export class MedicalHistoryModule {}
