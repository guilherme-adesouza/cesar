import './form/CSButton.css';
import React from 'react';

const Button = ({
                      className = '',
                      name = '',
                      children,
                      ...props
                  }) => {
  return (
    <div className={`Button ${className}`} {...props}>
        {children}
    </div>
  );
}

export default Button;
