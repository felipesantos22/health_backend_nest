import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableDoctor1712851567663 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.createTable(new Table({
        //     name: 'doctor',
        //     columns: [
        //         {
        //             name: 'id',
        //             type: 'int',
        //             isPrimary: true,
        //             isGenerated: true,
        //             generationStrategy: 'increment',
        //         },
        //         {
        //             name: 'Name',
        //             type: 'varchar',
        //         },
        //         {
        //             name: 'CRM',
        //             type: 'varchar',
        //         },
        //         {
        //             name: 'isActive',
        //             type: 'boolean',
        //             default: true,
        //         },
        //     ],
        // }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('doctor');
    }

}
