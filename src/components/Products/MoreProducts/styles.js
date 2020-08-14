import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -20px;

  @media (max-width: 768px) {
      margin-left: -2px;
    }
  h1 {
    color: #de8f75;
    font-size: 26px;
    padding-bottom: 8px;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }

  .normal {
    width: 100%;
    @media (max-width: 768px) {
    }
  }

  .mobile {
    display: none;

    @media (max-width: 768px) {
      display: block;
      width: 100%;
      margin-left: 15px;
    }
  }

  .carouselMob {
    margin-top: 5px;
    margin-left: 6px;
    margin-right: 6px;
    
    img {
      @media (max-width: 768px) {
        display: block;
        width: 100%;
      }
    }
  }

  .carousel {
    margin-left: 6px;
    margin-right: 6px;
  }

  .imgProduct {
    width: 100%;

      height: 380px;
      cursor: pointer;
      :hover {
        opacity: 0.6;
      }

      @media (max-width: 768px) {
        height: 225px;
      }

      @media (max-width: 1024px) {
      height: 300px;
    }
  }

  .mobCol {
    display: none;
    flex-direction: column;
    margin-top: 3px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
      }
    p {
      font-size: 13px;
      color: #202020;
      margin: 0;
    }

    h1 {
      color: #202020;
      font-size: 10px;
    }
  }

  .row-colors {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: none;
      }
  }

  p {
    margin-left: 5px;
    color: #202020;
    font-size: 16px;
  }


  .imgs {
    padding-right: 5px;

    img {
      margin-right: 5px;
    }
  }

  .controls {
    display: flex;
    margin-top: 20px;
  }

  .pages {
    color: #2a5a75;
    font-family: 'Open Sans';
    font-size: 14px;
    margin-top: 10px;
    margin-right: 20px;
    margin-left: 18px;
  }
`;

export const ArrowLeft = styled.div`
  cursor: pointer;
  margin-left: -20px;
  .circle {
    position: relative;
  }

  .arrow {
    position: absolute;
    margin-left: -23px;
    margin-top: 11px;
  }
`;

export const ArrowRight = styled.div`
  cursor: pointer;
  .circle {
    position: relative;
  }

  .arrow {
    position: absolute;
    margin-left: -21px;
    margin-top: 11px;
  }
`;
