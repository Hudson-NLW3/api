import { Request, Response } from "express";
import CreateOrfanatoService from "../services/orfanato/CreateOrfanatoService";
import IndexOrfanatoService from "../services/orfanato/IndexOrfanatoService";
import ShowOrfanatoService from "../services/orfanato/ShowOrfanatoService";

class OrfanatoController {

    async index(request: Request, response: Response) {

        return await IndexOrfanatoService.execute(request, response);

    }

    async show(request: Request, response: Response) {

        return await ShowOrfanatoService.execute(request, response);

    }

    async create(request: Request, response: Response) {

        return await CreateOrfanatoService.execute(request, response);

    }

}

export { OrfanatoController };