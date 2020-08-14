import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }

  .mobile {
    width: 85%;
    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const SideCarousel = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  margin-right: 15px;
  @media (max-width: 768px) {
    display: none;
  }

  .arrow {
    margin: 15px 0px;
  }
`;

export const Video = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  p {
    font-size: 12px;
    line-height: 0px;
    color: #de8f75;
  }

  .play {
    position: absolute;
    z-index: 9;
    margin-top: 24px;
    cursor: pointer;

    @media (max-width: 1024px) {
      margin-top: 20px;
    }
  }

  .prod {
    position: relative;
    height: 50px;
    width: 100%;
    opacity: 0.5;
    cursor: pointer;

    @media (max-width: 1024px) {
      height: 45px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 80px;
  background-size: contain;
  cursor: pointer;
  margin-top: 5px;
  transition: all 0.1s ease-in;
  opacity: ${(props) => (props.active ? '0.7' : '')};
  :hover {
    opacity: 0.7;
  }

  @media (max-width: 1024px) {
      height: 53px;
    }
`;

export const ProductSelect = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    object-fit: cover;

    @media (max-width: 1024px) {
      height: 376px;
    }
  }

  @media (max-width: 768px) {
    width: 77%;
    height: 324px;
    margin-left: 39px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #de8f75;
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    color: #de8f75;
    margin-top: 5px;
  }
`;

export const InfoCods = styled.div`
  display: flex;
  line-height: 14px;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    text-align: center;
    justify-content: center;
    margin-bottom: 10px;
  }

  span {
    @media (max-width: 768px) {
      text-align: center;
      font-size: 12px;
      color: #7f7f7f;
      margin-right: 5px;
    }
  }

  .divider {
    @media (max-width: 768px) {
      border-left: 1px solid #7f7f7f;
      margin-right: 5px;
      height: 12px;
    }
  }
`;
