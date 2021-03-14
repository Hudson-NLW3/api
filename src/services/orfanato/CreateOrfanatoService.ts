import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { OrfanatosRepository } from "../../repositories/Orfanatosrepository";
import * as Yup from 'yup';

class CreateOrfanatoService {      

    async execute(
        request: Request, response: Response
    ) {          

        const { 
            nome,
            latitude,
            longitude,
            sobre,
            instrucoes,
            horario,
            final_de_semana
        } = request.body        

        const orfanatosRepository = getCustomRepository(OrfanatosRepository);

        const requestImagens = request.files as Express.Multer.File[];
    
        const imagens = requestImagens.map(imagem => {
            return { path: `${imagem.filename}` }
        })

        const data = {
            nome,
            latitude,
            longitude,
            sobre,
            instrucoes,
            horario,
            final_de_semana: final_de_semana === 'true',
            imagens         
        };

        const schema = Yup.object().shape({
            nome: Yup.string().required('Nome é obrigatório'),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            sobre: Yup.string().required().max(300),
            instrucoes: Yup.string().required(),
            horario: Yup.string().required(),
            final_de_semana: Yup.boolean().required(),
            imagens: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        });        

        await schema.validate(data, {
            abortEarly: false,
        });

        const orfanato = orfanatosRepository.create(data)

        await orfanatosRepository.save(orfanato)

        return response.status(201).json(orfanato)
    }
}

export default new CreateOrfanatoService();