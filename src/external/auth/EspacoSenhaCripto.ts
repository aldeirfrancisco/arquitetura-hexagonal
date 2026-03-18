import ProvedorCriptoGrafia from "@/core/usuario/service/ProvedorCriptoGrafia";

export default class EspacoSenhaCripto implements ProvedorCriptoGrafia{
    criptografar(texto: string): string {
        return texto.split('').join(' ')
    }

     comparar(senha: string, criptoGrafada: string): boolean {
             return this.criptografar(senha) === criptoGrafada
         }
}