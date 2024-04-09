import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { DoctorDto } from 'src/Dto/DoctorDto';
import { PatietDto } from 'src/Dto/PatientDto';
import { Patient } from 'src/Entities/patient.entities';
import { PatietService } from 'src/Services/patient.service';

@Controller()
export class PatientController {
  constructor(private readonly service: PatietService) {}

  @Get()
  findAllController(): Promise<Patient[]> {
    return this.service.findAll();
  }

  @Put(':id')
  updateController(@Param('id') id: number, @Body() user: PatietDto) {
    return this.service.updateUser(id, user);
  }

  @Delete(':id')
  deleteController(@Param('id') id: number) {
    return this.service.remove(id);
  }

  @Post()
  createController(@Body() user: PatietDto) {
    return this.service.createUser(user);
  }
}
