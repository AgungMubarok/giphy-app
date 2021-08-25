import React from 'react';

import './buttons.css';

export const Buttons = ({onClick, title, color}) => {
  return (
    <button onClick={onClick} className={color}>
      {title}
    </button>
  );
};