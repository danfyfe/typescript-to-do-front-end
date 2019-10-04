import React, { useState } from 'react'

const AddToDoForm: React.FC<{addToDo: any, setAdding: any}> = props => {

  const [ title, setTitle ] = useState()
  const { addToDo, setAdding } = props
  return(
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
        onClick={() => addToDo(title)}>Add</button>
        <button className='border rounded'
        onClick={() => setAdding(false)}>Cancel</button>
      </div>
    </div>
  )
};

export default AddToDoForm