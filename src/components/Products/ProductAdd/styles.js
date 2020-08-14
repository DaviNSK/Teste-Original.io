import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: #0000008a;
  visibility: ${(props) => (props.show ? 'unset' : 'hidden')};
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  background-color: white;
  z-index: 6;
  width: 35%;
  height: 590px;
  position: relative;
  border-radius: 3px;

  @media (max-width: 1024px) {
      width: 45%;
    }

  @media (max-width: 768px) {
    width: 90%;
  }

  .close-icon {
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
  }

  .phone {
    font-size: 22px;
    font-weight: bold;
  }

  .form-group {
    margin-top: 30px;
    margin-bottom: 20px;
    .label {
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px 0px 50px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 30px 40px 0px 40px;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 22px;
    color: #de8f75;
    margin-top: 10px;
    line-height: 22px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  img {
    width: 100%;
    height: 383px;

    @media (max-width: 768px) {
      width: 100%;
      height: 283px;
    }
  }

  p {
    text-align: center;
    text-decoration-line: underline;
    font-size: 14px;
    color: #aeb6c1;
    margin-top: 10px;
    cursor: pointer;
  }

  h2 {
    display: none;

    @media (max-width: 768px) {
      display: flex;
      text-align: center;
      font-size: 20px;
      color: #de8f75;
    }
  }
`;

export const Button = styled.button`
  border: 0;
  width: 90%;
  height: 46px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  justify-content: center;
  font-size: 12px;
  font-family: 'Open Sans';
  color: #ffffff;
  background: #32917b;
  border-radius: 3px;
  margin-top: 5px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }

  :hover {
    opacity: 0.8;
  }
`;
