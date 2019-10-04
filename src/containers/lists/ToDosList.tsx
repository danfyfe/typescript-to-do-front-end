import React from 'react';
import {ToDoCard} from '../../components/ToDoCard'

interface ToDo {
  id: number;
  title: string;
}

interface ToDosListProps {
  toDos: ToDo[]
}

function renderToDoCards(toDos: ToDo[]){
  return toDos.map( toDo => {
    return <ToDoCard key={toDo.id} toDo={toDo}/>
  })
}
const ToDosList: React.FC<{toDos: ToDo[]}> = (ToDosListProps) => {


  return(
    <div id='to-do-list'>
      {renderToDoCards(ToDosListProps.toDos)}
    </div>
  )
}

export default ToDosList