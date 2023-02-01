import React, { useState } from 'react'
import Card from '../components/Card'
import FormGroup from '../components/Form-Group'
import SelectMenu from '../components/SelectMenu'
import * as mensagem from '../components/toastr'

import { useHistory } from 'react-router-dom'
import LancamentoService from '../app/service/lancamentoService'
import localStorageService from '../app/service/localStorageService'

export default function CadastroLancamento(){

    const [id, setId] = useState(null);
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const [tipo, setTipo] = useState('');
    const [status, setStatus] = useState('');

    const service = new LancamentoService();

    const tipos = service.obterListaTipos();
    const meses = service.obterListaMeses();
    const history = useHistory();

    const cadastraLancamento = () =>{
        const usuarioLogado = localStorageService.obterItem("_usuario_logado")
        const objLancamento = {
            descricao: descricao,
            valor: valor,
            mes: mes,
            ano: ano,
            tipo: tipo,
            usuario: usuarioLogado.id
        }

        service.salvar(objLancamento)
                .then(response =>{
                    mensagem.mensagemSucesso("Lançamento cadastrado com sucesso.");
                    setTimeout(() => {
                        history.push("/consulta-lancamentos");
                    }, 2000)     
                }).catch(error =>{
                    mensagem.mensagemErro(error.responsa.data);
                })
    }

    return(
        <Card title="Cadastro de lançamento">
            <div className="row">
                <div className="col-md-12">
                    <FormGroup htmlFor="inputDescricao" label="Descrição: *">
                        <input type="text" 
                                id="inputDescricao" 
                                className="form-control"
                                name="descricao"
                                value={descricao}
                                onChange={(e:any) => setDescricao(e.target.value)} />
                    </FormGroup>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <FormGroup htmlFor="inputAno" label="Ano: *">
                        <input type="text" 
                                id="inputAno" 
                                className="form-control"
                                name="ano"
                                value={ano}
                                onChange={(e:any) => setAno(e.target.value)} />
                    </FormGroup>
                </div>
                <div className="col-md-6">
                    <FormGroup htmlFor="inputMes" label="Mês: *">
                    <SelectMenu id="inputMes" 
                                lista={meses} 
                                className="form-control"
                                name="mes"
                                value={mes}
                                onChange={(e:any) => setMes(e.target.value)} />
                    </FormGroup>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <FormGroup htmlFor="inputValor" label="Valor: *">
                        <input type="text" 
                                id="inputValor" 
                                className="form-control"
                                name="valor"
                                value={valor}
                                onChange={(e:any) => setValor(e.target.value)} />
                    </FormGroup>
                </div>
                <div className="col-md-4">
                    <FormGroup htmlFor="inputTipo" label="Tipo: *">
                        <SelectMenu id="inputTipo" 
                                    lista={tipos} 
                                    className="form-control"
                                    name="tipo"
                                    value={tipo}
                                    onChange={(e:any) => setTipo(e.target.value)} />
                    </FormGroup>
                </div>
                <div className="col-md-4">
                    <FormGroup htmlFor="inputStatus" label="Status: *">
                        <input type="text" 
                                className="form-control" 
                                name="status"
                                value={status}
                                disabled />
                    </FormGroup>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <button onClick={cadastraLancamento} className="btn btn-success">Cadastrar</button>
                    <button className="btn btn-danger">Cancelar</button>
                </div>
            </div>
        </Card> 
    )

}