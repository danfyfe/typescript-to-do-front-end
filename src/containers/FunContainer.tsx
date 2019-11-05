import React from 'react'

const FunContainer: React.FC = props => {

  const changeBars = () => {
    const top = document.querySelector('#top')
    const mid = document.querySelector('#mid')
    const bot = document.querySelector('#bot')

    if( top && mid && bot ) {
      top.className = 'right'
      bot.className = 'left'
      mid.className = 'mid'
    }
  };

  return(
    <div className='fun mx-auto my-4'>
    <div className='bar-container' onClick={changeBars}>
      <div className='bar' id='top'/>
      <div className='bar' id='mid'/>
      <div className='bar' id='bot'/>
    </div>
    </div>
  )
}

export default FunContainer