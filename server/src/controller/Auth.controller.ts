import { Request, Response } from "express";
import { UserDocument } from "../model/user.model";
import { saveUser } from "../service/Auth.service";

export async function LoginHandler(req:Request, res:Response) {
  res.send("Hellow")
}

export async function SaveHandler(req:Request, res:Response) {
  try {
    const user = await saveUser(req.body)
    return res.send(user)
  } catch (e:any) {
    return res.status(409).send(e.message)
  }
}