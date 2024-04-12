import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConsultationDto } from 'src/Dto/ConsultationDto';
import { DoctorDto } from 'src/Dto/DoctorDto';
import { Consultation } from 'src/Entities/consultation.entities';
import { Doctor } from 'src/Entities/doctor.entities';
import { Repository } from 'typeorm';

@Injectable()
export class ConsultationService {
  constructor(
    @InjectRepository(Consultation)
    private repository: Repository<Consultation>,
  ) {}

  createUser(consultation: ConsultationDto): Promise<Consultation> {
    return this.repository.save(consultation);
  }

  findAll(): Promise<Consultation[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Consultation | null> {
    return this.repository.findOneBy({ id });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }

  updateUser(id: number, consultation: ConsultationDto) {
    return this.repository.update(id, consultation);
  }
}
