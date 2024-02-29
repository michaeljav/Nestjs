import { MigrationInterface, QueryRunner } from "typeorm";

export class UserAddImage21709243929126 implements MigrationInterface {
    name = 'UserAddImage21709243929126'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`image2\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`image2\``);
    }

}
