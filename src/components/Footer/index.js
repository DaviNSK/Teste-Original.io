/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';

import pinterest from '../../assets/imgs/pint.png';
import facebook from '../../assets/imgs/facebook.png';
import instagram from '../../assets/imgs/insta.png';
import ebit from '../../assets/imgs/selo-ebit.png';
import vtex from '../../assets/imgs/vtex.png';
import circleG from '../../assets/imgs/circleG.png';
import logo from '../../assets/imgs/logoWhite.png';
import show from '../../assets/imgs/show.png';

import {
  Container,
  Content,
  TitlesMob,
  ImgNet,
  ImgVtex,
  InfoInstituicion,
  Info,
  InfoKnow,
  Subscribe,
  FooConatiner,
} from './styles';

class Footer extends Component {
  render() {
    return (
      <Container>
        <Content>
          <TitlesMob>
            <div>
              <p>institucional</p>
              <img src={show} alt="mais" />
            </div>

            <div>
              <p>informações</p>
              <img src={show} alt="mais" />
            </div>

            <div>
              <p>Conheça</p>
              <img src={show} alt="mais" />
            </div>
          </TitlesMob>

          <div className="imgsCols">
            <ImgNet>
              <a
                target="_blank"
                href="https://www.facebook.com/davi.cardoso.927/"
              >
                <img src={facebook} alt="Facebook" />
              </a>

              <a target="_blank" href="https://www.instagram.com/davvicard/">
                <img src={instagram} alt="instagram" />
              </a>

              <a href="#e">
                <img src={pinterest} alt="pinterest" />
              </a>
            </ImgNet>

            <ImgVtex>
              <img src={vtex} alt="vtex" />
              <img src={ebit} alt="ebit" />
            </ImgVtex>
          </div>

          <InfoInstituicion>
            <p>institucional</p>
            <ul>
              <li>A marca</li>
              <li>Lojas</li>
              <li>Contato</li>
            </ul>
          </InfoInstituicion>

          <Info>
            <p>informações</p>
            <ul>
              <li>Formas de Pagamento</li>
              <li>Trocas e Devoluções</li>
              <li>Cuidados Com o Produto</li>
            </ul>
          </Info>

          <InfoKnow>
            <p>Conheça</p>
            <ul>
              <li>Franquias e Multimarcas</li>
              <li>Trabalhe com a Gente</li>
              <li>Procon-RJ</li>
            </ul>
          </InfoKnow>

          <Subscribe>
            <img src={circleG} alt="circle" />
            <div className="content">
              <h1>Assine nossas news</h1>
              <input className="name" placeholder="Nome" />
              <div className="form">
                <input className="email" placeholder="E-mail" />
                <button>Enviar</button>
              </div>
            </div>
          </Subscribe>
        </Content>

        <FooConatiner>
          <div>
            <p>
              Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.
              <span>
                Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca -
                Rio de Janeiro - RJ - CEP: 22640-100 CNPJ: 05.292.288/0002-10 -
                I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br
              </span>
            </p>
          </div>
          <img src={logo} alt="logo" />
        </FooConatiner>
      </Container>
    );
  }
}

export default Footer;
