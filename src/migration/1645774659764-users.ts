import {MigrationInterface, QueryRunner} from "typeorm";

export class users1645774659764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`ALTER TABLE users ADD COLUMN price int`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
