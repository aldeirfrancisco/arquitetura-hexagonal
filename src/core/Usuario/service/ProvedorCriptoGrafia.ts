// Na arquitetura hexagonal esta interface é uma porta!
// A porta é uma necessidade  do negócio e faz parte do core da aplicação.
export default interface ProvedorCriptoGrafia{
    criptografar(texto: string): string
}