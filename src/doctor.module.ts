import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DoctorService } from "./Services/doctor.service";
import { DoctorController } from "./Controllers/doctor.controller";
import { Doctor } from "./Entities/doctor.entities";

@Module({
    imports: [TypeOrmModule.forFeature([Doctor])],
    providers: [DoctorService],
    controllers: [DoctorController],
})

export class DoctorModule {}