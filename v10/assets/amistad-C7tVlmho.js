const l=s=>`
  <div class="pl_amistad">
    <div class="pl_fondo"></div>
    <div class="pl_contenido">
      <p class="pl_lbl">Para ti</p>
      <h1 class="pl_para">${s.para||"___"}</h1>
      <div class="pl_emoji">🤝</div>
      <p class="pl_msg">${s.msg||""}</p>
      <p class="pl_de">Tu amig@, <strong>${s.de||"___"}</strong></p>
    </div>
  </div>`,i=s=>{setTimeout(()=>document.querySelector(".pl_contenido")?.classList.add("visible"),100)};export{i as init,l as render};
