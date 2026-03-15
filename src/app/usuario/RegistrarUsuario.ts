import Usuario from "@/core/Usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/Usuario/service/RegistrarUsuario"

export default async function registrarUsuario() {
    TerminalUtil.titulo("Registrar Usuario");
    const nome = await TerminalUtil.campoRequerido('Nome: ', 'aldeir francisco da silva')
    const email = await TerminalUtil.campoRequerido('Email: ', 'aldeir.silva@gamil.com')
    const senha = await TerminalUtil.campoRequerido('Senha: ','1234567')
    const usuario: Usuario = { nome, email, senha}

    await new RegistrarUsuario().executar(usuario)

    TerminalUtil.sucesso("Usuário registrado com sucesso!")
     await TerminalUtil.esperarEnter();

    try {
       await new RegistrarUsuario().executar(usuario)
    } catch (e:any) {
            TerminalUtil.erro(e.message)
    } finally{
         await TerminalUtil.esperarEnter();
    }

}