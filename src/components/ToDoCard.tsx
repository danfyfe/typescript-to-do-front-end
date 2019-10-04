import React from 'react';

interface ToDo {
  id: number;
  title: string;
};

export const ToDoCard: React.FC<{key: number, toDo: ToDo}> = props => {

  const { toDo } = props

  return(
    <div>
      <span className='p-2'>{toDo.title}</span>
    </div>
  )
};

// export default ToDoCard