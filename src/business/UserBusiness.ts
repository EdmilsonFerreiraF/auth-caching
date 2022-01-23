import { UserModel } from "../data/model/User";
import { UserDatabase} from "../data/UserDatabase";
import { BaseError } from "../errors/BaseError";
import { InvalidInput } from "../errors/InvalidInput";
import { IGetUserByEmailInputDTO } from "./entities/User";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
    ) { }
    
    public async getUserByEmail(
        input: IGetUserByEmailInputDTO
    ): Promise<UserModel[]> {
        try {
            if (
                !input.email
            ) {
                throw new InvalidInput("Missing input")
            }

            const user: UserModel[] = await this.userDatabase.getUserByEmail(input)

            return user
        } catch (error: any) {
            throw new BaseError(error.name, error.description, error.statusCode, error.message)
        }
    }
   
    public async getCachedUser(
        input: IGetUserByEmailInputDTO
    )
    // : Promise<UserModel[]>
    {
        try {
            if (
                !input.email
            ) {
                throw new InvalidInput("Missing input")
            }

            // const user: UserModel[] = await this.userDatabase.getCachedUser(input)

            // return user
        } catch (error: any) {
            throw new BaseError(error.name, error.description, error.statusCode, error.message)
        }
    }
}

export default new UserBusiness(new UserDatabase())