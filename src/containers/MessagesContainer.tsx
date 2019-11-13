import React, { useState } from 'react'
import AddMessageForm from '../components/forms/AddMessageForm'
import MessagesDisplay from '../components/MessagesDisplay'
import { Message } from '../interfaces/MessageInterfaces'

const MessagesContainer: React.FC = props => {

    const origMessages: Message[] = []
    const [ messages, setMessages ] = useState(origMessages)

    const addMessage = (message: Message) => {
        const newMessages:Message[] = [...messages, message]
        setMessages(newMessages)
    }

    return(
        <div className='container border rounded mx-auto my-2'>
            <AddMessageForm addMessage={addMessage}/>
            <MessagesDisplay messages={messages} />
        </div>
    )
}

export default MessagesContainer