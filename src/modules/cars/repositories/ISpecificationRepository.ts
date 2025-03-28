import { Specification } from "../model/Specification";

export interface ICreateSpecificationDTO {
    name: string;
    description: string;
}


export interface ISpecificationRepository {

    create({ name, description }: ICreateSpecificationDTO): void
    findByName(name: string): Specification

}