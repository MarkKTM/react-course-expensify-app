import { createStore } from 'redux';

// Action generators - functions that return action objects
// Pass in payload with default empty object

const incrementCount = ({ incrementBy = 1 } = {}) => ({  
  type: 'INCREMENT',
  incrementBy
});

// 1. Destructure the argument that gets passed in, if it doesn't exist we'll start it off as an empty object "{ decrementBy = 1 } = {}"
// 2. If decrementBy doesn't exist we'll default it to 1
// 3. Toss decrementby onto the object setting to the variable we exact same name
// 4. Now, we can remove the "const" that was setup down below in createStore and access decrementBy from the action object 
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = ()  => ({
  type: 'RESET'
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

// Reducers
// 1. Reducer are pure functions
//   a. The output is only determined by the input or arguments. Our reducers need   to compute the new "state" based off of the old "state" and the "action" and return the new state.
//   b. We don't want to change things outsite of the reducer. We don't want to change variables outsite the function scope or rely on variables outsite the function scope.
// 2. Never change "state" or "action", just read off of them and return an object representing the new "state".

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':      
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));