import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Consultation } from "./Entities/consultation.entities";
import { ConsultationService } from "./Services/consultation.service";
import { ConsultationController } from "./Controllers/consultation.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Consultation])],
    providers: [ConsultationService],
    controllers: [ConsultationController],
})

export class ConsultationModule {}