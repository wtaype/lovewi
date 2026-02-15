import './amor.css';
import $ from 'jquery';
import { wicopy } from '../widev.js';
import { wiGenURL } from '../parametros.js';

let animId = null;
let typeTimer = null;

export const render = (p = {}) => {
  const de = p.de || 'Alguien', para = p.para || 'Ti', msg = p.msg || 'Eres lo más hermoso que me ha pasado en la vida. Cada día a tu lado es un regalo. Te amo con todo mi corazón 💕';
  const url = wiGenURL(p.nombre || 'Amor', p.de, p.para, p.msg);

  return `
    <div class="amor">
      <canvas id="amorCanvas"></canvas>
      <div class="amor_content">
        <p class="amor_para">Para ti</p>
        <h1 class="amor_nombre">${para}</h1>
        <span class="amor_corazon">❤️</span>
        <p class="amor_msg" id="amorMsg"></p>
        <p class="amor_de">Con amor, <span>${de}</span></p>
      </div>
      <div class="amor_footer">
        <button class="amor_btn" id="amorCopy" title="Copiar enlace"><i class="fas fa-link"></i></button>
        <button class="amor_btn" id="amorShare" title="Compartir"><i class="fas fa-share"></i></button>
        <a href="/" title="Crear el tuyo">💌 ${p.nombre || 'Lovewi'}</a>
      </div>
      <input type="hidden" id="amorURL" value="${url}">
      <input type="hidden" id="amorTxt" value="${msg}">
    </div>
  `;
};

export const init = (p = {}) => {
  corazones();
  typewriter($('#amorTxt').val());

  // Copiar
  $('#amorCopy').on('click', function () { wicopy($('#amorURL').val(), this, '¡Enlace copiado!'); });

  // Compartir nativo
  $('#amorShare').on('click', () => {
    const url = $('#amorURL').val();
    navigator.share ? navigator.share({ title: '💌 Un mensaje de amor', text: `De ${p.de || 'alguien'} para ${p.para || 'ti'}`, url }) : wicopy(url, '#amorShare', '¡Copiado!');
  });
};

// Efecto typewriter
const typewriter = (txt) => {
  const $el = $('#amorMsg');
  let i = 0;
  $el.addClass('typewriter').text('');
  const type = () => {
    if (i <= txt.length) { $el.text(txt.slice(0, i++)); typeTimer = setTimeout(type, 35); }
    else $el.removeClass('typewriter');
  };
  type();
};

// Canvas corazones cayendo
const corazones = () => {
  const canvas = document.getElementById('amorCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;

  const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
  resize();
  $(window).on('resize.amor', resize);

  const hearts = Array.from({ length: 35 }, () => newHeart(W, H, true));

  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    hearts.forEach(h => {
      ctx.save();
      ctx.globalAlpha = h.o;
      ctx.translate(h.x, h.y);
      ctx.rotate(h.r);
      ctx.font = `${h.s}px serif`;
      ctx.fillText('❤', 0, 0);
      ctx.restore();
      h.y += h.vy;
      h.x += Math.sin(h.y * 0.01) * 0.5;
      h.r += h.vr;
      if (h.y > H + 20) Object.assign(h, newHeart(W, H));
    });
    animId = requestAnimationFrame(draw);
  };
  draw();
};

const newHeart = (W, H, random = false) => ({
  x: Math.random() * W,
  y: random ? Math.random() * H : -20,
  s: 10 + Math.random() * 20,
  o: 0.15 + Math.random() * 0.35,
  vy: 0.3 + Math.random() * 1.2,
  vr: (Math.random() - 0.5) * 0.02,
  r: Math.random() * Math.PI * 2
});

export const cleanup = () => {
  animId && cancelAnimationFrame(animId);
  clearTimeout(typeTimer);
  $(window).off('resize.amor');
  $('#amorCopy, #amorShare').off();
};