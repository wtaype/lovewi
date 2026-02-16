import './enviar.css';
import $ from 'jquery';
import QRCode from 'qrcode';
import { app } from '../wii.js';
import { Notificacion, wiTip } from '../widev.js';

// 📊 Estado
const estado = {
  qrOk: false,
  fondo: null,
  img: null,
  bgX: 50, bgY: 50, bgScale: 100,
  qrX: 0, qrY: 0, qrScale: 100,
  dragBg: false, dragQr: false
};

// 🎨 HTML
export const render = () => `
  <div class="enviar_container">
    <div class="env_layout">
      <div class="env_left">
        <div class="env_config_section">
          <div class="config_header">
            <h3><i class="fas fa-qrcode"></i> Generar QR Card</h3>
          </div>

          <div class="form_group">
            <label><i class="fas fa-image"></i> Fondo del QR:</label>
            <input type="file" id="fondoInput" accept="image/*" hidden>
            <div class="upload_btn" id="uploadBtn">
              <i class="fas fa-cloud-upload-alt"></i>
              <span>Subir, arrastrar o pegar imagen</span>
            </div>
          </div>

          <div class="form_group">
            <label><i class="fas fa-link"></i> Ingresa el link:</label>
            <input type="text" id="linkInput" placeholder="https://lovewi.web.app/mi-mensaje">
          </div>

          <div class="form_group">
            <label><i class="fas fa-font"></i> Texto del QR (opcional):</label>
            <textarea id="textoInput" placeholder="ESCANCEA AQUI 💌" rows="3"></textarea>
          </div>

          <div class="form_group">
            <label><i class="fas fa-expand-arrows-alt"></i> Tamaño del fondo:</label>
            <div class="range_control">
              <div class="range_header">
                <span>Zoom</span>
                <span class="range_value" id="bgScaleVal">100%</span>
              </div>
              <input type="range" class="range_slider" id="bgScaleSlider" min="10" max="200" value="100" step="5">
            </div>
          </div>

          <div class="form_group">
            <label><i class="fas fa-qrcode"></i> Tamaño QR:</label>
            <div class="range_control">
              <div class="range_header">
                <span>Escala</span>
                <span class="range_value" id="qrScaleVal">100%</span>
              </div>
              <input type="range" class="range_slider" id="qrScaleSlider" min="30" max="200" value="100" step="5">
            </div>
          </div>

          <div class="info_section">
            <h4><i class="fas fa-info-circle"></i> Información de imagen</h4>
            <div class="info_item"><span>Dimensiones:</span><span id="dimInfo">-</span></div>
            <div class="info_item"><span>Formato:</span><span id="formatInfo">JPG</span></div>
            <div class="info_item"><span>Calidad:</span><span id="qualityInfo">95%</span></div>
          </div>
        </div>
      </div>

      <div class="env_right">
        <div class="preview_card" id="previewCard">
          <div class="card_canvas" id="cardCanvas">
            <div class="placeholder_content" id="placeholder">
              <i class="fas fa-heart"></i>
              <h2>Imagen para mostrar</h2>
              <p>Sube un fondo y genera tu QR Card</p>
            </div>
            <div class="card_content" id="cardContent" style="display:none;">
              <div class="card_qr_group" id="qrGroup">
                <div class="card_qr_wrapper">
                  <canvas id="qrCanvas" class="card_qr"></canvas>
                  <img src="${import.meta.env.BASE_URL}smile.avif" alt="Logo" class="qr_logo">
                </div>
                <div class="card_text" id="cardText"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="download_footer">
          <div class="footer_controls">
            <div class="footer_group">
              <label>Formato:</label>
              <select id="formatoSelect">
                <option value="jpeg" selected>JPG</option>
                <option value="png">PNG</option>
                <option value="webp">WEBP</option>
              </select>
            </div>
            <div class="footer_group">
              <label>Calidad:</label>
              <input type="number" id="calidadInput" min="10" max="100" value="95" step="5">
            </div>
          </div>
          <div class="footer_actions">
            <button class="btn_save" id="btnGuardar" disabled>
              <i class="fas fa-save"></i> <span>Guardar</span>
            </button>
            <button class="btn_new" id="btnNuevo">
              <i class="fas fa-plus-circle"></i> <span>Nuevo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// 🎯 Init
export const init = () => {
  console.log(`✅ Enviar QR de ${app} cargado`);

  $('#linkInput, #textoInput').on('input', actualizarPreview);
  $('#uploadBtn').on('click', () => $('#fondoInput').trigger('click'));
  $('#fondoInput').on('change', e => cargarFondo(e.target.files[0]));
  $('#btnGuardar').on('click', guardarCard);
  $('#btnNuevo').on('click', nuevoCard);
  $('#formatoSelect, #calidadInput').on('input change', actualizarInfo);
  $('#bgScaleSlider').on('input', () => { estado.bgScale = +$('#bgScaleSlider').val(); $('#bgScaleVal').text(`${estado.bgScale}%`); renderFondo(); });
  $('#qrScaleSlider').on('input', () => { estado.qrScale = +$('#qrScaleSlider').val(); $('#qrScaleVal').text(`${estado.qrScale}%`); renderQR(); });

  initDragDrop();
  initPaste();
  initDragBg();
  initDragQr();

  $('#textoInput').val('ESCANCEA AQUI 💌');
  actualizarInfo();
};

// 🎨 Drag & Drop
function initDragDrop() {
  ['#uploadBtn', '#previewCard'].forEach(sel => {
    $(sel).on('dragover', e => { e.preventDefault(); $(sel).addClass('dragover'); })
      .on('dragleave', () => $(sel).removeClass('dragover'))
      .on('drop', e => { e.preventDefault(); $(sel).removeClass('dragover'); const f = e.originalEvent.dataTransfer?.files[0]; if (f) cargarFondo(f); });
  });
}

// 📋 Paste
function initPaste() {
  $(document).on('paste', e => {
    for (let item of (e.originalEvent.clipboardData?.items || [])) {
      if (item.type.startsWith('image')) { cargarFondo(item.getAsFile()); Notificacion('¡Imagen pegada! 📋', 'success', 2000); break; }
    }
  });
}

// 🖱️ Drag Fondo
function initDragBg() {
  let sx, sy;
  $('#cardCanvas').on('mousedown', e => {
    if (!estado.fondo || $(e.target).closest('#qrGroup').length) return;
    estado.dragBg = true; sx = e.clientX; sy = e.clientY;
    $('#cardCanvas').css('cursor', 'grabbing');
  });
  $(document).on('mousemove', e => {
    if (!estado.dragBg) return;
    estado.bgX += (e.clientX - sx) / 8; estado.bgY += (e.clientY - sy) / 8;
    sx = e.clientX; sy = e.clientY; renderFondo();
  }).on('mouseup', () => { if (estado.dragBg) { estado.dragBg = false; $('#cardCanvas').css('cursor', 'move'); } });
}

// 🎯 Drag QR
function initDragQr() {
  let sx, sy;
  $('#qrGroup').on('mousedown', e => {
    if (!estado.qrOk) return;
    e.stopPropagation(); estado.dragQr = true; sx = e.clientX; sy = e.clientY;
  });
  $(document).on('mousemove', e => {
    if (!estado.dragQr) return;
    e.preventDefault(); estado.qrX += e.clientX - sx; estado.qrY += e.clientY - sy;
    sx = e.clientX; sy = e.clientY; renderQR();
  }).on('mouseup', () => { estado.dragQr = false; });
}

// 🖼️ Calcular dimensiones visibles del fondo
function calcBgLayout(containerW, containerH) {
  if (!estado.img) return null;
  const imgW = estado.img.naturalWidth;
  const imgH = estado.img.naturalHeight;
  const imgRatio = imgW / imgH;

  // background-size: N% se basa en el ancho del contenedor
  const bgW = containerW * (estado.bgScale / 100);
  const bgH = bgW / imgRatio;

  // background-position: X% Y%
  const bgX = (containerW - bgW) * (estado.bgX / 100);
  const bgY = (containerH - bgH) * (estado.bgY / 100);

  return { bgX, bgY, bgW, bgH };
}

// 🔄 Renders
function renderFondo() {
  if (!estado.fondo) return;
  $('#cardCanvas').css({
    'background-image': `url(${estado.fondo})`,
    'background-size': `${estado.bgScale}%`,
    'background-position': `${estado.bgX}% ${estado.bgY}%`
  });
}

function renderQR() {
  $('#qrGroup').css('transform', `translate(${estado.qrX}px, ${estado.qrY}px) scale(${estado.qrScale / 100})`);
}

// 🔄 Preview
async function actualizarPreview() {
  const link = $('#linkInput').val().trim();
  const texto = $('#textoInput').val().trim();

  if (!link) { $('#placeholder').show(); $('#cardContent').hide(); $('#btnGuardar').prop('disabled', true); estado.qrOk = false; return; }

  try {
    await QRCode.toCanvas(document.getElementById('qrCanvas'), link, { width: 350, margin: 1, color: { dark: '#000000', light: '#FFFFFF' } });
    $('#placeholder').hide(); $('#cardContent').show();
    texto.trim() ? $('#cardText').text(texto).show() : $('#cardText').hide();
    $('#btnGuardar').prop('disabled', false); estado.qrOk = true;
    if (!estado.fondo) $('#cardCanvas').css('background', 'linear-gradient(135deg, #ff6b9d, #c06c84)');
  } catch (err) { console.error(err); Notificacion('Error al generar QR', 'error'); }
}

// 📂 Cargar Fondo
function cargarFondo(file) {
  if (!file?.type.startsWith('image')) return Notificacion('Selecciona una imagen válida', 'error');
  const reader = new FileReader();
  reader.onload = e => {
    estado.fondo = e.target.result;
    const img = new Image();
    img.onload = () => {
      estado.img = img;
      const ratio = img.naturalWidth / img.naturalHeight;
      $('#cardCanvas').css('aspect-ratio', `${ratio}`);
      $('#dimInfo').text(`${img.naturalWidth}×${img.naturalHeight}`);
      estado.bgX = 50; estado.bgY = 50; estado.bgScale = 100;
      $('#bgScaleSlider').val(100); $('#bgScaleVal').text('100%');
      renderFondo();
    };
    img.src = e.target.result;
    $('#uploadBtn').addClass('uploaded').html('<i class="fas fa-check-circle"></i> <span>Fondo cargado</span>');
    Notificacion(`Fondo: ${file.name}`, 'success', 2000);
    if ($('#linkInput').val().trim()) actualizarPreview();
  };
  reader.readAsDataURL(file);
}

// 📊 Info
function actualizarInfo() {
  $('#formatInfo').text($('#formatoSelect').val().toUpperCase());
  $('#qualityInfo').text(`${$('#calidadInput').val()}%`);
}

// 🔲 Dibujar rectángulo redondeado
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// 💾 Guardar
async function guardarCard() {
  if (!estado.qrOk) return Notificacion('Primero genera el QR', 'warning', 2000);

  const formato = $('#formatoSelect').val();
  const calidad = +$('#calidadInput').val() / 100;
  const $btn = $('#btnGuardar');
  $btn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> <span>Generando...</span>');

  try {
    const el = document.getElementById('cardCanvas');
    const elW = el.offsetWidth;
    const elH = el.offsetHeight;

    // Calcular área visible del fondo en el preview
    let outW, outH, cropX, cropY, cropW, cropH;

    if (estado.img) {
      const bg = calcBgLayout(elW, elH);

      // Intersección entre el fondo y el contenedor (lo visible)
      const visX = Math.max(0, bg.bgX);
      const visY = Math.max(0, bg.bgY);
      const visR = Math.min(elW, bg.bgX + bg.bgW);
      const visB = Math.min(elH, bg.bgY + bg.bgH);
      const visW = visR - visX;
      const visH = visB - visY;

      // Mapear a coordenadas de la imagen original
      const imgW = estado.img.naturalWidth;
      const imgH = estado.img.naturalHeight;
      const scaleImg = imgW / bg.bgW;

      cropX = (visX - bg.bgX) * scaleImg;
      cropY = (visY - bg.bgY) * scaleImg;
      cropW = visW * scaleImg;
      cropH = visH * scaleImg;

      outW = Math.round(cropW);
      outH = Math.round(cropH);

      // Escalas para posicionar QR
      var scaleOutX = outW / visW;
      var scaleOutY = outH / visH;
      var offsetVisX = visX;
      var offsetVisY = visY;
    } else {
      outW = 1920;
      outH = Math.round(1920 * elH / elW);
      var scaleOutX = outW / elW;
      var scaleOutY = outH / elH;
      var offsetVisX = 0;
      var offsetVisY = 0;
    }

    const canvas = document.createElement('canvas');
    canvas.width = outW;
    canvas.height = outH;
    const ctx = canvas.getContext('2d');

    // 1) Fondo
    if (estado.img) {
      ctx.drawImage(estado.img, cropX, cropY, cropW, cropH, 0, 0, outW, outH);
    } else {
      const grd = ctx.createLinearGradient(0, 0, outW, outH);
      grd.addColorStop(0, '#ff6b9d'); grd.addColorStop(1, '#c06c84');
      ctx.fillStyle = grd; ctx.fillRect(0, 0, outW, outH);
    }

    // 2) QR + elementos - posiciones relativas al área visible
    const canvasRect = el.getBoundingClientRect();

    const drawElement = (domEl, callback) => {
      if (!domEl) return;
      const rect = domEl.getBoundingClientRect();
      const rx = ((rect.left - canvasRect.left) - offsetVisX) * scaleOutX;
      const ry = ((rect.top - canvasRect.top) - offsetVisY) * scaleOutY;
      const rw = rect.width * scaleOutX;
      const rh = rect.height * scaleOutY;
      callback(rx, ry, rw, rh);
    };

    // Wrapper blanco
    const wrapperEl = el.querySelector('.card_qr_wrapper');
    drawElement(wrapperEl, (x, y, w, h) => {
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,0.3)'; ctx.shadowBlur = 40 * (scaleOutX / 2); ctx.shadowOffsetY = 15 * (scaleOutY / 2);
      ctx.fillStyle = '#FFFFFF';
      roundRect(ctx, x, y, w, h, 12 * scaleOutX);
      ctx.fill();
      ctx.restore();
    });

    // QR canvas
    const qrCanvas = document.getElementById('qrCanvas');
    drawElement(qrCanvas, (x, y, w, h) => {
      ctx.drawImage(qrCanvas, x, y, w, h);
    });

    // Logo
    const logoEl = el.querySelector('.qr_logo');
    if (logoEl?.complete && logoEl.naturalWidth > 0) {
      drawElement(logoEl, (x, y, w, h) => {
        ctx.drawImage(logoEl, x, y, w, h);
      });
    }

    // Texto
    const textEl = document.getElementById('cardText');
    if (textEl && textEl.style.display !== 'none' && textEl.textContent.trim()) {
      drawElement(textEl, (x, y, w, h) => {
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        roundRect(ctx, x, y, w, h, 8 * scaleOutX);
        ctx.fill();

        const fontSize = parseFloat(getComputedStyle(textEl).fontSize) * scaleOutX;
        ctx.font = `700 ${fontSize}px ${getComputedStyle(textEl).fontFamily}`;
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(0,0,0,0.7)'; ctx.shadowBlur = 10 * scaleOutX;
        ctx.fillText(textEl.textContent, x + w / 2, y + h / 2);
        ctx.shadowColor = 'transparent'; ctx.shadowBlur = 0;
      });
    }

    // Descargar
    const ext = formato === 'jpeg' ? 'jpg' : formato;
    const mimeType = formato === 'jpeg' ? 'image/jpeg' : `image/${formato}`;
    canvas.toBlob(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `ParatiAmor.${ext}`;
      a.click();
      URL.revokeObjectURL(a.href);
      Notificacion(`¡Guardado ParatiAmor.${ext} (${outW}×${outH})!`, 'success', 3000);
      wiTip('#btnGuardar', '¡Descargado! 💕', 'success', 1500);
    }, mimeType, calidad);

  } catch (err) { console.error(err); Notificacion('Error al generar imagen', 'error'); }

  $btn.prop('disabled', false).html('<i class="fas fa-save"></i> <span>Guardar</span>');
}

// 🆕 Nuevo
function nuevoCard() {
  $('#linkInput, #textoInput').val('');
  $('#fondoInput').val('');
  $('#formatoSelect').val('jpeg');
  $('#calidadInput').val(95);
  $('#bgScaleSlider, #qrScaleSlider').val(100);

  Object.assign(estado, { fondo: null, img: null, qrOk: false, bgX: 50, bgY: 50, bgScale: 100, qrX: 0, qrY: 0, qrScale: 100 });

  $('#uploadBtn').removeClass('uploaded').html('<i class="fas fa-cloud-upload-alt"></i> <span>Subir, arrastrar o pegar imagen</span>');
  $('#cardCanvas').css({ 'background-image': 'none', 'background': 'var(--bg3)', 'aspect-ratio': '16/9' });
  $('#placeholder').show(); $('#cardContent').hide();
  $('#btnGuardar').prop('disabled', true);
  $('#textoInput').val('Escanea para ver mi mensaje 💌');
  $('#qrGroup').css('transform', 'translate(0px,0px) scale(1)');
  $('#bgScaleVal, #qrScaleVal').text('100%');
  $('#dimInfo').text('-');
  actualizarInfo();
  Notificacion('Listo para crear nuevo QR Card', 'success', 2000);
}

// 🧹 Cleanup
export const cleanup = () => {
  console.log('🧹 Enviar limpiado');
  Object.assign(estado, { qrOk: false, fondo: null, img: null });
  $(document).off('mousemove mouseup paste');
  $('#linkInput,#textoInput,#fondoInput,#uploadBtn,#btnGuardar,#btnNuevo,#formatoSelect,#calidadInput,#bgScaleSlider,#qrScaleSlider,#cardCanvas,#qrGroup,#previewCard').off();
};