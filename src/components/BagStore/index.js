/* eslint-disable react/sort-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Space } from 'antd';

import {
  Container,
  Title,
  Items,
  Divider,
  Content,
  NameAndPrice,
  NumberOfProducts,
  DeleteItem,
  Promotion,
  Total,
} from './styles';

import store from '../../assets/imgs/Store.png';
import bag from '../../assets/imgs/bag2.png';
import Close from '../../assets/imgs/X.png';
import prod01 from '../../assets/imgs/prod01.png';
import prod02 from '../../assets/imgs/prod02.png';
import prod03 from '../../assets/imgs/prod03.png';
import prod04 from '../../assets/imgs/prod04.png';
import remove from '../../assets/imgs/remove.png';

class BagStore extends Component {
  state = {
    visible: false,
    placement: 'right',
    count: 1,
    products: [
      {
        img: prod02,
        name: 'Rasteira tira dedo',
        price: 'R$ 49,90',
        count: 1,
      },
      {
        img: prod01,
        name: 'Rasteira tira dedo',
        price: 'R$ 49,90',
        count: 1,
      },
      {
        img: prod03,
        name: 'Rasteira tira dedo',
        price: 'R$ 49,90',
        count: 1,
      },
      {
        img: prod04,
        name: 'Rasteira tira dedo',
        price: 'R$ 49,90',
        count: 1,
      },
      {
        img: prod04,
        name: 'Rasteira tira dedo',
        price: 'R$ 49,90',
        count: 1,
      },
      {
        img: prod04,
        name: 'Rasteira tira dedo',
        price: 'R$ 49,90',
        count: 1,
      },
    ],
  };

  incrementCount = () => {
    const { count } = this.state;

    this.setState({ count: count + 1 });
  };

  drecreaseCount = () => {
    const { count } = this.state;

    this.setState({ count: count - 1 });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    const { placement, visible } = this.state;
    return (
      <>
        <Container>
          <Space>
            <div className="open" onClick={this.showDrawer}>
              <img className="store" src={store} alt="store" />
              <img className="mob" src={bag} alt="store" />
              <span>5</span>
            </div>
          </Space>
          <Drawer
            width={window.innerWidth <= 768 ? 390 : 540}
            drawerStyle={{ padding: 0 }}
            placement={placement}
            closable={false}
            visible={visible}
            key={placement}
          >
            <Title>
              <h1>Sacola</h1>
              <img onClick={this.onClose} src={Close} alt="X" />
            </Title>
            <Items>5 itens</Items>
            <Divider />

            <Content>
              {this.state.products.map((element, key) => (
                <div className="items-row" key={key}>
                  <img src={element.img} alt="img" />

                  <NameAndPrice>
                    <p>{element.name}</p>
                    <strong>{element.price}</strong>
                  </NameAndPrice>

                  <NumberOfProducts>
                    <h1 onClick={this.drecreaseCount}>-</h1>
                    <p>0{this.state.count}</p>
                    <h1 onClick={this.incrementCount}>+</h1>
                  </NumberOfProducts>

                  <DeleteItem src={remove} alt="remove" />
                </div>
              ))}
            </Content>

            <Promotion>
              <p>
                Faltam R$ xx,xx para você <strong>Ganhar Frete Grátis</strong>
              </p>
            </Promotion>

            <Total>
              <div>
                <p>Total: R$ 149,00</p>
                <small>até 3x de R$ 49,90 sem juros</small>
              </div>
              <button>finalizar compra</button>
            </Total>
          </Drawer>
        </Container>
      </>
    );
  }
}

export default BagStore;
