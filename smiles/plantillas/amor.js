import $ from 'jquery';
import './amor.css';

let audio = null, cleanFns = [];

// ==================== PARTÍCULAS ====================
const hearts = ['💕', '💗', '💖', '💘', '💝', '❤️', '🩷', '✨', '🌸'];
const particles = (n = 25) => Array.from({ length: n }, (_, i) => {
  const h = hearts[i % hearts.length];
  const s = 1.5 + Math.random() * 2.5;
  const d = 6 + Math.random() * 14;
  const dl = Math.random() * 8;
  const x = Math.random() * 100;
  return `<span style="left:${x}%;font-size:${s}vh;animation-duration:${d}s;animation-delay:${dl}s">${h}</span>`;
}).join('');

// ==================== RENDER ====================
export const render = (d) => {
  const tiene = d.musica && d.musica.trim();
  return `
${tiene ? `
<div class="pl_amor_autoplay" id="plAutoplay">
  <span class="pl_amor_autoplay_icon">💕</span>
  <h2>Tienes un mensaje especial</h2>
  <p>${d.de ? `De: ${d.de}` : 'Alguien te quiere mucho'}</p>
  <div class="pl_amor_autoplay_btn"><i class="fas fa-play"></i> Toca para abrir</div>
</div>` : ''}
<div class="pl_amor" id="plAmor" ${tiene ? 'style="display:none"' : ''}>
  <div class="pl_amor_particles">${particles()}</div>
  <div class="pl_amor_content">
    <div class="pl_amor_heart">
      <span class="pl_amor_heart_icon">💕</span>
      <div class="pl_amor_heart_ring"></div>
    </div>
    <p class="pl_amor_para">Para ti</p>
    <h1 class="pl_amor_nombre"><span>${d.para || 'Alguien especial'}</span></h1>
    <div class="pl_amor_msg_box">
      <p class="pl_amor_msg_deco">❝</p>
      <p class="pl_amor_msg">${d.msg || 'Te quiero mucho 💕'}</p>
      <p class="pl_amor_msg_deco">❞</p>
    </div>
    <p class="pl_amor_de"><i class="fas fa-heart"></i> Con amor, <strong>${d.de || 'Anónimo'}</strong></p>
    ${tiene ? `
    <div class="pl_amor_musica" id="plMusica">
      <i class="fas fa-music"></i>
      <span id="plMusicaTxt">Música</span>
      <div class="pl_bars"><div class="pl_bar"></div><div class="pl_bar"></div><div class="pl_bar"></div><div class="pl_bar"></div></div>
    </div>` : ''}
  </div>
  <p class="pl_amor_foot">Hecho con <a href="/">Lovewi</a> 💌</p>
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

  // ✅ Autoplay: click en overlay → muestra contenido + reproduce
  const onAutoplay = () => {
    $('#plAutoplay').fadeOut(400, function () { $(this).remove(); });
    $('#plAmor').css('display', '').hide().fadeIn(600);
    playAudio();
  };

  $(document).on('click.plAmor', '#plAutoplay', onAutoplay);
  cleanFns.push(() => $(document).off('click.plAmor', '#plAutoplay'));

  // ✅ Toggle música
  $(document).on('click.plAmor', '#plMusica', () => {
    if (!audio) return;
    if (audio.paused) {
      playAudio();
    } else {
      audio.pause();
      $('#plMusica').removeClass('playing');
      $('#plMusicaTxt').text('Pausado');
    }
  });
  cleanFns.push(() => $(document).off('click.plAmor', '#plMusica'));
};

// ==================== CLEANUP ====================
export const cleanup = () => {
  if (audio) { audio.pause(); audio.src = ''; audio = null; }
  cleanFns.forEach(fn => fn());
  cleanFns = [];
};