import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;

  .home {
    color: #aeb6c1;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 1px;
    cursor: pointer;

    strong {
      font-weight: bold;
      letter-spacing: 0px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .info {
    width: 40%;
    margin-right: 9rem;
    @media (max-width: 768px) {
      width: 100%;
      margin-right: 0rem;
    }
  }

  .thumb {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .more {
    width: 100%;
    padding-top: 90px;

    @media (max-width: 1024px) {
      padding-top: 60px;
    }

    @media (max-width: 768px) {
      padding-top: 10px;
      margin-top: -2rem;
    }
  }
`;

export const ListProduct = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
