import React,{Fragment} from 'react';
import Header from '../../Components/Header/Header';

const Sobre = ()=>{

    return (
        <Fragment>
            <Header/>
            <div className="container App">
            <h3>Sobre:</h3>
            <p>A nossa ideia é conectar parceiros que queiram vender e comprar produtos, seja o carro do ovo que a Dona Maria quer comprar, </p>
            <p>ou churros que o Joãozinho quer comprar a nossa solução é conectar parceiros, contribuindo com a economia, e ajudar as pessoas.</p>
            <p>Conectando parceiros que queiram vender e comprar na sua localidade, o nosso foco com a nossa solução é facilitar a vida de todo mundo.</p>
            <p>Grato.</p>
            </div>
        </Fragment>
    );
}

export default Sobre;