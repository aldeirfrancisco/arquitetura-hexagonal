 import {Request, Response, NextFunction} from 'express'
import ProverdorJWT from '../provedorJWT/ProvedorJwt'
import Usuario from '@/core/usuario/model/Usuario'
import RepositorioUsuarioPg from '../db/RepositorioUsuarioPg'

export default function UsuarioMiddleware( repositorio: RepositorioUsuarioPg){

    return async(req: Request, resp: Response, next: NextFunction) =>{
        const acessoNegado = () => resp.status(403).send('Token inválido')

        const token = req.headers
               .authorization?.replace('Bearer','' )

        if(!token){
            acessoNegado()
            return
        }
        
        const provedorJwt = new ProverdorJWT(process.env.Jwt_SECRET!)

        const usuarioToken = provedorJwt.obter(token) as Usuario
        const usuario = await repositorio.buscarPorEmail(usuarioToken.email)

        if(!usuario){
            acessoNegado()
            return
        }

       (req as any).usuario = usuario

      next()
    }
}