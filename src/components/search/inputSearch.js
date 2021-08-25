import React from 'react';

import { Buttons } from '../button/buttons';
import './input.css'

const InputSearch = ({handleSearchChange}) => {

  return (
    <div className="search-bar">
      <input 
        onChange={handleSearchChange}
        placeholder="Search Giphy" 
        type="search" 
      />
      <div style={{padding: "2px"}}></div>
      <Buttons title="Search" color="bg-blue" />
    </div>
  );
};

export default InputSearch;