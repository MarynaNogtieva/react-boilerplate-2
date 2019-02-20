import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
};

// REMOVE EXPENSE
const removeExpense = ({id} = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
};

// EDIT EXPENSE
const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
};

// SET_TEXT_FILTER
const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  }
};

// SORT_BY_DATE
const sortByDate = (sortBy = 'date') => {
  return {
    type: 'SORT_BY_DATE',
    sortBy
  }
};

// SORT_BY_AMOUNT
const sortByAmount = (sortBy = 'amount') => {
  return {
    type: 'SORT_BY_AMOUNT',
    sortBy
  }
};

// SET_START_DATE
const setStartDate = (startDate) => {
  return {
    type: 'SET_START_DATE',
    startDate
  }
};

// SET_END_DATE
const setEndDate = (endDate) => {
  return {
    type: 'SET_END_DATE',
    endDate
  }
};

// Expenses reducer

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense);
      return [...state, action.expense ];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => {
        return id !== action.id;
      });
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates // override values that user wants to change
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// Filters reducer
const filterDefaultState = {
  text: '',
  sortBy: 'date', // amount or date
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text}
    case 'SORT_BY_AMOUNT':
      return {...state, sortBy: action.sortBy }
    case 'SORT_BY_DATE':
      return {...state, sortBy: action.sortBy }
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate }
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate }
    default:
      return state;
  }
}

// get visible expenses
// Jan 1st 1970
// timestamps (miliseconds)
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

  return expenses.filter((expense) => {
    const startDateMantch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMantch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// store create

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);


// to get channges
store.subscribe(() => {

  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1200, createdAt: -10000 }));
console.log(expenseOne)
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Rent', amount: 900, createdAt: -21000 }));


// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}));



// store.dispatch(setTextFilter('rent'));

// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(0));

const demoState = {
  expenses: [{
    id: 'fewfefda',
    description: 'rent',
    note: 'final payment',
    amount: 54500,
    createdAt: 0
  }],

  filters: {
    text: 'rent',
    sortBy: 'amount', // or date
    startDate: undefined,
    endDate: undefined
  }
};