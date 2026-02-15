import './crear.css';
import $ from 'jquery';
import { wicopy, wiSpin, wiTip, getls, Notificacion } from '../widev.js';
import { genURL, genPublica, genPrivada, plantillas, ico, bg } from '../parametros.js';

const esAuth = () => !!getls('wiSmile');

export const render = () => `
<div class="crear">
  <div class="cr_izq">
    <div class="cr_cab">
      <h2><i class="fas fa-wand-magic-sparkles"></i> Crea tu Mensaje Especial</h2>
      <div class="cr_accs">
        <button class="cr_acc" id="accVer"><i class="fas fa-eye"></i> Vista previa</button>
        <button class="cr_acc" id="accCopiar"><i class="fas fa-copy"></i> Copiar</button>
        <button class="cr_acc borrar" id="accLimpiar"><i class="fas fa-rotate-left"></i> Limpiar</button>
      </div>
    </div>

    <div class="cr_sec">
      <h3 class="cr_stit"><i class="fas fa-pen-fancy"></i> Personaliza el mensaje</h3>
      <div class="cr_form">
        <div class="cr_row">
          <div class="cr_campo">
            <label>De <small>¿Quién envía?</small></label>
            <div class="cr_inp"><i class="fas fa-user"></i><input id="cDe" maxlength="30" placeholder="Tu nombre"></div>
          </div>
          <div class="cr_campo">
            <label>Para <small>¿A quién va?</small></label>
            <div class="cr_inp"><i class="fas fa-heart"></i><input id="cPara" maxlength="30" placeholder="Su nombre"></div>
          </div>
        </div>
        <div class="cr_campo">
          <label>Mensaje <small id="cCont">0/200</small></label>
          <textarea id="cMsg" maxlength="200" rows="3" placeholder="Escribe algo desde el corazón..."></textarea>
        </div>
        <div class="cr_campo">
          <label>Música <small>URL opcional</small></label>
          <div class="cr_inp"><i class="fas fa-music"></i><input id="cMusica" maxlength="200" placeholder="https://ejemplo.com/cancion.mp3"></div>
        </div>
        <div class="cr_row">
          <div class="cr_campo">
            <label>Link personalizado <small>Mín. 3 caracteres</small></label>
            <div class="cr_inp cr_inp_link">
              <span class="cr_pre">${location.origin}/${esAuth() ? '?' : '?ver='}</span>
              <input id="cLink" maxlength="30" placeholder="${esAuth() ? 'paratiDeysi' : 'miamor'}" spellcheck="false">
              <span class="cr_st" id="linkStatus"></span>
            </div>
          </div>
          <div class="cr_campo">
            <label>Plantilla <small>Elige el estilo</small></label>
            <div class="cr_select">
              <select id="selPlantilla">
                ${Object.keys(plantillas).map((k, i) => `<option value="${k}"${!i ? ' selected' : ''}>${k}</option>`).join('')}
              </select>
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cr_sec cr_save">
      <button class="cr_gbtn ${esAuth() ? '' : 'cr_gbtn_pub'}" id="${esAuth() ? 'guardarNube' : 'genCorta'}">
        <i class="fas fa-cloud-arrow-up"></i> ${esAuth() ? 'Guardar y obtener enlace' : 'Generar enlace público'}
      </button>
      
      <div class="cr_url_row">
        <label>Enlace corto</label>
        <div class="cr_url_box cr_url_corta">
          <input id="urlCorta" readonly placeholder="${esAuth() ? 'Se generará al guardar' : 'Se generará al guardar en la nube'}">
          <button class="cr_ubtn" id="copCorta" ${wiTip('Copiar')}><i class="fas fa-copy"></i></button>
          <button class="cr_ubtn" id="abrCorta" ${wiTip('Abrir')}><i class="fas fa-arrow-up-right-from-square"></i></button>
        </div>
      </div>
      
      <div class="cr_url_row">
        <label>Enlace completo</label>
        <div class="cr_url_box">
          <input id="urlLarga" readonly placeholder="Se genera automáticamente al escribir">
          <button class="cr_ubtn" id="copLarga" ${wiTip('Copiar')}><i class="fas fa-copy"></i></button>
          <button class="cr_ubtn" id="abrLarga" ${wiTip('Abrir')}><i class="fas fa-arrow-up-right-from-square"></i></button>
        </div>
      </div>
      
      ${esAuth() ? '' : '<p class="cr_nota"><i class="fas fa-triangle-exclamation"></i> Sin cuenta los enlaces expiran en 30 días. <a href="/smile">Crear cuenta gratis →</a></p>'}
    </div>
  </div>

  <div class="cr_der">
    <div class="cr_prev">
      <div class="cr_prev_cab">
        <h3><i class="fas fa-eye"></i> Vista previa</h3>
        <div class="cr_disps">
          <button class="cr_disp active" data-disp="movil" ${wiTip('Móvil')}><i class="fas fa-mobile-screen"></i></button>
          <button class="cr_disp" data-disp="escritorio" ${wiTip('Escritorio')}><i class="fas fa-desktop"></i></button>
        </div>
      </div>
      <div class="cr_marco" id="marco">
        <div class="cr_mini" id="miniVista">
          <p class="pv_lbl">Para ti</p>
          <h2 class="pv_nom" id="pvPara">___</h2>
          <span class="pv_cor">❤️</span>
          <p class="pv_msg" id="pvMsg">Tu mensaje aparecerá aquí...</p>
          <p class="pv_de">Con amor, <span id="pvDe">___</span></p>
        </div>
      </div>
    </div>
    <div class="cr_share">
      <div class="cr_url_row">
        <label><i class="fas fa-share-nodes"></i> Compartir</label>
        <div class="cr_share_btns">
          <a class="cr_sbtn cr_wa" id="compWA" href="#" target="_blank" ${wiTip('WhatsApp')}><i class="fab fa-whatsapp"></i></a>
          <a class="cr_sbtn cr_tg" id="compTG" href="#" target="_blank" ${wiTip('Telegram')}><i class="fab fa-telegram"></i></a>
          <button class="cr_sbtn cr_nt" id="compNat" ${wiTip('Más opciones')}><i class="fas fa-ellipsis"></i></button>
        </div>
      </div>
    </div>
  </div>
</div>`;

