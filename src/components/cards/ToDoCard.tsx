import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
// import ToDoCardEdit from './ToDoCardEdit'
// import ToDoCardStatus from './ToDoCardStatus'
import { ToDo } from '../../interfaces/ToDoInterfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToDoCard: React.FC<{ key: number, toDo: ToDo, updateStatus: any }> = props => {

  const springProps = useSpring({
    opacity: 1, color:'blue', from: {opacity: 0, color: 'red'}
    

  })

  const [ editing, setEditing ] = useState(false)

  const { title, completed } = props.toDo
  const { updateStatus, toDo } = props

  return(
    <animated.div style={springProps}>
    <div className='container'>
      <div className='row p2'>

        { editing ? <ToDoCardEdit setEditing={setEditing} toDo={toDo} updateStatus={updateStatus}/> : <>

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
    </animated.div>
  )
};


const ToDoCardStatus: React.FC<{ completed: boolean }> = props => {
  const { completed } = props

  return(
    <div className=''>{ completed ? 'Completed' : 'In progress'}</div>
  )
};

const ToDoCardEdit: React.FC<{ setEditing: any, toDo:ToDo, updateStatus: any }> = props => {

  const { toDo, setEditing, updateStatus } = props

  const [ title, setTitle ] = useState(toDo.title)
  const [ status, setStatus ] = useState(toDo.completed)

  // console.log('completed?', status)

  return(<>

    <div className='col-sm d-flex justify-content-center p-1'>
      <input className='' type='text' value={title} onChange={e => setTitle(e.target.value)}/>
    </div>

    <div className='col-sm d-flex justify-content-around'>

      <div className='d-flex flex-column p-1'>
        <input className='m-auto'type='checkbox' value='done'
        checked={ status ? true : false}
        onChange={() => setStatus(true)}/>
        <span>Done</span>
      </div>

      <div className='d-flex flex-column p-1'>
        <input className='m-auto' type='checkbox' value='in progress' checked={ status ? false : true}
        onChange={() => setStatus(false)}/>
        <span>In prog</span>
      </div>

      <div className='d-flex justify-content-between p-2'>

        <div className='pl-2' onClick={() => {
          updateStatus({id: toDo.id, title, completed: status})
        }}>
          <FontAwesomeIcon className='text-success' icon='check'/>
        </div>

        <div className='pl-4' onClick={() => setEditing(false)}>
          <FontAwesomeIcon className='text-danger' icon='times'/>
        </div>

      </div>
    </div>
  </>)
};



export default ToDoCard