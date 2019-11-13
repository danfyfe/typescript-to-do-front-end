import React from 'react'
import { Message } from '../../interfaces/MessageInterfaces'

const MessageCard: React.FC<{ message: Message }> = props => {

    const { title, content, user, urgency, viewed } = props.message
    

    return(
        <div className='container border rounded p-2 my-2'>
            <div className='d-flex flex-column p-1'>
                <h5>{title}</h5>
                <p className='px-1'>{content}</p>
            </div>

            <div className='d-flex'>
                <span className='text-muted'>{user}</span>

            </div>
        </div>
    )
}

export default MessageCard