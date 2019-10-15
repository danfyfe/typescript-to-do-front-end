import React from 'react';

const ToDoCardStatus: React.FC<{ completed: boolean }> = props => {
  //  moved to ToDoCard from compound component
  const { completed } = props

  return(
    <span>{ completed ? 'Completed' : 'In progress'}</span>
  )
};

export default ToDoCardStatus