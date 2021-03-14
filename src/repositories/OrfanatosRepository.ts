import { EntityRepository, getRepository, Repository } from "typeorm";
import { Orfanato } from "../entities/Orfanato";

@EntityRepository(Orfanato)
class OrfanatosRepository extends Repository<Orfanato> {

    orfanatosRespository = getRepository(Orfanato)

}

export { OrfanatosRepository };