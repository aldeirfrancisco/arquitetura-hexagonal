import Usuario from "@/core/Usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/Usuario/service/RegistrarUsuario"
import InverterSenhaCripto from "@/adapter/auth/InverterSenhaCripto";
import EspacoSenhaCripto from "@/adapter/auth/EspacoSenhaCripto";
import SenhaCripto from "@/adapter/auth/SenhaCripto";

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuario");
    const nome = await TerminalUtil.campoRequerido('Nome: ', 'aldeir francisco da silva')
    const email = await TerminalUtil.campoRequerido('Email: ', 'aldeir.silva@gamil.com')
     const senha = await TerminalUtil.campoRequerido('Senha: ','1234567')
     const usuario: Usuario = { nome, email, senha}
     const provedorCripto = new SenhaCripto()
     //new EspacoSenhaCripto()
     //new InverterSenhaCripto()
     const casoUso = new RegistrarUsuario(provedorCripto) // não depende diretamente de inverterSenhaCripto. depende da interface que inverterSenha cripto implementa.
     casoUso.executar(usuario)

    TerminalUtil.sucesso("Usuário registrado com sucesso!")
     await TerminalUtil.esperarEnter();

    try {
       await casoUso.executar(usuario)
    } catch (e:any) {
            TerminalUtil.erro(e.message)
    } finally{
         await TerminalUtil.esperarEnter();
    }

}