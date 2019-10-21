import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import Loading from '../components/Loading'
import { ToDosContainer } from '../containers/ToDosContainer'
import GraphsContainer from '../containers/GraphsContainer'
import { ToDo } from '../interfaces/ToDoInterfaces'

import getApiKey from '../actions/getApiKey'


export const HomePage: React.FC = () => {

  // placeholder toDos until backend happens
  // const origToDos: ToDo[] = [
  //   { id: 1, title: 'Make list', completed: true},
  //   { id:2, title: 'Do this!', completed: false},
  //   { id:3, title: 'Do that!', completed: true},
  //   { id:4, title: 'Finish list', completed: false}
  // ]

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
    let newToDo = { id: toDos.length + 1, title, completed: false}
    let newToDos = [...toDos, newToDo]
    setToDos(newToDos)
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

