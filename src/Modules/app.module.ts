import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from '../Entities/doctor.entities';
import { Patient } from '../Entities/patient.entities';
import { PatientModule } from './patient.module';
import { Consultation } from '../Entities/consultation.entities';
import { CreateTableDoctor1712851567663 } from '../migrations/1712851567663-create_table_doctor';
import { DoctorModule } from './doctor.module';
import { ConsultationModule } from './consultation.module';
import { CreateTablePatient1712868659441 } from 'src/migrations/1712868659441-create_table_patient';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/data/database.sqlite',
      entities: [Doctor, Patient, Consultation],
      synchronize: true,
      migrations: [CreateTableDoctor1712851567663, CreateTablePatient1712868659441],
    }),
    DoctorModule,
    PatientModule,
    ConsultationModule
  ],
})
export class AppModule {}
