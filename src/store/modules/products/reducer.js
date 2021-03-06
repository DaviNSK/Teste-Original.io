const initialState = {
  data: [
    {
      id: 1,
      value: 'R$ 55,20',
      name: 'Rasteira tira dedo',
      oldPrice: '69,00',
      sizes: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],
      rt: 'RT 0568',
      cod: '03.07.0653',
      description:
        'Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.',
      priceCard: 'Ou 6x de R$ 9,20',
      video:
        'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
      imgBig:
        'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
      thumbs: [
        'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
        'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
        'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
        'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
      ],
    },
    {
      id: 2,
      value: 'R$ 35,00',
      name: 'Carteira de Couro',
      oldPrice: '49,00',
      sizes: ['P', 'M', 'G'],
      rt: 'RT 17268',
      cod: '04.10.1353',
      description: 'Carteira de couro feminina',
      priceCard: 'Ou 3x de R$ 11,70',
      video:
        'https://rodeowest.fbitsstatic.net/img/p/carteira-feminina-em-couro-legitimo-dh-couros-18729-113537/330716-5.jpg?w=460&h=460&v=no-change',
      imgBig:
        'https://rodeowest.fbitsstatic.net/img/p/carteira-feminina-em-couro-legitimo-dh-couros-18729-113537/330716-5.jpg?w=460&h=460&v=no-change',
      thumbs: [
        'https://rodeowest.fbitsstatic.net/img/p/carteira-feminina-em-couro-legitimo-dh-couros-18729-113537/330716-5.jpg?w=460&h=460&v=no-change',
        'https://rodeowest.fbitsstatic.net/img/p/carteira-feminina-em-couro-legitimo-dh-couros-18729-113537/330716-5.jpg?w=460&h=460&v=no-change',
        'https://rodeowest.fbitsstatic.net/img/p/carteira-feminina-em-couro-legitimo-dh-couros-18729-113537/330716-5.jpg?w=460&h=460&v=no-change',
        'https://rodeowest.fbitsstatic.net/img/p/carteira-feminina-em-couro-legitimo-dh-couros-18729-113537/330716-5.jpg?w=460&h=460&v=no-change',
      ],
    },
    {
      id: 3,
      value: 'R$ 79,90',
      name: 'Bolsa de couro',
      oldPrice: '89,00',
      sizes: ['P', 'M', 'G'],
      rt: 'RT 1368',
      cod: '04.17.4653',
      description: 'Bolsa de couro com alsa.',
      priceCard: 'Ou 6x de R$ 13,30',
      video:
        'https://img.elo7.com.br/product/zoom/1D71B80/bolsa-feminina-de-couro-legitimo-elizabeth-marrom-bolsas-femininas.jpg',
      imgBig:
        'https://img.elo7.com.br/product/zoom/1D71B80/bolsa-feminina-de-couro-legitimo-elizabeth-marrom-bolsas-femininas.jpg',
      thumbs: [
        'https://img.elo7.com.br/product/zoom/1D71B80/bolsa-feminina-de-couro-legitimo-elizabeth-marrom-bolsas-femininas.jpg',
        'https://img.elo7.com.br/product/zoom/1D71B80/bolsa-feminina-de-couro-legitimo-elizabeth-marrom-bolsas-femininas.jpg',
        'https://img.elo7.com.br/product/zoom/1D71B80/bolsa-feminina-de-couro-legitimo-elizabeth-marrom-bolsas-femininas.jpg',
        'https://img.elo7.com.br/product/zoom/1D71B80/bolsa-feminina-de-couro-legitimo-elizabeth-marrom-bolsas-femininas.jpg',
      ],
    },
    {
      id: 4,
      value: 'R$ 59,20',
      name: 'Sandália alça Grossa',
      oldPrice: '89,90',
      sizes: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],
      rt: 'RT 12568',
      cod: '09.17.06531',
      description:
        'Sandália alça grossa, Possui sola sempre na cor diferente do cabedal.',
      priceCard: 'Ou 6x de R$ 9,90',
      video:
        'https://img.irroba.com.br/fit-in/450x450/filters:fill(fff):quality(90)/universo/catalog/w-produtos-fevereiro/7c29936a-5ff0-4911-9abb-9bc51aa86a06.jpeg',
      imgBig:
        'https://img.irroba.com.br/fit-in/450x450/filters:fill(fff):quality(90)/universo/catalog/w-produtos-fevereiro/7c29936a-5ff0-4911-9abb-9bc51aa86a06.jpeg',
      thumbs: [
        'https://img.irroba.com.br/fit-in/450x450/filters:fill(fff):quality(90)/universo/catalog/w-produtos-fevereiro/7c29936a-5ff0-4911-9abb-9bc51aa86a06.jpeg',
        'https://img.irroba.com.br/fit-in/450x450/filters:fill(fff):quality(90)/universo/catalog/w-produtos-fevereiro/7c29936a-5ff0-4911-9abb-9bc51aa86a06.jpeg',
        'https://img.irroba.com.br/fit-in/450x450/filters:fill(fff):quality(90)/universo/catalog/w-produtos-fevereiro/7c29936a-5ff0-4911-9abb-9bc51aa86a06.jpeg',
        'https://img.irroba.com.br/fit-in/450x450/filters:fill(fff):quality(90)/universo/catalog/w-produtos-fevereiro/7c29936a-5ff0-4911-9abb-9bc51aa86a06.jpeg',
      ],
    },
    {
      id: 5,
      value: 'R$ 55,20',
      name: 'Rasteira tira dedo',
      oldPrice: '69,00',
      sizes: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],
      rt: 'RT 0568',
      cod: '03.07.0653',
      description:
        'Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.',
      priceCard: 'Ou 6x de R$ 9,20',
      video:
        'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
      imgBig:
        'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
      thumbs: [
        'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
        'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
        'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
        'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
      ],
    },
    {
      id: 6,
      value: 'R$ 35,00',
      name: 'Carteira de Couro',
      oldPrice: '49,00',
      sizes: ['P', 'M', 'G'],
      rt: 'RT 17268',
      cod: '04.10.1353',
      description: 'Carteira de couro feminina',
      priceCard: 'Ou 3x de R$ 11,70',
      video:
        'https://rodeowest.fbitsstatic.net/img/p/carteira-feminina-em-couro-legitimo-dh-couros-18729-113537/330716-5.jpg?w=460&h=460&v=no-change',
      imgBig:
        'https://rodeowest.fbitsstatic.net/img/p/carteira-feminina-em-couro-legitimo-dh-couros-18729-113537/330716-5.jpg?w=460&h=460&v=no-change',
      thumbs: [
        'https://rodeowest.fbitsstatic.net/img/p/carteira-feminina-em-couro-legitimo-dh-couros-18729-113537/330716-5.jpg?w=460&h=460&v=no-change',
        'https://rodeowest.fbitsstatic.net/img/p/carteira-feminina-em-couro-legitimo-dh-couros-18729-113537/330716-5.jpg?w=460&h=460&v=no-change',
        'https://rodeowest.fbitsstatic.net/img/p/carteira-feminina-em-couro-legitimo-dh-couros-18729-113537/330716-5.jpg?w=460&h=460&v=no-change',
        'https://rodeowest.fbitsstatic.net/img/p/carteira-feminina-em-couro-legitimo-dh-couros-18729-113537/330716-5.jpg?w=460&h=460&v=no-change',
      ],
    },
    {
      id: 7,
      value: 'R$ 79,90',
      name: 'Bolsa de couro',
      oldPrice: '89,00',
      sizes: ['P', 'M', 'G'],
      rt: 'RT 1368',
      cod: '04.17.4653',
      description: 'Bolsa de couro com alsa.',
      priceCard: 'Ou 6x de R$ 13,30',
      video:
        'https://img.elo7.com.br/product/zoom/1D71B80/bolsa-feminina-de-couro-legitimo-elizabeth-marrom-bolsas-femininas.jpg',
      imgBig:
        'https://img.elo7.com.br/product/zoom/1D71B80/bolsa-feminina-de-couro-legitimo-elizabeth-marrom-bolsas-femininas.jpg',
      thumbs: [
        'https://img.elo7.com.br/product/zoom/1D71B80/bolsa-feminina-de-couro-legitimo-elizabeth-marrom-bolsas-femininas.jpg',
        'https://img.elo7.com.br/product/zoom/1D71B80/bolsa-feminina-de-couro-legitimo-elizabeth-marrom-bolsas-femininas.jpg',
        'https://img.elo7.com.br/product/zoom/1D71B80/bolsa-feminina-de-couro-legitimo-elizabeth-marrom-bolsas-femininas.jpg',
        'https://img.elo7.com.br/product/zoom/1D71B80/bolsa-feminina-de-couro-legitimo-elizabeth-marrom-bolsas-femininas.jpg',
      ],
    },
  ],
  currentProduct: {
    id: 1,
    value: 'R$ 55,20',
    name: 'Rasteira tira dedo',
    oldPrice: '69,00',
    sizes: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],
    rt: 'RT 0568',
    cod: '03.07.0653',
    description:
      'Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.',
    priceCard: 'Ou 6x de R$ 9,20',
    video:
      'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
    imgBig:
      'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
    thumbs: [
      'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
      'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
      'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
      'https://d26lpennugtm8s.cloudfront.net/stores/678/173/products/292825-mlb25499501831_042017-o-5b47afc842f787736715165855271199-640-0.jpg',
    ],
  },
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, data: action.products };
    case 'SET_CURRENT_PRODUCT':
      return { ...state, currentProduct: action.currentProduct };

    default:
      return state;
  }
}
