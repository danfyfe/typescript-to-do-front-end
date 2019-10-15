import React, { useState } from 'react'
import ToDosList from './lists/ToDosList'
import AddToDoForm from '../components/forms/AddToDoForm'
import { ToDo } from '../interfaces/ToDoInterfaces'


// placeholder toDos until backend happens
// const origToDos: ToDo[] = [
//   { id: 1, title: 'Blep', completed: false},
//   { id:2, title: 'Bork!', completed: false}
// ]


export const ToDosContainer: React.FC<{origToDos: ToDo[], addToDo: any, updateStatus: any }> = props => {
  const { origToDos, addToDo, updateStatus } = props

  const [ adding, setAdding ] = useState()


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
        {adding ?
          <AddToDoForm addToDo={addToDo} setAdding={setAdding}/>
          : null}
        <div className='d-flex justify-content-around third-color font-weight-bold'>
          <span>Title</span>
          <span>Status</span>
        </div>

        <ToDosList
          toDos={origToDos}
          updateStatus={updateStatus}
        />

      </div>
    </div>
  )
};

