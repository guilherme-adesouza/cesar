import './Field.css';

import React from 'react';
import {Field, ErrorMessage} from 'formik';

import CSField from './CSField';

const MyField = ({className = '', name= '', ...props}) => {
  return (
    <div className={`Field ${className}`}>
      <Field {...props} name={name} component={CSField}/>
      <ErrorMessage component="span" className="Error" name={name}/>
    </div>
  )
}

export default MyField;
