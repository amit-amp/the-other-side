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
  IsString,
  IsOptional,
  IsBoolean,
  ValidateNested,
  IsInt,
} from "class-validator";
import { PatientUpdateManyWithoutDoctorsInput } from "./PatientUpdateManyWithoutDoctorsInput";
import { Type } from "class-transformer";
import { SpecialtyWhereUniqueInput } from "../../specialty/base/SpecialtyWhereUniqueInput";

@InputType()
class DoctorUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  first_name?: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  IsPrivate?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  last_name?: string;

  @ApiProperty({
    required: false,
    type: () => PatientUpdateManyWithoutDoctorsInput,
  })
  @ValidateNested()
  @Type(() => PatientUpdateManyWithoutDoctorsInput)
  @IsOptional()
  @Field(() => PatientUpdateManyWithoutDoctorsInput, {
    nullable: true,
  })
  patients?: PatientUpdateManyWithoutDoctorsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  PID?: number;

  @ApiProperty({
    required: false,
    type: () => SpecialtyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SpecialtyWhereUniqueInput)
  @IsOptional()
  @Field(() => SpecialtyWhereUniqueInput, {
    nullable: true,
  })
  specialty?: SpecialtyWhereUniqueInput | null;
}

export { DoctorUpdateInput as DoctorUpdateInput };
