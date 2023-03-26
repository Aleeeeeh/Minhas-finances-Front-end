import localStorageService from "./localStorageService";

// Constante a ser usada no sistema TODO, pois se caso precise alterar a chave já reflita pra todos.
export const USUARIO_LOGADO = "_usuario_logado"

export default class AuthService{

    static isUsuarioAutenticado(){
        const usuario = localStorageService.obterItem(USUARIO_LOGADO);
        return usuario && usuario.id;
    }

    static removerUsuarioAutenticado(){
        localStorageService.removerItem(USUARIO_LOGADO);
    }

    static logar(tokenDTO:any){
        localStorageService.adicionarItem(USUARIO_LOGADO, tokenDTO);
    }

    static obterUsuarioAutenticado(){
        return localStorageService.obterItem(USUARIO_LOGADO);
    }

}