/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsBoolean,
  IsOptional,
  ValidateNested,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { Patient } from "../../patient/base/Patient";
import { Specialty } from "../../specialty/base/Specialty";

@ObjectType()
class Doctor {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  first_name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  IsPrivate!: boolean | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  last_name!: string;

  @ApiProperty({
    required: false,
    type: () => [Patient],
  })
  @ValidateNested()
  @Type(() => Patient)
  @IsOptional()
  patients?: Array<Patient>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  PID!: number;

  @ApiProperty({
    required: false,
    type: () => Specialty,
  })
  @ValidateNested()
  @Type(() => Specialty)
  @IsOptional()
  specialty?: Specialty | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Doctor as Doctor };
