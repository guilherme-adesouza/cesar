import './Profile.css';

import React, {Component} from 'react';

import Button from '../../components/Button';
import Api from '../../service/Api';
import Utils from '../../utils/Utils';

import {csYup} from '../../components/form/csYup';
import { Formik, Form } from 'formik';
import Field from '../../components/form/Field';
import CSButton from '../../components/form/CSButton';

const ProfileSchema = csYup(yup => {
  return yup.object().shape({
    name: yup.string().required().default(''),
    nickname: yup.string().required().default(''),
    email: yup.string().default(''),
    nickname: yup.string().default(''),
    avatar: yup.string().default(''),
  })
});

class ProfileForm extends Component {

  saveProfile = async (values, actions) => {
    try {
      await Api.User.update(values);
      this.props.onSubmit();
    } catch(e) {
      console.error('error trying to create plataform...', e);
    }
  }

  render(){
    return (
      <Formik
        validationSchema={ProfileSchema}
        initialValues={this.props.initProfile}
        onSubmit={this.saveProfile}>
        <Form>
          <div className="Form">
            <div>
            </div>
            <div>
              <Field title="Nome" name="name" required={true}/>
              <Field title="Apelido" name="nickname"/>
              <Field title="E-mail" name="email"/>
            </div>
            <CSButton type="submit">Salvar</CSButton>
          </div>
        </Form>
      </Formik>
    )
  }
}

class GamesPage extends Component {

  state = {
    loading: true,
    initProfile: ProfileSchema.default()
  }

  async componentDidMount(){
    const sessionInfo = await Utils.getSessionInfo();
    if(!!sessionInfo){
      this.setState({initProfile: sessionInfo.user, loading: false});
    } else {
      this.setState({loading: false});
    }
  }

  render(){
    const {loading, games, initProfile} = this.state;

    if(loading) return null;
    return (
      <div className="Plataform">
        <div className="ContentTitle">
          <h2 className="Title">Meu Perfil</h2>
        </div>
        <ProfileForm
          initProfile={initProfile}
          onSubmit={this.getGamesList}
        />
      </div>
    )
  }

}

export default GamesPage;
