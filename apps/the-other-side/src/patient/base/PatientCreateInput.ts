/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsDate,
  IsOptional,
  ValidateNested,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { DoctorWhereUniqueInput } from "../../doctor/base/DoctorWhereUniqueInput";
import { MedicalHistoryWhereUniqueInput } from "../../medicalHistory/base/MedicalHistoryWhereUniqueInput";

@InputType()
class PatientCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  age!: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  birthday?: Date | null;

  @ApiProperty({
    required: false,
    type: () => DoctorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DoctorWhereUniqueInput)
  @IsOptional()
  @Field(() => DoctorWhereUniqueInput, {
    nullable: true,
  })
  Doctors?: DoctorWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  lastName!: string;

  @ApiProperty({
    required: false,
    type: () => MedicalHistoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MedicalHistoryWhereUniqueInput)
  @IsOptional()
  @Field(() => MedicalHistoryWhereUniqueInput, {
    nullable: true,
  })
  medicalHistory?: MedicalHistoryWhereUniqueInput | null;
}

export { PatientCreateInput as PatientCreateInput };
