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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PatientListRelationFilter } from "../../patient/base/PatientListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { SpecialtyWhereUniqueInput } from "../../specialty/base/SpecialtyWhereUniqueInput";

@InputType()
class DoctorWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  first_name?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  IsPrivate?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  last_name?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PatientListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PatientListRelationFilter)
  @IsOptional()
  @Field(() => PatientListRelationFilter, {
    nullable: true,
  })
  patients?: PatientListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  PID?: IntFilter;

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
  specialty?: SpecialtyWhereUniqueInput;
}

export { DoctorWhereInput as DoctorWhereInput };
