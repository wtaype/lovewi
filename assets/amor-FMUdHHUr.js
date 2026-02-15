const l=s=>`
  <div class="pl_amor">
    <div class="pl_fondo"></div>
    <div class="pl_contenido">
      <p class="pl_lbl">Para ti</p>
      <h1 class="pl_para">${s.para||"___"}</h1>
      <div class="pl_corazon">❤️</div>
      <p class="pl_msg">${s.msg||""}</p>
      <p class="pl_de">Con amor, <strong>${s.de||"___"}</strong></p>
    </div>
  </div>`,o=s=>{setTimeout(()=>document.querySelector(".pl_contenido")?.classList.add("visible"),100)};export{o as init,l as render};
