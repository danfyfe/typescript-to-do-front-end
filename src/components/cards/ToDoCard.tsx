import React, { useState } from 'react';
// import ToDoCardEdit from './ToDoCardEdit'
// import ToDoCardStatus from './ToDoCardStatus'
import { ToDo } from '../../interfaces/ToDoInterfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToDoCard: React.FC<{ key: number, toDo: ToDo, updateStatus: any }> = props => {

  const [ completing, setCompleting ] = useState(false)

  const { title, completed } = props.toDo

  return(
    <div className='container'>
      <div className='row'>
        <div className='col-sm'>{title}</div>
        { completing ? <ToDoCardEdit/> : <>

          <div className='col-sm'>
            <ToDoCardStatus completed={completed}/>
          </div>

          <div className='col-sm' onClick={() => setCompleting(true)}>
            <FontAwesomeIcon className='' icon='edit'/>
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

const ToDoCardEdit: React.FC = props => {
  return(
    <div className=''>

    </div>
  )
};



export default ToDoCard