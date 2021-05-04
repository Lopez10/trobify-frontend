import { Hipoteca } from './hipoteca';
const construccionDOM = require('../../../../public/js/hipoteca.js');

let hipoteca = new Hipoteca(1000000, 'Valencia');

construccionDOM.hipotecaDom(hipoteca);
