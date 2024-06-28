const { createStore } = require('redux');

// الحالة الأولية
const initialState = {
  count: 0
};

// مُخفض (Reducer)
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer); // create a new store

// الاستماع للتغييرات في الحالة
store.subscribe(() => console.log(store.getState()));

module.exports = store;
