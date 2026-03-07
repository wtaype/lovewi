import{j as s}from"./vendor-gzd0YkcT.js";let l=null,c=[];const o=["🌸","🩷","✨","💗","🌺","💐","⭐","🌷","🦋","💕"],u=(a=28)=>Array.from({length:a},(p,i)=>{const n=o[i%o.length],t=1.4+Math.random()*2.2,e=7+Math.random()*13,m=Math.random()*10;return`<span style="left:${Math.random()*100}%;font-size:${t}vh;animation-duration:${e}s;animation-delay:${m}s">${n}</span>`}).join(""),_=a=>{const p=a.musica&&a.musica.trim(),i=(a.img||"").trim();return`
${p?`
<div class="pl_m1_autoplay" id="plAutoplay">
  <span class="pl_m1_autoplay_icon">👸</span>
  <h2>Tienes un mensaje especial</h2>
  <p>${a.de?`De: ${a.de}`:"Alguien te admira mucho"}</p>
  <div class="pl_m1_autoplay_btn"><i class="fas fa-play"></i> Toca para abrir</div>
</div>`:""}
<div class="pl_m1" id="plM1" ${p?'style="display:none"':""}>
  <div class="pl_m1_particles">${u()}</div>
  <div class="pl_m1_content">
    <div class="pl_m1_title">Feliz Día de la Mujer</div>
    <h1 class="pl_m1_nombre"><span>${a.para||"Mujer increíble"}</span></h1>
    <div class="pl_m1_msg_box">
      <p class="pl_m1_msg_deco">❝</p>
      <p class="pl_m1_msg">${a.msg||"Tu valentía, tu fuerza y tu luz hacen del mundo un lugar mejor 🩷"}</p>
      <p class="pl_m1_msg_deco">❞</p>
    </div>
    ${i?`
    <div class="pl_m1_foto_wrap">
      <img class="pl_m1_foto" src="${i}" alt="Foto grupal" />
    </div>`:""}
    <p class="pl_m1_de"><i class="fas fa-heart"></i> Con admiración, <strong>${a.de||"Anónimo"}</strong></p>
    ${p?`
    <div class="pl_m1_musica" id="plMusica">
      <i class="fas fa-music"></i>
      <span id="plMusicaTxt">Música</span>
      <div class="pl_bars"><div class="pl_bar pl_m1_bar1"></div><div class="pl_bar pl_m1_bar2"></div><div class="pl_bar pl_m1_bar3"></div><div class="pl_bar pl_m1_bar4"></div></div>
    </div>`:""}
  </div>
  <p class="pl_m1_foot">Hecho con <a href="/">Lovewi</a> 🩷</p>
</div>`},v=a=>{if(!(a.musica&&a.musica.trim()))return;l=new Audio(a.musica),l.loop=!0,l.volume=.5;const i=()=>{l.play().then(()=>{s("#plMusica").addClass("playing"),s("#plMusicaTxt").text("Sonando")}).catch(()=>{})},n=()=>{s("#plAutoplay").fadeOut(400,function(){s(this).remove()}),s("#plM1").css("display","").hide().fadeIn(600),i()};s(document).on("click.plM1","#plAutoplay",n),c.push(()=>s(document).off("click.plM1","#plAutoplay")),s(document).on("click.plM1","#plMusica",()=>{l&&(l.paused?i():(l.pause(),s("#plMusica").removeClass("playing"),s("#plMusicaTxt").text("Pausado")))}),c.push(()=>s(document).off("click.plM1","#plMusica"))},f=()=>{l&&(l.pause(),l.src="",l=null),c.forEach(a=>a()),c=[]};export{f as cleanup,v as init,_ as render};
