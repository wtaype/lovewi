import{j as i}from"./vendor-gzd0YkcT.js";const l=({para:o="___",de:a="Tu amor",msg:s="",emoji:n="🥂",musica:r=""}={})=>`
<div class="pl_aniversario">
  <div class="pl_aniversario_fondo"></div>
  <div class="pl_aniversario_particulas"></div>
  <div class="pl_aniversario_contenido">
    <p class="pl_aniversario_label">Feliz Aniversario</p>
    <h1 class="pl_aniversario_para">${o}</h1>
    <span class="pl_aniversario_emoji">${n}</span>
    <p class="pl_aniversario_msg">${s||"Celebrando nuestro amor juntos..."}</p>
    <p class="pl_aniversario_de">Con todo mi amor, <strong>${a}</strong></p>
  </div>
  ${r?`<audio class="pl_audio" src="${r}" preload="none"></audio>
  <button class="pl_musica"><i class="fas fa-play"></i></button>`:""}
</div>`,p=()=>{const o=i(".pl_aniversario_particulas"),a=["✨","🥂","🎉","💛","⭐"];setInterval(()=>{const s=i(`<span class="pl_aniversario_part" style="left:${Math.random()*90+5}%;animation-duration:${Math.random()*2+3}s">${a[Math.random()*a.length|0]}</span>`);o.append(s),setTimeout(()=>s.remove(),5e3)},1e3)},t=()=>i(".pl_aniversario_part").remove();export{t as cleanup,p as init,l as render};
