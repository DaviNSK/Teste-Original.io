import React, { useState } from 'react';
import PropTypes from 'prop-types';

import rose from '../../../assets/imgs/rose.png';
import green from '../../../assets/imgs/green.png';
import black from '../../../assets/imgs/black.png';
import orange from '../../../assets/imgs/orange.png';

import {
  Container,
  BoxPrincipal,
  Title,
  InfoCods,
  Prices,
  PriceOfCard,
  Colors,
  NumberZize,
  OptionsZize,
  AddBag,
  Description,
  PricesMobile,
  PriceCardMobile,
} from './styles';

export default function InfoProducts({
  name,
  oldPrice,
  value,
  sizes,
  description,
  cod,
  rt,
  priceCard,
  openModal,
}) {
  const [activeSize, setActiveSize] = useState('...');

  return (
    <Container>
      <BoxPrincipal>
        <Title>{name}</Title>

        <InfoCods>
          <span>{rt}</span>
          <div className="divider" />
          <span>{cod}</span>
        </InfoCods>

        <Prices>
          <h1>{oldPrice}</h1>
          <div className="divider" />
          <h2>{value}</h2>
        </Prices>

        <PriceOfCard>{priceCard}</PriceOfCard>

        <Colors>
          <div>
            <p>Cor:</p>
            <span>(Fucsia)</span>
          </div>
          <div className="imgs">
            <img src={rose} alt="colors" />
            <img src={green} alt="colors" />
            <img src={orange} alt="colors" />
            <img src={black} alt="colors" />
          </div>
        </Colors>

        <NumberZize>
          <p>Tamanho:</p>
          <span>{activeSize}</span>
          <h1>Guia de medidas</h1>
        </NumberZize>

        <OptionsZize>
          {sizes?.map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`${activeSize === size ? 'active' : ''}`}
            >
              {size}
            </button>
          ))}
        </OptionsZize>

        <div className="mobileRow">
          <div className="mobileCol">
            <PricesMobile>
              <h1>R${oldPrice}</h1>
              <h2>{value}</h2>
            </PricesMobile>

            <PriceCardMobile>{priceCard}</PriceCardMobile>
          </div>

          <AddBag onClick={() => openModal()}>Adicionar à sacola</AddBag>
        </div>

        <p className="descriptionMob">Descrição</p>
        <Description>{description}</Description>
      </BoxPrincipal>
    </Container>
  );
}

InfoProducts.propTypes = {
  name: PropTypes.string,
  oldPrice: PropTypes.string,
  value: PropTypes.string,
  sizes: PropTypes.array,
  description: PropTypes.string,
  cod: PropTypes.string,
  rt: PropTypes.string,
  priceCard: PropTypes.string,
  openModal: PropTypes.func,
};
