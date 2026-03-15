import{j as s}from"./vendor-gzd0YkcT.js";let l=null,p=[];const r=["🌸","🦋","✨","💜","🌺","💐","⭐","🪻","🌷","🩷"],t=(a=28)=>Array.from({length:a},(i,e)=>{const c=r[e%r.length],u=1.4+Math.random()*2.2,n=7+Math.random()*13,o=Math.random()*10;return`<span style="left:${Math.random()*100}%;font-size:${u}vh;animation-duration:${n}s;animation-delay:${o}s">${c}</span>`}).join(""),_=a=>{const i=a.musica&&a.musica.trim(),e=(a.img||"").trim();return`
${i?`
<div class="pl_mujer_autoplay" id="plAutoplay">
  <span class="pl_mujer_autoplay_icon">💜</span>
  <h2>Tienes un mensaje especial</h2>
  <p>${a.de?`De: ${a.de}`:"Alguien te admira mucho"}</p>
  <div class="pl_mujer_autoplay_btn"><i class="fas fa-play"></i> Toca para abrir</div>
</div>`:""}
<div class="pl_mujer" id="plMujer" ${i?'style="display:none"':""}>
  <div class="pl_mujer_particles">${t()}</div>
  <div class="pl_mujer_content">
    <div class="pl_mujer_badge">8 de Marzo</div>
    <div class="pl_mujer_title">Feliz Día de la Mujer</div>
    <p class="pl_mujer_para">Para ti</p>
    <h1 class="pl_mujer_nombre"><span>${a.para||"Mujer increíble"}</span></h1>
    <div class="pl_mujer_msg_box">
      <p class="pl_mujer_msg_deco">❝</p>
      <p class="pl_mujer_msg">${a.msg||"Tu valentía, tu fuerza y tu luz hacen del mundo un lugar mejor 💜"}</p>
      <p class="pl_mujer_msg_deco">❞</p>
    </div>
    ${e?`
    <div class="pl_mujer_foto_wrap">
      <img class="pl_mujer_foto" src="${e}" alt="Foto grupal" />
    </div>`:""}
    <p class="pl_mujer_de"><i class="fas fa-heart"></i> Con admiración, <strong>${a.de||"Anónimo"}</strong></p>
    ${i?`
    <div class="pl_mujer_musica" id="plMusica">
      <i class="fas fa-music"></i>
      <span id="plMusicaTxt">Música</span>
      <div class="pl_bars"><div class="pl_bar pl_mujer_bar1"></div><div class="pl_bar pl_mujer_bar2"></div><div class="pl_bar pl_mujer_bar3"></div><div class="pl_bar pl_mujer_bar4"></div></div>
    </div>`:""}
  </div>
  <p class="pl_mujer_foot">Hecho con <a href="/">Lovewi</a> 💜</p>
</div>`},j=a=>{if(!(a.musica&&a.musica.trim()))return;l=new Audio(a.musica),l.loop=!0,l.volume=.5;const e=()=>{l.play().then(()=>{s("#plMusica").addClass("playing"),s("#plMusicaTxt").text("Sonando")}).catch(()=>{})},c=()=>{s("#plAutoplay").fadeOut(400,function(){s(this).remove()}),s("#plMujer").css("display","").hide().fadeIn(600),e()};s(document).on("click.plMujer","#plAutoplay",c),p.push(()=>s(document).off("click.plMujer","#plAutoplay")),s(document).on("click.plMujer","#plMusica",()=>{l&&(l.paused?e():(l.pause(),s("#plMusica").removeClass("playing"),s("#plMusicaTxt").text("Pausado")))}),p.push(()=>s(document).off("click.plMujer","#plMusica"))},v=()=>{l&&(l.pause(),l.src="",l=null),p.forEach(a=>a()),p=[]};export{v as cleanup,j as init,_ as render};
