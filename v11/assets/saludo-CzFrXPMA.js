import{j as p}from"./vendor-gzd0YkcT.js";const _=({para:a="___",de:s="Un amigo",msg:o="",emoji:d="🌅",musica:l=""}={})=>`
<div class="pl_saludo">
  <div class="pl_saludo_fondo"></div>
  <div class="pl_saludo_rayos"></div>
  <div class="pl_saludo_contenido">
    <div class="pl_saludo_sol"><i class="fas fa-sun"></i></div>
    <p class="pl_saludo_label">Un saludo especial para</p>
    <h1 class="pl_saludo_para">${a}</h1>
    <span class="pl_saludo_emoji">${d}</span>
    <p class="pl_saludo_msg">${o||"¡Que tengas un día maravilloso!"}</p>
    <p class="pl_saludo_de">Con cariño, <strong>${s}</strong></p>
  </div>
  ${l?`<audio class="pl_audio" src="${l}" preload="none"></audio>
  <button class="pl_musica pl_musica_saludo"><i class="fas fa-play"></i></button>`:""}
</div>`,n=()=>{const a=p(".pl_saludo_rayos");for(let s=0;s<8;s++)a.append(`<div class="pl_saludo_rayo" style="transform:rotate(${s*45}deg)"></div>`)},c=()=>{};export{c as cleanup,n as init,_ as render};
