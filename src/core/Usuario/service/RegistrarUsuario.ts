import CasoDeUso from "@/core/shared/CasoDeUso";
import Erros from "@/core/shared/Erros";
import Id from "@/core/shared/Id";
import ProvedorCriptoGrafia from "./ProvedorCriptoGrafia";
import Usuario from "../model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";

export default class RegistrarUsuario implements CasoDeUso <Usuario, void>{

   constructor( 
       private provedorCripto: ProvedorCriptoGrafia,
       private repositorio: RepositorioUsuario){ }

    async executar(usuario: Usuario): Promise<void> {

        const senhaCripto =  this.provedorCripto.criptografar(usuario.senha)
        const usuarioExistente =  await this.repositorio.bsucarPorEmail(usuario.email)

      if(usuarioExistente) throw new Error(Erros.USUARIO_JA_EXISTE)
       
        const novoUsuario = { 
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCripto
        }

        this.repositorio.inserir(novoUsuario)
       
    }
}