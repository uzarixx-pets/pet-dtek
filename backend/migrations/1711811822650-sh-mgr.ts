import { MigrationInterface, QueryRunner } from "typeorm";

export class ShMgr1711811822650 implements MigrationInterface {
    name = 'ShMgr1711811822650'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_bb0bde2e781fbc45ce269fb00f"`);
        await queryRunner.query(`ALTER TABLE "district" DROP COLUMN "nameHelloWrldJopa"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "district" ADD "nameHelloWrldJopa" character varying NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_bb0bde2e781fbc45ce269fb00f" ON "district" ("nameHelloWrldJopa") `);
    }

}
