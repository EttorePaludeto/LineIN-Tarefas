import { IPessoa } from "./IPessoa"

export interface ITarefa{
  id: string,
  DtCadastro: string,
  DtEntrega:string,
  Titulo: string,
  Descricao: string,
  Empresa: string,
  Pessoas: IPessoa[],
  Tag: string[]
  Situacao: string
}

