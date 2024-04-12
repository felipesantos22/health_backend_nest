import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Patient } from "../Entities/patient.entities";
import { PatietService } from "../Services/patient.service";
import { PatientController } from "../Controllers/patient.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Patient])],
    providers: [PatietService],
    controllers: [PatientController],
})

export class PatientModule {}