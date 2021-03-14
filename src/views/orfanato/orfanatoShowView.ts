import { Orfanato } from "../../entities/Orfanato";
import imagensView from "./orfanatoImagemView";


export default {
    render(orfanato: Orfanato) {
        return { 
            id: orfanato.id,
            nome: orfanato.nome,
            latitude: orfanato.latitude,
            longitude: orfanato.longitude,
            sobre: orfanato.sobre,
            instrucoes: orfanato.instrucoes,
            horario: orfanato.horario,
            final_de_semana: orfanato.final_de_semana,
            imagens: imagensView.renderMany(orfanato.imagens)
        };
    },

    renderMany(orfanatos: Orfanato[]) {
        return orfanatos.map(orfanato => this.render(orfanato));
    }

}