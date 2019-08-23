import './Platforms.css';

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
    platform: yup.string().required().default(''),
    img: yup.string().required().default('')
  })
});

class PlatformForm extends Component {

  savePlatform = async (values, actions) => {
    try {
      await Api.Platform.create(values);
      this.props.onSubmit();
      UiMsg.success('Plataforma salva com sucesso!');
    } catch (e) {
      UiMsg.error(`Ocorreu um erro ao tentar salvar a plataforma. ${e}`);
    }
  };

  initPlatform = PlatformSchema.default();

  render(){
    return (
      <Formik
        validationSchema={PlatformSchema}
        initialValues={this.initPlatform}
        onSubmit={this.savePlatform}>
        <Form>
          <div className="Form">
            <Field title="Plataforma" type="text" name="platform" required={true}/>
            <Field title="Imagem (Link Externo)" type="text" name="img" required={true}/>
            <CSButton type="submit">Salvar</CSButton>
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
  };

  async componentDidMount(){
    await this.getPlataformList();
  }

  getPlataformList = async () => {
    this.setState({onForm: false, loading: true});
    try {
      const platforms = await Api.Platform.getAll();
      this.setState({platforms});
    } catch(e) {
      console.error(e);
    } finally {
      this.setState({loading: false});
    }
  };

  newPlataform = (event) => {
    event.preventDefault();
    this.setState({onForm: !this.state.onForm, clearForm: this.state.onForm});
  };

  render(){
    const {loading, onForm, clearForm, platforms} = this.state;

    if(loading) return null;
    return (
      <div className="Plataform">
        <div className="ContentTitle">
          <h2 className="Title"></h2>
          <Button className="ThemeBackground" onClick={this.newPlataform}>{this.state.onForm ? "Voltar" : "Novo"}</Button>
        </div>
        {onForm ?
          <PlatformForm
            clearForm={clearForm}
            onSubmit={this.getPlataformList}
          />
        : <Table data={platforms} object="plataforma"/>
        }
      </div>
    )
  }

}

export default PlatformsPage;
