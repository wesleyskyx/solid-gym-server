import { prisma } from "@/lib/prisma";
import { UsersRepository } from "@/repositories/users-repository";
import { hash } from "bcryptjs";

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
            throw new Error("Email already registered!")
        }

        const password_hash = await hash(password, 6)

        await this.usersRepository.create({
            name,
            email,
            password_hash
        })
    }
}