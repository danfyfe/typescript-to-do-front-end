import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { ToDo } from '../../interfaces/ToDoInterfaces'


const AddToDoForm: React.FC<{addToDo: Function, setAdding: Function, origToDos: ToDo[] }> = props => {

  const springProps = useSpring({
    transform: 'scale(1)', from: { transform: 'scale(0)'}
  })

  const [ title, setTitle ] = useState()
  // const [ validationError, setValidationError ] = useState(false)

  const { addToDo, setAdding, origToDos } = props

  useEffect(() => {

    function checkInput( title: string){
      const input = document.getElementById('add-to-do-title')
      const inputDiv = document.getElementById('input-div')
      const warning = document.getElementById('warning')

      let i: number

      if( input && inputDiv && warning) {
        for( i = 0; i < origToDos.length; i++) {
          if(origToDos[i].title === title) {
            input.className='border rounded p-1 border-danger text-danger'
            warning.className='text-danger font-sm p-1'
            warning.innerText = 'Title already being used'
            inputDiv.appendChild(warning)
            break
          } else {
            input.className='border rounded p-1'
            warning.innerText = 'test'

          }
        }
      }
    }
    checkInput(title)
  }, [ title, origToDos ])


  return(<animated.div style={springProps}>
    <div className='border rounded m-2 p-1 d-flex flex-column'>
      <div id='input-div' className='d-flex flex-column'>
        <input
          id='add-to-do-title'
          className='border rounded p-1'
          type='text'
          placeholder='To Do Title'
          onChange={e => setTitle(e.target.value)}
        />
        <span id='warning'></span>
      </div>
      <div className='d-flex justify-content-around p-1'>
        <button
        className='border rounded'
        onClick={() => {
          addToDo(title)
        }}>Add</button>
        <button className='border rounded'
        onClick={() => setAdding(false)}>Cancel</button>
      </div>
    </div>
  </animated.div>)
};

export default AddToDoForm