import{auth as _,db as h}from"./firebase-VWNmRUa9.js";import{m as y,q as x,w as M,c as S,h as k,b,s as D,d as N}from"./firebase-C5lBK4nY.js";import{$ as s,b as q,S as A,d,g as T,N as c}from"./widev-CiGWk2mv.js";import{rutas as H}from"./ruta-DtnKLsVR.js";import{a as I}from"./wii-a5uC_Ctk.js";import"./preload-helper-CPshegQA.js";let r=[],m=null,o=null;const C="wi_mensajes_cache",p=()=>T("wiSmile")||{},J=a=>{try{localStorage.setItem(C,JSON.stringify(a))}catch{}},E=()=>{try{return JSON.parse(localStorage.getItem(C)||"[]")}catch{return[]}},G=()=>{const a=p();if(!a.email)return location.replace("/"),"";const{nombre:t="",usuario:e="",email:i=""}=a,n=t||e||i||_.currentUser?.email||"";return`
  <div class="smile_container">

    <div class="smile_header">
      <div class="header_info">
        <img src="/smile.avif" alt="${I}" class="header_avatar" />
        <div class="header_text">
          <h1>Mis Mensajes</h1>
          <p>${A()} <strong>${n}</strong></p>
        </div>
      </div>
      <div class="header_status">
        <span class="status_dot"></span>
        <span class="status_text">Cargando...</span>
      </div>
    </div>

    <div class="smile_chat" id="smileChat">
      ${u(E())}
    </div>

    <div class="smile_input">
      <div class="input_wrapper">
        <textarea id="nuevoMensaje"
          placeholder="Escribe un mensaje."
          rows="1" maxlength="500"></textarea>
        <span class="char_count" id="charCount">0/500</span>
      </div>
      <button id="btnEnviar" disabled ${d("Enviar · Enter")}>
        <i class="fas fa-paper-plane"></i>
      </button>
    </div>

    <div class="modal_overlay" id="modalEliminar">
      <div class="modal_content">
        <i class="fas fa-trash-alt"></i>
        <h3>¿Eliminar mensaje?</h3>
        <p>Esta acción no se puede deshacer</p>
        <div class="modal_actions">
          <button class="btn_cancelar" id="btnCancelar">Cancelar</button>
          <button class="btn_confirmar" id="btnConfirmar">Eliminar</button>
        </div>
      </div>
    </div>

  </div>`},Q=()=>{const a=p();if(!a.email)return H.navigate("/");const t=a.email||_.currentUser?.email;s(document).on("input.sm","#nuevoMensaje",function(){s("#charCount").text(`${s(this).val().length}/500`),s("#btnEnviar").prop("disabled",!s(this).val().trim()),s(this).css("height","auto").css("height",Math.min(this.scrollHeight,150)+"px")}).on("keydown.sm","#nuevoMensaje",e=>{e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),v(t))}).on("click.sm","#btnEnviar",()=>v(t)).on("click.sm",".msg_item",function(e){if(s(e.target).closest(".btn_delete").length)return;const i=r.find(n=>n.id===s(this).data("id"));i&&(q(i.mensaje,this,'¡Copiado! <i class="fas fa-check-circle"></i>'),s(this).addClass("copied"),setTimeout(()=>s(this).removeClass("copied"),800))}).on("click.sm",".btn_delete",function(e){e.stopPropagation(),o=s(this).data("id"),s("#modalEliminar").addClass("show")}).on("click.sm","#btnCancelar, #modalEliminar",e=>{s(e.target).is("#btnCancelar, #modalEliminar")&&(s("#modalEliminar").removeClass("show"),o=null)}).on("click.sm","#btnConfirmar",L),m=y(x(S(h,"wiMensajes"),M("email","==",t)),{includeMetadataChanges:!1},e=>{r=e.docs.map(i=>({id:i.id,...i.data()})).sort((i,n)=>(n.fecha?.seconds||0)-(i.fecha?.seconds||0)),J(r),s("#smileChat").html(u(r)),g(!0)},e=>{console.error("❌",e),g(!1);const i=E();i.length?(r=i,s("#smileChat").html(u(r)),c("Caché local 📦","warning",2e3)):s("#smileChat").html($("fa-wifi-slash","Sin conexión","Verifica tu internet"))})},v=async a=>{const t=s("#nuevoMensaje"),e=t.val().trim();if(!e)return;const{usuario:i="",nombre:n=""}=p(),f=`m${Date.now()}`,w=s("#btnEnviar").prop("disabled",!0).html('<i class="fas fa-spinner fa-pulse"></i>');try{await k(b(h,"wiMensajes",f),{id:f,mensaje:e,email:a,usuario:n||i||a,fecha:D()}),t.val("").css("height","auto").trigger("focus"),s("#charCount").text("0/500")}catch(j){console.error("❌",j),c("Error al guardar","error")}finally{w.prop("disabled",!1).html('<i class="fas fa-paper-plane"></i>')}},L=async()=>{if(!o)return;const a=o;o=null,s("#modalEliminar").removeClass("show"),s(`.msg_item[data-id="${a}"]`).addClass("deleting");try{await N(b(h,"wiMensajes",a)),c("Mensaje eliminado 🗑️","success",1500)}catch(t){console.error("❌",t),s(`.msg_item[data-id="${a}"]`).removeClass("deleting"),c("Error al eliminar","error")}},g=a=>{s(".status_dot").toggleClass("active",a).toggleClass("error",!a),s(".status_text").text(a?"En vivo":"Desconectado")},u=a=>a?.length?a.map(t=>`
    <div class="msg_item" data-id="${t.id}" ${d("Click para copiar")}>
      <div class="msg_content">
        <p class="msg_texto">${O(t.mensaje).replace(/\n/g,"<br>")}</p>
        <div class="msg_footer">
          <span class="msg_fecha">${U(t.fecha)}</span>
          <i class="fas fa-check-double msg_check"></i>
        </div>
      </div>
      <button class="btn_delete" data-id="${t.id}" ${d("Eliminar")}>
        <i class="fas fa-trash"></i>
      </button>
    </div>`).join(""):$("fa-comment-dots","Sin mensajes aún","Escribe tu primer mensaje 👇"),$=(a,t,e)=>`
  <div class="chat_empty">
    <i class="fas ${a}"></i>
    <p>${t}</p><span>${e}</span>
  </div>`,O=a=>String(a||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t]),U=a=>{if(!a)return"Ahora";const t=a.toDate?.()||new Date((a.seconds||0)*1e3),e=Date.now()-t,i=~~(e/6e4),n=~~(e/36e5),l=~~(e/864e5);return i<1?"Ahora":i<60?`${i}m`:n<24?`${n}h`:l<7?`${l}d`:t.toLocaleDateString("es",{day:"2-digit",month:"short"})},R=()=>{m?.(),s(document).off(".sm"),[r,m,o]=[[],null,null]};export{R as cleanup,Q as init,G as render};
