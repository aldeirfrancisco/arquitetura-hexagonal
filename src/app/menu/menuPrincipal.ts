import TerminalUtil from "@/app/util/TerminalUtil";
import { terminal } from "terminal-kit";
import menuFundamentos from "./menuFundamentos";
import menuUsuario from "./menuUsuario";

export default async function menuPrincipal() {
    TerminalUtil.titulo('Menu principal');
    const [index] = await TerminalUtil.menu(['1. Fundamento', '2. Usuário','Sair'])

    switch (index) {
        case 0: 
            await menuFundamentos(); 
            break
        case 1: 
            await menuUsuario()
            break
        default:
            process.exit(0)
    }

    menuPrincipal();
}