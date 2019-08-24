import './Games.css';

import React, {Component} from 'react';

import Table from '../../components/Table';
import Button from '../../components/Button';
import Api from '../../service/Api';

import {csYup} from '../../components/form/csYup';
import { Formik, Form } from 'formik';
import Field from '../../components/form/Field';
import CSButton from '../../components/form/CSButton';
import UiMsg from '../../components/UiMsg';

const GameSchema = csYup(yup => {
  return yup.object().shape({
    platform_id: yup.number().required().default(0),
    account: yup.string().required().default(''),
    nickname: yup.string().required().default(''),
    link: yup.string().default(''),
    level: yup.string().default('')
  })
});

class AccountForm extends Component {

  saveAccount = async (values, actions) => {
    try {
      await Api.Account.create(values);
      this.props.onSubmit();
      UiMsg.success('Conta salva com sucesso!');
    } catch(e) {
      UiMsg.error(`Ocorreu um erro ao tentar salvar a conta. ${e}`);
    }
  };

  initGame = GameSchema.default();

  render(){
    return (
      <Formik
        validationSchema={GameSchema}
        initialValues={this.initGame}
        onSubmit={this.saveAccount}>
        <Form>
          <div className="Form">
          <div className="Row Half">
            <Field title="Nível" name="level"/>
            <Field  title="Plataforma"
                    options={this.props.platforms}
                    keys={{value: "id", label:"platform"}}
                    type="select"
                    name="platform_id"
                    required={true}/>
            <Field title="Link para perfil" name="link"/>
          </div>
            <Field title="Nome da conta" name="account" required={true}/>
            <Field title="Nickname" name="nickname" required={true}/>
            <CSButton type="submit">Salvar</CSButton>
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
  };

  async componentDidMount(){
    await this.getAccounts();
  }

  getAccounts = async () => {
    this.setState({onForm: false, loading: true});
    try {
      let accounts = await Api.Account.getByPlayer();
      for(let i=0; i < accounts.length; i++) {
         const hasLink = !!accounts[i].link;
         accounts[i].link = hasLink;
      }
      this.setState({accounts});
    } catch(e) {
      console.error('error', e);
    } finally {
      this.setState({loading: false});
    }
  };

  newAccount = async (event) => {
    event.preventDefault();
    this.setState({loading: true});
    try {
      const platforms = !!this.state.platforms ? this.state.platforms : await Api.Platform.getAll();
      this.setState({platforms, onForm: !this.state.onForm, clearForm: this.state.onForm});
    } catch(e) {
      console.error('error', e);
    } finally {
      this.setState({loading: false});
    }
  };

  render(){
    const {loading, onForm, clearForm, accounts, platforms} = this.state;

    if(loading) return null;
    return (
      <div className="Plataform">
        <div className="ContentTitle">
          <Button className="ThemeBackground" onClick={this.newAccount}>{this.state.onForm ? "Voltar" : "Novo"}</Button>
        </div>
        {onForm ?
          <AccountForm
            clearForm={clearForm}
            platforms={platforms}
            onSubmit={this.getAccounts}
          />
        : <Table data={accounts} object="conta"/>
        }
      </div>
    )
  }

}

export default AccountsPage;
