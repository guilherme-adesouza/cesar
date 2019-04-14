import React, {Component} from 'react';

class FileField extends Component {

  handleSelectFile = (e) => {
      const files = e.target.files;
      if (files[0].type.includes('image')) {
          this.handleChange(files[0]);
      } else {
        //this.handleChange({wrongType: true});
      }
  };

  handleChange = (vals) => {
    this.props.form.setFieldValue(this.props.field.name, vals);
  };

  render(){
    return(
      <div className="FileField">
        <span className="upload">Arquivo para upload</span>
        <input type="file" accept="image/*" className="FileInput" onChange={this.handleSelectFile}/>
      </div>
    )
  }
}

export default FileField;
