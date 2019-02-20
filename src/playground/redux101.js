import { createStore } from 'redux';

// Action generaters => functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'increment_count',
    incrementBy: incrementBy
  }
};

const decrementCount = ({decrementBy = 10} = {}) => {
  return {
    type: 'decrement_count',
    decrementBy: decrementBy
  }
};

const resetCount = () => {
  return {
    type: 'reset'
  }
};

const setCount = ({ value = 0 } = {}) => {
  return {
    type: 'set',
    value: value
  }
}


// Reducers
// 1. pure function
// 2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
  console.log('running');
  switch(action.type){
    case 'increment_count':
      return {
        count: state.count + action.incrementBy
      }
    case 'decrement_count':
      return {...state, count: state.count - action.decrementBy }
      // return {
      //   count: state.count - 1
      // }
    case 'reset':
      return {
        count: 0
      }
    case 'set':
      // const value = typeof action.value === 'number' ? action.value : 0
      return { ...state, count: action.value }
    default:
      return state;
  }
};


const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// increment count
// Actions - object that gets sent to the store
// walk, stop_walking, sit, get_up, walk --- sstate is changing

// increment, decrement, reset
// 1. increment
// store.dispatch(
//   {
//     type: 'increment_count',
//     incrementBy: 5
//   }
// );
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());


store.dispatch(decrementCount({ decrementBy: 9 }));

store.dispatch(decrementCount());


store.dispatch(resetCount());

store.dispatch(setCount({ value: 58 }));
store.dispatch(setCount());
