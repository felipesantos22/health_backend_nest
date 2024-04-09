import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatietDto } from 'src/Dto/PatientDto';
import { Patient } from 'src/Entities/patient.entities';
import { Repository } from 'typeorm';

@Injectable()
export class PatietService {
  constructor(
    @InjectRepository(Patient)
    private repository: Repository<Patient>,
  ) {}

  createUser(patient: PatietDto): Promise<Patient> {
    return this.repository.save(patient);
  }

  findAll(): Promise<Patient[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Patient | null> {
    return this.repository.findOneBy({ id });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }

  updateUser(id: number, user: PatietDto) {
    return this.repository.update(id, user);
  }
}
