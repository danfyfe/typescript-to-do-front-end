import React, { useState } from 'react'
import ToDosList from './lists/ToDosList'
import AddToDoForm from '../components/forms/AddToDoForm'
import ErrorMessageCard from '../components/cards/ErrorMessageCard'
import { ToDo } from '../interfaces/ToDoInterfaces'

import getApiKey from '../actions/getApiKey'


export const ToDosContainer: React.FC<{origToDos: ToDo[], setToDos: Function, updateStatus: Function }> = props => {
  const { origToDos, updateStatus, setToDos } = props

  const [ adding, setAdding ] = useState()
  const [ errorMessage, setErrorMessage ] = useState(null)
  // const [ newToDoTitle, setNewToDoTitle ] = useState()

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
          setErrorMessage(results.error)
        } else {
          setAdding(false)
          let newToDos = [...origToDos, results.newToDo]
          setToDos(newToDos)
        }
    })
  }

  return(
    <div className='d-flex flex-column main'>

      <div className='d-flex justify-content-between'>
        <div className='main-color rounded-top'>
          <span className='p-1 m-2'>To Dos </span>
        </div>

        <div>
          <span className='p-1 add-btn'onClick={() => setAdding(true)}>+</span>
        </div>

      </div>

      <div className='sec-color border'>
        { errorMessage ?
          <ErrorMessageCard
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          /> : null}
        {adding ?
          <AddToDoForm
            origToDos={origToDos}
            addToDo={addToDo}
            setAdding={setAdding}/> : null}
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

