import './Platforms.css';

import React, {Component} from 'react';

import Table from '../../components/Table';
import Button from '../../components/Button';
import PlatformService from '../../service/PlatformService';

import * as yup from 'yup';
import { Formik, Form } from 'formik';
import Field from '../../components/form/Field';
import CSButton from '../../components/form/CSButton';

const PlatformSchema = yup.object().shape({
  platform: yup.string().required().default('')
});

class PlatformForm extends Component {

  savePlatform = async (values, actions) => {
    try {
      await PlatformService.create(values);
      this.props.onSubmit();
    } catch(e) {
      console.error('error trying to create plataform...', e);
    }
  }

  initPlatform = PlatformSchema.default();

  render(){
    return (
      <Formik
        validationSchema={PlatformSchema}
        initialValues={this.initPlatform}
        onSubmit={this.savePlatform}>
        <Form>
          <div className="Form">
            <Field title="Plataforma" type="text" name="platform"/>
            <CSButton type="submit" className="Dark">Salvar</CSButton>
          </div>
        </Form>
      </Formik>
    )
  }
}

class PlatformsPage extends Component {

  state = {
    loading: true,
    onForm: false,
    clearForm: false,
    platforms: [],
  }

  async componentDidMount(){
    await this.getPlataformList();
  }

  getPlataformList = async () => {
    this.setState({onForm: false, loading: true});
    try {
      const {platforms} = await PlatformService.getAll();
      this.setState({platforms});
    } catch(e) {
      console.error(e);
    } finally {
      this.setState({loading: false});
    }
  }

  newPlataform = (event) => {
    event.preventDefault();
    this.setState({onForm: true, clearForm: this.state.onForm});
  }

  render(){
    const {loading, onForm, clearForm, platforms} = this.state;

    if(loading) return null;
    return (
      <div className="Plataform">
        <div className="ContentTitle">
          <h2 className="Title">Plataformas</h2>
          <Button className="ThemeBackground" onClick={this.newPlataform}>Novo</Button>
        </div>
        {onForm ?
          <PlatformForm
            clearForm={clearForm}
            onSubmit={this.getPlataformList}
          />
          : <Table data={platforms} />
        }
      </div>
    )
  }

}

export default PlatformsPage;
