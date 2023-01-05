import React, { useState } from 'react'
import Card from '../components/Card'
import FormGroup from '../components/Form-Group'

export default function Login(){

    const [acesso,setAcesso] = useState('');
    const [senha, setSenha] = useState('');
    
    const entrar = () =>{
        console.log("E-mail: " + acesso);
        console.log("Senha: " + senha);
        console.log("Clicou !")
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            {/* Para receber o HTML dentro do children, o mesmo em TSX deve ser do tipo ReactElement,
                            ReactNode ou jsxElement. Isso também vale para o componente FormGroup que recebe inputs */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                <input type="email" 
                                                    value={acesso}
                                                    onChange={(e) => {setAcesso(e.target.value)}}
                                                    className="form-control" 
                                                    id="exampleInputEmail1"                                                    
                                                    aria-describedby="emailHelp" 
                                                    placeholder="Digite o Email" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input type="password" 
                                                    value={senha} 
                                                    onChange={(e) => {setSenha(e.target.value)}}
                                                    className="form-control" 
                                                    id="exampleInputPassword1"                                               
                                                    placeholder="Password" />
                                            </FormGroup>
                                            <button onClick={entrar} className="btn btn-success">Entrar</button>
                                            <button className="btn btn-danger">Cadastrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )

}