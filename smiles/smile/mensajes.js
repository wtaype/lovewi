import './mensajes.css';
import { auth, db } from './firebase.js';
import { collection, setDoc, doc, query, where, onSnapshot, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { $, Notificacion, wicopy, wiTip, getls, Saludar } from '../widev.js';
import { rutas } from '../rutas/ruta.js';
import { app } from '../wii.js';

// ── Estado y caché ───────────────────────────────────────────
let msgs = [], unsub = null, pendiente = null;
const CACHE  = 'wi_mensajes_cache';
const wi     = () => getls('wiSmile') || {};
const _save  = d  => { try { localStorage.setItem(CACHE, JSON.stringify(d)); } catch (_) {} };
const _cache = () => { try { return JSON.parse(localStorage.getItem(CACHE) || '[]'); } catch (_) { return []; } };

// ── Render ───────────────────────────────────────────────────
export const render = () => {
  const u = wi();
  if (!u.email) { location.replace('/'); return ''; }
  const display = u.nombre || u.usuario || u.email || auth.currentUser?.email || '';

  return `
  <div class="wm_container">
    <div class="wm_header">
      <div class="wm_info">
        <img src="/smile.avif" alt="${app}" class="wm_avatar" />
        <div class="wm_text">
          <h1>Mis Mensajes</h1>
          <p>${Saludar()} <strong>${display}</strong></p>
        </div>
      </div>
      <div class="wm_status">
        <span class="wm_dot"></span>
        <span class="wm_dotxt">Cargando...</span>
      </div>
    </div>

    <div class="wm_chat" id="wmChat">${_htmlList(_cache())}</div>

    <div class="wm_input">
      <div class="wm_wrap">
        <textarea id="wmNuevo" placeholder="Escribe un mensaje." rows="1" maxlength="500"></textarea>
        <span class="wm_count" id="wmCount">0/500</span>
      </div>
      <button id="wmEnviar" disabled ${wiTip('Enviar · Enter')}><i class="fas fa-paper-plane"></i></button>
    </div>

    <div class="wm_modal" id="wmEliminar">
      <div class="wm_modal_body">
        <i class="fas fa-trash-alt"></i>
        <h3>¿Eliminar mensaje?</h3>
        <p>Esta acción no se puede deshacer</p>
        <div class="wm_modal_acts">
          <button class="wm_cancel" id="wmCancel">Cancelar</button>
          <button class="wm_confirm" id="wmConfirm">Eliminar</button>
        </div>
      </div>
    </div>
  </div>`;
};

// ── Init ─────────────────────────────────────────────────────
export const init = () => {
  const u = wi();
  if (!u.email) return rutas.navigate('/');
  const userEmail = u.email || auth.currentUser?.email;

  $(document)
    .on('input.wm', '#wmNuevo', function () {
      $('#wmCount').text(`${$(this).val().length}/500`);
      $('#wmEnviar').prop('disabled', !$(this).val().trim());
      $(this).css('height', 'auto').css('height', Math.min(this.scrollHeight, 150) + 'px');
    })
    .on('keydown.wm', '#wmNuevo', e => { e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), _enviar(userEmail)); })
    .on('click.wm', '#wmEnviar', () => _enviar(userEmail))
    .on('click.wm', '.wm_item', function (e) {
      if ($(e.target).closest('.wm_del').length) return;
      const msg = msgs.find(m => m.id === $(this).data('id'));
      if (!msg) return;
      wicopy(msg.mensaje, this, '¡Copiado! <i class="fas fa-check-circle"></i>');
      $(this).addClass('copied'); setTimeout(() => $(this).removeClass('copied'), 800);
    })
    .on('click.wm', '.wm_del', function (e) { e.stopPropagation(); pendiente = $(this).data('id'); $('#wmEliminar').addClass('show'); })
    .on('click.wm', '#wmCancel, #wmEliminar', e => { $(e.target).is('#wmCancel, #wmEliminar') && ($('#wmEliminar').removeClass('show'), pendiente = null); })
    .on('click.wm', '#wmConfirm', _eliminar);

  unsub = onSnapshot(
    query(collection(db, 'wiMensajes'), where('email', '==', userEmail)),
    { includeMetadataChanges: false },
    snap => {
      msgs = snap.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => (b.fecha?.seconds || 0) - (a.fecha?.seconds || 0));
      _save(msgs); $('#wmChat').html(_htmlList(msgs)); _status(true);
    },
    err => {
      console.error('❌', err); _status(false);
      const cache = _cache();
      cache.length ? (msgs = cache, $('#wmChat').html(_htmlList(msgs)), Notificacion('Caché local 📦', 'warning', 2000))
        : $('#wmChat').html(_empty('fa-wifi-slash', 'Sin conexión', 'Verifica tu internet'));
    }
  );
};

