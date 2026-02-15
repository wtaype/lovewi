import('./footer.js');
import $ from 'jquery';
import { getls } from './widev.js';
import { rutas } from './rutas/ruta.js';
import { miurl, parametro, plantilla, noexiste } from './parametros.js';

if (miurl()) {
  plantilla();
  import(`./plantillas/${parametro.plantilla}.js`)
    .then(m => { $('#wimain').html(m.render(parametro)); m.init?.(parametro); })
    .catch(() => $('#wimain').html(noexiste()));

} else {
  ['inicio','crear','plantilla','ejemplos','acerca'].forEach(pg => rutas.register(`/${pg}`, () => import(`./web/${pg}.js`)));
  rutas.register('/smile', () => getls('wiSmile') ? import('./smile/smile.js') : import('./smile/descubre.js'));
  import('./header.js');
  rutas.init();
}