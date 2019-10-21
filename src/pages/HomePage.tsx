import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import Loading from '../components/Loading'
import { ToDosContainer } from '../containers/ToDosContainer'
import GraphsContainer from '../containers/GraphsContainer'
import { ToDo } from '../interfaces/ToDoInterfaces'

import getApiKey from '../actions/getApiKey'


export const HomePage: React.FC = () => {

  const [ toDos, setToDos ] = useState()

  useEffect(() => {
    fetch(`${getApiKey}/toDos`, {
      method: 'GET'
    })
    .then( resp => resp.json())
    .then( results => {
      setToDos(results)
    })
  }, [])


  function addToDo( title: string){
    fetch(`${getApiKey}/toDos`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json'
      },
      body: JSON.stringify({
        to_do: {
          title: title,
          completed: false
        }
      })
    })
      .then( resp => resp.json())
      .then( results => {
        if(results.error){
          window.alert(results.error)
        } else {
          // console.log(results.newToDo)
          let newToDos = [...toDos, results.newToDo]
          setToDos(newToDos)
        }
    })
  }

  function updateStatus( origToDo: ToDo, updatedToDo: ToDo ){
    let index: number = toDos.indexOf(origToDo)
    let newToDos = [...toDos]
    newToDos.splice(index, 1, updatedToDo)
    setToDos(newToDos)
  }

return(
  <div>
    <Header />
    { toDos ? <>
      <ToDosContainer origToDos={toDos} addToDo={addToDo} updateStatus={updateStatus} />
      <GraphsContainer toDos={toDos}/> </>:
      <Loading/>
    }
  </div>
  )
};

// export default HomePage - this did not work. why?

