import TerminalUtil from "@/app/util/TerminalUtil";
import menuPrincipal from "./menuPrincipal";
import polimorfismo from "../fundamentos/polimorfismo";
import RegistrarUsuario from "../usuario/RegistrarUsuario";

export default async function menuUsuario() {
    TerminalUtil.titulo('Usuário');
    const [index] = await TerminalUtil.menu([
        '1. Registrar Usuário',
        'Voltar'
    ])

    switch (index) {
        case 0: await RegistrarUsuario()
          break
        default:
          return
    }

    await menuUsuario();
}