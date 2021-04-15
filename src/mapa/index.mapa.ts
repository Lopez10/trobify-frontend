const mapa = require('../public/js/mapa.js');
import { Mapa } from './mapa';
import { Catalogo } from '../catalogo/catalogo';

let inmuebles = new Catalogo();
let creacionMapa = new Mapa(inmuebles);

creacionMapa.mostrarProvincia(mapa);
