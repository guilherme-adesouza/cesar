import React from 'react';

export default function MaterialIcon({name, ...props}){
    return (
      <i className="Icon material-icons" {...props}>{name}</i>
    )
}
