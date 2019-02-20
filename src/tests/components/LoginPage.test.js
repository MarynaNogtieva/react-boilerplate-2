import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLoginSpy = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLoginSpy} />);

  wrapper.find('button').simulate('click');
  expect(startLoginSpy).toHaveBeenCalled();
});

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