import React, { useState } from 'react'
import ToDosList from './lists/ToDosList'
import AddToDoForm from '../components/forms/AddToDoForm'
import { ToDo } from '../interfaces/ToDoInterfaces'

// placeholder toDos until backend happens
const origToDos: ToDo[] = [
  { id: 1, title: 'Blep'},
  { id:2, title: 'Bork!'}
]


export const ToDosContainer: React.FC = props => {

  const [ adding, setAdding ] = useState()
  const [ toDos, setToDos ] = useState(origToDos)

  function addToDo( title: string){
    let newToDo = { id: origToDos.length + 1, title}
    let newToDos = [newToDo, ...origToDos]
    setToDos(newToDos)
    setAdding(false)
  }

  return(
    <div className='d-flex flex-column m-2'>
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
        <ToDosList toDos={toDos}/>
      </div>
    </div>
  )
};

