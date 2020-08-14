import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
        background: rgba(255, 255, 255, 0.9);
        -webkit-font-smoothing: antialiased;
        font-family: 'Montserrat', sans-serif;
    }

    #main-layout {
      margin-top: 10px;
      margin-left: 42px;
      transition: all 0.3s;

      @media (max-width: 768px) {
        margin-left: 0px;
      } 
    }

    button {
      cursor: pointer;
    }

    .ant-drawer-body {
    padding: 0;
    padding-top: 24px;
  }

`;
