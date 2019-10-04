import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Header from '../../components/Header'

Enzyme.configure({adapter: new EnzymeAdapter()})

test('renders header span', () => {
  const wrapper = shallow(<Header/>)
  const span = wrapper.find("[data-test='header-span']")
  expect(span.text()).toBe('To Do!')
});

