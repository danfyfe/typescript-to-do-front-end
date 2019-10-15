import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const AddToDoForm: React.FC<{addToDo: any, setAdding: any}> = props => {

  const springProps = useSpring({
    transform: 'scale(1)', from: { transform: 'scale(0)'}
  })

  const [ title, setTitle ] = useState()

  const { addToDo, setAdding } = props

  return(<animated.div style={springProps}>
    <div className='border rounded m-2 p-1 d-flex flex-column'>
      <input
        className='border rounded p-1'
        type='text'
        placeholder='To Do Title'
        onChange={e => setTitle(e.target.value)}
      />
      <div className='d-flex justify-content-around p-1'>
        <button
        className='border rounded'
        onClick={() => {
          addToDo(title)
          setAdding(false)
        }}>Add</button>
        <button className='border rounded'
        onClick={() => setAdding(false)}>Cancel</button>
      </div>
    </div>
  </animated.div>)
};

export default AddToDoForm