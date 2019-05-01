import './FileField.css';
import React, {Component} from 'react';

class FileField extends Component {

  state = {
    image: {
      width: 0,
      height: 0,
      src: undefined
    }
  }

  handleSelectFile = (e) => {
    e.preventDefault();
    const files = e.target.files;
    if(files.length === 0 || !files[0].type.includes('image')) {
      this.handleChange(undefined);
      return;
    }
    this.handleChange(files[0]);
  };

  updatePreview = (image) => {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = function (e) {
      let image = new Image();
      image.src = e.target.result;
      image.onload = function () {
          const {src, width, height} = image;
          this.setState({image: {src, width, height}});
      }.bind(this);
    }.bind(this);
  }

  handleChange = (img) => {
    this.updatePreview(img);
    this.props.form.setFieldValue(this.props.field.name, img);
  };

  componentWillUnmount(){
    URL.revokeObjectURL(this.props.field.value);
  }

  render(){
    const {src, width, height} = this.state.image;
    return(
      <div className="FileField">
        <span className="UploadInfo">Arquivo para upload</span>
        <input type="file" accept="image/*" className="FileInput" onChange={this.handleSelectFile}/>
        {!!src &&
          <div className="Preview">
            <img className="PreviewUpload" src={src} alt="Upload"/>
            <span>{width} x {height}</span>
          </div>
        }
      </div>
    )
  }
}

export default FileField;
