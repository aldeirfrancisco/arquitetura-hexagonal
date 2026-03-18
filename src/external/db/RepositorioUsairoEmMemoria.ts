import Usuario from "../../core/usuario/model/Usuario";

export default class RepositorioUsairoEmMemoria{
   private static readonly items: Usuario[] = []
   async inserir(usuario: Usuario){
     const items = RepositorioUsairoEmMemoria.items
     const usuarioExistente = await this.bsucarPorEmail(usuario.email)
     
        if(usuarioExistente) return 
        items.push(usuario)
    }

    async bsucarPorEmail(email: string): Promise<Usuario | null>{
        const items = RepositorioUsairoEmMemoria.items
        return items.find(u => u.email ===email)?? null
    }
}