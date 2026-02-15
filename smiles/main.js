import $ from 'jquery';
import { getls } from './widev.js';
import { rutas } from './rutas/ruta.js';
import { miurl, resolver } from './parametros.js';

if (miurl()) resolver();
else {
  ['inicio','crear','plantilla','ejemplos','acerca'].forEach(pg => rutas.register(`/${pg}`, () => import(`./web/${pg}.js`)));
  rutas.register('/smile', () => getls('wiSmile') ? import('./smile/smile.js') : import('./smile/descubre.js'));
  import('./header.js'); import('./footer.js');
  rutas.init();
}