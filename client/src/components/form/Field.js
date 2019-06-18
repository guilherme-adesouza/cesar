import './Field.css';

import React from 'react';
import {Field, ErrorMessage} from 'formik';

import CSField from './CSField';
import CSSelectField from './CSSelectField';
import CSDateField from './CSDateField';

const COMPONENTS = {
  "text": CSField,
  "textarea": CSField,
  "password": CSField,
  "select": CSSelectField,
  "date": CSDateField,
}

const MyField = ({
                    className = '',
                    name= '',
                    type = 'text',
                    title = null,
                    required = false,
                    ...props
                  }) => {
  const component = !!COMPONENTS[type] ? COMPONENTS[type] : undefined;
  return (
    <div className={`Field ${className}`}>
      {title && <span className="Title">{title}{required ? " *" : ""}</span>}
      <Field {...props}
             title={title}
             required={required}
             name={name}
             type={type}
             component={component}/>
      <ErrorMessage component="span" className="Error" name={name}/>
    </div>
  )
}

export default MyField;
