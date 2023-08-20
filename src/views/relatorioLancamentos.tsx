import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import {objetoRelatorio} from '../components/typesRelatorio'
import { Calendar } from 'primereact/calendar';
import * as mensagem from '../components/toastr'
import localStorageService from '../app/service/localStorageService';

export default function relatorioLancamentos(){

    const [lancamentos, setLancamentos] = useState<objetoRelatorio[]>([]);
    const [dataInicialCompleta, setdataInicialCompleta] = useState<any>('');
    const [dataFinalCompleta, setdataFinalCompleta] = useState<any>('');
    const [mesInicial, setMesInicial] = useState<any>('');
    const [anoInicial, setAnoInicial] = useState<any>('');
    const [mesFinal, setMesFinal] = useState<any>('');
    const [anoFinal, setAnoFinal] = useState<any>('');

    const dadosDeUsuario = localStorageService.obterItem("_usuario_logado");

    const converterObjetoEmString = (objeto: object) =>{
        var objetoConvertidoEmString = objeto.toString();

        return objetoConvertidoEmString;
    }

    const converterStringEmObjetoFormatado = (dataEmString: string) =>{
        var objetoFormatado = dataEmString.split(" ");

        return objetoFormatado;
    }

    const retornarNumeroDoMes = (nomeMes:string) =>{
        switch(nomeMes){
            case "Jan":
                return 1;
            case "Feb":
                return 2;
            case "Mar":
                return 3;
            case "Apr":
                return 4;
            case "May":
                return 5;
            case "Jun":
                return 6;
            case "Jul":
                return 7;
            case "Aug":
                return 8;
            case "Sep":
                return 9;
            case "Oct":
                return 10;
            case "Nov":
                return 11;
            case "Dec":
                return 12;
            default:
                return null;
        }
    }

    const validaSePeriodoFoiInformado = () =>{
        if((dataInicialCompleta !== "" && dataFinalCompleta !== "")&&(dataInicialCompleta !== null && dataFinalCompleta !== null)){
            var dataInicialCompletaEmString = converterObjetoEmString(dataInicialCompleta);
            var objetodataInicialCompletaFormatadoEmPosicoes = converterStringEmObjetoFormatado(dataInicialCompletaEmString);
            var dataFinalCompletaEmString = converterObjetoEmString(dataFinalCompleta);
            var objetodataFinalCompletaFormatadoEmPosicoes = converterStringEmObjetoFormatado(dataFinalCompletaEmString);
            setMesFinal(retornarNumeroDoMes(objetodataFinalCompletaFormatadoEmPosicoes[1]));
            setAnoFinal(objetodataFinalCompletaFormatadoEmPosicoes[3]);
            setMesInicial(retornarNumeroDoMes(objetodataInicialCompletaFormatadoEmPosicoes[1]));
            setAnoInicial(objetodataInicialCompletaFormatadoEmPosicoes[3]);
        }else{
            mensagem.mensagemErro("Favor informe período completo, data inicial e final.");
        }
    }

    const gerarPDF = () =>{
        validaSePeriodoFoiInformado();
    }

    const gerarExcel = () =>{
        validaSePeriodoFoiInformado();
    }
    
    return(
        <Card title="Exportar relatório de lançamentos">
            <div className='row'>
                <div className='col-md-8'>
                    <label>Data inicial &nbsp;</label>
                    <Calendar value={dataInicialCompleta} onChange={(e) => setdataInicialCompleta(e.target.value)} view="month" dateFormat="mm/yy" showButtonBar showIcon />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Data Final &nbsp;</label>
                    <Calendar value={dataFinalCompleta} onChange={(e) => setdataFinalCompleta(e.target.value)} view="month" dateFormat="mm/yy" showButtonBar showIcon />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className='col-md-4 d-flex justify-content-end'>
                    <button className="btn btn-danger"
                            onClick={gerarPDF}>
                            <i className="pi pi-file-pdf" title='Gerar PDF'></i>
                    </button>
                    <button className="btn btn-success"
                            onClick={gerarExcel}>
                            <i className="pi pi-file-excel" title='Gerar Excel'></i>
                    </button>
                </div>
            </div>
            <div className='pt-4'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Descrição</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Mês</th>
                            <th scope="col">Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div></div>
        </Card>
    )
}