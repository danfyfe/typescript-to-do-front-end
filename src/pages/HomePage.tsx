import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import { ToDosContainer } from '../containers/ToDosContainer'


export const HomePage: React.FC = props => {
return(
  <div>
    <Header />
    <ToDosContainer />
  </div>
)
};

