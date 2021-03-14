import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { OrfanatosRepository } from "../../repositories/Orfanatosrepository";

import orfanatoShowView from "../../views/orfanato/orfanatoShowView";

class IndexOrfanatoService {      

    async execute(
        request: Request, response: Response
    ) {                         
        const { id } = request.params;

        const orfanatosRepository = getCustomRepository(OrfanatosRepository);

        const orfanato = await orfanatosRepository.findOneOrFail(id, {
            relations: ['imagens']
        });

        return response.json(orfanatoShowView.render(orfanato))
    }
}

export default new IndexOrfanatoService();