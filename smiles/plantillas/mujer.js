import { $ } from '../widev.js';
import './mujer.css';

let audio = null, cleanFns = [];

// ==================== PARTICULAS ====================
const emojis = ['🌸', '🦋', '✨', '💜', '🌺', '💐', '⭐', '🪻', '🌷', '🩷'];
const particles = (n = 28) => Array.from({ length: n }, (_, i) => {
  const e = emojis[i % emojis.length];
  const s = 1.4 + Math.random() * 2.2;
  const d = 7 + Math.random() * 13;
  const dl = Math.random() * 10;
  const x = Math.random() * 100;
  return `<span style="left:${x}%;font-size:${s}vh;animation-duration:${d}s;animation-delay:${dl}s">${e}</span>`;
}).join('');

// ==================== RENDER ====================
export const render = (d) => {
  const tiene = d.musica && d.musica.trim();
  const foto = (d.img || '').trim();
  return `
${tiene ? `
<div class="pl_mujer_autoplay" id="plAutoplay">
  <span class="pl_mujer_autoplay_icon">💜</span>
  <h2>Tienes un mensaje especial</h2>
  <p>${d.de ? `De: ${d.de}` : 'Alguien te admira mucho'}</p>
  <div class="pl_mujer_autoplay_btn"><i class="fas fa-play"></i> Toca para abrir</div>
</div>` : ''}
<div class="pl_mujer" id="plMujer" ${tiene ? 'style="display:none"' : ''}>
  <div class="pl_mujer_particles">${particles()}</div>
  <div class="pl_mujer_content">
    <div class="pl_mujer_badge">8 de Marzo</div>
    <div class="pl_mujer_title">Feliz Día de la Mujer</div>
    <p class="pl_mujer_para">Para ti</p>
    <h1 class="pl_mujer_nombre"><span>${d.para || 'Mujer increíble'}</span></h1>
    <div class="pl_mujer_msg_box">
      <p class="pl_mujer_msg_deco">❝</p>
      <p class="pl_mujer_msg">${d.msg || 'Tu valentía, tu fuerza y tu luz hacen del mundo un lugar mejor 💜'}</p>
      <p class="pl_mujer_msg_deco">❞</p>
    </div>
    ${foto ? `
    <div class="pl_mujer_foto_wrap">
      <img class="pl_mujer_foto" src="${foto}" alt="Foto grupal" />
    </div>` : ''}
    <p class="pl_mujer_de"><i class="fas fa-heart"></i> Con admiración, <strong>${d.de || 'Anónimo'}</strong></p>
    ${tiene ? `
    <div class="pl_mujer_musica" id="plMusica">
      <i class="fas fa-music"></i>
      <span id="plMusicaTxt">Música</span>
      <div class="pl_bars"><div class="pl_bar pl_mujer_bar1"></div><div class="pl_bar pl_mujer_bar2"></div><div class="pl_bar pl_mujer_bar3"></div><div class="pl_bar pl_mujer_bar4"></div></div>
    </div>` : ''}
  </div>
  <p class="pl_mujer_foot">Hecho con <a href="/">Lovewi</a> 💜</p>
</div>`;
};

// ==================== INIT ====================
export const init = (d) => {
  const tiene = d.musica && d.musica.trim();
  if (!tiene) return;

  audio = new Audio(d.musica);
  audio.loop = true;
  audio.volume = 0.5;

  const playAudio = () => {
    audio.play().then(() => {
      $('#plMusica').addClass('playing');
      $('#plMusicaTxt').text('Sonando');
    }).catch(() => {});
  };

  const onAutoplay = () => {
    $('#plAutoplay').fadeOut(400, function () { $(this).remove(); });
    $('#plMujer').css('display', '').hide().fadeIn(600);
    playAudio();
  };

  $(document).on('click.plMujer', '#plAutoplay', onAutoplay);
  cleanFns.push(() => $(document).off('click.plMujer', '#plAutoplay'));

  $(document).on('click.plMujer', '#plMusica', () => {
    if (!audio) return;
    if (audio.paused) {
      playAudio();
    } else {
      audio.pause();
      $('#plMusica').removeClass('playing');
      $('#plMusicaTxt').text('Pausado');
    }
  });
  cleanFns.push(() => $(document).off('click.plMujer', '#plMusica'));
};

// ==================== CLEANUP ====================
export const cleanup = () => {
  if (audio) { audio.pause(); audio.src = ''; audio = null; }
  cleanFns.forEach(fn => fn());
  cleanFns = [];
};