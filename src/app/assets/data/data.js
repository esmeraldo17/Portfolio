import trecipes from '../images/trecipes.png';
import geekdrinks from '../images/geekDrinks.png';
import api from '../images/api.png';
import mediplayer from '../images/mediaPlayer.png';

const data = [
    {
    name: 'T-Recepies',
    descripton: 'Aplicativo de receitas de comidas e bebidas',
    image: trecipes,
    technologies: ['Docker', 'React'],
    github: 'https://github.com/esmeraldo17/T-Recepies',
    deploy: 'https://lnkd.in/diPPH6ET'
    },
    {
    name: 'Geek Drinks',
    descripton: 'Plataforma de delivery de cerveja',
    image: geekdrinks,
    technologies: ['Docker', 'React', 'Node', 'Express', 'Mysql'],
    github: 'https://github.com/esmeraldo17/delivery-app',
    },
    {
    name: 'Car-Shop API',
    descripton: 'API para gerenciar uma concessionária de veículos.',
    image: api,
    technologies: ['Docker', 'Typescript', 'Node', 'Express', 'Mongodb'],
    github: 'https://github.com/esmeraldo17/car-shop',
    },
    {
    name: 'Music Media Player',
    descripton: 'Reprodutor de musica.',
    image: mediplayer,
    technologies: ['Html', 'Css', 'Javascript'],
    github: 'https://github.com/esmeraldo17/my-music-media-player',
    deploy: 'https://musicplayer.esmeraldo.tech/'
    },
]

export default  data;