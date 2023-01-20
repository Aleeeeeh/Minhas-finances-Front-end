import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from '../components/Card'
import FormGroup from '../components/Form-Group'
import selectMenu from '../components/selectMenu'

export default function CadastroLancamento(){

    const lista = [
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
                                        aria-describedby="emailHelp"
                                        placeholder="Digite o Ano" />
                            </FormGroup>
                            <FormGroup label="Mês: *" htmlFor="InputMes">
                                <selectMenu lista={lista}/>
                            </FormGroup>
                        </fieldset>
                    </div>
                </div>
            </div>
        </Card>
    )

}