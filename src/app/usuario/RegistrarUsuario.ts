import Usuario from "@/core/Usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/Usuario/service/RegistrarUsuario"
import SenhaCripto from "@/adapter/auth/SenhaCripto";
import RepositorioUsairoEmMemoria from "@/adapter/db/RepositorioUsairoEmMemoria";
import RepositorioUsairoPg from "@/adapter/db/RepositorioUsairoPg";

export default async function registrarUsuario() {
    const {campoRequerido, titulo, sucesso, erro, esperarEnter} = TerminalUtil
    titulo("Registrar Usuario");
    const nome = await campoRequerido('Nome: ')
    const email = await campoRequerido('Email: ')
     const senha = await campoRequerido('Senha: ')

     const usuario: Usuario = { nome, email, senha}

     try {
         const repositorio = new RepositorioUsairoPg()
         const provedorCripto = new SenhaCripto()
         //new EspacoSenhaCripto()
         //new InverterSenhaCripto()
         const casoUso = new RegistrarUsuario(provedorCripto,repositorio) // não depende diretamente de inverterSenhaCripto. depende da interface que inverterSenha cripto implementa.
         casoUso.executar(usuario)
    
        sucesso("Usuário registrado com sucesso!")
         await esperarEnter();

    } catch (e:any) {
            erro(e.message)
    } finally{
         await esperarEnter();
    }

}