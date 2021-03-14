import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { OrfanatosRepository } from "../../repositories/Orfanatosrepository";

import orfanatoShowView from "../../views/orfanato/orfanatoShowView";

class IndexOrfanatoService {          

    async execute(
        request: Request, response: Response
    ) {                  

        const orfanatosRepository = getCustomRepository(OrfanatosRepository);

        const orfanatos = await orfanatosRepository.find({
            relations: ['imagens']
        });        

        return response.json(orfanatoShowView.renderMany(orfanatos))
    }
}

export default new IndexOrfanatoService();