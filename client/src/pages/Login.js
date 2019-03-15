import './Login.css';

import React, {Component} from 'react';
import * as yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {withRouter} from "react-router-dom";

import {CSField} from '../components/CSField';
import UserService from '../service/UserService';

const LoginSchema = yup.object().shape({
  username: yup.string().required().default(''),
  password: yup.string().required().default(''),
});

class Login extends Component {

  state = {
    message: '',
  };

  attemptLogin = async (values, actions) => {
    try {
      await UserService.login(values);
      this.props.history.push("/home");
    } catch(e) {
      //handle error
      console.error('error trying to login', e);
    }
  }

  initProfile = LoginSchema.default();

  render(){
    return (
      <div className="LoginPage">
        <h1 className="Login Title">Cesar</h1>
        <Formik
          validationSchema={LoginSchema}
          initialValues={this.initProfile}
          onSubmit={this.attemptLogin}>
          <Form>
            <div className="Login Form">
              <div>
                <Field title="Usuário/Email" type="text" name="username" component={CSField}/>
              </div>
              <div>
                <Field title="Senha" type="password" name="password" component={CSField} />
              </div>
              <button type="submit">Login</button>
            </div>
          </Form>
        </Formik>
      </div>
    )
  }
}

export default withRouter(Login);
