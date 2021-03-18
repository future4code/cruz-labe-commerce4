// Utilidades para usar no projetinho e ficar mais organizado
import { listaProdutos } from '../assets/json'

export const numeroEhValido = number => Number.isInteger(number) && number > 0
  
export const pegarProdutoPeloID = id =>
    Number.isInteger(id) && id > 0 && listaProdutos.find(item => item.id === id)