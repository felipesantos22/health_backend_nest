import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorDto } from 'src/Dto/DoctorDto';
import { Doctor } from 'src/Entities/doctor.entities';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,
  ) {}

  createUser(doctor: DoctorDto): Promise<Doctor> {
    return this.doctorRepository.save(doctor);
  }

  findAll(): Promise<Doctor[]> {
    return this.doctorRepository.find();
  }

  findOne(id: number): Promise<Doctor | null> {
    return this.doctorRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.doctorRepository.delete(id);
  }

  updateUser(id: number, user: DoctorDto) {
    return this.doctorRepository.update(id, user);
  }
}
