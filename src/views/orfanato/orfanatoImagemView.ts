import { Imagem } from "../../entities/Imagem";

export default {
    render(imagem: Imagem) {
        return { 
            id: imagem.id,
            url: `${process.env.BASE_URL}uploads/orfanatos/${imagem.path}`
        };
    },

    renderMany(imagens: Imagem[]) {
        return imagens.map(imagem => this.render(imagem));
    }

}