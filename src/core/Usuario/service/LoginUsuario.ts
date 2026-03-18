
import Usuario from "../model/Usuario";
import CasoDeUso from "@/core/shared/CasoDeUso";
import RepositorioUsuario from "./RepositorioUsuario";
import Erros from "@/core/shared/Erros";
import ProvedorCriptoGrafia from "./ProvedorCriptoGrafia";

export type Entrada ={email:string, senha:string}
//export type Saida ={usuario:Usuario, token:string}

export default class LoginUsuario implements
 CasoDeUso<Entrada, Usuario>{
  
    constructor(
         private provedorCripto: ProvedorCriptoGrafia,
        private repositorio: RepositorioUsuario
       
    ){}

  async executar(entrada:Entrada):Promise<Usuario>{
       const usuarioExistente = await this.repositorio
       .buscarPorEmail(entrada.email)

       if(!usuarioExistente){
        throw new Error(Erros.USUARIO_NAO_EXISTE)
       }
   
       const mesmaSenha = this.provedorCripto.comparar(
        entrada.senha,
         usuarioExistente.senha!
        )

        if(!mesmaSenha){
            throw new Error(Erros.SENHA_INCORRETA)
        }

        return  {...usuarioExistente,senha: undefined}
        
       
  }
}