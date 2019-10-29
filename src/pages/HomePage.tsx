import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import Loading from '../components/Loading'
import { ToDosContainer } from '../containers/ToDosContainer'
import GraphsContainer from '../containers/GraphsContainer'
// import { ToDo } from '../interfaces/ToDoInterfaces'

import getApiKey from '../actions/getApiKey'
import { getToDos } from '../actions/fetches'

export const HomePage: React.FC = () => {

  const [ toDos, setToDos ] = useState()

  useEffect(() => {
    // fetch(`${getApiKey}/toDos`, {
    //   method: 'GET'
    // })
    // .then( resp => resp.json())
    // .then( results => {
    //   setToDos(results)
    // })
    getToDos().then(setToDos)
  }, [])
  
return(
  <div>
    <Header />
    { toDos ? <>
      <ToDosContainer origToDos={toDos} setToDos={setToDos} />
      <GraphsContainer toDos={toDos}/> </>:
      <Loading/>
    }
  </div>
  )
};

// export default HomePage - this did not work. why?