// ── Enviar ───────────────────────────────────────────────────
const _enviar = async (email) => {
  const $ta = $('#wmNuevo'), nota = $ta.val().trim();
  if (!nota) return;
  const { usuario = '', nombre = '' } = wi();
  const id = `m${Date.now()}`;
  const $btn = $('#wmEnviar').prop('disabled', true).html('<i class="fas fa-spinner fa-pulse"></i>');
  try {
    await setDoc(doc(db, 'wiMensajes', id), { id, mensaje: nota, email, usuario: nombre || usuario || email, fecha: serverTimestamp() });
    $ta.val('').css('height', 'auto').trigger('focus'); $('#wmCount').text('0/500');
  } catch (e) { console.error('❌', e); Notificacion('Error al guardar', 'error'); }
  finally { $btn.prop('disabled', false).html('<i class="fas fa-paper-plane"></i>'); }
};

// ── Eliminar ─────────────────────────────────────────────────
const _eliminar = async () => {
  if (!pendiente) return;
  const id = pendiente; pendiente = null;
  $('#wmEliminar').removeClass('show');
  $(`.wm_item[data-id="${id}"]`).addClass('deleting');
  try { await deleteDoc(doc(db, 'wiMensajes', id)); Notificacion('Mensaje eliminado 🗑️', 'success', 1500); }
  catch (e) { console.error('❌', e); $(`.wm_item[data-id="${id}"]`).removeClass('deleting'); Notificacion('Error al eliminar', 'error'); }
};

// ── Helpers ──────────────────────────────────────────────────
const _status = ok => { $('.wm_dot').toggleClass('active', ok).toggleClass('error', !ok); $('.wm_dotxt').text(ok ? 'En vivo' : 'Desconectado'); };

const _htmlList = list => list?.length
  ? list.map(m => `
    <div class="wm_item" data-id="${m.id}" ${wiTip('Click para copiar')}>
      <div class="wm_bubble">
        <p class="wm_txt">${_esc(m.mensaje).replace(/\n/g, '<br>')}</p>
        <div class="wm_foot"><span class="wm_date">${_fecha(m.fecha)}</span><i class="fas fa-check-double wm_check"></i></div>
      </div>
      <button class="wm_del" data-id="${m.id}" ${wiTip('Eliminar')}><i class="fas fa-trash"></i></button>
    </div>`).join('')
  : _empty('fa-comment-dots', 'Sin mensajes aún', 'Escribe tu primer mensaje 👇');

const _empty = (ico, txt, sub) => `<div class="wm_empty"><i class="fas ${ico}"></i><p>${txt}</p><span>${sub}</span></div>`;

const _esc = t => String(t || '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;' }[c]));

const _fecha = ts => {
  if (!ts) return 'Ahora';
  const d = ts.toDate?.() || new Date((ts.seconds || 0) * 1000), df = Date.now() - d;
  const m = ~~(df / 6e4), h = ~~(df / 36e5), dias = ~~(df / 864e5);
  return m < 1 ? 'Ahora' : m < 60 ? `${m}m` : h < 24 ? `${h}h` : dias < 7 ? `${dias}d` : d.toLocaleDateString('es', { day:'2-digit', month:'short' });
};

export const cleanup = () => { unsub?.(); $(document).off('.wm'); [msgs, unsub, pendiente] = [[], null, null]; };