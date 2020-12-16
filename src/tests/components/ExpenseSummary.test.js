import React from 'react';
import { shallow } from 'enzyme';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should render selectExpensesTotal with 1 expenses', () => {
  const wrapper = shallow(<selectExpensesTotal expenses={expenses[2]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render selectExpensesTotal with 3 expense', () => {
  const wrapper = shallow(<selectExpensesTotal expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});
