import ProvedorCriptoGrafia from "@/core/Usuario/service/ProvedorCriptoGrafia";

export default class EspacoSenhaCripto implements ProvedorCriptoGrafia{
    criptografar(texto: string): string {
        return texto.split('').join(' ')
    }
}