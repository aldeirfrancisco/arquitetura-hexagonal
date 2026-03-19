import CasoDeUso from "@/core/shared/CasoDeUso"
import Produto from "../model/Produto"
import Usuario from "@/core/usuario/model/Usuario"


export type Entrada = {
  produtoId: string,
  usuario: Usuario
}


//export type Entrada ={id:string}
//export type Saida ={produto:Produto}


export default class ObterProdutoPorId implements
 CasoDeUso<Entrada, Produto>{


  async executar(entrada:Entrada): Promise<Produto>{
        return {
          id: entrada.produtoId,
          nome: 'Produto 1',
          preco: 10.99 , 
          consultaPor: entrada.usuario.email
        }
  }
}