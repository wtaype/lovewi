import{j as a}from"./vendor-gzd0YkcT.js";const t=({para:s="___",de:e="Alguien especial",msg:o="",emoji:l="❤️",musica:c=""}={})=>`
<div class="pl_declaracion">
  <div class="pl_declaracion_fondo"></div>
  <div class="pl_declaracion_petalos"></div>
  <div class="pl_declaracion_contenido">
    <div class="pl_declaracion_sobre">
      <i class="fas fa-envelope-open-text"></i>
    </div>
    <h1 class="pl_declaracion_para">${s}</h1>
    <span class="pl_declaracion_emoji">${l}</span>
    <p class="pl_declaracion_msg">${o||"¿Quieres ser mi novia?..."}</p>
    <p class="pl_declaracion_de">De: <strong>${e}</strong></p>
    <div class="pl_declaracion_btns">
      <button class="pl_dec_si">Sí, acepto 💕</button>
      <button class="pl_dec_no">Déjame pensarlo 😊</button>
    </div>
  </div>
  ${c?`<audio class="pl_audio" src="${c}" preload="none"></audio>
  <button class="pl_musica pl_musica_dec"><i class="fas fa-play"></i></button>`:""}
</div>`,i=()=>{const s=a(".pl_declaracion_petalos");setInterval(()=>{const e=a(`<span class="pl_dec_petalo" style="left:${Math.random()*90+5}%;animation-duration:${Math.random()*3+3}s">🌹</span>`);s.append(e),setTimeout(()=>e.remove(),6e3)},800),a(document).on("click.pldec",".pl_dec_si",function(){a(this).html("🎉 ¡Yupi! 💕").css({background:"#4CAF50",transform:"scale(1.1)"}),a(".pl_dec_no").fadeOut(300);for(let e=0;e<20;e++){const o=a(`<span class="pl_dec_confeti" style="left:${Math.random()*100}%;animation-delay:${Math.random()*.5}s">${["🎉","💕","✨","❤️","🥳"][Math.random()*5|0]}</span>`);a("body").append(o),setTimeout(()=>o.remove(),3e3)}}),a(document).on("mouseenter.pldec",".pl_dec_no",function(){a(this).css({position:"relative",left:`${Math.random()*20-10}vh`,top:`${Math.random()*10-5}vh`})})},d=()=>{a(document).off(".pldec"),a(".pl_dec_petalo, .pl_dec_confeti").remove()};export{d as cleanup,i as init,t as render};
