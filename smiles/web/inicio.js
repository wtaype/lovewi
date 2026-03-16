import './inicio.css';
import { app } from '../wii.js';
import { $, wiVista, year } from '../widev.js';
import { plantillas, genURL } from '../parametros.js';
import { rutas } from '../rutas/ruta.js';

// ── Datos ─────────────────────────────────────────────────────────────────
const ROLES = ['Mensajes de Amor 💕', 'San Valentín 💌', 'Aniversarios 🥂', 'Declaraciones ❤️', 'Cartas de Amor ✉️'];
const STATS = [[1200, 'Mensajes Creados'], [8, 'Plantillas Únicas'], [6, 'Categorías']];
const EJ = [
  ['Amor', 'Lovewi', 'Alguien especial', 'Eres mi todo, mi razón de sonreír cada día 💕'],
  ['Declaracion', 'Martin', 'Catalina', 'Me gustas mucho y hoy decidí ser valiente. ¿Me darías la oportunidad de hacerte feliz? ❤️'],
  ['Carta', 'Gabriel', 'Alejandra', 'Querida mía, escribo estas líneas porque hay sentimientos que necesitan más que una frase ✉️'],
  ['Aniversario', 'Roberto', 'Elena', 'Un año más juntos y cada día te elijo de nuevo. Feliz aniversario mi amor 🥂'],
];
const PASOS = [
  ['fa-palette', 'Elige tu Plantilla', 'Selecciona entre 8 plantillas diseñadas para cada ocasión especial'],
  ['fa-pen-fancy', 'Personaliza', 'Escribe nombres, tu mensaje especial y agrega música si deseas'],
  ['fa-share-nodes', 'Comparte', 'Obtén tu enlace único y envíalo por WhatsApp, Telegram o redes'],
];
const TESTI = [
  ['Perfecta para sorprender a mi novia en San Valentín. Ella lloró de emoción 💕', 'Carlos M.', 'San Valentín 2026', '⭐⭐⭐⭐⭐'],
  [`Usé ${app} para mi aniversario y fue un éxito total. Los diseños son preciosos 🎉`, 'Ana R.', 'Aniversario', '⭐⭐⭐⭐⭐'],
  ['Lo mejor es que es gratis y sin límites. He creado varios mensajes increíbles 💙', 'Miguel S.', 'Usuario frecuente', '⭐⭐⭐⭐'],
];
const FEATS = [
  ['fa-heart', 'Personalizados', 'Dedicatorias únicas para San Valentín, aniversarios y fechas especiales'],
  ['fa-mobile-screen', 'Responsive', 'Perfecto en móvil, tablet y escritorio. Comparte en cualquier plataforma'],
  ['fa-lock', 'Privado y Seguro', 'Sin registro obligatorio, sin publicidad molesta'],
  ['fa-music', 'Con Música', 'Añade tu canción favorita para hacerlo aún más emotivo'],
  ['fa-cloud', 'En la Nube', 'Crea cuenta gratis y accede desde cualquier dispositivo'],
];
const FAQS = [
  ['¿Es gratis crear mensajes?', 'Sí, 100% gratis y sin límites. Crea todos los mensajes que quieras sin costo alguno.'],
  ['¿Necesito registrarme?', 'No es obligatorio. Puedes crear mensajes sin cuenta. Con registro puedes guardar y gestionar tus mensajes.'],
  ['¿Cómo comparto mi mensaje?', 'Al crear tu mensaje obtienes un enlace único que puedes enviar por WhatsApp, Telegram o cualquier red social.'],
  ['¿Se puede agregar música?', 'Sí, puedes elegir canciones de fondo para hacer tu mensaje aún más especial y emotivo.'],
  ['¿Mis mensajes son privados?', 'Totalmente. Solo las personas con tu enlace pueden ver el mensaje que creaste.'],
];

// ── Helpers ───────────────────────────────────────────────────────────────
const sec = (ico, t) => `<div class="sec_head"><h2><i class="fas ${ico}"></i> ${t}</h2><div class="sec_line"></div></div>`;
const demoUrl = ([pl, de, para, msg]) => genURL(pl, de, para, msg, plantillas[pl]?.mu || '');

