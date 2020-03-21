import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from '../../Components/Header/Header';
import Form from '../../Components/Formulario/FormularioCadastro';
import './Cadastro.css';


class Cadastro extends Component{



    render(){
        return(
        <Fragment>
            <Header/>
            <div className="container mb-10">
             <Form />
            </div>
            </Fragment>
        );

    }



}

export default Cadastro;