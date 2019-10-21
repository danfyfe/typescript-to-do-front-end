import React from 'react';
import ToDoCard from '../../components/cards/ToDoCard'
import { ToDo } from '../../interfaces/ToDoInterfaces'


const ToDosList: React.FC<{toDos: ToDo[], updateStatus: any}> = props => {
  const { updateStatus, toDos } = props

  function renderToDoCards(toDos: ToDo[]){
    return toDos.map( (toDo, index) => {
      return <ToDoCard key={toDo.id} index={index} toDo={toDo} updateStatus={updateStatus}/>
    })
  }

  return(
    <div id='to-do-list'>
      {renderToDoCards(toDos)}
    </div>
  )
}

export default ToDosList