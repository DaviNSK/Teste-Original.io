import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #ffffff;
  padding-left: 20px;
  @media (max-width: 768px) {
  }
`;

export const BoxPrincipal = styled.div`
  width: 100%;
  border-radius: 3px;
  padding: 23px 20px;
  border: 2px solid #d2e1df;
  height: 500px;

  @media (max-width: 1024px) {
      height: 375px;
    }

  @media (max-width: 768px) {
    width: 100%;
    border: 0;
    padding: 0px;
  }

  .mobileRow {
    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      height: 70px;
    }
  }

  .mobileCol {
    display: none;
    @media (max-width: 768px) {
      width: 46%;
      display: flex;
      height: 70px;
      flex-direction: column;
    }
  }

  .descriptionMob {
    display: none;
    @media (max-width: 768px) {
      display: block;
      color: #E35442;
      font-size: 13px;
      margin-top: 10px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: #202020;
  text-transform: uppercase;
  line-height: 20px;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 1024px) {
      font-size: 22px;
      line-height: 15px;
    }
`;

export const InfoCods = styled.div`
  display: flex;
  line-height: 14px;
  @media (max-width: 768px) {
    display: none;
  }

  span {
    color: #202020;
    font-size: 14px;
    margin-right: 7px;
  }

  .divider {
    border-left: 1px solid #202020;
    margin-right: 5px;
  }
`;

export const Prices = styled.div`
  display: flex;
  line-height: 10px;
  padding-top: 20px;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 1024px) {
      padding-top: 10px;
    }

  h1 {
    text-decoration-line: line-through;
    color: #e35442;
    font-size: 14px;
    margin-right: 5px;
    margin-top: 5px;
    line-height: 20px;
  }

  .divider {
    border-left: 1px solid #e35442;
    margin-right: 13px;
    margin-top: 7px;
    height: 17px;
  }

  h2 {
    color: #686868;
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;

    @media (max-width: 1024px) {
      font-size: 17px;
    }
  }
`;

export const PriceOfCard = styled.p`
  color: #7f7f7f;
  font-size: 12px;
  line-height: 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Colors = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 37px;

  @media (max-width: 1024px) {
      padding-top: 10px;
    }

  @media (max-width: 768px) {
    padding-top: 18px;
  }

  > div {
    display: flex;
    line-height: 10px;

    @media (max-width: 768px) {
      line-height: 5px;
    }

    p {
      font-size: 14px;
      color: #202020;
    }

    span {
      color: #5f75aa;
      font-size: 14px;
      margin-left: 10px;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .imgs {
    img {
      margin-right: 12px;
      cursor: pointer;

      @media (max-width: 768px) {
        margin-right: 7px;
      }
    }
  }
`;

export const NumberZize = styled.div`
  display: flex;
  width: 91%;
  font-size: 14px;
  line-height: 8px;
  padding-top: 30px;

  @media (max-width: 1024px) {
      padding-top: 10px;
    }

  p {
    color: #202020;
    margin-right: 8px;
    margin-top: 2px;
  }

  span {
    color: #5f75aa;
    margin-top: 2px;
  }

  h1 {
    color: #de8f75;
    text-decoration-line: underline;
    font-size: 14px;
    margin-left: auto;
    cursor: pointer;
  }
`;

export const OptionsZize = styled.div`
  display: flex;
  width: 91%;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
      margin-bottom: 1rem;
    }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  button {
    width: 34px;
    height: 34px;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 2px;
    background: transparent;
    margin-right: 2px;
    outline: none;
    :hover,
    &.active {
      color: #ffffff;
      background: #de8f75;
      font-weight: bold;
    }
  }
`;

export const AddBag = styled.button`
  width: 100%;
  border: 0;
  background: #32917b;
  border-radius: 3px;
  font-size: 18px;
  line-height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  justify-content: center;
  color: #ffffff;
  margin-top: 35px;
  outline: none;
  :hover {
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
      height: 40px;
      margin-top: 0px;
    }

  @media (max-width: 768px) {
    height: 60px;
    font-size: 16px;
    line-height: 20px;
    width: 45%;
    margin-top: 0px;
  }
`;

export const Description = styled.p`
  color: #202020;
  font-size: 13.5px;
  line-height: 1.5rem;
  margin-top: 10px;

  @media (max-width: 1024px) {
      margin-top: 5px;
      line-height: 1rem;
      
    }

  @media (max-width: 768px) {
    margin-top: -10px;
    width: 88%;
    font-size: 14px;
  }
`;

export const PricesMobile = styled.div`
  display: flex;
  line-height: 10px;
  padding-top: 2px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }

  h1 {
    text-decoration-line: line-through;
    color: #e35442;
    font-size: 12px;
    margin-right: 5px;
    margin-top: 5px;
    line-height: 0px;
  }

  h2 {
    color: #686868;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const PriceCardMobile = styled.p`
  color: #7f7f7f;
  font-size: 12px;
  line-height: 0px;
  display: none;

  @media (max-width: 768px) {
    display: block;
    line-height: 5px;
  }
`;
