import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductAdd from './../../components/Products/ProductAdd';
import ThumbProducts from '../../components/Products/ThumbProducts';
import InfoProducts from '../../components/Products/InfoProducts';
import MoreProducts from '../../components/Products/MoreProducts';

import { Container, ListProduct } from './styles';

// import Repository from './../../services/repository';
import * as ProductsActions from './../../store/modules/products/actions';

export default function Home() {
  // const api = new Repository();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const currentProduct = useSelector((state) => state.products.currentProduct);
  const [productAdd, setProductAdd] = useState(false);

  // const getProducts = async () => {
  //   // const response = await api.getProducts();

  //   // dispatch(ProductsActions.setProducts(response.data));
  //   // dispatch(ProductsActions.setCurrentProduct(response.data[0]));
  // };

  const openModal = () => {
    setProductAdd(true);
  };

  // useEffect((data) => {
  //   getProducts(data);
  // }, []);

  return (
    <>
      <Container>
        <p className="home">
          Home / <strong>Sapatos</strong>
        </p>
        {currentProduct && (
          <ListProduct>
            <div className="thumb">
              <ThumbProducts {...currentProduct} />
            </div>
            <div className="info">
              <InfoProducts openModal={() => openModal()} {...currentProduct} />
            </div>
          </ListProduct>
        )}
        <div className="more">
          <MoreProducts
            changed={(item) => {
              dispatch(ProductsActions.setCurrentProduct(item));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            items={products}
          />
        </div>
      </Container>
      <ProductAdd
        show={productAdd}
        products={currentProduct}
        close={() => setProductAdd(false)}
      />
    </>
  );
}
