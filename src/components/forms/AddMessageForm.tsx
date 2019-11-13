import React from 'react'
import { NewMessageFormValues } from '../../interfaces/MessageInterfaces'

import { Formik } from 'formik';

const AddMessageForm: React.FC<{ addMessage: Function }> = props => {

    const { addMessage } = props

    const initialValues: NewMessageFormValues = {
        title: 'title',
        content: 'content',
        user: 'dan',
        urgency: 10,
        viewed: false
    }

    return(
        <div className='container'>
            <h4 className='text-center'>Add Message Form!</h4>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    addMessage( values )
                // console.log({ values, actions });
                // alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
                }}
            >
                { props => (
                  
                    <form onSubmit={props.handleSubmit}>
                        <div className='d-flex container justify-content-around'>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.title}
                                name="title"
                            />
                            <input
                                type='text'
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.content}
                                name='content'
                            />
                        </div>
                        
                        <div className='d-flex container justify-content-around'>
                            <input
                                type='text'
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.user}
                                name='user'
                            />
                            <input
                                type='number'
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.urgency}
                                name='urgency'
                            />
                        </div>
                        
                        {props.errors.title && <div id="feedback">{props.errors.title}</div>}
                        <div className='container d-flex justify-content-around'>
                            <button type="submit">Submit</button>
                        </div>
                    </form>

                )}
            </Formik>
        </div>
    )
}

export default AddMessageForm