export const init = () => {
  let pl = 'Amor', linkTimer = null;
  const auth = esAuth();
  const vals = () => ({
    link: $('#cLink').val().trim().replace(/[^a-záéíóúñA-Z0-9]/gi, ''),
    de: $('#cDe').val().trim(),
    para: $('#cPara').val().trim(),
    msg: $('#cMsg').val().trim(),
    musica: $('#cMusica').val().trim()
  });
  const alerta = () => Notificacion('Completa link y al menos un nombre 💕', 'warning');

  const validarLink = async (id) => {
    if (!id || id.length < 3) return $('#linkStatus').html('<i class="fas fa-minus" style="color:var(--tx3)"></i>');
    $('#linkStatus').html('<i class="fas fa-spinner fa-spin" style="color:var(--tx3)"></i>');
    try {
      const mod = auth ? await import('../smile/wiloves.js') : await import('../smile/publico.js');
      const ok = !(await mod.existe(id));
      $('#linkStatus').html(ok
        ? '<i class="fas fa-circle-check" style="color:var(--success)"></i>'
        : '<i class="fas fa-circle-xmark" style="color:var(--error)"></i>');
      return ok;
    } catch { 
      $('#linkStatus').html('<i class="fas fa-triangle-exclamation" style="color:var(--warning)"></i>');
      return false;
    }
  };

  const generarLinkAuto = async () => {
    const { de, para } = vals();
    if (!de && !para) return;
    
    const base = (para || de).toLowerCase().replace(/[^a-záéíóúñ0-9]/gi, '').substring(0, 15);
    if (!base || base.length < 3) return;
    
    let link = base;
    let contador = 1;
    
    while (true) {
      const ok = await validarLink(link);
      if (ok) {
        $('#cLink').val(link).trigger('input');
        break;
      }
      link = base + contador;
      contador++;
      if (contador > 99) break;
    }
  };

  const actURL = () => {
    const { de, para, msg } = vals();
    const url = (de || para) ? genURL(pl, de, para, msg) : '';
    $('#urlLarga').val(url);
    return url;
  };

  const actVista = () => {
    const { de, para, msg } = vals();
    $('#pvDe').text(de || '___');
    $('#pvPara').text(para || '___');
    $('#pvMsg').text(msg || 'Tu mensaje aparecerá aquí...');
    $('#cCont').text(`${msg.length}/200`);
    $('#miniVista').css('background', bg[pl] || bg.Amor);
    actURL();
  };

  const actShare = (url) => {
    const txt = encodeURIComponent(`💌 Mensaje especial: ${url}`);
    $('#compWA').attr('href', `https://wa.me/?text=${txt}`);
    $('#compTG').attr('href', `https://t.me/share/url?url=${encodeURIComponent(url)}&text=💌`);
  };

  const limpiar = () => {
    $('#cDe, #cPara, #cMsg, #cLink, #cMusica, #urlCorta, #urlLarga').val('');
    $('#linkStatus').html('');
    actVista();
  };

  const mejor = () => $('#urlCorta').val() || $('#urlLarga').val();

  $(document).on('input', '#cLink', function () {
    const v = $(this).val().replace(/[^a-záéíóúñA-Z0-9]/gi, '');
    $(this).val(v);
    clearTimeout(linkTimer);
    linkTimer = setTimeout(() => validarLink(v), 500);
  });

  $(document).on('change', '#selPlantilla', function () {
    pl = $(this).val();
    actVista();
  });

  let autoTimer = null;
  $(document).on('input', '#cDe, #cPara', function () {
    actVista();
    clearTimeout(autoTimer);
    autoTimer = setTimeout(() => {
      if (!$('#cLink').val()) generarLinkAuto();
    }, 800);
  });

  $(document).on('input', '#cMsg, #cMusica', () => {
    actVista();
    const url = mejor();
    if (url) actShare(url);
  });

  $(document).on('click', '.cr_disp', function () {
    $('.cr_disp').removeClass('active');
    $(this).addClass('active');
    $('#marco').toggleClass('escritorio', $(this).data('disp') === 'escritorio');
  });

  $(document).on('click', '#accVer', () => {
    const url = mejor() || actURL();
    url ? window.open(url, '_blank') : alerta();
  });

  $(document).on('click', '#accCopiar', function () {
    const url = mejor() || actURL();
    url ? (wicopy(url, this, '¡Copiado!'), actShare(url)) : alerta();
  });

  $(document).on('click', '#copLarga', function () {
    const url = $('#urlLarga').val();
    url ? wicopy(url, this, '¡Copiado!') : Notificacion('No hay enlace generado', 'warning');
  });

  $(document).on('click', '#abrLarga', () => {
    const url = $('#urlLarga').val();
    url ? window.open(url, '_blank') : Notificacion('No hay enlace generado', 'warning');
  });

  $(document).on('click', '#guardarNube, #genCorta', async function () {
    const v = vals();
    if (!v.link || (!v.de && !v.para)) return alerta();
    if ($('#linkStatus').find('.fa-circle-xmark').length) return Notificacion('Ese link ya existe, elige otro', 'error');
    
    wiSpin(this, true);
    try {
      const mod = auth ? await import('../smile/wiloves.js') : await import('../smile/publico.js');
      const id = await mod.guardar({ id: v.link, plantilla: plantillas[pl], nombre: pl, emoji: true, ...v });
      if (!id) return Notificacion('Link ocupado o error', 'error');
      
      const url = auth ? genPrivada(id) : genPublica(id);
      $('#urlCorta').val(url);
      actShare(url);
      
      // Copiar automáticamente
      wicopy(url, this, '¡Enlace copiado! ☁️');
      Notificacion('¡Enlace generado y copiado! ☁️', 'success');
      
      // Limpiar después
      setTimeout(() => limpiar(), 300000); // 5 minutos
    } catch (e) {
      console.error(e);
      Notificacion('Error al guardar', 'error');
    }
    wiSpin(this, false);
  });

  $(document).on('click', '#copCorta', function () {
    const url = $('#urlCorta').val();
    url ? wicopy(url, this, '¡Copiado!') : Notificacion('Genera el enlace primero', 'warning');
  });

  $(document).on('click', '#abrCorta', () => {
    const url = $('#urlCorta').val();
    url ? window.open(url, '_blank') : Notificacion('Genera el enlace primero', 'warning');
  });

  $(document).on('click', '#accLimpiar', () => {
    limpiar();
    Notificacion('Limpiado ✨', 'info');
  });

  $(document).on('click', '#compNat', (e) => {
    e.preventDefault();
    const url = mejor();
    if (!url) return alerta();
    navigator.share ? navigator.share({ title: 'Lovewi 💌', text: 'Mensaje especial', url }) : wicopy(url, '#compNat', '¡Copiado!');
  });

  actVista();
};

export const cleanup = () => $(document).off('click input change', '.cr_disp, #accVer, #accCopiar, #copLarga, #abrLarga, #guardarNube, #genCorta, #copCorta, #abrCorta, #accLimpiar, #compNat, #cDe, #cPara, #cMsg, #cLink, #cMusica, #selPlantilla');