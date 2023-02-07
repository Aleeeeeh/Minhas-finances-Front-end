import React, { useState } from 'react'
import Card from '../components/Card'
import FormGroup from '../components/Form-Group'
import { useHistory } from 'react-router-dom'
import UsuarioService from '../app/service/usuarioService'
import { mensagemSucesso, mensagemErro } from '../components/toastr'

export default function CadastroUsuario(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaRepeticao, setSenhaRepeticao] = useState('');
    const history = useHistory();

    const service = new UsuarioService();

    const validar = () =>{
        const msgs = [];

        if(!nome){
            msgs.push("O campo nome é obrigatório.");
        }

        if(!email){
            msgs.push("O campo e-mail é obrigatório.");
        }else if(!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            msgs.push("Informe um e-mail válido.");
        }

        if(!senha){
            msgs.push("Digite a senha.");
        }else if(senha !== senhaRepeticao){
            msgs.push("As senhas não conferem.")
        }

        return msgs;
    }

    const cadastrar = () =>{
        const msgs = validar();

        if(msgs && msgs.length > 0){
            msgs.forEach( (msg, index) =>{
                mensagemErro(msg)
            });

            return false;
        }

        const objetoUsuario = {
            nome: nome,
            email: email,
            senha: senha
        }

        service.salvar(objetoUsuario)
        .then( response => {
            mensagemSucesso('Usuário cadastrado com sucesso !');
            setTimeout(() => {
                history.push("/login");
            }, 2000)  
        }).catch( erro => {
            mensagemErro(erro.response.data);
        })
    }

    const cancelar = () =>{
        history.push("/login")
    }

    return(
        <Card title="Cadastro de usuário">
            <div className="row">
                <div className="col-lg-12">
                    <div className="bs-component">
                        <FormGroup label="Nome: *" htmlFor="inputNome">
                            <input type="text" 
                                    id="inputNome"
                                    className="form-control"
                                    name="nome"
                                    onChange={(e) => setNome(e.target.value)} />
                        </FormGroup>
                        <FormGroup label="Email: *" htmlFor="inputEmail">
                            <input type="email" 
                                    id="inputEmail"
                                    className="form-control"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup label="Senha: *" htmlFor="inputSenha">
                            <input type="password" 
                                    id="inputSenha"
                                    className="form-control"
                                    name="senha"
                                    onChange={(e) => setSenha(e.target.value)} />
                        </FormGroup>
                        <FormGroup label="Repita a senha: *" htmlFor="inputRepitaSenha">
                            <input type="password" 
                                    id="inputRepitaSenha"
                                    className="form-control"
                                    name="senha"
                                    onChange={(e) => setSenhaRepeticao(e.target.value)} />
                        </FormGroup>
                        <button onClick={cadastrar} type="button" className="btn btn-success">Salvar</button>
                        <button onClick={cancelar} type="button" className="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            </div>
            <div></div>
        </Card>      
    )

}