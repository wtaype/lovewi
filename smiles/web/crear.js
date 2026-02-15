import './crear.css';
import $ from 'jquery';
import { app, version } from '../wii.js';
import { wicopy, Notificacion } from '../widev.js';
import { wiGenURL, plantillas } from '../parametros.js';

const ico = { Amor: 'fa-heart', Amistad: 'fa-user-group' };
const bg = { Amor: 'linear-gradient(135deg,#ff6b8a,#ffb3c1,#fff0f3)', Amistad: 'linear-gradient(135deg,#6b8aff,#b3c1ff,#f0f3ff)' };

export const render = () => `
<div class="crear">
  <div class="cr_left">
    <div class="cr_head">
      <h2><i class="fas fa-heart"></i> Crea tu Mensaje</h2>
      <div class="cr_acts">
        <button class="cr_act" id="crVer" title="Ver plantilla"><i class="fas fa-eye"></i></button>
        <button class="cr_act" id="crCopy" title="Copiar enlace"><i class="fas fa-copy"></i></button>
        <button class="cr_act act_del" id="crDel" title="Limpiar todo"><i class="fas fa-trash-can"></i></button>
      </div>
    </div>

    <div class="cr_tabs">
      <span><i class="fas fa-layer-group"></i></span>
      ${Object.keys(plantillas).map((k, i) => `
        <div class="cr_tab${!i ? ' active' : ''}" data-pl="${k}"><i class="fas ${ico[k] || 'fa-heart'}"></i> ${k}</div>
      `).join('')}
    </div>

    <div class="cr_fields">
      <div class="cr_field">
        <label><i class="fas fa-user"></i> De</label>
        <input id="crDe" type="text" placeholder="Tu nombre" maxlength="30">
      </div>
      <div class="cr_field">
        <label><i class="fas fa-heart"></i> Para</label>
        <input id="crPara" type="text" placeholder="Su nombre" maxlength="30">
      </div>
      <div class="cr_field">
        <label><i class="fas fa-message"></i> Mensaje</label>
        <textarea id="crMsg" placeholder="Escribe un mensaje especial..." maxlength="200"></textarea>
        <div class="cr_count"><span id="crCount">0</span>/200</div>
      </div>
    </div>

    <div class="cr_link">
      <input id="crURL" type="text" readonly placeholder="Tu enlace aparecerá aquí..." value="">
      <button class="cr_link_btn" id="crLinkCopy" title="Copiar"><i class="fas fa-copy"></i></button>
      <button class="cr_link_btn" id="crLinkOpen" title="Abrir"><i class="fas fa-external-link"></i></button>
    </div>
  </div>

  <div class="cr_right">
    <div class="cr_pv_head">
      <h3><i class="fas fa-eye"></i> Vista previa</h3>
      <div class="cr_pv_device">
        <button class="cr_pv_dev active" data-dev="movil" title="Móvil"><i class="fas fa-mobile-screen"></i></button>
        <button class="cr_pv_dev" data-dev="desktop" title="Desktop"><i class="fas fa-desktop"></i></button>
      </div>
    </div>

    <div class="cr_preview">
      <div class="cr_pv_frame" id="crFrame">
        <div class="cr_pv_mini" id="crMini">
          <p class="pv_para_label">Para ti</p>
          <h2 class="pv_nombre" id="pvPara">___</h2>
          <span class="pv_corazon">❤️</span>
          <p class="pv_msg" id="pvMsg">Tu mensaje aparecerá aquí...</p>
          <p class="pv_de">Con amor, <span id="pvDe">___</span></p>
        </div>
      </div>
    </div>

    <div class="cr_share">
      <a class="cr_sh" id="shWhats" href="#" target="_blank" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
      <a class="cr_sh" id="shTele" href="#" target="_blank" title="Telegram"><i class="fab fa-telegram"></i></a>
      <button class="cr_sh" id="shNative" title="Compartir"><i class="fas fa-share-nodes"></i></button>
    </div>
  </div>
</div>`;

export const init = () => {
  let pl = 'Amor';

  const getVals = () => ({ de: $('#crDe').val().trim(), para: $('#crPara').val().trim(), msg: $('#crMsg').val().trim() });

  const updateURL = () => {
    const { de, para, msg } = getVals();
    const url = (de || para) ? wiGenURL(pl, de, para, msg) : '';
    $('#crURL').val(url);
    return url;
  };

  const updatePreview = () => {
    const { de, para, msg } = getVals();
    $('#pvDe').text(de || '___');
    $('#pvPara').text(para || '___');
    $('#pvMsg').text(msg || 'Tu mensaje aparecerá aquí...');
    $('#crCount').text(msg.length);
    $('#crMini').css('background', bg[pl] || bg.Amor);
    updateURL();
  };

  const shareLinks = (url) => {
    const txt = encodeURIComponent(`💌 Un mensaje especial para ti: ${url}`);
    $('#shWhats').attr('href', `https://wa.me/?text=${txt}`);
    $('#shTele').attr('href', `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent('💌 Un mensaje especial para ti')}`);
  };

  // Tabs plantilla
  $(document).on('click', '.cr_tab', function () {
    $('.cr_tab').removeClass('active');
    $(this).addClass('active');
    pl = $(this).data('pl');
    updatePreview();
  });

  // Input en vivo
  $(document).on('input', '#crDe, #crPara, #crMsg', () => {
    updatePreview();
    const url = $('#crURL').val();
    if (url) shareLinks(url);
  });

  // Device toggle
  $(document).on('click', '.cr_pv_dev', function () {
    $('.cr_pv_dev').removeClass('active');
    $(this).addClass('active');
    $('#crFrame').toggleClass('desktop', $(this).data('dev') === 'desktop');
  });

  // Acciones top
  $(document).on('click', '#crVer', () => {
    const url = updateURL();
    url ? window.open(url, '_blank') : Notificacion('Escribe al menos un nombre 💕', 'warning');
  });

  $(document).on('click', '#crCopy, #crLinkCopy', function () {
    const url = updateURL();
    url ? (wicopy(url, this, '¡Copiado!'), shareLinks(url)) : Notificacion('Escribe al menos un nombre 💕', 'warning');
  });

  $(document).on('click', '#crLinkOpen', () => {
    const url = $('#crURL').val();
    url ? window.open(url, '_blank') : Notificacion('Escribe al menos un nombre 💕', 'warning');
  });

  $(document).on('click', '#crDel', () => {
    $('#crDe, #crPara, #crMsg').val('');
    updatePreview();
    Notificacion('Campos limpiados ✨', 'info');
  });

  // Compartir nativo
  $(document).on('click', '#shNative', (e) => {
    e.preventDefault();
    const url = updateURL();
    if (!url) return Notificacion('Escribe al menos un nombre 💕', 'warning');
    navigator.share ? navigator.share({ title: `💌 ${app}`, text: 'Un mensaje especial para ti', url }) : wicopy(url, '#shNative', '¡Copiado!');
  });

  updatePreview();
  console.log(`💌 ${app} ${version} - Crear`);
};

export const cleanup = () => {
  $(document).off('click', '.cr_tab, .cr_pv_dev, #crVer, #crCopy, #crLinkCopy, #crLinkOpen, #crDel, #shNative');
  $(document).off('input', '#crDe, #crPara, #crMsg');
};