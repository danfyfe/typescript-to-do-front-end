import React from 'react';
import ToDoCard from '../../components/cards/ToDoCard'
import { ToDo } from '../../interfaces/ToDoInterfaces'


const ToDosList: React.FC<{toDos: ToDo[], updateStatus: Function, deleteToDo: Function }> = props => {
  const { updateStatus, toDos, deleteToDo } = props

  function renderToDoCards(toDos: ToDo[]){
    return toDos.map( (toDo, index) => {
      return <ToDoCard key={toDo.id} index={index} toDo={toDo} updateStatus={updateStatus} deleteToDo={deleteToDo}/>
    })
  }

  return(
    <div id='to-do-list'>
      {renderToDoCards(toDos)}
    </div>
  )
}

export default ToDosList