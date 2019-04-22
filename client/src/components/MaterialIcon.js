import React from 'react';

export default function MaterialIcon({name, ...props}){
    return (
      <i className="material-icons" {...props}>{name}</i>
    )
}
