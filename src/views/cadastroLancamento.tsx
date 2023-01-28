import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../components/Card'
import FormGroup from '../components/Form-Group'
import SelectMenu from '../components/SelectMenu'
import LancamentosTable from '../components/LancamentosTable'
import LancamentoService from '../app/service/lancamentoService'
import localStorageService from '../app/service/localStorageService'
import * as mensagem from '../components/toastr'
import { objetoLancamento } from '../components/typesLancamentos'

export default function CadastroLancamento(){

    const [ano, setAno] = useState('');
    const [mes, setMes] = useState('');
    const [tipo, setTipo] = useState('');
    const [status, setStatus] = useState('');
    const [descricao, setDescricao] = useState('');
    const [lancamentos, setLancamentos] = useState([]);

    const service = new LancamentoService();

    const buscar = (exibeMensagem: number) =>{
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
                    if(response.data == ""){
                        mensagem.mensagemAlerta("Nenhum registro encontrado.");
                        return false;
                    }
                    
                    setLancamentos(response.data);

                    if(exibeMensagem == 0){
                        mensagem.mensagemSucesso("Consulta realizada com sucesso !");
                    }
                })
                .catch( error => {
                    mensagem.mensagemErro(error.response.data);
                })  
    }

    const editar = (idLancamento: number) =>{
        console.log("Editando lançamento " + idLancamento);
    }

    const deletar = (Lancamento: objetoLancamento) =>{
        service.deletar(Lancamento.id)
        .then(response =>{
            buscar(1);
            mensagem.mensagemSucesso("Lançamento deletado com sucesso !");

            /* Outra forma de fazer seria atualizando a variável de estado lancamentos
            const indexExcluir = lancamentos.indexOf(Lancamento);  -> Pega posicao do objeto a deletar
            1° param TODOS os objetos, e o indice de cada um
            const lancamentoAtualizado = lancamentos.filter((arrayLancamentos, index) =>{
                if(indexExcluir != index){
                    return arrayLancamentos -> Return o array com todos os objetos com excessão do que foi excluído
                }
            })
        
            setLancamentos(lancamentoAtualizado); -> Atualizando variável de estado com array sem aquele objeto
            */
        }).catch(error =>{
            mensagem.mensagemErro("Ocorreu um erro ao tentar deletar o lançamento.");
        })
    }

    const meses = service.obterListaMeses();
    
    const tipos = service.obterListaTipos();

    return(
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
                            <button onClick={() =>{buscar(0)}} type="button" className="btn btn-success">Buscar</button>
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