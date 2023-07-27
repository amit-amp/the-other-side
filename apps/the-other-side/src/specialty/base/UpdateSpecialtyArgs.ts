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
import { SpecialtyWhereUniqueInput } from "./SpecialtyWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SpecialtyUpdateInput } from "./SpecialtyUpdateInput";

@ArgsType()
class UpdateSpecialtyArgs {
  @ApiProperty({
    required: true,
    type: () => SpecialtyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SpecialtyWhereUniqueInput)
  @Field(() => SpecialtyWhereUniqueInput, { nullable: false })
  where!: SpecialtyWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SpecialtyUpdateInput,
  })
  @ValidateNested()
  @Type(() => SpecialtyUpdateInput)
  @Field(() => SpecialtyUpdateInput, { nullable: false })
  data!: SpecialtyUpdateInput;
}

export { UpdateSpecialtyArgs as UpdateSpecialtyArgs };