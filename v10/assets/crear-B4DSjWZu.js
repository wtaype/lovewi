const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/wiloves-DzA6gmLB.js","assets/main-BW7lfuhi.js","assets/main-D70i2Qaf.js","assets/vendor-gzd0YkcT.js","assets/firebase-DMReuO2w.js","assets/firebase-B4Nf_p6C.js","assets/publico-D9YwvVCU.js"])))=>i.map(i=>d[i]);
import{_}from"./main-D70i2Qaf.js";import{j as a}from"./vendor-gzd0YkcT.js";import{w as d,N as e,e as L,p as x,f as P,h as M,j as l,g as E,k as y,m as T}from"./main-BW7lfuhi.js";const o=()=>!!E("wiSmile"),V=()=>`
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
              <span class="cr_pre">${location.origin}/${o()?"?":"?ver="}</span>
              <input id="cLink" maxlength="30" placeholder="${o()?"paratiDeysi":"miamor"}" spellcheck="false">
              <span class="cr_st" id="linkStatus"></span>
            </div>
          </div>
          <div class="cr_campo">
            <label>Plantilla <small>Elige el estilo</small></label>
            <div class="cr_select">
              <select id="selPlantilla">
                ${Object.keys(x).map((t,p)=>`<option value="${t}"${p?"":" selected"}>${t}</option>`).join("")}
              </select>
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cr_sec cr_save">
      <button class="cr_gbtn ${o()?"":"cr_gbtn_pub"}" id="${o()?"guardarNube":"genCorta"}">
        <i class="fas fa-cloud-arrow-up"></i> ${o()?"Guardar y obtener enlace":"Generar enlace público"}
      </button>
      
      <div class="cr_url_row">
        <label>Enlace corto</label>
        <div class="cr_url_box cr_url_corta">
          <input id="urlCorta" readonly placeholder="${o()?"Se generará al guardar":"Se generará al guardar en la nube"}">
          <button class="cr_ubtn" id="copCorta" ${l("Copiar")}><i class="fas fa-copy"></i></button>
          <button class="cr_ubtn" id="abrCorta" ${l("Abrir")}><i class="fas fa-arrow-up-right-from-square"></i></button>
        </div>
      </div>
      
      <div class="cr_url_row">
        <label>Enlace completo</label>
        <div class="cr_url_box">
          <input id="urlLarga" readonly placeholder="Se genera automáticamente al escribir">
          <button class="cr_ubtn" id="copLarga" ${l("Copiar")}><i class="fas fa-copy"></i></button>
          <button class="cr_ubtn" id="abrLarga" ${l("Abrir")}><i class="fas fa-arrow-up-right-from-square"></i></button>
        </div>
      </div>
      
      ${o()?"":'<p class="cr_nota"><i class="fas fa-triangle-exclamation"></i> Sin cuenta los enlaces expiran en 30 días. <a href="/smile">Crear cuenta gratis →</a></p>'}
    </div>
  </div>

  <div class="cr_der">
    <div class="cr_prev">
      <div class="cr_prev_cab">
        <h3><i class="fas fa-eye"></i> Vista previa</h3>
        <div class="cr_disps">
          <button class="cr_disp active" data-disp="movil" ${l("Móvil")}><i class="fas fa-mobile-screen"></i></button>
          <button class="cr_disp" data-disp="escritorio" ${l("Escritorio")}><i class="fas fa-desktop"></i></button>
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
          <a class="cr_sbtn cr_wa" id="compWA" href="#" target="_blank" ${l("WhatsApp")}><i class="fab fa-whatsapp"></i></a>
          <a class="cr_sbtn cr_tg" id="compTG" href="#" target="_blank" ${l("Telegram")}><i class="fab fa-telegram"></i></a>
          <button class="cr_sbtn cr_nt" id="compNat" ${l("Más opciones")}><i class="fas fa-ellipsis"></i></button>
        </div>
      </div>
    </div>
  </div>
</div>`,N=()=>{let t="Amor",p=null;const f=o(),u=()=>({link:a("#cLink").val().trim().replace(/[^a-záéíóúñA-Z0-9]/gi,""),de:a("#cDe").val().trim(),para:a("#cPara").val().trim(),msg:a("#cMsg").val().trim(),musica:a("#cMusica").val().trim()}),m=()=>e("Completa link y al menos un nombre 💕","warning"),k=async c=>{if(!c||c.length<3)return a("#linkStatus").html('<i class="fas fa-minus" style="color:var(--tx3)"></i>');a("#linkStatus").html('<i class="fas fa-spinner fa-spin" style="color:var(--tx3)"></i>');try{const s=!await(f?await _(()=>import("./wiloves-DzA6gmLB.js"),__vite__mapDeps([0,1,2,3,4,5])):await _(()=>import("./publico-D9YwvVCU.js"),__vite__mapDeps([6,4,1,2,3,5]))).existe(c);return a("#linkStatus").html(s?'<i class="fas fa-circle-check" style="color:var(--success)"></i>':'<i class="fas fa-circle-xmark" style="color:var(--error)"></i>'),s}catch{return a("#linkStatus").html('<i class="fas fa-triangle-exclamation" style="color:var(--warning)"></i>'),!1}},$=async()=>{const{de:c,para:i}=u();if(!c&&!i)return;const s=(i||c).toLowerCase().replace(/[^a-záéíóúñ0-9]/gi,"").substring(0,15);if(!s||s.length<3)return;let r=s,h=1;for(;;){if(await k(r)){a("#cLink").val(r).trigger("input");break}if(r=s+h,h++,h>99)break}},b=()=>{const{de:c,para:i,msg:s}=u(),r=c||i?T(t,c,i,s):"";return a("#urlLarga").val(r),r},n=()=>{const{de:c,para:i,msg:s}=u();a("#pvDe").text(c||"___"),a("#pvPara").text(i||"___"),a("#pvMsg").text(s||"Tu mensaje aparecerá aquí..."),a("#cCont").text(`${s.length}/200`),a("#miniVista").css("background",y[t]||y.Amor),b()},g=c=>{const i=encodeURIComponent(`💌 Mensaje especial: ${c}`);a("#compWA").attr("href",`https://wa.me/?text=${i}`),a("#compTG").attr("href",`https://t.me/share/url?url=${encodeURIComponent(c)}&text=💌`)},w=()=>{a("#cDe, #cPara, #cMsg, #cLink, #cMusica, #urlCorta, #urlLarga").val(""),a("#linkStatus").html(""),n()},v=()=>a("#urlCorta").val()||a("#urlLarga").val();a(document).on("input","#cLink",function(){const c=a(this).val().replace(/[^a-záéíóúñA-Z0-9]/gi,"");a(this).val(c),clearTimeout(p),p=setTimeout(()=>k(c),500)}),a(document).on("change","#selPlantilla",function(){t=a(this).val(),n()});let C=null;a(document).on("input","#cDe, #cPara",function(){n(),clearTimeout(C),C=setTimeout(()=>{a("#cLink").val()||$()},800)}),a(document).on("input","#cMsg, #cMusica",()=>{n();const c=v();c&&g(c)}),a(document).on("click",".cr_disp",function(){a(".cr_disp").removeClass("active"),a(this).addClass("active"),a("#marco").toggleClass("escritorio",a(this).data("disp")==="escritorio")}),a(document).on("click","#accVer",()=>{const c=v()||b();c?window.open(c,"_blank"):m()}),a(document).on("click","#accCopiar",function(){const c=v()||b();c?(d(c,this,"¡Copiado!"),g(c)):m()}),a(document).on("click","#copLarga",function(){const c=a("#urlLarga").val();c?d(c,this,"¡Copiado!"):e("No hay enlace generado","warning")}),a(document).on("click","#abrLarga",()=>{const c=a("#urlLarga").val();c?window.open(c,"_blank"):e("No hay enlace generado","warning")}),a(document).on("click","#guardarNube, #genCorta",async function(){const c=u();if(!c.link||!c.de&&!c.para)return m();if(a("#linkStatus").find(".fa-circle-xmark").length)return e("Ese link ya existe, elige otro","error");L(this,!0);try{const s=await(f?await _(()=>import("./wiloves-DzA6gmLB.js"),__vite__mapDeps([0,1,2,3,4,5])):await _(()=>import("./publico-D9YwvVCU.js"),__vite__mapDeps([6,4,1,2,3,5]))).guardar({id:c.link,plantilla:x[t],nombre:t,emoji:!0,...c});if(!s)return e("Link ocupado o error","error");const r=f?P(s):M(s);a("#urlCorta").val(r),g(r),d(r,this,"¡Enlace copiado! ☁️"),e("¡Enlace generado y copiado! ☁️","success"),setTimeout(()=>w(),3e5)}catch(i){console.error(i),e("Error al guardar","error")}L(this,!1)}),a(document).on("click","#copCorta",function(){const c=a("#urlCorta").val();c?d(c,this,"¡Copiado!"):e("Genera el enlace primero","warning")}),a(document).on("click","#abrCorta",()=>{const c=a("#urlCorta").val();c?window.open(c,"_blank"):e("Genera el enlace primero","warning")}),a(document).on("click","#accLimpiar",()=>{w(),e("Limpiado ✨","info")}),a(document).on("click","#compNat",c=>{c.preventDefault();const i=v();if(!i)return m();navigator.share?navigator.share({title:"Lovewi 💌",text:"Mensaje especial",url:i}):d(i,"#compNat","¡Copiado!")}),n()},R=()=>a(document).off("click input change",".cr_disp, #accVer, #accCopiar, #copLarga, #abrLarga, #guardarNube, #genCorta, #copCorta, #abrCorta, #accLimpiar, #compNat, #cDe, #cPara, #cMsg, #cLink, #cMusica, #selPlantilla");export{R as cleanup,N as init,V as render};
