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
      if (!!this.props.platformEdit) {
        await Api.Platform.update(this.props.platformEdit.id, values);
      } else {
        await Api.Platform.create(values);
      }
      this.props.onSubmit();
      UiMsg.success('Plataforma salva com sucesso!');
    } catch (e) {
      UiMsg.error(`Ocorreu um erro ao tentar salvar a plataforma. ${e}`);
    }
  };

  initPlatform = PlatformSchema.default();

  constructor(props) {
    super(props);
    if (!!props.platformEdit) {
      this.initPlatform.platform = props.platformEdit.platform;
      this.initPlatform.img = props.platformEdit.img;
    }
  }

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
    platforms: [],
  };

  async componentDidMount(){
    await this.getPlataformList();
  }

  getPlataformList = async () => {
    this.setState({onForm: false, loading: true, platformEdit: {}});
    try {
      let platforms = await Api.Platform.getAll();
      for (let i=0; i < platforms.length; i++) {
         const hasImage = !!platforms[i].img;
         platforms[i].hasImage = hasImage;
      }
      this.setState({platforms});
    } catch(e) {
      console.error(e);
    } finally {
      this.setState({loading: false});
    }
  };

  newPlataform = (event) => {
    event.preventDefault();
    this.setState({onForm: !this.state.onForm});
  };

  updatePlatform = (event, platform) => {
    event.preventDefault();
    let platformEdit = this.state.platforms.find(p => { return p.id === platform.id});
    this.setState({onForm: !this.state.onForm, platformEdit: platformEdit});
  }

  render(){
    const {loading, onForm, platforms, platformEdit} = this.state;

    if (loading) return null;
    return (
      <div className="Plataform">
        <div className="ContentTitle">
          <Button className="ThemeBackground" onClick={this.newPlataform}>{this.state.onForm ? "Voltar" : "Novo"}</Button>
        </div>
        {onForm ?
          <PlatformForm
            platformEdit={platformEdit}
            onSubmit={this.getPlataformList}
          />
        : <Table data={platforms} onClickItem={this.updatePlatform} itemTitle="Clique para editar" object="plataforma"/>
        }
      </div>
    )
  }

}

export default PlatformsPage;
