import React from 'react'
import { Message } from '../interfaces/MessageInterfaces'
import MessageCard from '../components/cards/MessageCard'


const MessagesDisplay: React.FC<{ messages: Message[]}> = props => {

    const { messages } = props
    // console.log('inside message display', messages)

    const renderMessages: Function = (messages: Message[]) => {
        return messages.map( message => {
            return <MessageCard key={ message.title} message={message}/>
        })
    }

    return(
        <div className='container border rounded mx-auto my-2'>
            <h5>Messages</h5>
            <div className='d-flex flex-column container border rounded'>
                {renderMessages(messages)}
            </div>
        </div>
    )
}

export default MessagesDisplay