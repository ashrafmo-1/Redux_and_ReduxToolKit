const store = require('./store');
const { incrementAction, decrementAction } = require('./actions');

store.dispatch(incrementAction()); // { count: 1 }
store.dispatch(incrementAction()); // { count: 2 }
store.dispatch(decrementAction()); // { count: 1 }