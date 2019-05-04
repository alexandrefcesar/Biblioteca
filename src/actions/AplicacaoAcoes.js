import {MODIFICA_ADICIONA_LIVRO_SUCESSO} from './types'


export const modificaAluguel= texto => {
    return {
        type:MODIFICA_ADICIONA_LIVRO_SUCESSO,
        payload:texto
    }
}
export const adicionaLivro= email => {
    return {
        type:''
    }
}