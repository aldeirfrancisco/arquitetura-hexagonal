 import dotenv from 'dotenv'
  dotenv.config() //vai ler e carregar  as variaveis de ambiente antes de qualquer outra coisa.
import express from  'express'
import ResgistrarUsuarioController from './external/api/ResgistrarUsuarioController'
import RepositorioUsuarioPg from './external/db/RepositorioUsuarioPg'
import RegistrarUsuario from './core/usuario/service/RegistrarUsuario'
import SenhaCripto from './external/auth/SenhaCripto'


const app = express()
 const porta = process.env.API_PORT ?? 4000
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 
app.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})
//------------------Rotas abertas -------------------------
const repositorioUsuario = new RepositorioUsuarioPg()
const provedorCriptografia = new SenhaCripto()
const registrarUsuario = new RegistrarUsuario(
                        provedorCriptografia,
                        repositorioUsuario
                )
                
    new ResgistrarUsuarioController(app,registrarUsuario)