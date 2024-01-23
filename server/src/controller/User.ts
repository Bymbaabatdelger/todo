import { UserModel } from "../model/User";
import { Request, Response } from "express";
import bcrypt, { hash } from "bcrypt";

type SingUpType = {
  username: string;
  password: string;
  avatarImage: string;
};

type RequestBodyType = {
  body: SingUpType;
};

type LogInType = {
  username : string;
  password :string;
}

export const signUp = async (req: Request, res: Response) => {
  try {
    const { username, password }: Required<SingUpType> = req.body;
    console.log(req.body);
    
    
    const saltRounds = 10;

   
    bcrypt.hash(password , saltRounds , async function (error, hash){
       try {
        const result = await UserModel.create({ username, password:hash });
        console.log(result);
        
       } catch (error) {
        throw new Error(JSON.stringify(error))
       
        
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
    return res.status(400).send({success:false , error:"Invalid request"})
  }
}

export const logIn = async(req:Request , res:Response) => {

try {
  const{ username , password }:Required < LogInType > = req.body

  const user = await UserModel.findOne({username:req.body.username})
  
  if(user){
    const checkPassword = req.body.password 
    checkPassword === user.password
    if(checkPassword){
      res.status(200).send({success:true , msg:"registered succesfully"})
      console.log(req.body);
      
    } else {
      res.status(400).send({success:false , msg:"password does not match"})
    }
    
  } else {
    res.status(400).send("username does not match")
  }

} catch (error: any) {
  if (error.code === 11000) {
    return res
      .status(400)
      .send({
        success: false,
        error: "catched error during request",
        code: error.code,
      });
  }
  return res.status(400).send({success:false , error:"Invalid request"})
}
}
