import { Doctor } from "src/Entities/doctor.entities";
import { Patient } from "src/Entities/patient.entities";

export interface ConsultationDto {
    date: Date;
    doctor: Doctor;
    patient: Patient
  }
  