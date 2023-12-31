/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MedicalHistoryWhereInput } from "./MedicalHistoryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MedicalHistoryOrderByInput } from "./MedicalHistoryOrderByInput";

@ArgsType()
class MedicalHistoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MedicalHistoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MedicalHistoryWhereInput, { nullable: true })
  @Type(() => MedicalHistoryWhereInput)
  where?: MedicalHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: [MedicalHistoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MedicalHistoryOrderByInput], { nullable: true })
  @Type(() => MedicalHistoryOrderByInput)
  orderBy?: Array<MedicalHistoryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MedicalHistoryFindManyArgs as MedicalHistoryFindManyArgs };
