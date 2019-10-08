import React from 'react';

const ToDoCardStatus: React.FC<{ completed: boolean }> = props => {
  const { completed } = props
  
  return(
    <span>{ completed ? 'Completed' : 'In progress'}</span>
  )
};

export default ToDoCardStatus