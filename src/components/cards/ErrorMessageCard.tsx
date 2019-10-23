import React from 'react'

const ErrorMessageCard: React.FC<{ errorMessage: string | null, setErrorMessage: Function}> = props => {

  const { errorMessage, setErrorMessage } = props

  return(
    <div className='container border border-danger rounded main d-flex flex-column my-2 mx-auto p-2'>
      <span className='font-weight-bold m-auto'>{errorMessage}</span>
      <button className='btn btn-danger btn-sm m-auto' onClick={() => {
        setErrorMessage(null)
        // setAdding(true)
      }}>Okay</button>
    </div>
  )
}

export default ErrorMessageCard