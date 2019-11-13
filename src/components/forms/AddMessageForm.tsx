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
                console.log({ values, actions });
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
                                // value={props.values.title}
                                placeholder='Title'
                                name="title"
                            />
                            <input
                                type='text'
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                // value={props.values.content}
                                placeholder='Content'
                                name='content'
                            />
                            
                        </div>
                        
                        <div className='d-flex container justify-content-around'>
                            <input
                                type='text'
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                placeholder='User'
                                name='user'
                            />
                            {/* <input
                                type='text'
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                placeholder='Urgency 1-5'
                                name='urgency'
                            /> */}
                            <select 
                                onChange={props.handleChange}
                                name='urgency'
                                
                                >
                                <option>Urgency</option>
                                <option value='low'>Low</option>
                                <option value='medium'>Medium</option>
                                <option value='high'>High</option>
                            </select>
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