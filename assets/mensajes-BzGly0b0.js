import{auth as v,db as u}from"./firebase-CHRaTPu2.js";import{m as y,q as j,w as x,c as S,h as k,b as _,s as D,d as M}from"./firebase-C5lBK4nY.js";import{$ as s,b as N,S as q,d as m,g as A,N as l}from"./widev-CiGWk2mv.js";import{rutas as T}from"./ruta-CNbVEUUB.js";import{a as H}from"./wii-D67iYGq9.js";import"./preload-helper-CPshegQA.js";let o=[],d=null,c=null;const g="wi_mensajes_cache",h=()=>A("wiSmile")||{},I=a=>{try{localStorage.setItem(g,JSON.stringify(a))}catch{}},C=()=>{try{return JSON.parse(localStorage.getItem(g)||"[]")}catch{return[]}},F=()=>{const a=h();if(!a.email)return location.replace("/"),"";const e=a.nombre||a.usuario||a.email||v.currentUser?.email||"";return`
  <div class="wm_container">
    <div class="wm_header">
      <div class="wm_info">
        <img src="/smile.avif" alt="${H}" class="wm_avatar" />
        <div class="wm_text">
          <h1>Mis Mensajes</h1>
          <p>${q()} <strong>${e}</strong></p>
        </div>
      </div>
      <div class="wm_status">
        <span class="wm_dot"></span>
        <span class="wm_dotxt">Cargando...</span>
      </div>
    </div>

    <div class="wm_chat" id="wmChat">${w(C())}</div>

    <div class="wm_input">
      <div class="wm_wrap">
        <textarea id="wmNuevo" placeholder="Escribe un mensaje." rows="1" maxlength="500"></textarea>
        <span class="wm_count" id="wmCount">0/500</span>
      </div>
      <button id="wmEnviar" disabled ${m("Enviar · Enter")}><i class="fas fa-paper-plane"></i></button>
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
  </div>`},G=()=>{const a=h();if(!a.email)return T.navigate("/");const e=a.email||v.currentUser?.email;s(document).on("input.wm","#wmNuevo",function(){s("#wmCount").text(`${s(this).val().length}/500`),s("#wmEnviar").prop("disabled",!s(this).val().trim()),s(this).css("height","auto").css("height",Math.min(this.scrollHeight,150)+"px")}).on("keydown.wm","#wmNuevo",t=>{t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),p(e))}).on("click.wm","#wmEnviar",()=>p(e)).on("click.wm",".wm_item",function(t){if(s(t.target).closest(".wm_del").length)return;const i=o.find(n=>n.id===s(this).data("id"));i&&(N(i.mensaje,this,'¡Copiado! <i class="fas fa-check-circle"></i>'),s(this).addClass("copied"),setTimeout(()=>s(this).removeClass("copied"),800))}).on("click.wm",".wm_del",function(t){t.stopPropagation(),c=s(this).data("id"),s("#wmEliminar").addClass("show")}).on("click.wm","#wmCancel, #wmEliminar",t=>{s(t.target).is("#wmCancel, #wmEliminar")&&(s("#wmEliminar").removeClass("show"),c=null)}).on("click.wm","#wmConfirm",J),d=y(j(S(u,"wiMensajes"),x("email","==",e)),{includeMetadataChanges:!1},t=>{o=t.docs.map(i=>({id:i.id,...i.data()})).sort((i,n)=>(n.fecha?.seconds||0)-(i.fecha?.seconds||0)),I(o),s("#wmChat").html(w(o)),f(!0)},t=>{console.error("❌",t),f(!1);const i=C();i.length?(o=i,s("#wmChat").html(w(o)),l("Caché local 📦","warning",2e3)):s("#wmChat").html(b("fa-wifi-slash","Sin conexión","Verifica tu internet"))})},p=async a=>{const e=s("#wmNuevo"),t=e.val().trim();if(!t)return;const{usuario:i="",nombre:n=""}=h(),r=`m${Date.now()}`,E=s("#wmEnviar").prop("disabled",!0).html('<i class="fas fa-spinner fa-pulse"></i>');try{await k(_(u,"wiMensajes",r),{id:r,mensaje:t,email:a,usuario:n||i||a,fecha:D()}),e.val("").css("height","auto").trigger("focus"),s("#wmCount").text("0/500")}catch($){console.error("❌",$),l("Error al guardar","error")}finally{E.prop("disabled",!1).html('<i class="fas fa-paper-plane"></i>')}},J=async()=>{if(!c)return;const a=c;c=null,s("#wmEliminar").removeClass("show"),s(`.wm_item[data-id="${a}"]`).addClass("deleting");try{await M(_(u,"wiMensajes",a)),l("Mensaje eliminado 🗑️","success",1500)}catch(e){console.error("❌",e),s(`.wm_item[data-id="${a}"]`).removeClass("deleting"),l("Error al eliminar","error")}},f=a=>{s(".wm_dot").toggleClass("active",a).toggleClass("error",!a),s(".wm_dotxt").text(a?"En vivo":"Desconectado")},w=a=>a?.length?a.map(e=>`
    <div class="wm_item" data-id="${e.id}" ${m("Click para copiar")}>
      <div class="wm_bubble">
        <p class="wm_txt">${L(e.mensaje).replace(/\n/g,"<br>")}</p>
        <div class="wm_foot"><span class="wm_date">${O(e.fecha)}</span><i class="fas fa-check-double wm_check"></i></div>
      </div>
      <button class="wm_del" data-id="${e.id}" ${m("Eliminar")}><i class="fas fa-trash"></i></button>
    </div>`).join(""):b("fa-comment-dots","Sin mensajes aún","Escribe tu primer mensaje 👇"),b=(a,e,t)=>`<div class="wm_empty"><i class="fas ${a}"></i><p>${e}</p><span>${t}</span></div>`,L=a=>String(a||"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[e]),O=a=>{if(!a)return"Ahora";const e=a.toDate?.()||new Date((a.seconds||0)*1e3),t=Date.now()-e,i=~~(t/6e4),n=~~(t/36e5),r=~~(t/864e5);return i<1?"Ahora":i<60?`${i}m`:n<24?`${n}h`:r<7?`${r}d`:e.toLocaleDateString("es",{day:"2-digit",month:"short"})},Q=()=>{d?.(),s(document).off(".wm"),[o,d,c]=[[],null,null]};export{Q as cleanup,G as init,F as render};
