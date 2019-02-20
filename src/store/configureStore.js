import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  // store create

  const store = createStore(
    combineReducers({
      auth: authReducer
    }),
    // https://github.com/zalmoxisus/redux-devtools-extension
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}

