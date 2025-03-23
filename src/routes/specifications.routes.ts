import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRepository = new SpecificationRepository()

const specificationsRoutes = Router()


specificationsRoutes.post("/", (request, response) => {
    createSpecificationController.handle(request, response)
})

export {
    specificationsRoutes
}