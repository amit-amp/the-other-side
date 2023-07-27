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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateMedicalHistoryArgs } from "./CreateMedicalHistoryArgs";
import { UpdateMedicalHistoryArgs } from "./UpdateMedicalHistoryArgs";
import { DeleteMedicalHistoryArgs } from "./DeleteMedicalHistoryArgs";
import { MedicalHistoryCountArgs } from "./MedicalHistoryCountArgs";
import { MedicalHistoryFindManyArgs } from "./MedicalHistoryFindManyArgs";
import { MedicalHistoryFindUniqueArgs } from "./MedicalHistoryFindUniqueArgs";
import { MedicalHistory } from "./MedicalHistory";
import { Patient } from "../../patient/base/Patient";
import { MedicalHistoryService } from "../medicalHistory.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MedicalHistory)
export class MedicalHistoryResolverBase {
  constructor(
    protected readonly service: MedicalHistoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MedicalHistory",
    action: "read",
    possession: "any",
  })
  async _medicalHistoriesMeta(
    @graphql.Args() args: MedicalHistoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MedicalHistory])
  @nestAccessControl.UseRoles({
    resource: "MedicalHistory",
    action: "read",
    possession: "any",
  })
  async medicalHistories(
    @graphql.Args() args: MedicalHistoryFindManyArgs
  ): Promise<MedicalHistory[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MedicalHistory, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MedicalHistory",
    action: "read",
    possession: "own",
  })
  async medicalHistory(
    @graphql.Args() args: MedicalHistoryFindUniqueArgs
  ): Promise<MedicalHistory | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MedicalHistory)
  @nestAccessControl.UseRoles({
    resource: "MedicalHistory",
    action: "create",
    possession: "any",
  })
  async createMedicalHistory(
    @graphql.Args() args: CreateMedicalHistoryArgs
  ): Promise<MedicalHistory> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        patients: args.data.patients
          ? {
              connect: args.data.patients,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MedicalHistory)
  @nestAccessControl.UseRoles({
    resource: "MedicalHistory",
    action: "update",
    possession: "any",
  })
  async updateMedicalHistory(
    @graphql.Args() args: UpdateMedicalHistoryArgs
  ): Promise<MedicalHistory | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          patients: args.data.patients
            ? {
                connect: args.data.patients,
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

  @graphql.Mutation(() => MedicalHistory)
  @nestAccessControl.UseRoles({
    resource: "MedicalHistory",
    action: "delete",
    possession: "any",
  })
  async deleteMedicalHistory(
    @graphql.Args() args: DeleteMedicalHistoryArgs
  ): Promise<MedicalHistory | null> {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Patient, {
    nullable: true,
    name: "patients",
  })
  @nestAccessControl.UseRoles({
    resource: "Patient",
    action: "read",
    possession: "any",
  })
  async resolveFieldPatients(
    @graphql.Parent() parent: MedicalHistory
  ): Promise<Patient | null> {
    const result = await this.service.getPatients(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
