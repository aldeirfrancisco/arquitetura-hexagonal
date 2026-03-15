import ProvedorCriptoGrafia from "../../core/Usuario/service/ProvedorCriptoGrafia";

// Na arquitetura hexagonal esta classe é um Adaptador!
//Sempre que tem uma implementação concreta de uma porta nós temos um adaptador.
// Um adaptador não faz parte do core da aplicação. 
export default class InverterSenhaCripto implements ProvedorCriptoGrafia{
     criptografar(senha: string): string {
        return  senha.split('').reverse().join('')
     }
}