import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './Entities/doctor.entities';
import { DoctorModule } from './doctor.module';
import { Patient } from './Entities/patient.entities';
import { PatientModule } from './patient.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/data/database.sqlite',
      entities: [Doctor, Patient],
      synchronize: true,
    }),
    DoctorModule,
    PatientModule
  ],
})
export class AppModule {}
