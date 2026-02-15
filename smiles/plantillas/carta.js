import $ from 'jquery';
import './carta.css';

export const render = ({ para = '___', de = 'Con amor', msg = '', emoji = '✉️', musica = '' } = {}) => `
<div class="pl_carta">
  <div class="pl_carta_fondo"></div>
  <div class="pl_carta_papel">
    <div class="pl_carta_sello"><i class="fas fa-heart"></i></div>
    <p class="pl_carta_saludo">Querido/a <strong>${para}</strong>,</p>
    <div class="pl_carta_linea"></div>
    <p class="pl_carta_msg">${msg || 'Escribo estas líneas desde el fondo de mi corazón...'}</p>
    <div class="pl_carta_linea"></div>
    <p class="pl_carta_cierre">Con todo mi cariño,</p>
    <p class="pl_carta_firma">${de}</p>
    <span class="pl_carta_emoji">${emoji}</span>
  </div>
  ${musica ? `<audio class="pl_audio" src="${musica}" preload="none"></audio>
  <button class="pl_musica pl_musica_carta"><i class="fas fa-play"></i></button>` : ''}
</div>`;

export const init = () => {
  // ✅ Efecto de escritura
  const $msg = $('.pl_carta_msg');
  const txt = $msg.text();
  $msg.text('');
  let i = 0;
  const escribir = () => { if (i < txt.length) { $msg.text($msg.text() + txt[i]); i++; setTimeout(escribir, 30); } };
  setTimeout(escribir, 800);
};

export const cleanup = () => {};