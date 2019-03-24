import './CSButton.css';
import React from 'react';

const CSButton = ({
                          type = 'submit',
                          className = '',
                          name = '',
                          children,
                          ...props
                        }) => {
  return (
    <button className={`Button ${className}`} type={type} name={name} {...props}>
        {children}
    </button>
  );
}

export default CSButton;
