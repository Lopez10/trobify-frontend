import { Mapa } from './mapa';
import { Catalogo } from '../catalogo/catalogo';
const mapa = require('../../public/js/mapa.js');

let inmuebles = new Catalogo();
let creacionMapa = new Mapa(inmuebles);

creacionMapa.mostrarProvincia(mapa);
