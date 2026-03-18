import bcrypt from 'bcrypt'
import ProvedorCriptoGrafia from "@/core/usuario/service/ProvedorCriptoGrafia";

export default class SenhaCripto implements ProvedorCriptoGrafia{
    criptografar(texto: string): string {
       const salt = bcrypt.genSaltSync(10)
       return bcrypt.hashSync(texto, salt)
    }

    comparar(senha: string, criptoGrafada: string): boolean {
        return bcrypt.compareSync(senha,criptoGrafada)
    }
}