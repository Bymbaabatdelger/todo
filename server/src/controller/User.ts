import { UserModel } from "../model/User";
import { Request, Response } from "express";
import bcrypt, { hash } from "bcrypt";

type SingUpType = {
  username: string;
  password: string;
  avatarImage: string;
};

type UserType = {
  _id: string;
  username: string;
  password: string;
  __v: number;
}

type LogInType = {
  username: string;
  password: string;
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { username, password }: Required<SingUpType> = req.body;
    console.log(req.body);

    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, async function (error, hash) {
      try {
        const result = await UserModel.create({ username, password: hash });
        console.log(result);
      } catch (error) {
        throw new Error(JSON.stringify(error));
      }
    });

    return res.status(201).send({ success: true });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).send({
        success: false,
        error: "already existing username",
        code: error.code,
      });
    }
    return res.status(400).send({ success: false, error: "Invalid request" });
  }
};

export const logIn = async (req: Request, res: Response) => {
  try {
    const { username, password }: LogInType = req.body;

    const user: UserType | null = await UserModel.findOne({ username });
    console.log(user);

    if (!user) {
      return res.status(400).send({ success: false, msg: "User not found" });
    }
    bcrypt.compare(password, user.password, async function (err, result) {
      if (!result) {
        return res.send({
          success: false,
          msg: "Username or password incorrect",
        });
      } else {
        return res.send({ success: true , user});
      }
    });
  } catch (error) {
    console.log(error);
  }
};
