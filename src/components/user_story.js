import React from 'react';

export default ({ props }) => {
   return (
      <div className={`story-item ${props.status} ${props.type}`}>
         <h4>{props.name}</h4>
         <span>{props.desc}</span>
      </div>
   );
}