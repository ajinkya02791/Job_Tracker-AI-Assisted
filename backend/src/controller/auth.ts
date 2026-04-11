import type { UserData } from '../types/types.ts';
import type{ Request, Response } from 'express'
import { signupSchema } from '../types/zod.js';

export const signup = async(req : Request<{},{},UserData>, res : Response) => {
   try {
     const validationData = signupSchema.parse({body : req.body})
     const { name , email, password } = validationData.body;
        
 
     res.json({ message : "signup success"})
   } catch (error: any) {
    res.status(422).json({message : error.error || "Validation failed"})
   }
}

export const login = async(req: Request<{},{},UserData>, res: Response) => {
    console.log(req.body);
    res.json( { messaage : "login success"})
}

