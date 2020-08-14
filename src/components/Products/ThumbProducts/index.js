import React from 'react';
import PropTypes from 'prop-types';

import play from '../../../assets/imgs/play.png';
import arrowUp from '../../../assets/imgs/arrowUp.png';
import arrowDown from '../../../assets/imgs/arrowDown.png';

import {
  Container,
  SideCarousel,
  Image,
  Video,
  ProductSelect,
  Title,
  InfoCods,
} from './styles';

export default function ThumbProducts({
  thumbs,
  imgBig,
  video,
  name,
  cod,
  rt,
}) {
  return (
    <Container>
      <SideCarousel>
        <Video>
          <p>Vídeo</p>
          <img className="prod" src={video} alt="prod" />
          <img className="play" src={play} alt="play" />
        </Video>

        <img className="arrow" src={arrowUp} alt="arrow" />
        {thumbs?.map((image, key) => (
          <Image key={key} src={image} alt="First slide" />
        ))}
        <img className="arrow" src={arrowDown} alt="arrow" />
      </SideCarousel>

      <div className="mobile">
        <Title>{name}</Title>

        <InfoCods>
          <span>{rt}</span>
          <div className="divider" />
          <span>{cod}</span>
        </InfoCods>

        <ProductSelect>
          <img src={imgBig} alt="item" />
        </ProductSelect>
      </div>
    </Container>
  );
}

ThumbProducts.propTypes = {
  thumbs: PropTypes.array,
  imgBig: PropTypes.string,
  video: PropTypes.string,
  name: PropTypes.string,
  cod: PropTypes.string,
  rt: PropTypes.string,
};
