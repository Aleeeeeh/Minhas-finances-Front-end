import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import UsuarioService from '../app/service/usuarioService';
import {objetoUsuario} from '../components/typesUsuario'


export default function telaUsuarios(){

    const [usuario, setUsuario] = useState<objetoUsuario[]>([]);

    const service = new UsuarioService;


     useEffect(() => {
        service.consultaUsuarios()
        .then(response=>{
            setUsuario(response.data);
        })
        
    },[]);
    
    return(
        <Card title="Listagem de usuários">
            <div className='row'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuario.map(info => {
                                return(
                                    <tr key={info.id}>
                                        <td>{info.id}</td>
                                        <td>{info.nome}</td>
                                        <td>{info.email}</td>
                                    </tr>
                                )
                                
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div></div>
        </Card>
    )
}