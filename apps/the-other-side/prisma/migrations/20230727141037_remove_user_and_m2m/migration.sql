/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DoctorToPatient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "_DoctorToPatient" DROP CONSTRAINT "_DoctorToPatient_A_fkey";

-- DropForeignKey
ALTER TABLE "_DoctorToPatient" DROP CONSTRAINT "_DoctorToPatient_B_fkey";

-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "DoctorsId" TEXT;

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "_DoctorToPatient";

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_DoctorsId_fkey" FOREIGN KEY ("DoctorsId") REFERENCES "Doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
