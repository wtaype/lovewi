import $ from 'jquery';
import './declaracion.css';

export const render = ({ para = '___', de = 'Alguien especial', msg = '', emoji = '❤️', musica = '' } = {}) => `
<div class="pl_declaracion">
  <div class="pl_declaracion_fondo"></div>
  <div class="pl_declaracion_petalos"></div>
  <div class="pl_declaracion_contenido">
    <div class="pl_declaracion_sobre">
      <i class="fas fa-envelope-open-text"></i>
    </div>
    <h1 class="pl_declaracion_para">${para}</h1>
    <span class="pl_declaracion_emoji">${emoji}</span>
    <p class="pl_declaracion_msg">${msg || '¿Quieres ser mi novia?...'}</p>
    <p class="pl_declaracion_de">De: <strong>${de}</strong></p>
    <div class="pl_declaracion_btns">
      <button class="pl_dec_si">Sí, acepto 💕</button>
      <button class="pl_dec_no">Déjame pensarlo 😊</button>
    </div>
  </div>
  ${musica ? `<audio class="pl_audio" src="${musica}" preload="none"></audio>
  <button class="pl_musica pl_musica_dec"><i class="fas fa-play"></i></button>` : ''}
</div>`;

export const init = () => {
  // ✅ Pétalos flotantes
  const $p = $('.pl_declaracion_petalos');
  setInterval(() => {
    const p = $(`<span class="pl_dec_petalo" style="left:${Math.random()*90+5}%;animation-duration:${Math.random()*3+3}s">🌹</span>`);
    $p.append(p);
    setTimeout(() => p.remove(), 6000);
  }, 800);

  // ✅ Botón Sí
  $(document).on('click.pldec', '.pl_dec_si', function () {
    $(this).html('🎉 ¡Yupi! 💕').css({ background: '#4CAF50', transform: 'scale(1.1)' });
    $('.pl_dec_no').fadeOut(300);
    for (let i = 0; i < 20; i++) {
      const c = $(`<span class="pl_dec_confeti" style="left:${Math.random()*100}%;animation-delay:${Math.random()*.5}s">${['🎉','💕','✨','❤️','🥳'][Math.random()*5|0]}</span>`);
      $('body').append(c);
      setTimeout(() => c.remove(), 3000);
    }
  });

  // ✅ Botón No (se escapa)
  $(document).on('mouseenter.pldec', '.pl_dec_no', function () {
    $(this).css({ position: 'relative', left: `${Math.random()*20-10}vh`, top: `${Math.random()*10-5}vh` });
  });
};

export const cleanup = () => {
  $(document).off('.pldec');
  $('.pl_dec_petalo, .pl_dec_confeti').remove();
};