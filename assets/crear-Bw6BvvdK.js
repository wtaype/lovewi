const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/wiloves-D4J-vzRt.js","assets/firebase-fKfni47f.js","assets/main-CGe7BS40.js","assets/vendor-gzd0YkcT.js","assets/firebase-Biq5-BBI.js","assets/publico-Ro9sJY4J.js"])))=>i.map(i=>d[i]);
import{N as t,w as p,a as y,_ as g,p as v,b as T,g as A,c as M,d as e,e as S,f as D}from"./main-CGe7BS40.js";import{j as a}from"./vendor-gzd0YkcT.js";const m=()=>!!S("wiSmile"),o=new Map,V=()=>`
<div class="crear">
  <div class="cr_izq">
    <div class="cr_cab">
      <h2><i class="fas fa-wand-magic-sparkles"></i> Crea tu Mensaje</h2>
      <div class="cr_accs">
        <button class="cr_acc" id="accVer" ${e("Vista previa")}><i class="fas fa-eye"></i></button>
        <button class="cr_acc" id="accCopiar" ${e("Copiar enlace")}><i class="fas fa-copy"></i></button>
        <button class="cr_acc borrar" id="accLimpiar" ${e("Limpiar todo")}><i class="fas fa-rotate-left"></i></button>
      </div>
    </div>

    <div class="cr_sec">
      <h3 class="cr_stit"><i class="fas fa-pen-fancy"></i> Personaliza</h3>
      <div class="cr_form">
        <div class="cr_row">
          <div class="cr_campo">
            <label>Para <small>¿A quién va?</small></label>
            <div class="cr_inp"><i class="fas fa-heart"></i><input id="cPara" maxlength="30" placeholder="Para"></div>
          </div>
          <div class="cr_campo">
            <label>De <small>Tu nombre</small></label>
            <div class="cr_inp"><i class="fas fa-user"></i><input id="cDe" maxlength="30" placeholder="De ti"></div>
          </div>
        </div>
        <div class="cr_campo">
          <label>Mensaje <small id="cCont">0/200</small></label>
          <textarea id="cMsg" maxlength="200" rows="3" placeholder="Algo desde el corazón..."></textarea>
        </div>
        <div class="cr_campo">
          <label>Música <small>URL opcional</small></label>
          <div class="cr_inp"><i class="fas fa-music"></i><input id="cMusica" maxlength="200" placeholder="https://ejemplo.com/musica.mp3"></div>
        </div>
        <div class="cr_row">
          <div class="cr_campo">
            <label>Link <small>Mín. 3 caracteres</small></label>
            <div class="cr_inp cr_inp_link">
              <span class="cr_pre">${location.origin}/${m()?"?":"?ver="}</span>
              <input id="cLink" maxlength="30" placeholder="auto" spellcheck="false">
              <span class="cr_st" id="linkStatus"></span>
            </div>
          </div>
          <div class="cr_campo">
            <label>Plantilla</label>
            <div class="cr_select">
              <select id="selPlantilla">
                ${Object.keys(v).map((l,f)=>`<option value="${l}"${f?"":" selected"}>${v[l].e} ${l}</option>`).join("")}
              </select>
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cr_sec cr_save">
      <button class="cr_gbtn ${m()?"":"cr_gbtn_pub"}" id="guardarNube">
        <i class="fas fa-cloud-arrow-up"></i> ${m()?"Guardar en nube":"Generar enlace"}
      </button>
      
      <div class="cr_url_row">
        <label>Corto</label>
        <div class="cr_url_box cr_url_corta">
          <input id="urlCorta" readonly placeholder="Se generará al guardar">
          <button class="cr_ubtn" id="copCorta" ${e("Copiar")}><i class="fas fa-copy"></i></button>
          <button class="cr_ubtn" id="abrCorta" ${e("Abrir")}><i class="fas fa-arrow-up-right-from-square"></i></button>
        </div>
      </div>
      
      <div class="cr_url_row">
        <label>Completo</label>
        <div class="cr_url_box">
          <input id="urlLarga" readonly placeholder="Se genera al escribir">
          <button class="cr_ubtn" id="copLarga" ${e("Copiar")}><i class="fas fa-copy"></i></button>
          <button class="cr_ubtn" id="abrLarga" ${e("Abrir")}><i class="fas fa-arrow-up-right-from-square"></i></button>
        </div>
      </div>
      
      ${m()?"":'<p class="cr_nota"><i class="fas fa-triangle-exclamation"></i> Sin cuenta expiran en 30 días. <a href="/smile">Crear cuenta →</a></p>'}
    </div>
  </div>

  <div class="cr_der">
    <div class="cr_prev">
      <div class="cr_prev_cab">
        <h3><i class="fas fa-eye"></i> Vista previa</h3>
        <div class="cr_disps">
          <button class="cr_disp active" data-disp="movil" ${e("Móvil")}><i class="fas fa-mobile-screen"></i></button>
          <button class="cr_disp" data-disp="escritorio" ${e("Escritorio")}><i class="fas fa-desktop"></i></button>
        </div>
      </div>
      <div class="cr_marco" id="marco">
        <div class="cr_mini" id="miniVista">
          <p class="pv_lbl">Para ti</p>
          <h2 class="pv_nom" id="pvPara">___</h2>
          <span class="pv_cor">❤️</span>
          <p class="pv_msg" id="pvMsg">Tu mensaje aquí...</p>
          <p class="pv_de">Con amor, <span id="pvDe">Amigo</span></p>
        </div>
      </div>
    </div>
    <div class="cr_share">
      <div class="cr_url_row">
        <label><i class="fas fa-share-nodes"></i> Compartir</label>
        <div class="cr_share_btns">
          <a class="cr_sbtn cr_wa" id="compWA" href="#" target="_blank" ${e("WhatsApp")}><i class="fab fa-whatsapp"></i></a>
          <a class="cr_sbtn cr_tg" id="compTG" href="#" target="_blank" ${e("Telegram")}><i class="fab fa-telegram"></i></a>
          <button class="cr_sbtn cr_nt" id="compNat" ${e("Copiar Link")}><i class="fa-solid fa-link"></i></button>
        </div>
      </div>
    </div>
  </div>
</div>`,N=()=>{let l="Amor",f=null,L=null,n=!1;const b=m(),_=()=>({link:a("#cLink").val().trim().replace(/[^a-záéíóúñA-Z0-9]/gi,""),de:a("#cDe").val().trim()||"Amigo",para:a("#cPara").val().trim(),msg:a("#cMsg").val().trim(),musica:a("#cMusica").val().trim()}),$=async s=>{if(!s||s.length<3)return a("#linkStatus").html('<i class="fas fa-minus" style="color:var(--tx3)"></i>'),!1;if(o.has(s)){const c=o.get(s);return a("#linkStatus").html(c?'<i class="fas fa-circle-xmark" style="color:var(--error)"></i>':'<i class="fas fa-circle-check" style="color:var(--success)"></i>'),!c}a("#linkStatus").html('<i class="fas fa-spinner fa-spin" style="color:var(--tx3)"></i>');try{const i=await(b?await g(()=>import("./wiloves-D4J-vzRt.js"),__vite__mapDeps([0,1,2,3,4])):await g(()=>import("./publico-Ro9sJY4J.js"),__vite__mapDeps([5,1,2,3,4]))).existe(s);return o.set(s,i),a("#linkStatus").html(i?'<i class="fas fa-circle-xmark" style="color:var(--error)"></i>':'<i class="fas fa-circle-check" style="color:var(--success)"></i>'),!i}catch{return a("#linkStatus").html('<i class="fas fa-triangle-exclamation" style="color:var(--warning)"></i>'),!1}},h=async()=>{if(n||a("#cLink").val())return;const{para:s}=_();if(!s)return;n=!0;const c=s.toLowerCase().replace(/[^a-záéíóúñ0-9]/gi,"").substring(0,12);if(c.length<3)return n=!1;const i=Date.now().toString(36).slice(-3);let r=c,u=1;for(let C=0;C<30;C++){if(await $(r)){a("#cLink").val(r).trigger("input"),n=!1;return}r=C<10?`${c}${u++}`:`${c}${i}${u++}`}t("Prueba otro nombre base 🙏","warning"),n=!1},k=()=>{const{de:s,para:c,msg:i,musica:r}=_(),u=c?D(l,s,c,i,r):"";return a("#urlLarga").val(u),u},d=()=>{const{de:s,para:c,msg:i}=_(),r=v[l]||v.Amor;a("#pvDe").text(s),a("#pvPara").text(c||"___"),a("#pvMsg").text(i||"Tu mensaje aquí..."),a("#cCont").text(`${i.length}/200`),a("#miniVista").css("background",r.b),a("#pvCor, .pv_cor").text(r.e),k()},x=s=>{const c=encodeURIComponent(`💌 Mensaje especial: ${s}`);a("#compWA").attr("href",`https://wa.me/?text=${c}`),a("#compTG").attr("href",`https://t.me/share/url?url=${encodeURIComponent(s)}&text=💌`)},P=()=>{a("#cDe, #cPara, #cMsg, #cLink, #cMusica, #urlCorta, #urlLarga").val(""),a("#linkStatus").html(""),o.clear(),d()},w=()=>a("#urlCorta").val()||a("#urlLarga").val();a(document).on("input.cr","#cLink",function(){const s=a(this).val().replace(/[^a-záéíóúñA-Z0-9]/gi,"");a(this).val(s),clearTimeout(f),f=setTimeout(()=>$(s),600)}),a(document).on("change.cr","#selPlantilla",function(){l=a(this).val(),d()}),a(document).on("input.cr","#cPara",function(){d(),clearTimeout(L),L=setTimeout(()=>h(),1e3)}),a(document).on("input.cr","#cDe, #cMsg, #cMusica",d),a(document).on("click.cr",".cr_disp",function(){a(".cr_disp").removeClass("active"),a(this).addClass("active"),a("#marco").toggleClass("escritorio",a(this).data("disp")==="escritorio")}),a(document).on("click.cr","#accVer",()=>{const s=w()||k();s?window.open(s,"_blank"):t("Completa los campos 💕","warning")}),a(document).on("click.cr","#accCopiar",function(){const s=w()||k();s?(p(s,this,"¡Copiado!"),x(s)):t("Completa los campos 💕","warning")}),a(document).on("click.cr","#copLarga, #abrLarga",function(s){const c=a("#urlLarga").val();if(!c)return t("No hay enlace","warning");s.currentTarget.id==="copLarga"?p(c,this,"¡Copiado!"):window.open(c,"_blank")}),a(document).on("click.cr","#guardarNube",async function(){const s=_();if(!s.para)return t("Completa el nombre 💕","warning");if(!s.link&&(await h(),s.link=a("#cLink").val().trim(),!s.link))return t("No se pudo generar link","error");if(a("#linkStatus").find(".fa-circle-xmark").length)return t("Link ocupado, generando otro...","warning"),setTimeout(()=>{a("#cLink").val(""),h()},500);y(this,!0);try{const i=await(b?await g(()=>import("./wiloves-D4J-vzRt.js"),__vite__mapDeps([0,1,2,3,4])):await g(()=>import("./publico-Ro9sJY4J.js"),__vite__mapDeps([5,1,2,3,4]))).guardar(s.link,{plantilla:T[l],nombre:l,de:s.de,para:s.para,msg:s.msg,musica:s.musica,emoji:v[l].e});if(!i)throw new Error("Link ocupado");o.set(i,!0);const r=b?A(i):M(i);a("#urlCorta").val(r),x(r),p(r,this,"¡Copiado! ☁️"),t("¡Enlace generado! 💌","success")}catch(c){console.error(c),t(c.message||"Error al guardar","error")}finally{y(this,!1)}}),a(document).on("click.cr","#copCorta, #abrCorta",function(s){const c=a("#urlCorta").val();if(!c)return t("Genera el enlace primero","warning");s.currentTarget.id==="copCorta"?p(c,this,"¡Copiado!"):window.open(c,"_blank")}),a(document).on("click.cr","#accLimpiar",()=>{P(),t("Limpiado ✨","info")}),a(document).on("click.cr","#compNat",s=>{s.preventDefault();const c=w();if(!c)return t("Completa los campos 💕","warning");navigator.share?navigator.share({title:"Lovewi 💌",text:"Mensaje especial",url:c}):p(c,"#compNat","¡Copiado!")}),d()},R=()=>{a(document).off(".cr"),o.clear()};export{R as cleanup,N as init,V as render};
