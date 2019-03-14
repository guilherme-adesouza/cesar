import './CSField.css';
import React from 'react';
import {ErrorMessage} from 'formik';

export const CSField = ({
                          type = 'text',
                          className = '',
                          name = '',
                          title = null,
                          field,
                          form,
                          children,
                          ...props
                        }) => {
  return (
    <div className={`Field ${className}`}>
      {title && <span className="Title">{title}</span>}
      <input type={type} name={name} {...field} {...props}/>
      {children}
    </div>
  );
}
