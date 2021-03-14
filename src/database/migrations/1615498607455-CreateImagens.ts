import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImagens1615498607455 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "imagens",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "path",
                        type: "varchar"
                    },
                    {
                        name: "orfanato_id",
                        type: "uuid"
                    }
                ],
                foreignKeys: [
                    {
                        name: "ImagemOrfanato",
                        columnNames: ["orfanato_id"],
                        referencedTableName: 'orfanatos',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('imagens');
    }

}
