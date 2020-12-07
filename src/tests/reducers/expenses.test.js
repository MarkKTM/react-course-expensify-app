import { toMomentObject } from 'react-dates';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove an expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 444
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '189',
    description: 'Laptop',
    note: 'Just a cheap one.',
    amount: 29500,
    createdAt: 20000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const description = 'Nov Credit Card';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action); 
  expect(state[2].description).toBe(description);
  //console.log(state);
});

test('should not edit if expense not found', () => {
const description = 'Nov Credit Card';
const action = {
  type: 'EDIT_EXPENSE',
  id: '654',
  updates: {
    description
  }
};
const state = expensesReducer(expenses, action);
expect(state).toEqual(expenses);
});