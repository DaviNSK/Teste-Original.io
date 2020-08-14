import React, { Component } from 'react';

import Logo from '../../assets/imgs/logo.png';
import search from '../../assets/imgs/Search.png';
import menu from '../../assets/imgs/menu.png';
import logoMob from '../../assets/imgs/logoMob.png';

import { Container, HeaderInfo, ListItems, Search, Store } from './styles';
import BagStore from '../BagStore';

class Header extends Component {
  render() {
    return (
      <Container>
        <div className="menu">
          <img src={menu} alt="menu" />
        </div>
        <div>
          <img className="logo" alt="logo" src={Logo} />
          <img className="logoMob" alt="logo" src={logoMob} />
        </div>
        <HeaderInfo>
          <button>Entrar</button>
          <div className="divider" />
          <button>Cadastrar-se</button>

          <ListItems>
            <li>sapatos</li>
            <li>bolsas</li>
            <li>acessórios</li>
            <li>off</li>
          </ListItems>

          <Search>
            <img alt="search" src={search} />
            <input type="text" placeholder="Busca" />
          </Search>

          <Store>
            <BagStore />
          </Store>
        </HeaderInfo>
      </Container>
    );
  }
}

export default Header;
