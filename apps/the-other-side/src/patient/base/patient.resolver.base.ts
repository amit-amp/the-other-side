/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreatePatientArgs } from "./CreatePatientArgs";
import { UpdatePatientArgs } from "./UpdatePatientArgs";
import { DeletePatientArgs } from "./DeletePatientArgs";
import { PatientCountArgs } from "./PatientCountArgs";
import { PatientFindManyArgs } from "./PatientFindManyArgs";
import { PatientFindUniqueArgs } from "./PatientFindUniqueArgs";
import { Patient } from "./Patient";
import { Doctor } from "../../doctor/base/Doctor";
import { MedicalHistory } from "../../medicalHistory/base/MedicalHistory";
import { PatientService } from "../patient.service";
@graphql.Resolver(() => Patient)
export class PatientResolverBase {
  constructor(protected readonly service: PatientService) {}

  async _patientsMeta(
    @graphql.Args() args: PatientCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Patient])
  async patients(
    @graphql.Args() args: PatientFindManyArgs
  ): Promise<Patient[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Patient, { nullable: true })
  async patient(
    @graphql.Args() args: PatientFindUniqueArgs
  ): Promise<Patient | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Patient)
  async createPatient(
    @graphql.Args() args: CreatePatientArgs
  ): Promise<Patient> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        Doctors: args.data.Doctors
          ? {
              connect: args.data.Doctors,
            }
          : undefined,

        medicalHistory: args.data.medicalHistory
          ? {
              connect: args.data.medicalHistory,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Patient)
  async updatePatient(
    @graphql.Args() args: UpdatePatientArgs
  ): Promise<Patient | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          Doctors: args.data.Doctors
            ? {
                connect: args.data.Doctors,
              }
            : undefined,

          medicalHistory: args.data.medicalHistory
            ? {
                connect: args.data.medicalHistory,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Patient)
  async deletePatient(
    @graphql.Args() args: DeletePatientArgs
  ): Promise<Patient | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Doctor, {
    nullable: true,
    name: "doctors",
  })
  async resolveFieldDoctors(
    @graphql.Parent() parent: Patient
  ): Promise<Doctor | null> {
    const result = await this.service.getDoctors(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => MedicalHistory, {
    nullable: true,
    name: "medicalHistory",
  })
  async resolveFieldMedicalHistory(
    @graphql.Parent() parent: Patient
  ): Promise<MedicalHistory | null> {
    const result = await this.service.getMedicalHistory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
