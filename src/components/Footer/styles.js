import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  border-top: 2px solid #aeb6c1;
  margin-top: 100px;
  height: 229px;
  padding-left: 60px;
  padding-top: 20px;

  @media (max-width: 1024px) {
      padding-left: 10px;
    }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 500px;
    padding: 0px;
    margin-top: 0px; 
  }

  .imgsCols {
    display: flex;
    flex-direction: column;
    width: 20%;

    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
      align-items: center;
      padding-top: 30px;
    }
  }
`;

export const TitlesMob = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  div {
    border-bottom: 1px solid #aeb6c1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
  }

  p {
    text-indent: 15px;
    text-transform: uppercase;
    color: #aeb6c1;
    margin-top: 20px;
  }

  img {
    width: 12px;
    height: 12px;
    margin-right: 15px;
  }
`;

export const ImgNet = styled.div`
  display: flex;

  img {
    margin-right: 28px;
  }
`;

export const ImgVtex = styled.div`
  display: flex;
  padding-top: 50px;

  @media (max-width: 768px) {
    padding-top: 30px;
  }

  img {
    margin-right: 25px;
  }
`;

export const InfoInstituicion = styled.div`
  display: flex;
  flex-direction: column;
  width: 18%;
  padding-top: 45px;

  @media (max-width: 1024px) {
      width: 15%;
    }

  @media (max-width: 768px) {
    display: none;
  }

  p {
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    color: #aeb6c1;
    line-height: 0px;
  }

  ul {
    list-style: none;
  }

  li {
    color: #202020;
    font-size: 14px;
    line-height: 28px;
    cursor: pointer;

    :hover {
      color: #de8f75;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding-top: 45px;

  @media (max-width: 768px) {
    display: none;
  }

  p {
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    color: #aeb6c1;
    line-height: 0px;
  }

  ul {
    list-style: none;
  }

  li {
    color: #202020;
    font-size: 14px;
    line-height: 28px;
    cursor: pointer;

    :hover {
      color: #de8f75;
    }
  }
`;

export const InfoKnow = styled.div`
  display: flex;
  flex-direction: column;
  width: 17%;
  padding-top: 45px;

  @media (max-width: 768px) {
    display: none;
  }

  p {
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    color: #aeb6c1;
    line-height: 0px;
  }

  ul {
    list-style: none;
  }

  li {
    color: #202020;
    font-size: 14px;
    line-height: 28px;
    cursor: pointer;

    :hover {
      color: #de8f75;
    }
  }
`;

export const Subscribe = styled.div`
  width: 22%;
  z-index: 20;
  margin-top: -14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 0rem;
    width: 100%;
    z-index: 0;
  }

  img {
    @media (max-width: 768px) {
      display: none;
    }
  }

  .content {
    width: 82%;
    margin-top: -15rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
      margin-top: 3rem;
    }
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    color: #202020;
    font-weight: bold;
    font-size: 16px;

    @media (max-width: 768px) {
      font-weight: normal;
      color: #aeb6c1;
    }
  }

  .email,
  .name {
    width: 100%;
    border: 0;
    border-bottom: 2px solid #aeb6c1;
    color: #202020;
    font-size: 14px;
    margin-top: 1rem;
    ::placeholder {
      color: rgba(32, 32, 32, 0.5);
      font-size: 12px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  .email {
    @media (max-width: 768px) {
      width: 67%;
      margin-top: 0rem;
      padding-top: 50px;
    }
  }

  button {
    background: #de8f75;
    border-radius: 3px;
    width: 50%;
    line-height: 45px;
    color: #ffffff;
    border: 0;
    margin-top: 27px;
    font-size: 14px;
    text-transform: uppercase;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans';

    :hover {
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      width: 30%;
      margin-left: 13px;
    }
  }
`;

export const FooConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #de8f75;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    padding-bottom: 20px;
  }

  > div {
    width: 58%;
    padding-top: 20px;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  p {
    color: #ffffff;
    font-size: 12px;
  }

  span {
    display: block;
  }
`;
