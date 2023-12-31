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
import { PatientService } from "../patient.service";
import { PatientCreateInput } from "./PatientCreateInput";
import { PatientWhereInput } from "./PatientWhereInput";
import { PatientWhereUniqueInput } from "./PatientWhereUniqueInput";
import { PatientFindManyArgs } from "./PatientFindManyArgs";
import { PatientUpdateInput } from "./PatientUpdateInput";
import { Patient } from "./Patient";

export class PatientControllerBase {
  constructor(protected readonly service: PatientService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Patient })
  async create(@common.Body() data: PatientCreateInput): Promise<Patient> {
    return await this.service.create({
      data: {
        ...data,

        Doctors: data.Doctors
          ? {
              connect: data.Doctors,
            }
          : undefined,

        medicalHistory: data.medicalHistory
          ? {
              connect: data.medicalHistory,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Patient] })
  @ApiNestedQuery(PatientFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Patient[]> {
    const args = plainToClass(PatientFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: PatientWhereUniqueInput,
    @common.Body() data: PatientUpdateInput
  ): Promise<Patient | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          Doctors: data.Doctors
            ? {
                connect: data.Doctors,
              }
            : undefined,

          medicalHistory: data.medicalHistory
            ? {
                connect: data.medicalHistory,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Patient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: PatientWhereUniqueInput
  ): Promise<Patient | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
