import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1698235659993 implements MigrationInterface {
  name = 'Migration1698235659993';

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "business_card" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "profilePicture" character varying NOT NULL, "position" character varying NOT NULL, "companyName" character varying NOT NULL, "companyLogo" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_b376b6a682a52b2dab5022af9a1" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying, "lastName" character varying, "email" character varying NOT NULL, "password" character varying NOT NULL, "phone" character varying, "profilePicture" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))');
    await queryRunner.query('ALTER TABLE "business_card" ADD CONSTRAINT "FK_b602e731eb6680be1e0d25eee73" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "business_card" DROP CONSTRAINT "FK_b602e731eb6680be1e0d25eee73"');
    await queryRunner.query('DROP TABLE "user"');
    await queryRunner.query('DROP TABLE "business_card"');
  }
}
