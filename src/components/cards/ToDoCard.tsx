import React, { useState } from 'react';
// import ToDoCardEdit from './ToDoCardEdit'
// import ToDoCardStatus from './ToDoCardStatus'
import { ToDo } from '../../interfaces/ToDoInterfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToDoCard: React.FC<{ key: number, toDo: ToDo, updateStatus: any }> = props => {

  const [ editing, setEditing ] = useState(false)

  const { title, completed } = props.toDo

  return(
    <div className='container'>
      <div className='row p2'>
        { editing ? <ToDoCardEdit setEditing={setEditing} toDoTitle={title}/> : <>

          <div className='col-sm d-flex justify-content-center'>
            <span className=''>{title}</span>
          </div>


          <div className='col-sm d-flex justify-content-around' onClick={() => setEditing(true)}>
            <div className=''>
              <ToDoCardStatus completed={completed}/>
            </div>
            <div className=''>
              <FontAwesomeIcon className='' icon='edit'/>
            </div>
          </div>

          </>
        }

      </div>
    </div>
  )
};


const ToDoCardStatus: React.FC<{ completed: boolean }> = props => {
  const { completed } = props

  return(
    <div className=''>{ completed ? 'Completed' : 'In progress'}</div>
  )
};

const ToDoCardEdit: React.FC<{ setEditing: any, toDoTitle: string }> = props => {

  const { toDoTitle, setEditing } = props
  const [ title, setTitle ] = useState(toDoTitle)

  return(<>
    <div className='col-sm d-flex justify-content-center'>
      <input type='text' value={title} onChange={e => setTitle(e.target.value)}/>
    </div>
    <div className='col-sm d-flex justify-content-around'>
      <div className='d-flex flex-column'>
        <input className='m-auto'type='checkbox' value='done'/>
        <span>Done</span>
      </div>
      <div className='d-flex flex-column'>
        <input className='m-auto' type='checkbox' value='in progress'/>
        <span>In prog</span>
      </div>
      <div className='d-flex justify-content-between'>
        <div className='pl-2'>
          <FontAwesomeIcon icon='check'/>
        </div>
        <div className='pl-2' onClick={() => setEditing(false)}>
          <FontAwesomeIcon icon='times'/>
        </div>
      </div>
    </div>
  </>)
};



export default ToDoCard