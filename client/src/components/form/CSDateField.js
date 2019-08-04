import React from 'react';
import Utils from '../../utils/Utils';

const CSDateField = ({
                          title = null,
                          field,
                          form,
                          children,
                          placeholder,
                          ...props
                        }) => {
  const holder = placeholder || title;
  const {value, ...fieldProps} = field;
  return (
    <input placeholder={holder} value={Utils.formatDate(value)} {...fieldProps} {...props}/>
  );
};

export default CSDateField;
