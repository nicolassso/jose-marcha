import onirico1 from '../../assets/images/cuadros-jarrones/cuadro-jarron1.jpeg'
import realismo1 from '../../assets/images/cuadros-mascarillas/cuadro-mascarilla11.jpeg'
import abstracto1 from '../../assets/images/cuadros-abstractos/abstracto1.jpeg'
import marroqui1 from '../../assets/images/cuadros-marroquies/cuadro-marroqui1.jpeg'


const SHOP_DATA = [
  {
    id: 1,
    title: 'Realismo',
    routeName: 'realismo',
    items: [
      {
        id: 1,
        name: 'Llorona',
        imageUrl: realismo1,
        price: 700
      }
    ]
  },
  {
    id: 2,
    title: 'Realismo Onírico',
    routeName: 'realismoonirico',
    items: [
      {
        id: 2,
        name: 'Jarrón flotante',
        imageUrl: onirico1,
        price: 1250
      }
    ]
  },
  {
    id: 3,
    title: 'Abstracto',
    routeName: 'Abstracto',
    items: [
      {
        id: 3,
        name: 'Explosión',
        imageUrl: abstracto1,
        price: 900
      }
    ]
  },
  {
    id: 4,
    title: 'Temas Marroquíes',
    routeName: 'temasmarroquies',
    items: [
      {
        id: 4,
        name: 'Mujeres marroquíes',
        imageUrl: marroqui1,
        price: 950
      }
    ]
  },
  
];

export default SHOP_DATA;
