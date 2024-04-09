import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Consultation } from './consultation.entities';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  CPF: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Consultation, (consultation) => consultation.patient)
  consultation: Consultation[];
}
