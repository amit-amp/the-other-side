/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SpecialtyService } from "../specialty.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SpecialtyCreateInput } from "./SpecialtyCreateInput";
import { SpecialtyWhereInput } from "./SpecialtyWhereInput";
import { SpecialtyWhereUniqueInput } from "./SpecialtyWhereUniqueInput";
import { SpecialtyFindManyArgs } from "./SpecialtyFindManyArgs";
import { SpecialtyUpdateInput } from "./SpecialtyUpdateInput";
import { Specialty } from "./Specialty";
import { DoctorFindManyArgs } from "../../doctor/base/DoctorFindManyArgs";
import { Doctor } from "../../doctor/base/Doctor";
import { DoctorWhereUniqueInput } from "../../doctor/base/DoctorWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SpecialtyControllerBase {
  constructor(
    protected readonly service: SpecialtyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Specialty })
  @nestAccessControl.UseRoles({
    resource: "Specialty",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: SpecialtyCreateInput): Promise<Specialty> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        description: true,
        field_name: true,
        id: true,
        SFID: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Specialty] })
  @ApiNestedQuery(SpecialtyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Specialty",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Specialty[]> {
    const args = plainToClass(SpecialtyFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        description: true,
        field_name: true,
        id: true,
        SFID: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Specialty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Specialty",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: SpecialtyWhereUniqueInput
  ): Promise<Specialty | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,
        field_name: true,
        id: true,
        SFID: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Specialty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Specialty",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: SpecialtyWhereUniqueInput,
    @common.Body() data: SpecialtyUpdateInput
  ): Promise<Specialty | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          field_name: true,
          id: true,
          SFID: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Specialty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Specialty",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: SpecialtyWhereUniqueInput
  ): Promise<Specialty | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,
          field_name: true,
          id: true,
          SFID: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/doctors")
  @ApiNestedQuery(DoctorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Doctor",
    action: "read",
    possession: "any",
  })
  async findManyDoctors(
    @common.Req() request: Request,
    @common.Param() params: SpecialtyWhereUniqueInput
  ): Promise<Doctor[]> {
    const query = plainToClass(DoctorFindManyArgs, request.query);
    const results = await this.service.findDoctors(params.id, {
      ...query,
      select: {
        createdAt: true,
        first_name: true,
        id: true,
        IsPrivate: true,
        last_name: true,
        PID: true,

        specialty: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/doctors")
  @nestAccessControl.UseRoles({
    resource: "Specialty",
    action: "update",
    possession: "any",
  })
  async connectDoctors(
    @common.Param() params: SpecialtyWhereUniqueInput,
    @common.Body() body: DoctorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      doctors: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/doctors")
  @nestAccessControl.UseRoles({
    resource: "Specialty",
    action: "update",
    possession: "any",
  })
  async updateDoctors(
    @common.Param() params: SpecialtyWhereUniqueInput,
    @common.Body() body: DoctorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      doctors: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/doctors")
  @nestAccessControl.UseRoles({
    resource: "Specialty",
    action: "update",
    possession: "any",
  })
  async disconnectDoctors(
    @common.Param() params: SpecialtyWhereUniqueInput,
    @common.Body() body: DoctorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      doctors: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}