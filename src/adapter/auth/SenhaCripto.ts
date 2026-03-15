import bcrypt from 'bcrypt'
import ProvedorCriptoGrafia from "@/core/Usuario/service/ProvedorCriptoGrafia";

export default class SenhaCripto implements ProvedorCriptoGrafia{
    criptografar(texto: string): string {
       const salt = bcrypt.genSaltSync(10)
       return bcrypt.hashSync(texto, salt)
    }
}