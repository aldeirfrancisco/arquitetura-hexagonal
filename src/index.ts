 import dotenv from 'dotenv'
  dotenv.config() //vai ler e carregar  as variaveis de ambiente antes de qualquer outra coisa.
import express from  'express'
import ResgistrarUsuarioController from './external/api/ResgistrarUsuarioController'
import RepositorioUsuarioPg from './external/db/RepositorioUsuarioPg'

import SenhaCripto from './external/auth/SenhaCripto'
import RegistrarUsuario from './core/usuario/service/RegistrarUsuario'
import LoginUsuario from './core/usuario/service/LoginUsuario'
import LoginUsuarioController from './external/api/LoginUsuarioController'
import ObterProdutoPorId from './core/produto/service/ObterProdutoPorId'
import ObterProdutoPorIdControler from './external/api/ObterProdutoPorIdControler'
import UsuarioMiddleware from './external/api/UsuarioMiddleware'




const app = express()
 const porta = process.env.API_PORT ?? 4000
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 
app.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})
//------------------Rotas abertas -------------------------
const repositorioUsuario = new RepositorioUsuarioPg()
const provedorCripto = new SenhaCripto()
const registrarUsuario = new RegistrarUsuario(
                       provedorCripto,
                       repositorioUsuario
                )

 const loginUsuario = new LoginUsuario(
                        provedorCripto,
                        repositorioUsuario
                    )

    new ResgistrarUsuarioController(app,registrarUsuario)
    new LoginUsuarioController(app,loginUsuario)

    // ------------------Rotas protegidas -------------------------
   const usuarioMid = UsuarioMiddleware(repositorioUsuario);
   const obterProdutoPorId = new ObterProdutoPorId()
   new ObterProdutoPorIdControler(app, obterProdutoPorId, usuarioMid)