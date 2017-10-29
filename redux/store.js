import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const register = (type, payload) => ({
  type: type,
  payload: { ...payload }
});

export const EXPENSES = 'expenses';
export const INCOMES = 'incomes';

export const expense = (date, amount, account, category) => {
  const entry = { date, amount, account, category };
  return register(EXPENSES, entry);
};

export const income = (date, amount, account, category) => {
  const entry = { date, amount, account, category };
  return register(INCOMES, entry);
};

const initialState = {
  expenses: [
    {
      amount: 5,
      account: 'Cash',
      category: 'Snacks'
    }
  ],
  incomes: [
    {
      amount: 10,
      account: 'Cash',
      category: 'Sell'
    }
  ]
};

const reducer =  (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case EXPENSES:
    case INCOMES:
      return {
        ...state,
        ...state[type].push(payload)
      };
    default:
      return state;
  }
};

export default (state = initialState) => {
    return createStore(reducer, state, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
