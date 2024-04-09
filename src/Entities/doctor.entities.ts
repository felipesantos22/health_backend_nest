import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}