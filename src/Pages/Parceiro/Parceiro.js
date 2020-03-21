import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from '../../Components/Header/Header';
import Form from '../../Components/Formulario/FormularioParceiro';
import ApiService from '../../utils/ApiService';
import PopUp from "../../utils/PopUp";

class Parceiro extends Component{

    state = {
        parceiros: [
          {
            nome: 'Bruno Teste',
            cpfCnpj:'40919966047',
            cidade: 'Barueri',
            endereco: 'Rua JK',
            telefone: '11 952178031',
            email: 'brunocarvalhodesa@gmail.com',
            
          }
        ],
      };

    escutadorDeSubmit = parceiro=>{
       ApiService.CriarParceiro(JSON.stringify(parceiro))
          .then(res=>{
            if(res.message === 'success'){
                this.setState({ parceiros:[...this.state.parceiros, parceiro]});
                PopUp.exibeMensagem('success', "Parceiro adicionado com sucesso");
              }
          })
          .catch(err =>PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar criar o parceiro"));
    }

    render(){
        return(
        <Fragment>
            <Header/>
            <div className="container mb-20">
             <Form escutadorDeSubmit={this.escutadorDeSubmit}/>
            </div>
            </Fragment>
        );

    }

    
}

export default Parceiro;