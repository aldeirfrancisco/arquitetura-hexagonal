import CasoDeUso from "@/core/shared/CasoDeUso"
import Produto from "../model/Produto"
import ProvedorCriptoGrafia from "@/core/usuario/service/ProvedorCriptoGrafia"
import RepositorioUsuario from "@/core/usuario/service/RepositorioUsuario"


export type Entrada ={id:string}
//export type Saida ={produto:Produto}


export default class ObterProdutoPorId implements
 CasoDeUso<string, Produto>{


  async executar(id:string): Promise<Produto>{
        return {
          id:'1',
          nome: 'Produto 1',
          preco: 10.99
        }
  }
}