import React from 'react';

const CSField = ({
                          type = "text",
                          title = null,
                          field,
                          form,
                          children,
                          placeholder,
                          ...props
                        }) => {
  const holder = placeholder || title;
  if(type === "textarea"){
    return (
      <textarea placeholder={holder} {...field} {...props}/>
    );
  }
  return (
    <input placeholder={holder} type={type} {...field} {...props}/>
  );
};

export default CSField;
