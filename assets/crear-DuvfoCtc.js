const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/agregar-Dt5WJc-b.js","assets/vendor-gzd0YkcT.js","assets/firebase-CdgkPeUf.js","assets/main-D5O-teUr.js","assets/firebase-BjfRZBIi.js","assets/agregar-XgbRNuCR.css","assets/wiloves-DgOQvjes.js","assets/publico-CeZMUq8l.js"])))=>i.map(i=>d[i]);
import{_ as m,N as l,w as h,a as M,p,b as I,g as T,c as E,d as n,e as j,f as D}from"./main-D5O-teUr.js";import{j as a}from"./vendor-gzd0YkcT.js";const v=()=>!!j("wiSmile"),f=new Map,L=r=>{const e=p[r]?.musicas||[];return e.length?`<div class="cr_chips">
    ${e.map(u=>`<label class="cr_chip" style="--chip:${p[r].x}"><input type="radio" name="crMusChip" value="${u.u}"><span><i class="fas fa-music"></i> ${u.n}</span></label>`).join("")}
  </div>`:""},$=(r,e,u)=>r.length?`<div class="cr_chips cr_mis">
    ${r.map(o=>`<label class="cr_chip" style="--chip:var(--mco)"><input type="radio" name="${e}" value="${o.src}"><span><i class="fas fa-${u}"></i> ${o.titulo}</span></label>`).join("")}
  </div>`:"",N=()=>`
<div class="crear">
  <div class="cr_izq">
    <div class="cr_sec">
      <h3 class="cr_stit"><i class="fas fa-pen-fancy"></i> Personaliza tu mensaje</h3>
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
        <div class="cr_row">
          <div class="cr_campo">
            <label>Música <small>URL opcional</small></label>
            <div id="crChipsWrap">${L("Amor")}</div>
            <div id="crMisAudios"></div>
            <div class="cr_inp"><i class="fas fa-music"></i><input id="cMusica" maxlength="200" placeholder="URL de música..."></div>
          </div>
          <div class="cr_campo">
            <label>Imagen <small>URL opcional</small></label>
            <div id="crMisImgs"></div>
            <div class="cr_inp"><i class="fas fa-image"></i><input id="cImg" maxlength="300" placeholder="URL de imagen..."></div>
          </div>
        </div>
        <div class="cr_row">
          <div class="cr_campo">
            <label>Plantilla</label>
            <div class="cr_select">
              <select id="selPlantilla">
                ${Object.keys(p).map((r,e)=>`<option value="${r}"${e?"":" selected"}>${p[r].e} ${r}</option>`).join("")}
              </select>
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
          <div class="cr_campo">
            <label>Link <small>Mín. 3 caracteres</small></label>
            <div class="cr_inp cr_inp_link">
              <span class="cr_pre">${location.origin}/${v()?"?":"?ver="}</span>
              <input id="cLink" maxlength="30" placeholder="auto" spellcheck="false">
              <span class="cr_st" id="linkStatus"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cr_sec cr_save">
      <button class="cr_gbtn ${v()?"":"cr_gbtn_pub"}" id="guardarNube">
        <i class="fas fa-cloud-arrow-up"></i> ${v()?"Guardar en nube":"Generar enlace"}
      </button>
      <div class="cr_url_row">
        <label>Corto</label>
        <div class="cr_url_box cr_url_corta">
          <input id="urlCorta" readonly placeholder="Se generará al guardar">
          <button class="cr_ubtn" id="copCorta" ${n("Copiar")}><i class="fas fa-copy"></i></button>
          <button class="cr_ubtn" id="abrCorta" ${n("Abrir")}><i class="fas fa-arrow-up-right-from-square"></i></button>
        </div>
      </div>
      <div class="cr_url_row">
        <label>Completo</label>
        <div class="cr_url_box">
          <input id="urlLarga" readonly placeholder="Se genera al escribir">
          <button class="cr_ubtn" id="copLarga" ${n("Copiar")}><i class="fas fa-copy"></i></button>
          <button class="cr_ubtn" id="abrLarga" ${n("Abrir")}><i class="fas fa-arrow-up-right-from-square"></i></button>
        </div>
      </div>
      ${v()?"":'<p class="cr_nota"><i class="fas fa-triangle-exclamation"></i> Sin cuenta expiran en 30 días. <a href="/smile">Crear cuenta →</a></p>'}
    </div>
  </div>

  <div class="cr_der">
    <div class="cr_prev">
      <div class="cr_prev_cab">
        <h3><i class="fas fa-eye"></i> Vista previa</h3>
        <div class="cr_disps">
          <button class="cr_disp active" data-disp="movil" ${n("Móvil")}><i class="fas fa-mobile-screen"></i></button>
          <button class="cr_disp" data-disp="escritorio" ${n("Escritorio")}><i class="fas fa-desktop"></i></button>
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
          <a class="cr_sbtn cr_wa" id="compWA" href="#" target="_blank" ${n("WhatsApp")}><i class="fab fa-whatsapp"></i></a>
          <a class="cr_sbtn cr_tg" id="compTG" href="#" target="_blank" ${n("Telegram")}><i class="fab fa-telegram"></i></a>
          <button class="cr_sbtn cr_nt" id="compNat" ${n("Copiar Link")}><i class="fa-solid fa-link"></i></button>
        </div>
      </div>
    </div>
  </div>
</div>`,V=()=>{let r="Amor",e=null,u=null,o=!1;const g=v();g&&m(()=>import("./agregar-Dt5WJc-b.js"),__vite__mapDeps([0,1,2,3,4,5])).then(async i=>{try{const[s,c]=await Promise.all([i.misAudios(),i.misImagenes()]);a("#crMisAudios").html($(s,"crMisAud","headphones")),a("#crMisImgs").html($(c,"crMisImg","image"))}catch(s){console.error("Error cargando recursos:",s)}});const x=()=>{const i=a('input[name="crMusChip"]:checked');if(i.length)return i.val();const s=a('input[name="crMisAud"]:checked');return s.length?s.val():a("#cMusica").val().trim()},y=()=>{const i=a('input[name="crMisImg"]:checked');return i.length?i.val():a("#cImg").val().trim()},_=()=>({link:a("#cLink").val().trim().replace(/[^a-záéíóúñA-Z0-9]/gi,""),de:a("#cDe").val().trim()||"Amigo",para:a("#cPara").val().trim(),msg:a("#cMsg").val().trim(),musica:x(),img:y()}),w=async i=>{if(!i||i.length<3)return a("#linkStatus").html('<i class="fas fa-minus" style="color:var(--tx3)"></i>'),!1;if(f.has(i)){const s=f.get(i);return a("#linkStatus").html(s?'<i class="fas fa-circle-xmark" style="color:var(--error)"></i>':'<i class="fas fa-circle-check" style="color:var(--success)"></i>'),!s}a("#linkStatus").html('<i class="fas fa-spinner fa-spin" style="color:var(--tx3)"></i>');try{const c=await(g?await m(()=>import("./wiloves-DgOQvjes.js"),__vite__mapDeps([6,2,3,1,4])):await m(()=>import("./publico-CeZMUq8l.js"),__vite__mapDeps([7,2,3,1,4]))).existe(i);return f.set(i,c),a("#linkStatus").html(c?'<i class="fas fa-circle-xmark" style="color:var(--error)"></i>':'<i class="fas fa-circle-check" style="color:var(--success)"></i>'),!c}catch{return a("#linkStatus").html('<i class="fas fa-triangle-exclamation" style="color:var(--warning)"></i>'),!1}},b=async()=>{if(o||a("#cLink").val())return;const{para:i}=_();if(!i)return;o=!0;const s=i.toLowerCase().replace(/[^a-záéíóúñ0-9]/gi,"").substring(0,12);if(s.length<3)return o=!1;const c=Date.now().toString(36).slice(-3);let d=s,C=1;for(let k=0;k<30;k++){if(await w(d)){a("#cLink").val(d).trigger("input"),o=!1;return}d=k<10?`${s}${C++}`:`${s}${c}${C++}`}l("Prueba otro nombre base 🙏","warning"),o=!1},t=()=>{const i=_(),s=p[r]||p.Amor;a("#pvDe").text(i.de),a("#pvPara").text(i.para||"___"),a("#pvMsg").text(i.msg||"Tu mensaje aquí..."),a("#cCont").text(`${i.msg.length}/200`),a("#miniVista").css("background",s.b),a("#pvCor, .pv_cor").text(s.e),a("#urlLarga").val(i.para?D(r,i.de,i.para,i.msg,i.musica,i.img):"")},A=i=>{const s=encodeURIComponent(`💌 Mensaje especial: ${i}`);a("#compWA").attr("href",`https://wa.me/?text=${s}`),a("#compTG").attr("href",`https://t.me/share/url?url=${encodeURIComponent(i)}&text=💌`)},P=()=>a("#urlCorta").val()||a("#urlLarga").val();a(document).on("change.cr","#selPlantilla",function(){r=a(this).val(),a("#crChipsWrap").html(L(r)),a('input[name="crMusChip"]').prop("checked",!1),a("#cMusica").val(""),t()}),a(document).on("change.cr",'input[name="crMusChip"]',function(){a("#cMusica").val(""),a('input[name="crMisAud"]').prop("checked",!1),t()}),a(document).on("change.cr",'input[name="crMisAud"]',function(){a("#cMusica").val(""),a('input[name="crMusChip"]').prop("checked",!1),t()}),a(document).on("change.cr",'input[name="crMisImg"]',function(){a("#cImg").val(""),t()}),a(document).on("input.cr","#cMusica",function(){a(this).val().trim()&&(a('input[name="crMusChip"]').prop("checked",!1),a('input[name="crMisAud"]').prop("checked",!1)),t()}),a(document).on("input.cr","#cImg",function(){a(this).val().trim()&&a('input[name="crMisImg"]').prop("checked",!1),t()}),a(document).on("input.cr","#cLink",function(){const i=a(this).val().replace(/[^a-záéíóúñA-Z0-9]/gi,"");a(this).val(i),clearTimeout(e),e=setTimeout(()=>w(i),600)}),a(document).on("input.cr","#cPara",function(){t(),clearTimeout(u),u=setTimeout(()=>b(),1e3)}),a(document).on("input.cr","#cDe, #cMsg",t),a(document).on("click.cr",".cr_disp",function(){a(".cr_disp").removeClass("active"),a(this).addClass("active"),a("#marco").toggleClass("escritorio",a(this).data("disp")==="escritorio")}),a(document).on("click.cr","#copLarga, #abrLarga",function(i){const s=a("#urlLarga").val();if(!s)return l("No hay enlace","warning");i.currentTarget.id==="copLarga"?h(s,this,"¡Copiado!"):window.open(s,"_blank")}),a(document).on("click.cr","#guardarNube",async function(){const i=_();if(!i.para)return l("Completa el nombre 💕","warning");if(!i.link&&(await b(),i.link=a("#cLink").val().trim(),!i.link))return l("No se pudo generar link","error");if(a("#linkStatus").find(".fa-circle-xmark").length)return l("Link ocupado, generando otro...","warning"),setTimeout(()=>{a("#cLink").val(""),b()},500);M(this,!0);try{const c=await(g?await m(()=>import("./wiloves-DgOQvjes.js"),__vite__mapDeps([6,2,3,1,4])):await m(()=>import("./publico-CeZMUq8l.js"),__vite__mapDeps([7,2,3,1,4]))).guardar(i.link,{plantilla:I[r],nombre:r,de:i.de,para:i.para,msg:i.msg,musica:i.musica,img:i.img,emoji:p[r].e});if(!c)throw new Error("Link ocupado");f.set(c,!0);const d=g?T(c):E(c);a("#urlCorta").val(d),A(d),h(d,this,"¡Copiado! ☁️"),l("¡Enlace generado! 💌","success")}catch(s){console.error(s),l(s.message||"Error al guardar","error")}finally{M(this,!1)}}),a(document).on("click.cr","#copCorta, #abrCorta",function(i){const s=a("#urlCorta").val();if(!s)return l("Genera el enlace primero","warning");i.currentTarget.id==="copCorta"?h(s,this,"¡Copiado!"):window.open(s,"_blank")}),a(document).on("click.cr","#compNat",i=>{i.preventDefault();const s=P();if(!s)return l("Completa los campos 💕","warning");navigator.share?navigator.share({title:"Lovewi 💌",text:"Mensaje especial",url:s}):h(s,"#compNat","¡Copiado!")}),t()},U=()=>{a(document).off(".cr"),f.clear()};export{U as cleanup,V as init,N as render};
