import ApiService from "../apiservice";

type objetoLogin = {
    email: string;
    senha: string;
}

class UsuarioService extends ApiService{

    constructor(){
        super('/api/usuarios')
    }

    autenticar(credenciais: objetoLogin){
        return this.post('/autenticar', credenciais);
    }

    obterSaldoPorUsuario(id: string){
        return this.get(`/${id}/saldo`)
    }

}

export default UsuarioService