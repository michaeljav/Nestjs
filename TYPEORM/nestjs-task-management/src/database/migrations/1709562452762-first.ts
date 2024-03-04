import { MigrationInterface, QueryRunner } from "typeorm";

export class First1709562452762 implements MigrationInterface {
    name = 'First1709562452762'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`REL_4b70eaf597edea45ee67e8e509\` ON \`user\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`task_Id\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`task_Id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_4b70eaf597edea45ee67e8e509\` (\`task_Id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_4b70eaf597edea45ee67e8e509\` ON \`user\` (\`task_Id\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_4b70eaf597edea45ee67e8e509a\` FOREIGN KEY (\`task_Id\`) REFERENCES \`task\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_4b70eaf597edea45ee67e8e509a\``);
        await queryRunner.query(`DROP INDEX \`REL_4b70eaf597edea45ee67e8e509\` ON \`user\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_4b70eaf597edea45ee67e8e509\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`task_Id\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`task_Id\` varchar(255) NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_4b70eaf597edea45ee67e8e509\` ON \`user\` (\`task_Id\`)`);
    }

}
