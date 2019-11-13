import React, { useState } from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import {ToDosContainer} from '../../containers/ToDosContainer'
import ToDosList from '../../containers/lists/ToDosList'
import ToDoCard from '../../components/cards/ToDoCard'

Enzyme.configure({adapter: new EnzymeAdapter()})


test('Renders ToDoList Component', () => {
  const toDos = [
    { id: 1, title: 'Blep', completed: false},
    { id:2, title: 'Bork!', completed: false}
  ]

  function setToDos(){
    // 
  }

  const wrapper = shallow(<ToDosContainer origToDos={toDos} setToDos={setToDos} />)
  expect(wrapper.find(ToDosList)).toBeTruthy()
})


test('Renders correct number of toDos', () => {

  const toDos = [
    { id: 1, title: 'Blep', completed: false},
    { id:2, title: 'Bork!', completed: false}
  ]

  function updateStatus( id: number, completed: boolean, title: string ){
    // console.log('completed:', completed, 'title:', title )

    // let toDo = toDos.find( toDo => {
    //   return toDo.id === id
    // })
    // console.log(toDo)
  }

  function deleteToDo(toDoId: number){

  }

  const wrapper = shallow(<ToDosList toDos={toDos} updateStatus={updateStatus} deleteToDo={deleteToDo}/>)

  expect(wrapper.find(ToDoCard)).toHaveLength(toDos.length)
})

test('Renders an input to add To Do', () => {
  


})
