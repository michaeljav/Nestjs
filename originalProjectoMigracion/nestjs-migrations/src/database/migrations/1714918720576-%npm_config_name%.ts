import { MigrationInterface, QueryRunner } from "typeorm";

export class  %npmConfigName%1714918720576 implements MigrationInterface {
    name = ' %npmConfigName%1714918720576'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`image2\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`image2\``);
    }

}
