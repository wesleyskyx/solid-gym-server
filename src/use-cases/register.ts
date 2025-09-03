import { UsersRepository } from "@/repositories/users-repository";
import { hash } from "bcryptjs";
import { EmailAlreadyRegisteredError } from "./errors/email-already-registered-error";

interface RegisterUseCaseRequest {
    name: string
    email: string
    password: string
}

export class RegisterUseCase {
    constructor(private readonly usersRepository: UsersRepository) {}

    async execute({
        name,
        email,
        password
    }: RegisterUseCaseRequest) {
        const emailAlreadyRegistered = await this.usersRepository.findByEmail(email)

        if(emailAlreadyRegistered) {
            throw new EmailAlreadyRegisteredError()
        }

        const password_hash = await hash(password, 6)

        await this.usersRepository.create({
            name,
            email,
            password_hash
        })
    }
}