import{j as n}from"./vendor-gzd0YkcT.js";import{w as l,e as u}from"./main-CeuGdfsk.js";import"./main-DlvnUcWD.js";let i=null,d=null;const w=(a={})=>{const o=a.de||"Alguien",r=a.para||"Ti",t=a.msg||"Eres lo más hermoso que me ha pasado en la vida. Cada día a tu lado es un regalo. Te amo con todo mi corazón 💕",s=u(a.nombre||"Amor",a.de,a.para,a.msg);return`
    <div class="amor">
      <canvas id="amorCanvas"></canvas>
      <div class="amor_content">
        <p class="amor_para">Para ti</p>
        <h1 class="amor_nombre">${r}</h1>
        <span class="amor_corazon">❤️</span>
        <p class="amor_msg" id="amorMsg"></p>
        <p class="amor_de">Con amor, <span>${o}</span></p>
      </div>
      <div class="amor_footer">
        <button class="amor_btn" id="amorCopy" title="Copiar enlace"><i class="fas fa-link"></i></button>
        <button class="amor_btn" id="amorShare" title="Compartir"><i class="fas fa-share"></i></button>
        <a href="/" title="Crear el tuyo">💌 ${a.nombre||"Lovewi"}</a>
      </div>
      <input type="hidden" id="amorURL" value="${s}">
      <input type="hidden" id="amorTxt" value="${t}">
    </div>
  `},C=(a={})=>{f(),v(n("#amorTxt").val()),n("#amorCopy").on("click",function(){l(n("#amorURL").val(),this,"¡Enlace copiado!")}),n("#amorShare").on("click",()=>{const o=n("#amorURL").val();navigator.share?navigator.share({title:"💌 Un mensaje de amor",text:`De ${a.de||"alguien"} para ${a.para||"ti"}`,url:o}):l(o,"#amorShare","¡Copiado!")})},v=a=>{const o=n("#amorMsg");let r=0;o.addClass("typewriter").text("");const t=()=>{r<=a.length?(o.text(a.slice(0,r++)),d=setTimeout(t,35)):o.removeClass("typewriter")};t()},f=()=>{const a=document.getElementById("amorCanvas");if(!a)return;const o=a.getContext("2d");let r,t;const s=()=>{r=a.width=window.innerWidth,t=a.height=window.innerHeight};s(),n(window).on("resize.amor",s);const p=Array.from({length:35},()=>c(r,t,!0)),m=()=>{o.clearRect(0,0,r,t),p.forEach(e=>{o.save(),o.globalAlpha=e.o,o.translate(e.x,e.y),o.rotate(e.r),o.font=`${e.s}px serif`,o.fillText("❤",0,0),o.restore(),e.y+=e.vy,e.x+=Math.sin(e.y*.01)*.5,e.r+=e.vr,e.y>t+20&&Object.assign(e,c(r,t))}),i=requestAnimationFrame(m)};m()},c=(a,o,r=!1)=>({x:Math.random()*a,y:r?Math.random()*o:-20,s:10+Math.random()*20,o:.15+Math.random()*.35,vy:.3+Math.random()*1.2,vr:(Math.random()-.5)*.02,r:Math.random()*Math.PI*2}),x=()=>{i&&cancelAnimationFrame(i),clearTimeout(d),n(window).off("resize.amor"),n("#amorCopy, #amorShare").off()};export{x as cleanup,C as init,w as render};
