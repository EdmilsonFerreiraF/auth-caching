import { Request, Response } from "express"

import axios from 'axios'
import { GetUserByEmailInputDTO } from "../business/entities/User";

const MOCK_API = "https://jsonplaceholder.typicode.com/users/";

// const userBusiness = new UserBusiness()

export class UserController {
   public async getUserByEmail(req: Request, res: Response): Promise<void> {
      const email = req.query.email as string;

      try {
         const input: GetUserByEmailInputDTO = {
            email
         }
         
         // const user = userBusiness.getUserByEmail(input)
         
         // res.status(200).send({ user })
      } catch (error) {
         const { statusCode, message } = error

         res.status(statusCode || 400).send({ message })
      }
   }

}

export default new UserController()