import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface PayLoad{
    sub: string
}

export function isAutenticado(
    req: Request,
    res: Response,
    next: NextFunction
    ){
    const autenToken = req.headers.authorization
    
    if (!autenToken) {
        return res.status(401).end()
    }

    const [, token ] = autenToken.split(' ')
    
     try{
       
        const { sub } = verify(
             token,
             process.env.JWT_SEGREDO
        ) as PayLoad
        console.log(sub)
       

     } catch(err){
      return res.status(401).end()
     }

}