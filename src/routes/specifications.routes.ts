import { Router } from "express";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";

const specificationRepository = new SpecificationRepository()

const specificationsRoutes = Router()


specificationsRoutes.post("/", (request, response) => {
    const createSpecificationService = new CreateSpecificationService(specificationRepository)
    const { name, description } = request.body
    createSpecificationService.execute({ name, description })

    return response.status(201).send()
})

export {
    specificationsRoutes
}