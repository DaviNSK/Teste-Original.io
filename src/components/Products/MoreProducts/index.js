/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-elastic-carousel';

import circle from '../../../assets/imgs/circle.png';
import arrowL from '../../../assets/imgs/arrowL.png';
import arrowR from '../../../assets/imgs/arrowR.png';
import rose from '../../../assets/imgs/roseP.png';
import blue from '../../../assets/imgs/blueP.png';
import black from '../../../assets/imgs/blackP.png';
import orange from '../../../assets/imgs/orangeP.png';

import { Container, ArrowLeft, ArrowRight } from './styles';

class MoreProducts extends Component {
  render() {
    const { items, changed } = this.props;

    return (
      <Container>
        <h1>quem viu, viu também</h1>
        <div className="normal">
          <Carousel
            ref={(ref) => (this.carousel = ref)}
            disableArrowsOnEnd={true}
            showArrows={false}
            itemsToShow={window.innerWidth <= 768 ? 2 : 4}
          >
            {items.map((item, key) => (
              <div key={key} className="carousel" onClick={() => changed(item)}>
                <img className="imgProduct" src={item.imgBig} alt="img" />

                <div className="row-colors">
                  <p>{item.value}</p>
                  <div className="imgs">
                    <img src={rose} alt="colors" />
                    <img src={blue} alt="colors" />
                    <img src={orange} alt="colors" />
                    <img src={black} alt="colors" />
                  </div>
                </div>

                <div className="mobCol">
                  <p>{item.value}</p>
                  <h1>{item.priceCard}</h1>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="controls">
          <ArrowLeft onClick={() => this.carousel.slidePrev()}>
            <img className="circle" src={circle} alt="circle" />
            <img className="arrow" src={arrowL} alt="arrow" />
          </ArrowLeft>

          <div className="pages">
            <p>1 de 3</p>
          </div>

          <ArrowRight onClick={() => this.carousel.slideNext()}>
            <img className="circle" src={circle} alt="circle" />
            <img className="arrow" src={arrowR} alt="arrow" />
          </ArrowRight>
        </div>
      </Container>
    );
  }
}

MoreProducts.propTypes = {
  items: PropTypes.any,
  changed: PropTypes.any,
};

export default MoreProducts;
