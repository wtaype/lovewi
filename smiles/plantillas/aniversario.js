import $ from 'jquery';
import './aniversario.css';

export const render = ({ para = '___', de = 'Tu amor', msg = '', emoji = '🥂', musica = '' } = {}) => `
<div class="pl_aniversario">
  <div class="pl_aniversario_fondo"></div>
  <div class="pl_aniversario_particulas"></div>
  <div class="pl_aniversario_contenido">
    <p class="pl_aniversario_label">Feliz Aniversario</p>
    <h1 class="pl_aniversario_para">${para}</h1>
    <span class="pl_aniversario_emoji">${emoji}</span>
    <p class="pl_aniversario_msg">${msg || 'Celebrando nuestro amor juntos...'}</p>
    <p class="pl_aniversario_de">Con todo mi amor, <strong>${de}</strong></p>
  </div>
  ${musica ? `<audio class="pl_audio" src="${musica}" preload="none"></audio>
  <button class="pl_musica"><i class="fas fa-play"></i></button>` : ''}
</div>`;

export const init = () => {
  const $p = $('.pl_aniversario_particulas');
  const emojis = ['✨', '🥂', '🎉', '💛', '⭐'];
  setInterval(() => {
    const e = $(`<span class="pl_aniversario_part" style="left:${Math.random()*90+5}%;animation-duration:${Math.random()*2+3}s">${emojis[Math.random()*emojis.length|0]}</span>`);
    $p.append(e);
    setTimeout(() => e.remove(), 5000);
  }, 1000);
};

export const cleanup = () => $('.pl_aniversario_part').remove();