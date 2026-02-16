import{j as i}from"./vendor-gzd0YkcT.js";import{a as c,d as b}from"./firebase-DcuqlnV9.js";import{q as g,c as $,w,g as y,d as k,a as C}from"./firebase-Biq5-BBI.js";import{i as j,N as u,e as D,w as T,d as f}from"./main-4mJBKzgy.js";let o=[],l=null;const z=()=>`
  <div class="smile_container">
    <div class="smile_header">
      <div class="header_left">
        <h1><i class="fas fa-inbox"></i> Mis mensajes</h1>
        <p id="smileUser"></p>
      </div>
      <button class="btn_actualizar" id="btnActualizar">
        <i class="fas fa-sync-alt"></i>
        <span>Actualizar</span>
      </button>
    </div>

    <div class="smile_table_wrapper">
      <table class="smile_table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Título</th>
            <th>Para</th>
            <th>Fecha</th>
            <th>Vistas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="smileTableBody">
          <tr><td colspan="6" class="loading_td"><i class="fas fa-spinner fa-pulse"></i> Cargando...</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="modal_overlay" id="modalEliminar">
    <div class="modal_content">
      <div class="modal_icon"><i class="fas fa-trash-alt"></i></div>
      <h3>¿Eliminar mensaje?</h3>
      <p>Esta acción no se puede deshacer</p>
      <div class="modal_actions">
        <button class="btn_modal_cancelar" id="btnCancelar"><i class="fas fa-times"></i> Cancelar</button>
        <button class="btn_modal_eliminar" id="btnConfirmar"><i class="fas fa-trash"></i> Eliminar</button>
      </div>
    </div>
  </div>
`,N=async()=>{if(console.log(`✅ Smile de ${j}`),!c.currentUser)return u("Debes iniciar sesión","error"),window.location.hash="#/auth?mode=login";const t=D("wiSmile");i("#smileUser").html(`<i class="fas fa-user"></i> ${t?.usuario||c.currentUser.email} • ${t?.email||c.currentUser.email}`),i(document).on("click.sm","#btnActualizar",p).on("click.sm","#btnCancelar, #modalEliminar",a=>i(a.target).is("#btnCancelar, #modalEliminar")&&v()).on("click.sm","#btnConfirmar",A).on("click.sm",".btn_abrir",a=>window.open(i(a.currentTarget).data("url"),"_blank")).on("click.sm",".btn_copiar",a=>T(i(a.currentTarget).data("url"),a.currentTarget,"¡Copiado!")).on("click.sm",".btn_eliminar_msg",a=>{l=i(a.currentTarget).data("id"),i("#modalEliminar").addClass("show")}),await p()};async function p(){const t=c.currentUser?.uid;if(!t)return;const a=i("#btnActualizar");a.find("i").addClass("fa-spin").end().prop("disabled",!0),E();try{const s=g($(b,"wiLoves"),w("uid","==",t));o=(await y(s)).docs.map(e=>({id:e.id,...e.data()})),o.sort((e,n)=>{const d=e.creado?.toDate?.()||e.creado?.seconds?new Date(e.creado.seconds*1e3):new Date(e.creado||0);return(n.creado?.toDate?.()||n.creado?.seconds?new Date(n.creado.seconds*1e3):new Date(n.creado||0))-d}),_(o),console.log(`📬 ${o.length} mensajes`)}catch(s){console.error("❌",s),i("#smileTableBody").html(`
      <tr><td colspan="6" class="error_td">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Error: ${s.message}</p>
        <button class="btn_reintentar" onclick="location.reload()"><i class="fas fa-redo"></i> Reintentar</button>
      </td></tr>
    `)}finally{a.find("i").removeClass("fa-spin").end().prop("disabled",!1)}}function E(){i("#smileTableBody").html(Array(5).fill(0).map(()=>`
    <tr class="skeleton_row">
      <td><div class="sk_badge"></div></td>
      <td><div class="sk_line sk_title"></div></td>
      <td><div class="sk_line sk_text"></div></td>
      <td><div class="sk_line sk_date"></div></td>
      <td><div class="sk_line sk_vistas"></div></td>
      <td><div class="td_actions">${Array(3).fill('<div class="sk_btn"></div>').join("")}</div></td>
    </tr>
  `).join(""))}function _(t){if(!t.length)return i("#smileTableBody").html(`
      <tr><td colspan="6" class="empty_td">
        <div class="empty_icon"><i class="fas fa-inbox"></i></div>
        <h3>No tienes mensajes</h3>
        <p>Crea tu primer mensaje en <a href="#/crear">Crear mensaje</a></p>
      </td></tr>
    `);const a={amor:"fa-heart",amistad:"fa-user-friends",saludo:"fa-gift",declaracion:"fa-comment-dots",aniversario:"fa-calendar-star",carta:"fa-envelope"};i("#smileTableBody").html(t.map(s=>{const r=s.plantilla||"amor",e=a[r]||"fa-envelope",n=h(s.nombre||s.de||"Sin título"),d=h(s.para||"Alguien especial"),m=`${location.origin}/?${s.id}`;return`
      <tr data-id="${s.id}">
        <td><span class="badge_tipo ${r}"><i class="fas ${e}"></i> ${r.charAt(0).toUpperCase()+r.slice(1)}</span></td>
        <td class="td_titulo">${n}</td>
        <td class="td_para">${d}</td>
        <td class="td_fecha">${M(s.creado)}</td>
        <td class="td_vistas">${s.vistas||0}</td>
        <td>
          <div class="td_actions">
            <button class="btn_action btn_abrir" data-url="${m}" ${f("Abrir")}><i class="fas fa-external-link-alt"></i></button>
            <button class="btn_action btn_copiar" data-url="${m}" ${f("Copiar")}><i class="fas fa-link"></i></button>
            <button class="btn_action btn_eliminar_msg" data-id="${s.id}" ${f("Eliminar")}><i class="fas fa-trash-alt"></i></button>
          </div>
        </td>
      </tr>
    `}).join(""))}function v(){l=null,i("#modalEliminar").removeClass("show")}async function A(){if(!l)return;const t=l;v();try{i(`tr[data-id="${t}"]`).addClass("removing"),await k(C(b,"wiLoves",t)),setTimeout(()=>{o=o.filter(a=>a.id!==t),_(o)},300),u("Mensaje eliminado 🗑️","success")}catch(a){console.error("❌",a),i(`tr[data-id="${t}"]`).removeClass("removing"),u("Error al eliminar","error")}}const h=t=>t?String(t).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[a]):"";function M(t){if(!t)return"Reciente";let a=t.toDate?.()||(t.seconds?new Date(t.seconds*1e3):new Date(t));if(isNaN(a.getTime()))return"Reciente";const s=new Date-a,r=Math.floor(s/6e4),e=Math.floor(s/36e5),n=Math.floor(s/864e5);return r<1?"Ahora":r<60?`${r}m`:e<24?`${e}h`:n<7?`${n}d`:n<30?`${Math.floor(n/7)} sem`:a.toLocaleDateString("es-ES",{day:"numeric",month:"short",year:"numeric"})}const q=()=>{console.log("🧹 Smile"),o=[],l=null,i(document).off(".sm")};export{q as cleanup,N as init,z as render};
