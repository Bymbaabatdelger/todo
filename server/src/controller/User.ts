import { UserModel } from "../model/User";
import { Request, Response } from "express";
import bcrypt, { hash } from "bcrypt";

type SingUpType = {
  username: string;
  password: string;
  avatarImage: Buffer;
};

type RequestBodyType = {
  body: SingUpType;
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { username, password }: Required<SingUpType> = req.body;
    console.log(req.body);
    
    
    const saltRounds = 10;

    let pass = ""
    bcrypt.hash(password , saltRounds , async function (err , hash){
       try {
        const result = await UserModel.create({ username, password:hash });
        console.log(result);
        
       } catch (error) {
        throw error
       }
    })
   
    

    return res.status(201).send({ success: true });
  } catch (error: any) {
    if (error.code === 11000) {
      return res
        .status(400)
        .send({
          success: false,
          error: "already existing username",
          code: error.code,
        });
    }
    return;
  }
};
