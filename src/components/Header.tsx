import React from 'react';
import '../styles/Header.css'

const Header: React.FC = props => {
  return(
    <div className='header d-flex main-color'>
      <span data-test='header-span'className='m-auto font-weight-bold'>To Do!</span>
    </div>
  );
}

export default Header