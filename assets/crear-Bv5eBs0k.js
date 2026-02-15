import{j as a}from"./vendor-gzd0YkcT.js";import{N as c,w as p,c as v,v as u,p as m,e as _}from"./main-4lIdLQ0s.js";import"./main-LQ1q-0eJ.js";const b={Amor:"fa-heart",Amistad:"fa-user-group"},f={Amor:"linear-gradient(135deg,#ff6b8a,#ffb3c1,#fff0f3)",Amistad:"linear-gradient(135deg,#6b8aff,#b3c1ff,#f0f3ff)"},C=()=>`
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
      ${Object.keys(m).map((t,i)=>`
        <div class="cr_tab${i?"":" active"}" data-pl="${t}"><i class="fas ${b[t]||"fa-heart"}"></i> ${t}</div>
      `).join("")}
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
</div>`,x=()=>{let t="Amor";const i=()=>({de:a("#crDe").val().trim(),para:a("#crPara").val().trim(),msg:a("#crMsg").val().trim()}),r=()=>{const{de:e,para:s,msg:l}=i(),d=e||s?_(t,e,s,l):"";return a("#crURL").val(d),d},n=()=>{const{de:e,para:s,msg:l}=i();a("#pvDe").text(e||"___"),a("#pvPara").text(s||"___"),a("#pvMsg").text(l||"Tu mensaje aparecerá aquí..."),a("#crCount").text(l.length),a("#crMini").css("background",f[t]||f.Amor),r()},o=e=>{const s=encodeURIComponent(`💌 Un mensaje especial para ti: ${e}`);a("#shWhats").attr("href",`https://wa.me/?text=${s}`),a("#shTele").attr("href",`https://t.me/share/url?url=${encodeURIComponent(e)}&text=${encodeURIComponent("💌 Un mensaje especial para ti")}`)};a(document).on("click",".cr_tab",function(){a(".cr_tab").removeClass("active"),a(this).addClass("active"),t=a(this).data("pl"),n()}),a(document).on("input","#crDe, #crPara, #crMsg",()=>{n();const e=a("#crURL").val();e&&o(e)}),a(document).on("click",".cr_pv_dev",function(){a(".cr_pv_dev").removeClass("active"),a(this).addClass("active"),a("#crFrame").toggleClass("desktop",a(this).data("dev")==="desktop")}),a(document).on("click","#crVer",()=>{const e=r();e?window.open(e,"_blank"):c("Escribe al menos un nombre 💕","warning")}),a(document).on("click","#crCopy, #crLinkCopy",function(){const e=r();e?(p(e,this,"¡Copiado!"),o(e)):c("Escribe al menos un nombre 💕","warning")}),a(document).on("click","#crLinkOpen",()=>{const e=a("#crURL").val();e?window.open(e,"_blank"):c("Escribe al menos un nombre 💕","warning")}),a(document).on("click","#crDel",()=>{a("#crDe, #crPara, #crMsg").val(""),n(),c("Campos limpiados ✨","info")}),a(document).on("click","#shNative",e=>{e.preventDefault();const s=r();if(!s)return c("Escribe al menos un nombre 💕","warning");navigator.share?navigator.share({title:`💌 ${v}`,text:"Un mensaje especial para ti",url:s}):p(s,"#shNative","¡Copiado!")}),n(),console.log(`💌 ${v} ${u} - Crear`)},y=()=>{a(document).off("click",".cr_tab, .cr_pv_dev, #crVer, #crCopy, #crLinkCopy, #crLinkOpen, #crDel, #shNative"),a(document).off("input","#crDe, #crPara, #crMsg")};export{y as cleanup,x as init,C as render};
