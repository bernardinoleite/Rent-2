
import { randomUUID as uuidV4 } from "node:crypto";

export class Specification {

    id?: string;
    name: string;
    description: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}