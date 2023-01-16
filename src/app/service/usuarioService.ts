import ApiService from "../apiservice";

class UsuarioService extends ApiService{

    constructor(){
        super('/api/usuarios')
    }

    autenticar(credenciais: string){
        return this.post('/autenticar', credenciais);
    }

}

export default UsuarioService