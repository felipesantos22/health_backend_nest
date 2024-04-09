import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Consultation } from './consultation.entities';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  CRM: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Consultation, consultation => consultation.doctor)
  consultation: Consultation[];
}