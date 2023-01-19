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
    const [senhaRepeticao, setsenhaRepeticao] = useState('');
    const history = useHistory();

    const service = new UsuarioService();

    const cadastrar = () =>{
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
                                    onChange={(e) => setsenhaRepeticao(e.target.value)} />
                        </FormGroup>
                        <button onClick={cadastrar} type="button" className="btn btn-success">Salvar</button>
                        <button onClick={cancelar} type="button" className="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            </div>
        </Card>      
    )

}