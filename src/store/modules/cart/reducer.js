export default function cart(state = [], action) {
  switch (action.type) {
    case 'SET_PRODUCTCART':
      return [...action.cart];

    default:
      return state;
  }
}
