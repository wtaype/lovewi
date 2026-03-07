import{j as s}from"./vendor-gzd0YkcT.js";let l=null,p=[];const n=["💕","💗","💖","💘","💝","❤️","🩷","✨","🌸"],m=(a=25)=>Array.from({length:a},(i,o)=>{const c=n[o%n.length],e=1.5+Math.random()*2.5,t=6+Math.random()*14,r=Math.random()*8;return`<span style="left:${Math.random()*100}%;font-size:${e}vh;animation-duration:${t}s;animation-delay:${r}s">${c}</span>`}).join(""),_=a=>{const i=a.musica&&a.musica.trim();return`
${i?`
<div class="pl_amor_autoplay" id="plAutoplay">
  <span class="pl_amor_autoplay_icon">💕</span>
  <h2>Tienes un mensaje especial</h2>
  <p>${a.de?`De: ${a.de}`:"Alguien te quiere mucho"}</p>
  <div class="pl_amor_autoplay_btn"><i class="fas fa-play"></i> Toca para abrir</div>
</div>`:""}
<div class="pl_amor" id="plAmor" ${i?'style="display:none"':""}>
  <div class="pl_amor_particles">${m()}</div>
  <div class="pl_amor_content">
    <div class="pl_amor_heart">
      <span class="pl_amor_heart_icon">💕</span>
      <div class="pl_amor_heart_ring"></div>
    </div>
    <p class="pl_amor_para">Para ti</p>
    <h1 class="pl_amor_nombre"><span>${a.para||"Alguien especial"}</span></h1>
    <div class="pl_amor_msg_box">
      <p class="pl_amor_msg_deco">❝</p>
      <p class="pl_amor_msg">${a.msg||"Te quiero mucho 💕"}</p>
      <p class="pl_amor_msg_deco">❞</p>
    </div>
    <p class="pl_amor_de"><i class="fas fa-heart"></i> Con amor, <strong>${a.de||"Anónimo"}</strong></p>
    ${i?`
    <div class="pl_amor_musica" id="plMusica">
      <i class="fas fa-music"></i>
      <span id="plMusicaTxt">Música</span>
      <div class="pl_bars"><div class="pl_bar"></div><div class="pl_bar"></div><div class="pl_bar"></div><div class="pl_bar"></div></div>
    </div>`:""}
  </div>
  <p class="pl_amor_foot">Hecho con <a href="/">Lovewi</a> 💌</p>
</div>`},v=a=>{if(!(a.musica&&a.musica.trim()))return;l=new Audio(a.musica),l.loop=!0,l.volume=.5;const o=()=>{l.play().then(()=>{s("#plMusica").addClass("playing"),s("#plMusicaTxt").text("Sonando")}).catch(()=>{})},c=()=>{s("#plAutoplay").fadeOut(400,function(){s(this).remove()}),s("#plAmor").css("display","").hide().fadeIn(600),o()};s(document).on("click.plAmor","#plAutoplay",c),p.push(()=>s(document).off("click.plAmor","#plAutoplay")),s(document).on("click.plAmor","#plMusica",()=>{l&&(l.paused?o():(l.pause(),s("#plMusica").removeClass("playing"),s("#plMusicaTxt").text("Pausado")))}),p.push(()=>s(document).off("click.plAmor","#plMusica"))},h=()=>{l&&(l.pause(),l.src="",l=null),p.forEach(a=>a()),p=[]};export{h as cleanup,v as init,_ as render};
