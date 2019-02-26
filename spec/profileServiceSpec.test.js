import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Videos from '../client/src/components/Videos.jsx';

const wrap = shallow(<Videos />);

test("Find Button", () => {
  expect(
    wrap.find('button').text()
    ).toEqual('Click here');
})


