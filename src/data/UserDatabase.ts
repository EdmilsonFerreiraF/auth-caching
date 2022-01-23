import axios from 'axios'
import { IGetUserByEmailInputDTO } from '../business/entities/User';
import createRedisClient from './cache/redisClient';
import { UserModel } from './model/User';

export class UserDatabase {
    static MOCK_API = "https://jsonplaceholder.typicode.com/users/";

    public async getUserByEmail(input: IGetUserByEmailInputDTO): Promise<UserModel[]> {
        try {
            const user: UserModel[] = await axios.get(`${UserDatabase.MOCK_API}?email=${input.email}`).then((response) => {
                const res = response.data;

                console.log("User successfully retrieved from the API");

                return res
            })

            return user.map(item => UserModel.toModel(item))
        } catch (error) {
            throw new Error(error.statusCode)
        }
    }

    public async getCachedUser(input: IGetUserByEmailInputDTO): Promise<string> 
    {
        try {
            const redisClient = await createRedisClient()

            console.log("User successfully retrieved from Redis");

            const user = redisClient.get(input.email)
                
            axios.get(`${UserDatabase.MOCK_API}?email=${input.email}`).then(function (response) {
                const users = response.data;
                
                redisClient.setEx(input.email, 600, JSON.stringify(users));
        
                console.log("User successfully retrieved from the API");
            });


            return user
        } catch (error) {
            console.log(error)
            throw new Error(error.statusCode)
        }
    }
}

export default new UserDatabase()