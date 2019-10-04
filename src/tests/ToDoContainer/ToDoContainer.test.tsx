import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import {ToDosContainer} from '../../containers/ToDosContainer'
import ToDosList from '../../containers/lists/ToDosList'

Enzyme.configure({adapter: new EnzymeAdapter()})


test('Renders ToDoList Component', () => {
  const wrapper = shallow(<ToDosContainer />)
  expect(wrapper.find(ToDosList)).toBeTruthy()
})

test('Render ToDoList Title', () => {
  const wrapper = shallow(<ToDosContainer/>)
  // expect(wrapper.find())
})
