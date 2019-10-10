import React, { useState } from 'react'
import ToDosList from './lists/ToDosList'
import AddToDoForm from '../components/forms/AddToDoForm'
import { ToDo } from '../interfaces/ToDoInterfaces'

// placeholder toDos until backend happens
const origToDos: ToDo[] = [
  { id: 1, title: 'Blep', completed: false},
  { id:2, title: 'Bork!', completed: false}
]


export const ToDosContainer: React.FC = () => {

  const [ adding, setAdding ] = useState()
  const [ toDos, setToDos ] = useState(origToDos)

  function addToDo( title: string){
    let newToDo = { id: origToDos.length + 1, title, completed: false}
    let newToDos = [newToDo, ...origToDos]
    setToDos(newToDos)
    setAdding(false)
  }

  function updateStatus( toDo: ToDo ){

    let origToDo = toDos.find( oToDo => {
      return oToDo.id === toDo.id
    })

    // let index = toDos.indexOf(origToDo)

  }

  return(
    <div className='d-flex flex-column main'>

      <div className='d-flex justify-content-between'>
        <div className='main-color rounded-top'>
          <span className='p-1 m-2'>To Dos </span>
        </div>

        <div>
          <span className='p-1'onClick={() => setAdding(true)}>+</span>
        </div>

      </div>
      <div className='sec-color border'>
        {adding ? <AddToDoForm addToDo={addToDo} setAdding={setAdding} /> : null}
        <div className='d-flex justify-content-around third-color font-weight-bold'>
          <span>Title</span>
          <span>Status</span>
        </div>

        <ToDosList
          toDos={toDos}
          updateStatus={updateStatus}
        />

      </div>
    </div>
  )
};

