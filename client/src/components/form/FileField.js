import './FileField.css';
import React, {Component} from 'react';
import EmptyPhoto from '../../resources/images/empty-user-photo.png';

class FileField extends Component {

  state = {
    image: {
      width: 0,
      height: 0,
      src: undefined,
      lineHeight: 0
    }
  }

  componentDidMount(){
    const lineHeight = !!document.getElementById('PreviewUpload') ? document.getElementById('PreviewUpload').height : 0;
    const image = {src: this.props.field.value};
    this.setState({image, lineHeight});
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
      image.onload = async function () {
          const {src, width, height} = image;
          await this.setState({image: {src, width, height}});
          const lineHeight = !!document.getElementById('PreviewUpload') ? document.getElementById('PreviewUpload').height : 0;
          this.setState({lineHeight})
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
    const {src, width, height, lineHeight} = this.state.image;
    return(
      <div className="FileField">
        <div className="FileContent">
          <input type="file" accept="image/*" className="FileInput" onChange={this.handleSelectFile}/>
          <div className="UploadHover" style={{lineHeight}}>Upload</div>
          <img className="PreviewUpload" id="PreviewUpload" src={src || EmptyPhoto} alt="Upload"/>
          {!!width && <span className="Dimensions">{!!src ? `${width} x ${height}`: ''}</span>}
        </div>
      </div>
    )
  }
}

export default FileField;
