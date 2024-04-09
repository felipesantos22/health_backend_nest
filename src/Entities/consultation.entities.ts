import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Doctor } from './doctor.entities';
import { Patient } from './patient.entities';

@Entity()
export class Consultation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Date: Date;

  @ManyToOne(() => Doctor, (doctor) => doctor.consultation)
  doctor: Doctor;

  @ManyToOne(() => Patient, (patient) => patient.consultation)
  patient: Patient;
}
