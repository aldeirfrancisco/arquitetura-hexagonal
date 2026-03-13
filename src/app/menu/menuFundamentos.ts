import TerminalUtil from "@/app/util/TerminalUtil";
import menuPrincipal from "./menuPrincipal";
import polimorfismo from "../fundamentos/polimorfismo";

export default async function menuFundamentos() {
    TerminalUtil.titulo('Fundamentos');
    const [index] = await TerminalUtil.menu([
        '1. Polimorfismo',
        'Voltar'
    ])

    switch (index) {
        case 0: await polimorfismo()
          break
        case 1: 
          return
    }

    await menuPrincipal();
}