import{j as t}from"./vendor-gzd0YkcT.js";const p=({para:s="___",de:a="Tu amigo",msg:l="",emoji:d="💙",musica:i=""}={})=>`
<div class="pl_amistad">
  <div class="pl_amistad_fondo"></div>
  <div class="pl_amistad_estrellas"></div>
  <div class="pl_amistad_contenido">
    <p class="pl_amistad_label">Para mi amig@</p>
    <h1 class="pl_amistad_para">${s}</h1>
    <span class="pl_amistad_emoji">${d}</span>
    <p class="pl_amistad_msg">${l||"Un mensaje especial de amistad..."}</p>
    <p class="pl_amistad_de">Tu amig@, <strong>${a}</strong></p>
  </div>
  ${i?`<audio class="pl_audio" src="${i}" preload="none"></audio>
  <button class="pl_musica"><i class="fas fa-play"></i></button>`:""}
</div>`,o=()=>{const s=t(".pl_amistad_estrellas");setInterval(()=>{const a=t(`<i class="fas fa-star pl_amistad_star" style="left:${Math.random()*90+5}%;animation-duration:${Math.random()*2+2}s"></i>`);s.append(a),setTimeout(()=>a.remove(),4e3)},1200)},m=()=>t(".pl_amistad_star").remove();export{m as cleanup,o as init,p as render};
