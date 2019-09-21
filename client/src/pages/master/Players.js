import './Players.css';
import React, {Component} from 'react';

import Table from '../../components/Table';
import Button from '../../components/Button';
import Api from '../../service/Api';

import {csYup} from '../../components/form/csYup';
import { Formik, Form } from 'formik';
import Field from '../../components/form/Field';
import CSButton from '../../components/form/CSButton';
import UiMsg from '../../components/UiMsg';

const PlatformSchema = csYup(yup => {
  return yup.object().shape({
    username: yup.string().required().default(''),
    nickname: yup.string().required().default(''),
    email: yup.string().required().default(''),
    achievements_control: yup.bool().default(true),
    public: yup.bool().default(true),
    master: yup.bool().default(true),
    active: yup.bool().default(true),
  })
});

class PlayerForm extends Component {

  savePlayer = async (values, actions) => {
    try {
      if (!!this.props.playerEdit) {
        await Api.User.update(this.props.playerEdit.id, values);
      } else {
        await Api.User.create(values);
      }
      this.props.onSubmit();
      UiMsg.success('Usuário salvo com sucesso!');
    } catch (e) {
      UiMsg.error(`Ocorreu um erro ao tentar salvar o usuário. ${e}`);
    }
  };

  initPlayer = PlatformSchema.default();

  constructor(props) {
    super(props);
    if (!!props.playerEdit) {
      this.initPlayer.username = props.playerEdit.username;
      this.initPlayer.nickname = props.playerEdit.nickname;
      this.initPlayer.email = props.playerEdit.email;
      this.initPlayer.achievements_control = props.playerEdit.achievements_control;
      this.initPlayer.public = props.playerEdit.public;
      this.initPlayer.master = props.playerEdit.master;
      this.initPlayer.active = props.playerEdit.active;
    }
  }

  render(){
    return (
      <Formik
        validationSchema={PlatformSchema}
        initialValues={this.initPlayer}
        onSubmit={this.savePlayer}>
        <Form>
          <div className="Form">
            <Field title="Username" type="text" name="username" required={true}/>
            <Field title="Nickname" type="text" name="nickname" required={true}/>
            <Field title="E-mail" type="text" name="email" required={true}/>
            <Field title="Achievements Control" type="checkbox" name="achievements_control"/>
            <Field title="Public" type="checkbox" name="public"/>
            <Field title="Master" type="checkbox" name="master"/>
            <Field title="Active" type="checkbox" name="active"/>
            <CSButton type="submit">Salvar</CSButton>
          </div>
        </Form>
      </Formik>
    )
  }
}

class Player extends Component {

  state = {
    loading: true,
    onForm: false,
    players: [],
  };

  async componentDidMount(){
    await this.getPlayersList();
  }

  getPlayersList = async () => {
    this.setState({loading: true});
    try {
      const players = await Api.User.getAll();
      this.setState({players});
    } catch(e) {
      console.error(e);
    } finally {
      this.setState({loading: false});
    }
  };

  newPlayer = (event) => {
    event.preventDefault();
    this.setState({onForm: !this.state.onForm});
  };

  updatePlayer = (event, player) => {
    event.preventDefault();
    let playerEdit = this.state.players.find(p => { return p.id === player.id});
    this.setState({onForm: !this.state.onForm, playerEdit: playerEdit});
  }

  render(){
    const {loading, onForm, players, playerEdit} = this.state;

    if(loading) return null;
    return (
      <div className="Players">
        <div className="ContentTitle">
          <Button className="ThemeBackground" onClick={this.newPlayer}>{this.state.onForm ? "Voltar" : "Novo"}</Button>
        </div>
        {onForm ?
          <PlayerForm
            playerEdit={playerEdit}
            onSubmit={this.getPlayersList}
          />
        : <Table data={players} object="usuário" onClickItem={this.updatePlayer} itemTitle="Clique para editar"/>
        }
      </div>
    )
  }
}

export default Player;
