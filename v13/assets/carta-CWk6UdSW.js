import{j as i}from"./vendor-gzd0YkcT.js";const r=({para:a="___",de:t="Con amor",msg:s="",emoji:l="✉️",musica:c=""}={})=>`
<div class="pl_carta">
  <div class="pl_carta_fondo"></div>
  <div class="pl_carta_papel">
    <div class="pl_carta_sello"><i class="fas fa-heart"></i></div>
    <p class="pl_carta_saludo">Querido/a <strong>${a}</strong>,</p>
    <div class="pl_carta_linea"></div>
    <p class="pl_carta_msg">${s||"Escribo estas líneas desde el fondo de mi corazón..."}</p>
    <div class="pl_carta_linea"></div>
    <p class="pl_carta_cierre">Con todo mi cariño,</p>
    <p class="pl_carta_firma">${t}</p>
    <span class="pl_carta_emoji">${l}</span>
  </div>
  ${c?`<audio class="pl_audio" src="${c}" preload="none"></audio>
  <button class="pl_musica pl_musica_carta"><i class="fas fa-play"></i></button>`:""}
</div>`,e=()=>{const a=i(".pl_carta_msg"),t=a.text();a.text("");let s=0;const l=()=>{s<t.length&&(a.text(a.text()+t[s]),s++,setTimeout(l,30))};setTimeout(l,800)},p=()=>{};export{p as cleanup,e as init,r as render};
