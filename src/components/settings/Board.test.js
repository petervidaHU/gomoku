import React from 'react';
import Enzyme, {shallow} from 'enzyme';

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import Board from './Board';

test('find buttons', () => {
    const wrapper = shallow(<Board />);
    const buttons = wrapper.find(button)
    expect(buttons.length).toBe(4);
})