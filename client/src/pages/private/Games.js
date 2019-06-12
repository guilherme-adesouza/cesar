import './Games.css';

import React, {Component} from 'react';

import Table from '../../components/Table';
import Button from '../../components/Button';
import Api from '../../service/Api';

import {csYup} from '../../components/form/csYup';
import { Formik, Form } from 'formik';
import Field from '../../components/form/Field';
import CSButton from '../../components/form/CSButton';

const GameSchema = csYup(yup => {
  return yup.object().shape({
    name: yup.string().required().default(''),
    name_visualization: yup.string().default('')
  })
});

class GameForm extends Component {

  saveGame = async (values, actions) => {
    try {
      await Api.Game.create(values);
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
        onSubmit={this.saveGame}>
        <Form>
          <div className="Form">
            <Field title="Nome" name="name" required={true}/>
            <Field title="Nome de visualização" name="name_visualization"/>
            <CSButton type="submit" className="Dark">Salvar</CSButton>
          </div>
        </Form>
      </Formik>
    )
  }
}

class GamesPage extends Component {

  state = {
    loading: true,
    onForm: false,
    clearForm: false,
    games: [],
  }

  async componentDidMount(){
    await this.getGamesList();
  }

  getGamesList = async () => {
    this.setState({onForm: false, loading: true});
    try {
      const games = await Api.Game.getAll();
      this.setState({games});
    } catch(e) {
      console.error('error', e);
    } finally {
      this.setState({loading: false});
    }
  }

  newGame = (event) => {
    event.preventDefault();
    this.setState({onForm: !this.state.onForm, clearForm: this.state.onForm});
  }

  render(){
    const {loading, onForm, clearForm, games} = this.state;

    if(loading) return null;
    return (
      <div className="Plataform">
        <div className="ContentTitle">
          <h2 className="Title">Games</h2>
          <Button className="ThemeBackground" onClick={this.newGame}>{this.state.onForm ? "Voltar" : "Novo"}</Button>
        </div>
        {onForm ?
          <GameForm
            clearForm={clearForm}
            onSubmit={this.getGamesList}
          />
        : <Table data={games} object="jogo"/>
        }
      </div>
    )
  }

}

export default GamesPage;
