import $ from 'jquery';
import './amistad.css';

export const render = ({ para = '___', de = 'Tu amigo', msg = '', emoji = '💙', musica = '' } = {}) => `
<div class="pl_amistad">
  <div class="pl_amistad_fondo"></div>
  <div class="pl_amistad_estrellas"></div>
  <div class="pl_amistad_contenido">
    <p class="pl_amistad_label">Para mi amig@</p>
    <h1 class="pl_amistad_para">${para}</h1>
    <span class="pl_amistad_emoji">${emoji}</span>
    <p class="pl_amistad_msg">${msg || 'Un mensaje especial de amistad...'}</p>
    <p class="pl_amistad_de">Tu amig@, <strong>${de}</strong></p>
  </div>
  ${musica ? `<audio class="pl_audio" src="${musica}" preload="none"></audio>
  <button class="pl_musica"><i class="fas fa-play"></i></button>` : ''}
</div>`;

export const init = () => {
  const $e = $('.pl_amistad_estrellas');
  setInterval(() => {
    const s = $(`<i class="fas fa-star pl_amistad_star" style="left:${Math.random()*90+5}%;animation-duration:${Math.random()*2+2}s"></i>`);
    $e.append(s);
    setTimeout(() => s.remove(), 4000);
  }, 1200);
};

export const cleanup = () => $('.pl_amistad_star').remove();