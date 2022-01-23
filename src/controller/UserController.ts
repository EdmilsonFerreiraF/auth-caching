import { Request, Response } from "express"

import { IGetUserByEmailInputDTO } from "../business/entities/User";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";

const userBusiness = new UserBusiness(new UserDatabase());

export class UserController {
   public async getUserByEmail(req: Request, res: Response): Promise<void> {
      const email = req.query.email as string;

      try {
         const input: IGetUserByEmailInputDTO = {
            email
         }

         const user = await userBusiness.getUserByEmail(input)

         res.status(200).send(user)
      } catch (error) {
         const { statusCode, message } = error

         res.status(statusCode || 400).send({ message })
      }
   }
   
   public async getCachedUser(req: Request, res: Response): Promise<void> {
      const email = req.query.email as string;

      try {
         const input: IGetUserByEmailInputDTO = {
            email
         }

         const user = await userBusiness.getCachedUser(input)

         res.status(200).send(user)
      } catch (error) {
         const { statusCode, message } = error

         res.status(statusCode || 400).send({ message })
      }
   }
}

export default new UserController()