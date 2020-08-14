import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  right: 0px;
  top: 0;
  width: 100%;
  align-items: center;
  flex-direction: column;
  height: 130px;
  background: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    flex-direction: row;
    height: 60px;
    padding-left: 15px;
  }

  .logo {
    margin-top: 20px;
    margin-left: 40px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .logoMob {
    display: none;

    @media (max-width: 768px) {
      display: block;
      margin-left: 30px;
      margin-top: 5px;
    }
  }

  .menu {
    display: none;

    @media (max-width: 768px) {
      display: block;
      width: 20%;
      margin-right: 40px;
    }
  }
`;

export const HeaderInfo = styled.div`
  width: 100%;
  height: 50px;
  left: 0%;
  right: 0%;
  margin-top: 25px;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  border: 1px solid #cccccc;
  align-items: center;
  padding-left: 40px;

  @media (max-width: 758px) {
    border: 0;
    padding-left: 0px;
    justify-content: center;
  }

  button {
    display: flex;
    border: 0;
    background: transparent;
    font-size: 12px;
    line-height: 12px;
    align-items: center;
    color: #686868;
    margin-right: 10px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    outline: none;
    :hover {
      color: #de8f75;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .divider {
    border: 1px solid #cccccc;
    height: 12px;
    margin-right: 10px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const ListItems = styled.ul`
  list-style: none;
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  padding-top: 19px;
  padding-left: 15px;
  @media (max-width: 768px) {
    display: none;
  }

  li {
    font-size: 14px;
    color: #686868;
    text-align: center;
    text-transform: uppercase;
    margin-right: 45px;
    line-height: 42px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease-in;
    :hover {
      color: #de8f75;
      border-bottom: 2px solid #de8f75;
    }
  }
`;

export const Search = styled.div`
  width: 7.2%;
  display: flex;

  input {
    border: 0;
    width: 100%;
    line-height: 28px;
    background: transparent;
    border-bottom: 1px solid rgba(104, 104, 104, 0.4);
    ::placeholder {
      color: #686868;
      font-size: 12px;
      padding-left: 50px;
      @media (max-width: 768px) {
        ::placeholder {
          color: transparent;
          font-size: 0px;
          padding-left: 0px;
        }
      }
    }
    @media (max-width: 768px) {
      border-bottom: 0px;
    }
  }

  img {
    position: absolute;
    margin-top: 3px;
    margin-left: 0px;

    @media (max-width: 768px) {
      margin-top: -5px;
      margin-left: 12px;
    }
  }
`;

export const Store = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  
  @media (max-width: 768px) {
      margin-top: -15px;
    }
`;
