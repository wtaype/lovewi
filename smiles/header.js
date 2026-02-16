import './auth/wiauth.js';
import $ from 'jquery';
import { rutas } from './rutas/ruta.js';
import { getls, savels, removels, Mensaje } from './widev.js';

let wiAuth = null;
export const wiObservar = async (...fns) => {
  if (wiAuth) return;
  const { auth, onAuthStateChanged } = await import('./auth/wiauth.js');
  wiAuth = onAuthStateChanged(auth, async (user) => {
    if (user) for (const fn of fns) try { await fn(user); } catch(e) { console.error(e); }
    else { removels('wiSmile'); publico(); }
  });
}; export const wiDesconectar = () => { wiAuth?.(); wiAuth = null; };

export function personal(wi) {
  Mensaje?.('Bienvenido ' + wi.nombre);
  $('.wiauth').html(`
    <a href="/smile" class="nv_item" data-page="smile"><i class="fa-solid fa-gauge"></i> <span>Dashboard </span></a>
    <div class="sesion"><img src="${wi.imagen || './smile.avif'}" alt="${wi.nombre}"><span>${wi.nombre}</span></div>
    <button class="wibtn_auth bt_salir"><i class="fas fa-sign-out-alt"></i>Salir</button>
  `);
  rutas.navigate('/smile');
}

function publico() {
  $('.wiauth').html(`
    <a href="/smile" class="nv_item" data-page="smile"><i class="fa-solid fa-gauge"></i> <span>Descubre </span></a>
    <button class="wibtn_auth registrar"><i class="fas fa-user-plus"></i><span>Registrar</span></button>
    <button class="wibtn_auth login"><i class="fas fa-sign-in-alt"></i><span>Login</span></button>
  `);
}

const wi = getls('wiSmile'); wi ? (personal(wi), wiObservar()) : publico();

$(document).on('click', '.bt_salir', async () => {
  const keep = ['wiflash', 'wiTema'].map(k => [k, localStorage.getItem(k)]);
  const { auth, signOut } = await import('./auth/wiauth.js');
  await signOut(auth); localStorage.clear(); keep.forEach(([k, v]) => v && localStorage.setItem(k, v)); location.reload();
});