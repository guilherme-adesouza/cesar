import './Player.css';

import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

import FileService from '../../service/FileService';
import UserService from '../../service/UserService';

import FileField from '../../components/form/FileField';
import CSButton from '../../components/form/CSButton';

import BasicPage from '../helper/BasicPage';

const FileSchema = yup.object().shape({
  file: yup.mixed().required().default(""),
});

class Player extends Component {

  uploadFile = async (values, actions) => {
    try {
      await FileService.upload(values);
    } catch(e) {
      console.error('error trying to upload', e);
    }
  }

  initUpload = FileSchema.default();

  render(){
    return(
      <BasicPage>
        <h1 className="Title">Player</h1>
        <form action='api/upload' method='post' encType="multipart/form-data">
           <input type="file" name="file" />
           <input type='submit' value='Upload!' />
        </form>
        {/*<Formik
          validationSchema={FileSchema}
          initialValues={this.initUpload}
          onSubmit={this.uploadFile}>
          <Form>
            <div className="Form">
              <Field name="file" component={FileField}/>
              <CSButton type="submit" className="Dark">Enviar</CSButton>
            </div>
          </Form>
        </Formik>*/}
      </BasicPage>
    )
  }
}

export default withRouter(Player);
