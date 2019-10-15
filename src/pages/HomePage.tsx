import React, { useState } from 'react'

import Header from '../components/Header'
import { ToDosContainer } from '../containers/ToDosContainer'
import GraphsContainer from '../containers/GraphsContainer'
import { ToDo } from '../interfaces/ToDoInterfaces'


export const HomePage: React.FC = () => {
  // placeholder toDos until backend happens
  const origToDos: ToDo[] = [
    { id: 1, title: 'Make list', completed: true},
    { id:2, title: 'Do this!', completed: false},
    { id:3, title: 'Do that!', completed: true},
    { id:4, title: 'Finish list', completed: false}
  ]

  // const [ adding, setAdding ] = useState()
  const [ toDos, setToDos ] = useState(origToDos)

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
    <ToDosContainer origToDos={toDos} addToDo={addToDo} updateStatus={updateStatus} />
    <GraphsContainer toDos={toDos}/>
  </div>
  )
};

