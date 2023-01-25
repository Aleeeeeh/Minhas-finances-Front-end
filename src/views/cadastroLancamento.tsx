import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../components/Card'
import FormGroup from '../components/Form-Group'
import SelectMenu from '../components/SelectMenu'
import LancamentosTable from '../components/LancamentosTable'
import LancamentoService from '../app/service/lancamentoService'
import localStorageService from '../app/service/localStorageService'
import * as mensagem from '../components/toastr'

export default function CadastroLancamento(){

    const [ano, setAno] = useState('');
    const [mes, setMes] = useState('');
    const [tipo, setTipo] = useState('');
    const [status, setStatus] = useState('');
    const [descricao, setDescricao] = useState('');
    const [lancamentos, setLancamentos] = useState([]);

    const service = new LancamentoService();

    const buscar = () =>{
        if(!ano){
            mensagem.mensagemErro("O preenchimento do campo ano é obrigatório.");
            return false;
        }

        const idUsuarioSessao = localStorageService.obterItem('_usuario_logado');
        
        const lancamentoFiltro = {
            ano: ano,
            mes: mes,
            tipo: tipo,
            status: status,
            descricao: descricao,
            usuario: idUsuarioSessao.id
        }

        service.consultar(lancamentoFiltro)
                .then( response => { 
                    setLancamentos(response.data) 
                    mensagem.mensagemSucesso("Consulta realizada com sucesso !")
                })
                .catch( error => {
                    mensagem.mensagemErro(error.response.data);
                })

        
    }

    const editar = (idLancamento: number) =>{
        console.log("Editando lançamento " + idLancamento);
    }

    const deletar = (idLancamento: number) =>{
        console.log("Deletando lançamento " + idLancamento);
    }

    const meses = service.obterListaMeses();
    
    const tipos = service.obterListaTipos();

    return(
        // Corrigir tipagem do card para aceitar vários filhos
        <Card title="Lançamentos">
            <div className="row">
                <div className="col-lg-6">
                    <div className="bs-component">
                        <fieldset>
                            <FormGroup label="Ano: *" htmlFor="InputAno">
                                <input type="text" 
                                        className="form-control" 
                                        id="InputAno" 
                                        value={ano}
                                        onChange={(e: any) => setAno(e.target.value)}
                                        placeholder="Digite o Ano" />
                            </FormGroup>
                            <FormGroup label="Mês: *" htmlFor="InputMes">
                                <SelectMenu id="inputMes"
                                            value={mes}
                                            onChange={(e:any) => setMes(e.target.value)}
                                            className="form-control" 
                                            lista={meses} />
                            </FormGroup>
                            {/* Colocando só a primeira letra no filtro descrição ele já traz, isso foi criado no 
                              método de filtrar na API do Java */}
                            <FormGroup label="Descrição: " htmlFor="InputDesc">
                                <input type="text"
                                            id="InputDesc"
                                            value={descricao}
                                            onChange={(e:any) => setDescricao(e.target.value)}
                                            className="form-control" 
                                            placeholder="Digite a descrição" />
                            </FormGroup>
                            <FormGroup label="Tipo de Lançamento:" htmlFor="InputTipos">
                                <SelectMenu id="InputTipos"
                                            value={tipo}
                                            onChange={(e:any) => setTipo(e.target.value)}
                                            className="form-control" 
                                            lista={tipos} />
                            </FormGroup>
                            <button onClick={buscar} type="button" className="btn btn-success">Buscar</button>
                            <button type="button" className="btn btn-danger">Cadastrar</button>
                        </fieldset>
                    </div>
                </div>
            </div>  
            <br />       
            <div className="row">
                <div className="col-lg-12">
                    <div className="bs-component">
                        <LancamentosTable lancamentos={lancamentos} 
                                        editarLancamento={editar}
                                        deletarLancamento={deletar}/>
                    </div>
                </div>
            </div>       
        </Card>
    )

}