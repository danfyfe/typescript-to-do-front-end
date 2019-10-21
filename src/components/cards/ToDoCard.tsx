import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
// import ToDoCardEdit from './ToDoCardEdit'
// import ToDoCardStatus from './ToDoCardStatus'
import { ToDo } from '../../interfaces/ToDoInterfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToDoCard: React.FC<{ key: number, index: number, toDo: ToDo, updateStatus: Function }> = props => {
  const [ editing, setEditing ] = useState(false)

  const editingProps = useSpring({
    width: '100%', display: 'flex',
    transform: editing ? 'rotateY(0deg)' : 'rotateY(180deg)',
    opacity: editing ? 1 : 0
  })

  const flippedProps = useSpring({
    width: '100%', display: 'flex',
    transform: editing ? 'rotateY(-180deg)' : 'rotateY(0deg)',
    opacity: editing ? 0 : 1
  });

  const { title, completed } = props.toDo
  const { updateStatus, toDo, index } = props

  return(

    <div className='container'>
      <div className='row p2'>

        { editing ?
          <animated.div style={editingProps}>
          <ToDoCardEdit setEditing={setEditing} toDo={toDo} updateStatus={updateStatus}/>
          </animated.div> :
          <animated.div style={flippedProps}>

            <div className='col-sm d-flex'>
                <div className='col-1'>
                  <span>{index + 1}</span>
                </div>
                <div className='col'>
                  <span>{title}</span>
                </div>
            </div>

            <div className='col-sm d-flex justify-content-around' onClick={() => setEditing(true)}>
              <div className=''>
                <ToDoCardStatus completed={completed}/>
              </div>

              <div className=''>
                <FontAwesomeIcon className='' icon='edit'/>
              </div>
            </div>

          </animated.div>
        }

      </div>
    </div>
  )
};


const ToDoCardStatus: React.FC<{ completed: boolean }> = props => {
  const { completed } = props

  return(
    <div className={completed ? 'text-primary' : 'text-warning'}>{ completed ? 'Completed' : 'In progress'}</div>
  )
};

const ToDoCardEdit: React.FC<{ setEditing: any, toDo:ToDo, updateStatus: any }> = props => {

  const springProps = useSpring({
    width: '100%', display: 'flex'
  })

  const { toDo, setEditing, updateStatus } = props

  const [ title, setTitle ] = useState(toDo.title)
  const [ status, setStatus ] = useState(toDo.completed)

  return(<>
    <animated.div style={springProps}>
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
          updateStatus( toDo, {id: toDo.id, title, completed: status})
          setEditing(false)
        }}>
          <FontAwesomeIcon className='text-success' icon='check'/>
        </div>

        <div className='pl-4' onClick={() => setEditing(false)}>
          <FontAwesomeIcon className='text-danger' icon='times'/>
        </div>

      </div>
    </div>
    </animated.div>
  </>)
};



export default ToDoCard