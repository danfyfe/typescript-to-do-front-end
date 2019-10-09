import React from 'react'

import Header from '../components/Header'
import { ToDosContainer } from '../containers/ToDosContainer'
import GraphsContainer from '../containers/GraphsContainer'


export const HomePage: React.FC = () => {
return(
  <div>
    <Header />
    <ToDosContainer />
    <GraphsContainer />
  </div>
  )
};

