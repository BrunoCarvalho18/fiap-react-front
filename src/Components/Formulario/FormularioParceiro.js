import React,{ Component } from "react";
import FormValidator from '../../utils/FormValidator';
import PopUp from '../../utils/PopUp';

class FormularioParceiro extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo: 'cpfCnpj',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um Cpf ou Cnpj'
            },
            {
                campo: 'cidade',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com a cidade'
            },
            {
                campo: 'endereco',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com o endereço'
            },
            {
                campo: 'telefone',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com o telefone'
            },
            {
                campo: 'email',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com o email'
            }
        ]);

        this.stateInicial = {
            nome: '',
            cpfCnpj:'',
            cidade: '',
            endereco: '',
            telefone: '',
            email: '',
            validacao: this.validador.valido(),
        }
        this.state = this.stateInicial;

    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {

        const validacao = this.validador.valida(this.state);

        if (validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        } else {
            const { nome, cpfCnpj, cidade, endereco, telefone, email } = validacao;
            const campos = [nome, cpfCnpj, cidade, endereco, telefone, email];

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message);
            });
        }
    }

    render() {
        const { nome, cpfCnpj, cidade, endereco, telefone, email } = this.state;


        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome Parceiro</label>
                        <input
                            className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="cpfCnpj">Cpf Cnpj</label>
                        <input
                            className="validate"
                            id="cpfCnpj"
                            type="text"
                            name="cpfCnpj"
                            value={cpfCnpj}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="endereco">Endereco</label>
                        <input
                            className="validate"
                            id="endereco"
                            type="text"
                            name="endereco"
                            value={endereco}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="cidade">Cidade</label>
                        <input
                            className="validate"
                            id="cidade"
                            type="text"
                            name="cidade"
                            value={cidade}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="telefone">Telefone</label>
                        <input
                            className="validate"
                            id="telefone"
                            type="text"
                            name="telefone"
                            placeholder="(00) 0000-0000"
                            value={telefone}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="email">Email</label>
                        <input
                            className="validate"
                            id="email"
                            type="text"
                            name="email"
                            placeholder="email@provedoremail.com.br"
                            value={email}
                            onChange={this.escutadorDeInput} />
                    </div>
                </div>
                <button onClick={this.submitFormulario} className="waves-effect waves-light btn indigo ligthen-2" type="button">Salvar
               </button>
            </form>

        )
    }


}

export default FormularioParceiro;