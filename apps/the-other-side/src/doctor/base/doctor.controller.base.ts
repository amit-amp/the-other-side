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
import { DoctorService } from "../doctor.service";
import { DoctorCreateInput } from "./DoctorCreateInput";
import { DoctorWhereInput } from "./DoctorWhereInput";
import { DoctorWhereUniqueInput } from "./DoctorWhereUniqueInput";
import { DoctorFindManyArgs } from "./DoctorFindManyArgs";
import { DoctorUpdateInput } from "./DoctorUpdateInput";
import { Doctor } from "./Doctor";
import { PatientFindManyArgs } from "../../patient/base/PatientFindManyArgs";
import { Patient } from "../../patient/base/Patient";
import { PatientWhereUniqueInput } from "../../patient/base/PatientWhereUniqueInput";

export class DoctorControllerBase {
  constructor(protected readonly service: DoctorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Doctor })
  async create(@common.Body() data: DoctorCreateInput): Promise<Doctor> {
    return await this.service.create({
      data: {
        ...data,

        specialty: data.specialty
          ? {
              connect: data.specialty,
            }
          : undefined,
      },
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
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Doctor] })
  @ApiNestedQuery(DoctorFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Doctor[]> {
    const args = plainToClass(DoctorFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Doctor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: DoctorWhereUniqueInput
  ): Promise<Doctor | null> {
    const result = await this.service.findOne({
      where: params,
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
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Doctor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: DoctorWhereUniqueInput,
    @common.Body() data: DoctorUpdateInput
  ): Promise<Doctor | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          specialty: data.specialty
            ? {
                connect: data.specialty,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Doctor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: DoctorWhereUniqueInput
  ): Promise<Doctor | null> {
    try {
      return await this.service.delete({
        where: params,
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

  @common.Get("/:id/patients")
  @ApiNestedQuery(PatientFindManyArgs)
  async findManyPatients(
    @common.Req() request: Request,
    @common.Param() params: DoctorWhereUniqueInput
  ): Promise<Patient[]> {
    const query = plainToClass(PatientFindManyArgs, request.query);
    const results = await this.service.findPatients(params.id, {
      ...query,
      select: {
        age: true,
        birthday: true,
        createdAt: true,

        Doctors: {
          select: {
            id: true,
          },
        },

        firstName: true,
        id: true,
        lastName: true,

        medicalHistory: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/patients")
  async connectPatients(
    @common.Param() params: DoctorWhereUniqueInput,
    @common.Body() body: PatientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patients: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/patients")
  async updatePatients(
    @common.Param() params: DoctorWhereUniqueInput,
    @common.Body() body: PatientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patients: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/patients")
  async disconnectPatients(
    @common.Param() params: DoctorWhereUniqueInput,
    @common.Body() body: PatientWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      patients: {
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
