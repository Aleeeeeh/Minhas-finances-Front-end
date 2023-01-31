import React from 'react'
import Card from '../components/Card'
import FormGroup from '../components/Form-Group'
import SelectMenu from '../components/SelectMenu'

import { useHistory } from 'react-router-dom'
import LancamentoService from '../app/service/lancamentoService'

export default function CadastroLancamento(){

    const service = new LancamentoService();

    const tipos = service.obterListaTipos();
    const meses = service.obterListaMeses();

    return(
        <Card title="Cadastro de lançamento">
            <div className="row">
                <div className="col-md-12">
                    <FormGroup htmlFor="inputDescricao" label="Descrição: *">
                        <input type="text" id="inputDescricao" className="form-control" />
                    </FormGroup>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <FormGroup htmlFor="inputAno" label="Ano: *">
                        <input type="text" id="inputAno" className="form-control" />
                    </FormGroup>
                </div>
                <div className="col-md-6">
                    <FormGroup htmlFor="inputMes" label="Mês: *">
                    <SelectMenu id="inputMes" lista={meses} className="form-control" />
                    </FormGroup>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <FormGroup htmlFor="inputValor" label="Valor: *">
                        <input type="text" id="inputValor" className="form-control" />
                    </FormGroup>
                </div>
                <div className="col-md-4">
                    <FormGroup htmlFor="inputTipo" label="Tipo: *">
                        <SelectMenu id="inputTipo" lista={tipos} className="form-control" />
                    </FormGroup>
                </div>
                <div className="col-md-4">
                    <FormGroup htmlFor="inputStatus" label="Status: *">
                        <input type="text" className="form-control" disabled />
                    </FormGroup>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <button className="btn btn-success">Cadastrar</button>
                    <button className="btn btn-danger">Cancelar</button>
                </div>
            </div>
        </Card> 
    )

}