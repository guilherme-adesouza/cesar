import './CSButton.css';
import React from 'react';

const CSButton = ({
                          type = 'submit',
                          className = '',
                          name = '',
                          children,
                          theme = true,
                          ...props
                        }) => {
  return (
    <button className={`Button ${theme ? 'ThemeBackground' : ''} ${className}`} type={type} name={name} {...props}>
        {children}
    </button>
  );
};

export default CSButton;
