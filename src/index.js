import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Sobre from './Pages/Sobre/Sobre';
import Cadastro from './Pages/Cadastro/Cadastro';
import NotFound from './Pages/NotFound/NotFound';
import Parceiro from './Pages/Parceiro/Parceiro';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/index' component={Home}/>
            <Route path='/sobre' component={Sobre}/>
            <Route path='/cadastro' component={Cadastro}/>
            <Route path='/parceiros' component={Parceiro}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
