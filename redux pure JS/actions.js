// تعريف الأفعال
const incrementAction = () => {
  return {
    type: 'INCREMENT'
  };
};

const decrementAction = () => {
  return {
    type: 'DECREMENT',
    type: 'DECREMENT'
  };
};

// تصدير الأفعال
module.exports = {
  incrementAction,
  decrementAction
};
