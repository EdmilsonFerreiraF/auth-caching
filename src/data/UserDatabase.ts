import axios from 'axios'
import { IGetUserByEmailInputDTO } from '../business/entities/User';
import { UserModel } from './model/User';

export class UserDatabase {
    public async getUserByEmail(input: IGetUserByEmailInputDTO): Promise<UserModel[]> {
        try {
            const MOCK_API = "https://jsonplaceholder.typicode.com/users/";

            const user: UserModel[] = await axios.get(`${MOCK_API}?email=${input.email}`).then((response) => {
                const res = response.data;

                console.log("User successfully retrieved from the API");

                return res
            })

            return user.map(item => UserModel.toModel(item))
        } catch (error) {
            throw new Error(error.statusCode)
        }
    }
}

export default new UserDatabase()