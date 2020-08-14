export function setProducts(products) {
  return {
    type: 'SET_PRODUCTS',
    products,
  };
}

export function setCurrentProduct(currentProduct) {
  return {
    type: 'SET_CURRENT_PRODUCT',
    currentProduct,
  };
}
