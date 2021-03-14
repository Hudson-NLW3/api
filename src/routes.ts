import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";

import { OrfanatoController } from "./controllers/OrfanatoController";

const routes = Router();
const uploadOrfanatos = multer(uploadConfig('orfanatos'));

const orfanatoController = new OrfanatoController();

routes.get("/orfanatos", orfanatoController.index);
routes.get("/orfanatos/:id", orfanatoController.show);
routes.post("/orfanatos", uploadOrfanatos.array('imagens') ,orfanatoController.create);

export { routes };
