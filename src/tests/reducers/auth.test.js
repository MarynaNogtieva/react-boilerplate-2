import authReducer from '../../reducers/auth';

test('should set uid from logged in', () => {
  const user = {
    uid: 'abcd'
  }

  const action = {
    type: 'LOGIN',
    uid: user.uid
  }

  const state = authReducer({}, action);

  expect(state.uid).toEqual(action.uid);
});

test('should clear uid for logged out', () => {

  const action = {
    type: 'LOGOUT',
  }

  const state = authReducer({uid: 'abcd'}, action);

  expect(state).toEqual({ });
});