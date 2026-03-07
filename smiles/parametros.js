import $ from 'jquery';

// ==================== PLANTILLAS ====================
const M = {
  Amor:        { c:'amor',        i:'fa-heart',              k:'Romántico',   x:'#ff6b8a', e:'💕', b:'linear-gradient(135deg,#ff6b8a,#ffb3c1,#fff0f3)',  d:'Perfecta para declaraciones de amor y San Valentín',                    ej:'Eres mi todo, mi razón de sonreír cada día 💕',                                            mu:'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3',
    musicas: [
      { n:'Flores Amarillas', u:'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3' },
      { n:'You Are Somebody', u:'https://raw.githubusercontent.com/geluksee/hopeee/main/You%20are%20Somebody%20Else%20by%20Flora%20Cash.mp3' },
      { n:'I Surrender',      u:'https://raw.githubusercontent.com/geluksee/hopeee/main/I%20Surrender%20-%20Hillsong%20Worship.mp3' },
    ]},
  Amistad:     { c:'amistad',     i:'fa-user-group',         k:'Amistad',     x:'#6b8aff', e:'💙', b:'linear-gradient(135deg,#6b8aff,#b3c1ff,#f0f3ff)',  d:'Celebra la amistad verdadera con mensajes del corazón',                 ej:'Gracias por estar siempre, por las risas y por ser mi mejor amigo 💙',                     mu:null, musicas:[] },
  Aniversario: { c:'aniversario', i:'fa-calendar-heart',     k:'Celebración', x:'#ffd700', e:'🥂', b:'linear-gradient(135deg,#ffd700,#ffed4e,#fff9db)',  d:'Celebra meses o años juntos con una dedicatoria inolvidable',           ej:'Un año más a tu lado, mil sonrisas compartidas 🥂',                                        mu:'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3',
    musicas: [
      { n:'Flores Amarillas', u:'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3' },
      { n:'You Are Somebody', u:'https://raw.githubusercontent.com/geluksee/hopeee/main/You%20are%20Somebody%20Else%20by%20Flora%20Cash.mp3' },
      { n:'I Surrender',      u:'https://raw.githubusercontent.com/geluksee/hopeee/main/I%20Surrender%20-%20Hillsong%20Worship.mp3' },
    ]},
  Carta:       { c:'carta',       i:'fa-envelope-open-text', k:'Romántico',   x:'#d4a574', e:'✉️', b:'linear-gradient(135deg,#d4a574,#e8c9a0,#faf0e6)',  d:'Una carta de amor digital elegante y nostálgica',                       ej:'Querido amor, escribo estas líneas para recordarte lo mucho que significas ✉️',             mu:null, musicas:[] },
  Declaracion: { c:'declaracion', i:'fa-hand-holding-heart', k:'Romántico',   x:'#e74c3c', e:'❤️', b:'linear-gradient(135deg,#e74c3c,#ff8a80,#fce4e4)',  d:'Declara tu amor con un mensaje valiente y emotivo',                     ej:'No sabía que el amor verdadero existía hasta que te conocí ❤️',                             mu:'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3',
    musicas: [
      { n:'Flores Amarillas', u:'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3' },
      { n:'You Are Somebody', u:'https://raw.githubusercontent.com/geluksee/hopeee/main/You%20are%20Somebody%20Else%20by%20Flora%20Cash.mp3' },
      { n:'I Surrender',      u:'https://raw.githubusercontent.com/geluksee/hopeee/main/I%20Surrender%20-%20Hillsong%20Worship.mp3' },
    ]},
  Saludo:      { c:'saludo',      i:'fa-sun',                k:'Amistad',     x:'#ff9a3c', e:'🌅', b:'linear-gradient(135deg,#ff9a3c,#ffcc02,#fff8e1)',  d:'Buenos días, buenas noches o saludos especiales',                       ej:'Buenos días sol, que tu día esté lleno de sonrisas y bendiciones 🌅',                       mu:null, musicas:[] },
  Mujer:       { c:'mujer',       i:'fa-venus',              k:'Celebración', x:'#8B5CF6', e:'💜', b:'linear-gradient(135deg,#8B5CF6,#C084FC,#F3E8FF)',  d:'Celebra el Día de la Mujer con un mensaje especial y personalizado',    ej:'Tu fuerza, tu luz y tu valentía inspiran al mundo entero 💜',                               mu:'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3',
    img: 'https://i.postimg.cc/0PfGKG79/image.png',
    musicas: [
      { n:'Flores Amarillas', u:'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3' },
      { n:'You Are Somebody', u:'https://raw.githubusercontent.com/geluksee/hopeee/main/You%20are%20Somebody%20Else%20by%20Flora%20Cash.mp3' },
      { n:'I Surrender',      u:'https://raw.githubusercontent.com/geluksee/hopeee/main/I%20Surrender%20-%20Hillsong%20Worship.mp3' },
    ]},
  Mujer1:      { c:'mujer1',      i:'fa-venus',              k:'Celebración', x:'#ff3849', e:'🩷', b:'linear-gradient(135deg,#ff3849,#ff7a85,#ffccd1)',  d:'Día de la Mujer con estilo rosa vibrante',                              ej:'Eres luz, fuerza e inspiración. Feliz día 🩷',                                             mu:'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3',
    img: 'https://i.postimg.cc/0PfGKG79/image.png',
    musicas: [
      { n:'Flores Amarillas', u:'https://raw.githubusercontent.com/geluksee/nice/main/FloresAmarillas.mp3' },
      { n:'You Are Somebody', u:'https://raw.githubusercontent.com/geluksee/hopeee/main/You%20are%20Somebody%20Else%20by%20Flora%20Cash.mp3' },
      { n:'I Surrender',      u:'https://raw.githubusercontent.com/geluksee/hopeee/main/I%20Surrender%20-%20Hillsong%20Worship.mp3' },
    ]},
};

