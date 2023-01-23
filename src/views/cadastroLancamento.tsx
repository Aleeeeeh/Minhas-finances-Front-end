import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../components/Card'
import FormGroup from '../components/Form-Group'
import SelectMenu from '../components/SelectMenu'
import LancamentosTable from '../components/LancamentosTable'

export default function CadastroLancamento(){

    const meses = [
        { label: 'Selecione...', value: '' },
        { label: 'Janeiro', value: 1 },
        { label: 'Fevereiro', value: 2 },
        { label: 'Março', value: 3 },
        { label: 'Abril', value: 4 },
        { label: 'Maio', value: 5 },
        { label: 'Junho', value: 6 },
        { label: 'Julho', value: 7 },
        { label: 'Agosto', value: 8 },
        { label: 'Setembro', value: 9 },
        { label: 'Outubro', value: 10 },
        { label: 'Novembro', value: 11 },
        { label: 'Dezembro', value: 12 }
    ]
    
    const tipos = [
        { label: 'Selecione...', value: '' },
        { label: 'Despesa', value: 'DESPESA' } ,
        { label: 'Receita', value: 'RECEITA' }
    ]
    
    const lancamentos = [
        { id: 1, descricao: 'Salário', valor: '5000', tipo: 'Receita', mes: '1', status: 'Efetivado' }
    ]

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
                                        aria-describedby="emailHelp"
                                        placeholder="Digite o Ano" />
                            </FormGroup>
                            <FormGroup label="Mês: *" htmlFor="InputMes">
                                <SelectMenu className="form-control" lista={meses}/>
                            </FormGroup>
                            <FormGroup label="Tipo de Lançamento:" htmlFor="InputTipos">
                                <SelectMenu className="form-control" lista={tipos}/>
                            </FormGroup>
                            <button type="button" className="btn btn-success">Buscar</button>
                            <button type="button" className="btn btn-danger">Cadastrar</button>
                        </fieldset>
                    </div>
                </div>
            </div>  
            <br />       
            <div className="row">
                <div className="col-lg-12">
                    <div className="bs-component">
                        <LancamentosTable lancamentos={lancamentos} />
                    </div>
                </div>
            </div>       
        </Card>
    )

}