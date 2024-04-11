import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './Entities/doctor.entities';
import { DoctorModule } from './doctor.module';
import { Patient } from './Entities/patient.entities';
import { PatientModule } from './patient.module';
import { Consultation } from './Entities/consultation.entities';
import { CreateTableDoctor1712851567663 } from './migrations/1712851567663-create_table_doctor';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/data/database.sqlite',
      entities: [Doctor, Patient, Consultation],
      synchronize: true,
      migrations: [CreateTableDoctor1712851567663],
    }),
    DoctorModule,
    PatientModule,
  ],
})
export class AppModule {}