// ── Render ────────────────────────────────────────────────────────────────
export const render = () => `<div class="inicio">
  <section class="hero">
    <div class="hero_txt">
      <div class="hero_badge"><i class="fas fa-heart"></i> ${app} ${year()}</div>
      <h1>Expresa tus <span class="gradiente">Sentimientos</span><br>con Mensajes <span class="gradiente">Únicos</span></h1>
      <div class="hero_roles">${ROLES.map((r, i) => `<span class="role${i ? '' : ' active'}">${r}</span>`).join('')}</div>
      <p class="hero_sub">Crea dedicatorias personalizadas para tu pareja, amor o persona especial. Comparte en segundos 💌</p>
      <div class="hero_btns">
        <a href="/crear" class="btn_pri wi_nav"><i class="fas fa-wand-magic-sparkles"></i><span>Crear Mensaje Gratis</span></a>
        <a href="#ejemplos" class="btn_sec wi_scroll"><i class="fas fa-images"></i><span>Ver Ejemplos</span></a>
      </div>
      <div class="hero_stats">${STATS.map(([n, l]) => `<div class="hstat"><div class="hstat_n" data-target="${n}">0</div><div class="hstat_l">${l}</div></div>`).join('')}</div>
    </div>
    <div class="hero_visual">
      <span class="img_inicio"></span>
      <div class="hero_deco"><i class="fas fa-heart"></i><i class="fas fa-heart"></i><i class="fas fa-heart"></i></div>
    </div>
  </section>

  <section class="sec_ej" id="ejemplos">
    ${sec('fa-sparkles', 'Inspírate con Ejemplos Reales')}
    <p class="sec_desc">Mensajes listos para personalizar. Haz clic en uno para verlo en acción</p>
    <div class="ej_grid">${EJ.map(e => { const p = plantillas[e[0]]; return `
      <a class="ej_item" href="${demoUrl(e)}" target="_blank" style="--x:${p.x}">
        <div class="ej_top"><span>${p.e}</span><span class="ej_tag">${e[0]}</span></div>
        <p>"${e[3]}"</p>
        <div class="ej_meta"><span><i class="fas fa-user"></i> ${e[1]}</span><span><i class="fas fa-heart"></i> ${e[2]}</span></div>
        <span class="ej_ver"><i class="fas fa-eye"></i> Ver demostración</span>
      </a>`; }).join('')}</div>
    <div class="sec_cta"><a href="/ejemplos" class="btn_sec wi_nav"><i class="fas fa-th-large"></i><span>Ver Todos los Ejemplos</span></a></div>
  </section>

  <section class="sec_test">
    <div class="test_bg">
      <div class="test_inner">
        <div class="test_left">
          <img src="./smile.avif" alt="${app}" class="test_img">
          <h2><i class="fas fa-comments"></i> Lo que dicen nuestros usuarios</h2>
          <p>Miles de personas ya expresaron sus sentimientos con <strong>${app}</strong></p>
        </div>
        <div class="test_right">${TESTI.map(([msg, a, c, s]) => `
          <div class="test_card">
            <div class="test_stars">${s}</div>
            <p>"${msg}"</p>
            <div class="test_a"><strong>${a}</strong><span>${c}</span></div>
          </div>`).join('')}</div>
      </div>
    </div>
  </section>

  <section class="sec_dual">
    <div class="dual_grid">
      <div class="dual_left">
        ${sec('fa-lightbulb', '¿Cómo funciona?')}
        <div class="pasos_list">${PASOS.map(([ico, t, d], i) => `
          <div class="paso"><div class="paso_n">${i + 1}</div><div><h3>${t}</h3><p>${d}</p></div></div>`).join('')}</div>
      </div>
      <div class="dual_right">
        ${sec('fa-circle-question', 'Preguntas Frecuentes')}
        <div class="faq_list">${FAQS.map(([q, a]) => `
          <details class="faq_item"><summary><span>${q}</span><i class="fas fa-chevron-down"></i></summary><p>${a}</p></details>`).join('')}</div>
      </div>
    </div>
  </section>

  <section class="sec_feat">
    ${sec('fa-sparkles', `¿Por qué elegir ${app}?`)}
    <div class="feat_grid">${FEATS.map(([ico, t, d]) => `
      <div class="feat_card"><div class="feat_ico"><i class="fas ${ico}"></i></div><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
  </section>

  <section class="cta_final">
    <i class="fas fa-heart cta_ico"></i>
    <h2>¿Listo para crear tu mensaje perfecto?</h2>
    <p>Únete a miles de personas que expresan sus sentimientos con <strong>${app}</strong></p>
    <a href="/crear" class="cta_btn wi_nav"><i class="fas fa-wand-magic-sparkles"></i> Crear Mensaje - Gratis</a>
    <div class="cta_tags"><span><i class="fas fa-check"></i> Sin registro</span><span><i class="fas fa-check"></i> 100% gratis</span><span><i class="fas fa-check"></i> Ilimitado</span></div>
  </section>
</div>`;

// ── Estado ────────────────────────────────────────────────────────────────
let _rt = null, _obs = [];

// ── Init ──────────────────────────────────────────────────────────────────
export const init = () => {
  let i = 0; const $r = $('.hero_roles .role');
  _rt = setInterval(() => { $r.eq(i).removeClass('active'); i = (i + 1) % $r.length; $r.eq(i).addClass('active'); }, 2500);

  _obs.push(wiVista('.hero_stats', () => {
    $('.hstat_n').each(function () {
      const $n = $(this), t = +$n.data('target'), s = Math.ceil(t / 40);
      let c = 0, iv = setInterval(() => { c = Math.min(c + s, t); $n.text(c < t ? Math.floor(c) : `${t}+`); c >= t && clearInterval(iv); }, 30);
    });
  }));

  ['.ej_item', '.paso', '.test_card', '.feat_card', '.faq_item'].forEach(s =>
    _obs.push(wiVista(s, (el) => $(el).addClass('visible'), { stagger: 120 }))
  );

  $(document).on('click.inicio', '.wi_nav', function (e) {
    e.preventDefault(); rutas.navigate(this.getAttribute('href'));
  }).on('click.inicio', '.wi_scroll', function (e) {
    e.preventDefault();
    const t = document.querySelector(this.getAttribute('href'));
    if (t) window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' });
  });
};

export const cleanup = () => {
  clearInterval(_rt); _rt = null;
  _obs.forEach(o => o?.disconnect?.()); _obs = [];
  $(document).off('.inicio');
};