// ==================== EXPORTS AUTOMÁTICOS ====================
export const plantillas = M;
export const nombres    = () => Object.keys(M);
export const categorias = () => [...new Set(Object.values(M).map(p => p.k))];
export const obtener    = (n) => M[n] || M.Amor;
export const porCategoria = (k) => Object.entries(M).filter(([,p]) => p.k === k);

export const pls = Object.fromEntries(Object.entries(M).map(([k,v]) => [k, v.c]));
export const ico = Object.fromEntries(Object.entries(M).map(([k,v]) => [k, v.i]));
export const bg  = Object.fromEntries(Object.entries(M).map(([k,v]) => [k, v.b]));

const porCarpeta = (c) => Object.keys(M).find(k => M[k].c === c) || 'Amor';

// ==================== URL ====================
export let parametro = null;

export const miurl = () => {
  const p = new URLSearchParams(location.search);
  const keys = [...p.keys()];
  if (!keys.length) return false;

  if (p.has('ver')) { parametro = { id: p.get('ver'), tipo: 'publico' }; return true; }

  const n = keys[0];
  if (M[n]) {
    const dec = (k) => decodeURIComponent((p.get(k) || '').replace(/\+/g, ' '));
    parametro = {
      plantilla: M[n].c, nombre: n, tipo: 'directo',
      de: dec('de'), para: dec('para'), msg: dec('msg'),
      musica: p.get('musica') ? decodeURIComponent(p.get('musica')) : (M[n].mu || ''),
      emoji: M[n].e,
      img: p.get('img') ? decodeURIComponent(p.get('img')) : (M[n].img ? M[n].img.trim() : '')
    };
    return true;
  }

  if (n && !M[n] && !p.get(n)) { parametro = { id: n, tipo: 'wiloves' }; return true; }
  return false;
};

// ==================== RESOLVER ====================
const ocultar = () => {
  $('.wiheader,.foo,#wiTema').hide();
  $('#wimain').css({ maxWidth:'100%', padding:0, margin:0, minHeight:'100dvh' });
  $('body').css({ overflow:'hidden' });
};

const noexiste = () => `
<div class="dpvc" style="height:100dvh;gap:2vh;background:var(--bg)">
  <span style="font-size:8vh">💔</span>
  <h2 style="color:var(--tx);font-size:var(--fz_l2)">Mensaje no encontrado</h2>
  <p style="color:var(--tx3);font-size:var(--fz_m2)">El enlace es inválido o fue eliminado</p>
  <a href="/crear" style="margin-top:2vh;padding:1.2vh 3vh;background:var(--mco);color:var(--txa);border-radius:50px;font-weight:700;font-size:var(--fz_m3)"><i class="fas fa-plus"></i> Crear nuevo</a>
  <a href="/" style="color:var(--tx3);font-size:var(--fz_m1);margin-top:1vh">← Volver a Lovewi</a>
</div>`;

const normalizar = (d) => {
  const carpeta = d.plantilla || d.carpeta || 'amor';
  const nombre = d.nombre || porCarpeta(carpeta);
  const pl = M[nombre] || M.Amor;
  return {
    plantilla: carpeta, nombre, tipo: d.tipo || 'wiloves',
    de: d.de || '', para: d.para || '', msg: d.msg || d.mensaje || '',
    musica: d.musica || pl.mu || '', emoji: d.emoji || pl.e,
    img: d.img || (pl.img ? pl.img.trim() : '')
  };
};

const renderizar = async (data) => {
  const m = await import(`./plantillas/${data.plantilla}.js`);
  $('#wimain').html(m.render(data));
  m.init?.(data);
};

export const resolver = async () => {
  ocultar();
  try {
    if (parametro.tipo === 'directo') return await renderizar(parametro);
    const { buscar } = parametro.tipo === 'publico'
      ? await import('./smile/publico.js')
      : await import('./smile/wiloves.js');
    const data = await buscar(parametro.id);
    data ? await renderizar(normalizar(data)) : $('#wimain').html(noexiste());
  } catch (e) { console.error('Error:', e); $('#wimain').html(noexiste()); }
};

// ==================== GENERADORES URL ====================
export const genURL = (pl, de, para, msg = '', musica = '', img = '') =>
  `${location.origin}/?${pl}${de ? `&de=${encodeURIComponent(de)}` : ''}${para ? `&para=${encodeURIComponent(para)}` : ''}${msg ? `&msg=${encodeURIComponent(msg)}` : ''}${musica ? `&musica=${encodeURIComponent(musica)}` : ''}${img ? `&img=${encodeURIComponent(img)}` : ''}`;
export const genPublica = (id) => `${location.origin}/?ver=${id}`;
export const genPrivada = (id) => `${location.origin}/?${id}`;