import React from 'react';

const CSField = ({
                          type = 'text',
                          className = '',
                          name = '',
                          title = null,
                          required = false,
                          field,
                          form,
                          children,
                          ...props
                        }) => {
  return (
    <React.Fragment>
      {title && <span className="Title">{title}{required ? " *" : ""}</span>}
      <input type={type} name={name} {...field} {...props}/>
      {children}
    </React.Fragment>
  );
}

export default CSField;
