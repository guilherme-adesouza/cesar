import React from 'react';

const CSField = ({
                          title = null,
                          field,
                          form,
                          children,
                          placeholder,
                          ...props
                        }) => {
  const holder = placeholder || title;
  return (
    <input placeholder={holder} {...field} {...props}/>
  );
}

export default CSField;
