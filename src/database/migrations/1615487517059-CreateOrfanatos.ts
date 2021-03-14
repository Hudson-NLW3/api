import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrfanatos1615487517059 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "orfanatos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "latitude",
                        type: "decimal",
                        scale: 10,
                        precision: 2
                    },
                    {
                        name: "longitude",
                        type: "decimal",
                        scale: 10,
                        precision: 2
                    },
                    {
                        name: "sobre",
                        type: "text"
                    },
                    {
                        name: "instrucoes",
                        type: "text"
                    },
                    {
                        name: "horario",
                        type: "varchar"
                    },                    
                    {
                        name: "final_de_semana",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orfanatos');
    }

}
