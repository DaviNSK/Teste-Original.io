import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .open {
    cursor: pointer;
  }

  .store {
    margin-top: 0px;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .mob {
    display: none;
    @media (max-width: 768px) {
      display: block;
      margin-left: 30px;
    }
  }

  span {
    font-size: 13px;
    line-height: 20px;
    font-family: sans-serif;
    margin-left: 3px;
    margin-top: 5px;
    color: #686868;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;
  padding-left: 24px;

  img {
    width: auto;
    cursor: pointer;
    margin-top: -2.8rem;
    margin-right: 1rem;
  }

  h1 {
    color: #de8f75;
    text-transform: uppercase;
    font-size: 26px;
    margin-left: 1rem;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const Items = styled.p`
  font-size: 18px;
  color: #aeb6c1;
  line-height: 2px;
  margin-left: 1rem;
  padding-left: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Divider = styled.div`
  width: 89%;
  border-top: 1px solid #e3e3e3;
  margin-top: 20px;
  margin-left: 20px;

  @media (max-width: 768px) {
    width: 87%;
  }
`;

export const Content = styled.div`
  height: 440px;
  width: 95.5%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-left: 3px;
  padding: 0px 24px;
  margin-top: 10px;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    height: 500px;
    margin-bottom: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background-color: #e2e2e2;
    border-radius: 5px;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #e2e2e2;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #de8f75;
    border-radius: 5px;
  }

  .items-row {
    height: 60px;
    display: flex;
    margin-top: 50px;
    align-items: center;

    @media (max-width: 768px) {
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
`;

export const NameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 5px;
  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 10px;
  }

  p {
    color: #202020;
    font-size: 12px;
  }

  strong {
    color: #000000;
    font-weight: bold;
  }
`;

export const NumberOfProducts = styled.div`
  display: flex;
  padding-left: 100px;
  padding-top: 10px;
  align-items: center;

  @media (max-width: 768px) {
    padding-left: 15px;
  }

  h1 {
    color: #aeb6c1;
    font-size: 25px;
    font-family: Roboto;
    font-weight: bolder;
    padding-right: 14px;
    cursor: pointer;
  }

  p {
    color: #5f75aa;
    font-size: 14px;
    padding-right: 14px;
    padding-top: 12px;
  }
`;

export const DeleteItem = styled.img`
  margin-top: 5px;
  margin-left: 50px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 32px;
  }
`;

export const Promotion = styled.div`
  height: 50px;
  background: #aeb6c1;
  display: flex;
  padding-top: 15px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 60px;
  }

  p {
    font-size: 14px;
    color: #ffffff;
  }

  strong {
    margin-left: 5px;

    @media (max-width: 768px) {
      display: block;
      margin-left: 15px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  background: #e3e3e3;
  width: 100%;
  padding-bottom: 12px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 80px;
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 50%;
    line-height: 2px;
    padding: 18px 0px 0px 20px;

    p {
      color: #202020;
      font-size: 16px;
      font-weight: bold;
    }

    small {
      font-weight: 500;
      font-size: 12px;
      color: #000000;
    }
  }

  button {
    border: 0;
    width: 40%;
    height: 42px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    justify-content: center;
    font-size: 12px;
    font-family: 'Open Sans';
    color: #ffffff;
    background: #32917b;
    border-radius: 3px;
    margin-top: 12px;

    :hover {
      opacity: 0.8;
    }
  }
`;
