import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DoctorService } from '../Services/doctor.service';
import { Doctor } from 'src/Entities/doctor.entities';
import { DoctorDto } from 'src/Dto/DoctorDto';

@Controller()
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get()
  findAllController(): Promise<Doctor[]> {
    return this.doctorService.findAll();
  }

  @Put(':id')
  updateController(@Param('id') id: number, @Body() user: DoctorDto) {
    return this.doctorService.updateUser(id, user);
  }

  @Delete(':id')
  deleteController(@Param('id') id: number) {
    return this.doctorService.remove(id);
  }

  @Post()
  createController(@Body() user: DoctorDto) {
    return this.doctorService.createUser(user);
  }
}
