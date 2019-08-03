import './Login.css';

import React, {Component} from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import {Redirect} from "react-router-dom";

import Utils from '../../utils/Utils';
import Api from '../../service/Api';

import Field from '../../components/form/Field';
import CSButton from '../../components/form/CSButton';

import Logo from '../../components/Logo';
import UiMsg from '../../components/UiMsg';
import SwitchThemeButton from '../../components/SwitchThemeButton';

const LoginSchema = yup.object().shape({
  username: yup.string().required().default(''),
  password: yup.string().required().default(''),
});

class Login extends Component {

  state = { redirectToReferrer: false };

  attemptLogin = async (values, actions) => {
    try {
      const user = await Api.User.login(values);
      Utils.setSessionInfo(user);
      this.setState({redirectToReferrer: true});
    } catch(e) {
      UiMsg.error('Usuário ou senha incorretos');
    }
  };

  initProfile = LoginSchema.default();

  componentDidMount(){
    Utils.setSessionInfo();
  }

  render() {
    let from = this.props.location.state ? this.props.location.state.from || { pathname: "/home" } : { pathname: "/home" };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="LoginPage">
        <SwitchThemeButton />
        <main>
          <div className="Login Title">
            <Logo size={64}/>
            Caesar
          </div>
          <p>Sistema para controle de conquistas</p>
          <Formik
            validationSchema={LoginSchema}
            initialValues={this.initProfile}
            onSubmit={this.attemptLogin}>
            <Form>
              <div className="Login Form">
                <Field title="Usuário/Email" type="text" name="username"/>
                <Field title="Senha" type="password" name="password"/>
                <CSButton type="submit">Login</CSButton>
              </div>
            </Form>
          </Formik>
        </main>
        <footer className="Footer">
          <p>Criado por <a href="https://github.com/guilherme-adesouza" target="_blank" rel="external nofollow noopener noreferrer">Guilherme Augusto de Souza</a></p>
        </footer>
      </div>
    )
  }
}

export default Login;
