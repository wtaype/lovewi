import $ from 'jquery';

const plantillas = { Amor: 'amor', Amistad: 'amistad' };
const ico = { Amor: 'fa-heart', Amistad: 'fa-user-group' };
const bg = {
  Amor: 'linear-gradient(135deg, #ff6b8a, #ffb3c1, #fff0f3)',
  Amistad: 'linear-gradient(135deg, #6b8aff, #b3c1ff, #f0f3ff)'
};

export let parametro = null;

export const miurl = () => {
  const s = location.search.slice(1);
  if (!s) return false;

  const partes = s.split('&');
  const nombre = partes[0]?.split('=')[0];
  if (!plantillas[nombre]) return false;

  parametro = { plantilla: plantillas[nombre], nombre };

  partes.slice(1).forEach(x => {
    const [k, v] = x.split('=');
    if (k && v) parametro[k.toLowerCase()] = decodeURIComponent(v.replace(/\+/g, ' '));
  });

  return true;
};

export const plantilla = () => {
  $('.wiheader, .foo, #wiTema').hide();
  $('#wimain').css({ maxWidth: '100%', padding: 0, margin: 0, minHeight: '100dvh' });
  $('body').css({ overflow: 'hidden' });
};

export const noexiste = () => `
  <div class="dpvc" style="height:100dvh; gap:2vh; background:var(--bg)">
    <span style="font-size:clamp(3rem, 8vh, 5rem)">💔</span>
    <h2 style="color:var(--tx); font-size:var(--fz_l2)">Plantilla no encontrada</h2>
    <p style="color:var(--tx3); font-size:var(--fz_m2)">El enlace no es válido o fue eliminado</p>
    <a href="/crear" style="margin-top:2vh; padding:1.2vh 3vh; background:var(--mco); color:var(--txa); border-radius:50px; font-weight:700; font-size:var(--fz_m3)">
      <i class="fas fa-plus"></i> Crear nuevo mensaje
    </a>
    <a href="/" style="color:var(--tx3); font-size:var(--fz_m1); margin-top:1vh">← Volver a Lovewi</a>
  </div>`;

export const wiGenURL = (pl, de, para, msg = '') => {
  let url = `${location.origin}/?${pl}`;
  if (de) url += `&de=${encodeURIComponent(de)}`;
  if (para) url += `&para=${encodeURIComponent(para)}`;
  if (msg) url += `&msg=${encodeURIComponent(msg)}`;
  return url;
};

export { plantillas, ico, bg };