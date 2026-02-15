import $ from 'jquery';

const pls = { Amor: 'amor', Amistad: 'amistad' };
const ico = { Amor: 'fa-heart', Amistad: 'fa-user-group' };
const bg = {
  Amor: 'linear-gradient(135deg, #ff6b8a, #ffb3c1, #fff0f3)',
  Amistad: 'linear-gradient(135deg, #6b8aff, #b3c1ff, #f0f3ff)'
};

export let parametro = null;

export const miurl = () => {
  const p = new URLSearchParams(location.search);
  const keys = [...p.keys()];
  if (!keys.length) return false;

  // /?ver=wilder → publico
  if (p.has('ver')) {
    parametro = { id: p.get('ver'), tipo: 'publico' };
    return true;
  }

  // /?Amor&de=x&para=y → directo
  const n = keys[0];
  if (pls[n]) {
    parametro = {
      plantilla: pls[n], nombre: n, tipo: 'directo',
      de: decodeURIComponent((p.get('de') || '').replace(/\+/g, ' ')),
      para: decodeURIComponent((p.get('para') || '').replace(/\+/g, ' ')),
      msg: decodeURIComponent((p.get('msg') || '').replace(/\+/g, ' '))
    };
    return true;
  }

  // /?paratiDeysi → wiLoves
  if (n && !pls[n] && !p.get(n)) {
    parametro = { id: n, tipo: 'wiloves' };
    return true;
  }

  return false;
};

const ocultar = () => {
  $('.wiheader, .foo, #wiTema').hide();
  $('#wimain').css({ maxWidth: '100%', padding: 0, margin: 0, minHeight: '100dvh' });
  $('body').css({ overflow: 'hidden' });
};

const noexiste = () => `
  <div class="dpvc" style="height:100dvh;gap:2vh;background:var(--bg)">
    <span style="font-size:8vh">💔</span>
    <h2 style="color:var(--tx);font-size:var(--fz_l2)">Mensaje no encontrado</h2>
    <p style="color:var(--tx3);font-size:var(--fz_m2)">El enlace es inválido o fue eliminado</p>
    <a href="/crear" style="margin-top:2vh;padding:1.2vh 3vh;background:var(--mco);color:var(--txa);border-radius:50px;font-weight:700;font-size:var(--fz_m3)">
      <i class="fas fa-plus"></i> Crear nuevo
    </a>
    <a href="/" style="color:var(--tx3);font-size:var(--fz_m1);margin-top:1vh">← Volver a Lovewi</a>
  </div>`;

const renderizar = async (data) => {
  const m = await import(`./plantillas/${data.plantilla}.js`);
  $('#wimain').html(m.render(data));
  m.init?.(data);
};

export const resolver = async () => {
  ocultar();
  try {
    if (parametro.tipo === 'directo') return await renderizar(parametro);

    const mod = parametro.tipo === 'publico'
      ? await import('./smile/publico.js')
      : await import('./smile/wiloves.js');

    const data = await mod.buscar(parametro.id);
    data ? await renderizar(data) : $('#wimain').html(noexiste());
  } catch (e) {
    console.error('Error:', e);
    $('#wimain').html(noexiste());
  }
};

export const genURL = (pl, de, para, msg = '') =>
  `${location.origin}/?${pl}${de ? `&de=${encodeURIComponent(de)}` : ''}${para ? `&para=${encodeURIComponent(para)}` : ''}${msg ? `&msg=${encodeURIComponent(msg)}` : ''}`;

export const genPublica = (id) => `${location.origin}/?ver=${id}`;
export const genPrivada = (id) => `${location.origin}/?${id}`;

export { pls as plantillas, ico, bg };