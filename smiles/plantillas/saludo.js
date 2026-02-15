import $ from 'jquery';
import './saludo.css';

export const render = ({ para = '___', de = 'Un amigo', msg = '', emoji = '🌅', musica = '' } = {}) => `
<div class="pl_saludo">
  <div class="pl_saludo_fondo"></div>
  <div class="pl_saludo_rayos"></div>
  <div class="pl_saludo_contenido">
    <div class="pl_saludo_sol"><i class="fas fa-sun"></i></div>
    <p class="pl_saludo_label">Un saludo especial para</p>
    <h1 class="pl_saludo_para">${para}</h1>
    <span class="pl_saludo_emoji">${emoji}</span>
    <p class="pl_saludo_msg">${msg || '¡Que tengas un día maravilloso!'}</p>
    <p class="pl_saludo_de">Con cariño, <strong>${de}</strong></p>
  </div>
  ${musica ? `<audio class="pl_audio" src="${musica}" preload="none"></audio>
  <button class="pl_musica pl_musica_saludo"><i class="fas fa-play"></i></button>` : ''}
</div>`;

export const init = () => {
  // ✅ Rayos de sol
  const $r = $('.pl_saludo_rayos');
  for (let i = 0; i < 8; i++) {
    $r.append(`<div class="pl_saludo_rayo" style="transform:rotate(${i * 45}deg)"></div>`);
  }
};

export const cleanup = () => {};