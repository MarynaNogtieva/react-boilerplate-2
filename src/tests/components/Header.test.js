import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header }from '../../components/Header';

// test('should render Header correctly', () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot()
// });

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={()=> {}} />);
  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find('h1').text()).toBe('Expensify');
  // we added configuration in jet.config.json to avoid using toJson here
  // expect(toJson(wrapper)).toMatchSnapshot();
  expect(wrapper).toMatchSnapshot();
});


test('should call startLogout on button click', () => {
  const startLogoutSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogoutSpy} />);

  wrapper.find('button').simulate('click');
  expect(startLogoutSpy).toHaveBeenCalled();
})


// wrapper.find('form').simulate('submit', {
//   preventDefault: () => {}
// });
// expect(wrapper.state('error')).toBe('');
// expect(onSubmitSpy).toHaveBeenLastCalledWith({
//   description: expenses[0].description,
//   amount: expenses[0].amount,
//   note: expenses[0].note,
//   createdAt: expenses[0].createdAt
// })