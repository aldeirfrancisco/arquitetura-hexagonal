import Usuario from "../model/Usuario";

export default interface RepositorioUsuario {
     inserir(usuario: Usuario): Promise<void>
     bsucarPorEmail(email: string): Promise<Usuario | null>
}