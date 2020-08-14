import React from 'react';
import PropTypes from 'prop-types';

import { X } from 'react-bootstrap-icons';
import { Modal, Container, Content, Button } from './styles';

function ProductAdd(props) {
  return (
    <Container show={props.show}>
      <Modal>
        <X onClick={props.close} className="close-icon" size={25} />
        <Content>
          <h2>Produto adicionado com sucesso!</h2>
          <img src={props.products.imgBig} alt="img" />
          <h1>Produto adicionado com sucesso!</h1>
          <Button onClick={props.close}>Finalizar Compra</Button>
          <p onClick={props.close}>Continuar comprando</p>
        </Content>
      </Modal>
    </Container>
  );
}

export default ProductAdd;

ProductAdd.propTypes = {
  close: PropTypes.func,
  show: PropTypes.bool,
  imgBig: PropTypes.string,
  products: PropTypes.any,
};
