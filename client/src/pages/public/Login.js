import './Login.css';

import React, {Component} from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import {Redirect} from "react-router-dom";

import Field from '../../components/form/Field';
import CSButton from '../../components/form/CSButton';
import UserService from '../../service/UserService';

const LoginSchema = yup.object().shape({
  username: yup.string().required().default(''),
  password: yup.string().required().default(''),
});

class Login extends Component {

  state = { redirectToReferrer: false };

  attemptLogin = async (values, actions) => {
    try {
      await UserService.login(values);
      this.setState({redirectToReferrer: true});
    } catch(e) {
      console.error('error trying to login', e);
    }
  }

  initProfile = LoginSchema.default();

  render() {
    let from = this.props.location.state ? this.props.location.state.from || { pathname: "/home" } : { pathname: "/home" };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="LoginPage">
        <main>
          <div className="Login Title">
            <img src="caesar-logo-white.png" alt="Cesar Logo" width="54" height="54"/>
            Cesar
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
                <CSButton type="submit" className="Dark">Login</CSButton>
              </div>
            </Form>
          </Formik>
        </main>
        <footer className="Footer">
          <p>Criado por <a href="https://github.com/guilherme-adesouza" target="_blank" rel="external nofollow noopener noreferrer">Guilherme Souza</a> e <a href="https://github.com/JuniorLenhart" target="_blank" rel="external nofollow noopener noreferrer">Júnior Lenhart</a></p>
        </footer>
      </div>
    )
  }
}

export default Login;
