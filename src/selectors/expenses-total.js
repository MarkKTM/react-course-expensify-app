export default (expenses) => { 
  return expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0);

  // let total = expenses.reduce((a, { amount }) => a + amount, 0);
  // return total;
};