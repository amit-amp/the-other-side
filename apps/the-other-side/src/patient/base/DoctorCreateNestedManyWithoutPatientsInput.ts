/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DoctorWhereUniqueInput } from "../../doctor/base/DoctorWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DoctorCreateNestedManyWithoutPatientsInput {
  @Field(() => [DoctorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DoctorWhereUniqueInput],
  })
  connect?: Array<DoctorWhereUniqueInput>;
}

export { DoctorCreateNestedManyWithoutPatientsInput as DoctorCreateNestedManyWithoutPatientsInput };
