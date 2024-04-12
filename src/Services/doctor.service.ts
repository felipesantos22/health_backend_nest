import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorDto } from 'src/Dto/DoctorDto';
import { Doctor } from 'src/Entities/doctor.entities';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private repository: Repository<Doctor>,
  ) {}

  createUser(doctor: DoctorDto): Promise<Doctor> {
    return this.repository.save(doctor);
  }

  findAll(): Promise<Doctor[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Doctor | null> {
    return this.repository.findOneBy({ id });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }

  updateUser(id: number, doctor: DoctorDto) {
    return this.repository.update(id, doctor);
  }
}
