import './Field.css';

import React from 'react';
import {Field, ErrorMessage} from 'formik';

import CSField from './CSField';

const COMPONENTS = {
  "text": CSField,
  "password": CSField
}

const MyField = ({className = '', name= '', type = 'text', ...props}) => {
  const component = !!COMPONENTS[type] ? COMPONENTS[type] : type;
  return (
    <div className={`Field ${className}`}>
      <Field {...props}
             name={name}
             type={type}
             component={component}/>
      <ErrorMessage component="span" className="Error" name={name}/>
    </div>
  )
}

export default MyField;
