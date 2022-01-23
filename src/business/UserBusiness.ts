import { BaseError } from "../errors/BaseError";
import { InvalidInput } from "../errors/InvalidInput";
import { IGetUserByEmailInputDTO, User } from "./entities/User";

class UserRepository {

    
}

export class UserBusiness {
    constructor(
        private userRepository,
    ) { }
    
    public async getUserByEmail(
        input: IGetUserByEmailInputDTO
    ): Promise<User[]> {
        try {
            if (
                !input.email
            ) {
                throw new InvalidInput("Missing input")
            }

            const user: User[] = await this.userRepository.getUserByEmail(input.email)

            return user
        } catch (error: any) {
            throw new BaseError(error.name, error.description, error.statusCode, error.message)
        }
    }
}

export default new UserBusiness(new UserRepository())