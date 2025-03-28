import { ICreateSpecificationDTO, ISpecificationRepository } from "../../repositories/ISpecificationRepository";


export class CreateSpecificationUseCase {

    constructor(private specificationRepository: ISpecificationRepository) { }

    execute({ name, description }: ICreateSpecificationDTO): void {

        const specificationAlreadyExists = this.specificationRepository.findByName(name)

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists")
        }
        this.specificationRepository.create({ name, description })
    }
}