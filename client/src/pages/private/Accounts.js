import './Games.css';

import React, {Component} from 'react';

import Table from '../../components/Table';
import Button from '../../components/Button';
import AccountService from '../../service/AccountService';

import {csYup} from '../../components/form/csYup';
import { Formik, Form } from 'formik';
import Field from '../../components/form/Field';
import CSButton from '../../components/form/CSButton';

const GameSchema = csYup(yup => {
  return yup.object().shape({
    plataform_id: yup.number().required().default(''),
    account: yup.string().required().default(''),
    nickname: yup.string().required().default(''),
    link: yup.string().default(''),
    level: yup.string().default('')
  })
});

class AccountForm extends Component {

  saveAccount = async (values, actions) => {
    try {
      await new AccountService().create(values);
      this.props.onSubmit();
    } catch(e) {
      console.error('error trying to create plataform...', e);
    }
  }

  initGame = GameSchema.default();

  render(){
    return (
      <Formik
        validationSchema={GameSchema}
        initialValues={this.initGame}
        onSubmit={this.saveAccount}>
        <Form>
          <div className="Form">
            <Field title="Plataforma" type="select" name="plataform_id" required={true}/>
            <Field title="Nome da Conta" name="account" required={true}/>
            <Field title="Nickname" name="nickname" required={true}/>
            <Field title="Link para perfil" name="nickname"/>
            <Field title="Nível" name="level"/>
            <CSButton type="submit" className="Dark">Salvar</CSButton>
          </div>
        </Form>
      </Formik>
    )
  }
}

class AccountsPage extends Component {

  state = {
    loading: true,
    onForm: false,
    clearForm: false,
    accounts: [],
  }

  async componentDidMount(){
    await this.getAccounts();
  }

  getAccounts = async () => {
    this.setState({onForm: false, loading: true});
    try {
      const accounts = await new AccountService().getByPlayer();
      this.setState({accounts});
    } catch(e) {
      console.error('error', e);
    } finally {
      this.setState({loading: false});
    }
  }

  newAccount = (event) => {
    event.preventDefault();
    this.setState({onForm: !this.state.onForm, clearForm: this.state.onForm});
  }

  render(){
    const {loading, onForm, clearForm, accounts} = this.state;

    if(loading) return null;
    return (
      <div className="Plataform">
        <div className="ContentTitle">
          <h2 className="Title">Contas</h2>
          <Button className="ThemeBackground" onClick={this.newAccount}>{this.state.onForm ? "Voltar" : "Novo"}</Button>
        </div>
        {onForm ?
          <AccountForm
            clearForm={clearForm}
            onSubmit={this.getAccounts}
          />
        : <Table data={accounts} object="conta"/>
        }
      </div>
    )
  }

}

export default AccountsPage;
