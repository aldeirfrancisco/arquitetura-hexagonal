
import Carro from "./Carro"//abstração
export default function corrida(carro: Carro, logger:(str: string)=> void){
 //classes concretas devem depênder de abstração(interface/classe abstrata)

    Array.from({length: 10}).forEach(() => {
        carro.acelerar()
        logger(`\n Velocidade: ${carro.velocidadeAtual}`)
    })
    Array.from({length: 10}).forEach(() => {
        carro.frear()
        logger(`\n Velocidade: ${carro.velocidadeAtual}`)
    })
}