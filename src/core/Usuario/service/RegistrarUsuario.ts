import CasoDeUso from "@/core/shared/CasoDeUso";
import Erros from "@/core/shared/Erros";
import Id from "@/core/shared/Id";
import ProvedorCriptoGrafia from "./ProvedorCriptoGrafia";
import RepositorioUsairoEmMemoria from "./RepositorioUsairoEmMemoria";
import Usuario from "../model/Usuario";

export default class RegistrarUsuario implements CasoDeUso <Usuario, void>{

   constructor( private provedorCripto: ProvedorCriptoGrafia){

   }

    async executar(usuario: Usuario): Promise<void> {
        const repo = new RepositorioUsairoEmMemoria()

        const senhaCripto =  this.provedorCripto.criptografar(usuario.senha)
        const usuarioExistente =  await repo.bsucarPorEmail(usuario.email)

      if(usuarioExistente) throw new Error(Erros.USUARIO_JA_EXISTE)
       
        const novoUsuario = { 
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCripto
        }

        repo.inserir(novoUsuario)
        console.log(`\n${JSON.stringify(novoUsuario)}`)
    }
}