import './Races.css';

import React, {Component} from 'react';

import Table from '../../components/Table';
import Button from '../../components/Button';
import Api from '../../service/Api';

import {csYup} from '../../components/form/csYup';
import { Formik, Form } from 'formik';
import Field from '../../components/form/Field';
import CSButton from '../../components/form/CSButton';
import UiMsg from '../../components/UiMsg';

const RaceSchema = csYup(yup => {
  return yup.object().shape({
    account_id: yup.number().required().default(0),
    game_id: yup.number().required().default(0),
    race_type_id: yup.number().required().default(0),
    started_date: yup.string().required().default(new Date()),
    date_prev_conclusion: yup.date(),
    date_conclusion: yup.date(),
    observation: yup.string().default(""),
  })
});

class RaceForm extends Component {

  saveRace = async (values, actions) => {
    try {
      await Api.Race.create(values);
      this.props.onSubmit();
      UiMsg.success('Corrida salva com sucesso!');
    } catch(e) {
      UiMsg.error(`Ocorreu um erro ao tentar salvar a corrida. ${e}`);
    }
  };

  initRace = RaceSchema.default();

  loadAccountGames = async (event) => {
    event.persist();
    await this.props.loadAccountGames(event.currentTarget.value);
  };

  render(){
    return (
      <Formik
        validationSchema={RaceSchema}
        initialValues={this.initRace}
        onSubmit={this.saveRace}>
        <Form>
          <div className="Form">
            <div className="Row Half">
              <Field title="Conta"
                     options={this.props.accounts}
                     customChange={this.loadAccountGames}
                     keys={{value: "id", label: "account"}}
                     type="select"
                     name="account_id"
                     required={true}/>
              <Field title="Jogo"
                     options={this.props.games[this.props.accountId]}
                     keys={{value: "id", label: "name"}}
                     type="select"
                     name="game_id"
                     required={true}/>
            </div>
            <Field title="Tipo de Corrida"
                   options={this.props.raceTypes}
                   keys={{value: "id", label: "description"}}
                   type="select"
                   name="race_type_id"
                   required={true}/>
            <Field title="Data de início" type="date" name="started_date" required={true}/>
            <Field title="Data prevista de conclusão" type="date" name="date_prev_conclusion"/>
            <Field title="Data de conclusão" type="date" name="date_conclusion"/>
            <Field title="Observação" type="textarea" name="observation"/>
            <CSButton type="submit">Salvar</CSButton>
          </div>
        </Form>
      </Formik>
    )
  }
}

class RacesPage extends Component {

  state = {
    loading: true,
    onForm: false,
    clearForm: false,
    races: [],
    raceTypes: [],
    accounts: [],
    games: {},
    accountId: 0,
  };

  async componentDidMount(){
    this.setState({onForm: false, loading: true});
    try {
      const races = await this.getRaceList();
      const accounts = await this.getPlayerAccounts();
      const raceTypes = await this.getRaceTypeList();
      this.setState({races, raceTypes, accounts});
    } catch(e) {
      console.error(e);
    } finally {
      this.setState({loading: false});
    }
  }

  getRaceList = async () => {
    return await Api.Race.getAll();
  };

  getRaceTypeList = async () => {
    return await Api.RaceType.getAll();
  };

  getPlayerAccounts = async () => {
    return await Api.Account.getByPlayer();
  };

  loadAccountGames = async (accountId) => {
    if(!!this.state.games[accountId]){
      this.setState({accountId});
      return;
    }
    try {
      const accountGames = await Api.Account.getGames(accountId);
      let games = this.state.games;
      games[accountId] = accountGames;
      this.setState({games, accountId});
    } catch(e) {
      console.error(e);
    }
  };

  newRace = (event) => {
    event.preventDefault();
    this.setState({onForm: !this.state.onForm, clearForm: this.state.onForm});
  };

  render(){
    const {loading, onForm, clearForm, races, accounts, games, raceTypes, accountId} = this.state;

    if(loading) return null;
    return (
      <div className="Race">
        <div className="ContentTitle">
          <h2 className="Title"></h2>
          <Button className="ThemeBackground" onClick={this.newRace}>{this.state.onForm ? "Voltar" : "Novo"}</Button>
        </div>
        {onForm ?
          <RaceForm
            loadAccountGames={this.loadAccountGames}
            games={games}
            raceTypes={raceTypes}
            accounts={accounts}
            clearForm={clearForm}
            accountId={accountId}
            onSubmit={this.getRaceList}
          />
        : <Table data={races} object="corrida"/>
        }
      </div>
    )
  }

}

export default RacesPage;
