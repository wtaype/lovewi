import{a as n}from"./wii-D67iYGq9.js";import{$ as t,e as d,y as u}from"./widev-CiGWk2mv.js";import{p,c as f}from"./parametros-Jr-yb4gg.js";import{rutas as h}from"./ruta-CNbVEUUB.js";import"./preload-helper-CPshegQA.js";const g=["Mensajes de Amor 💕","San Valentín 💌","Aniversarios 🥂","Declaraciones ❤️","Cartas de Amor ✉️"],_=[[1200,"Mensajes Creados"],[8,"Plantillas Únicas"],[6,"Categorías"]],$=[["Amor","Lovewi","Alguien especial","Eres mi todo, mi razón de sonreír cada día 💕"],["Declaracion","Martin","Catalina","Me gustas mucho y hoy decidí ser valiente. ¿Me darías la oportunidad de hacerte feliz? ❤️"],["Carta","Gabriel","Alejandra","Querida mía, escribo estas líneas porque hay sentimientos que necesitan más que una frase ✉️"],["Aniversario","Roberto","Elena","Un año más juntos y cada día te elijo de nuevo. Feliz aniversario mi amor 🥂"]],j=[["fa-palette","Elige tu Plantilla","Selecciona entre 8 plantillas diseñadas para cada ocasión especial"],["fa-pen-fancy","Personaliza","Escribe nombres, tu mensaje especial y agrega música si deseas"],["fa-share-nodes","Comparte","Obtén tu enlace único y envíalo por WhatsApp, Telegram o redes"]],b=[["Perfecta para sorprender a mi novia en San Valentín. Ella lloró de emoción 💕","Carlos M.","San Valentín 2026","⭐⭐⭐⭐⭐"],[`Usé ${n} para mi aniversario y fue un éxito total. Los diseños son preciosos 🎉`,"Ana R.","Aniversario","⭐⭐⭐⭐⭐"],["Lo mejor es que es gratis y sin límites. He creado varios mensajes increíbles 💙","Miguel S.","Usuario frecuente","⭐⭐⭐⭐"]],y=[["fa-heart","Personalizados","Dedicatorias únicas para San Valentín, aniversarios y fechas especiales"],["fa-mobile-screen","Responsive","Perfecto en móvil, tablet y escritorio. Comparte en cualquier plataforma"],["fa-lock","Privado y Seguro","Sin registro obligatorio, sin publicidad molesta"],["fa-music","Con Música","Añade tu canción favorita para hacerlo aún más emotivo"],["fa-cloud","En la Nube","Crea cuenta gratis y accede desde cualquier dispositivo"]],S=[["¿Es gratis crear mensajes?","Sí, 100% gratis y sin límites. Crea todos los mensajes que quieras sin costo alguno."],["¿Necesito registrarme?","No es obligatorio. Puedes crear mensajes sin cuenta. Con registro puedes guardar y gestionar tus mensajes."],["¿Cómo comparto mi mensaje?","Al crear tu mensaje obtienes un enlace único que puedes enviar por WhatsApp, Telegram o cualquier red social."],["¿Se puede agregar música?","Sí, puedes elegir canciones de fondo para hacer tu mensaje aún más especial y emotivo."],["¿Mis mensajes son privados?","Totalmente. Solo las personas con tu enlace pueden ver el mensaje que creaste."]],r=(s,a)=>`<div class="sec_head"><h2><i class="fas ${s}"></i> ${a}</h2><div class="sec_line"></div></div>`,C=([s,a,e,i])=>f(s,a,e,i,p[s]?.mu||""),k=()=>`<div class="inicio">
  <section class="hero">
    <div class="hero_txt">
      <div class="hero_badge"><i class="fas fa-heart"></i> ${n} ${u()}</div>
      <h1>Expresa tus <span class="gradiente">Sentimientos</span><br>con Mensajes <span class="gradiente">Únicos</span></h1>
      <div class="hero_roles">${g.map((s,a)=>`<span class="role${a?"":" active"}">${s}</span>`).join("")}</div>
      <p class="hero_sub">Crea dedicatorias personalizadas para tu pareja, amor o persona especial. Comparte en segundos 💌</p>
      <div class="hero_btns">
        <a href="/crear" class="btn_pri wi_nav"><i class="fas fa-wand-magic-sparkles"></i><span>Crear Mensaje Gratis</span></a>
        <a href="#ejemplos" class="btn_sec wi_scroll"><i class="fas fa-images"></i><span>Ver Ejemplos</span></a>
      </div>
      <div class="hero_stats">${_.map(([s,a])=>`<div class="hstat"><div class="hstat_n" data-target="${s}">0</div><div class="hstat_l">${a}</div></div>`).join("")}</div>
    </div>
    <div class="hero_visual">
      <span class="img_inicio"></span>
      <div class="hero_deco"><i class="fas fa-heart"></i><i class="fas fa-heart"></i><i class="fas fa-heart"></i></div>
    </div>
  </section>

  <section class="sec_ej" id="ejemplos">
    ${r("fa-sparkles","Inspírate con Ejemplos Reales")}
    <p class="sec_desc">Mensajes listos para personalizar. Haz clic en uno para verlo en acción</p>
    <div class="ej_grid">${$.map(s=>{const a=p[s[0]];return`
      <a class="ej_item" href="${C(s)}" target="_blank" style="--x:${a.x}">
        <div class="ej_top"><span>${a.e}</span><span class="ej_tag">${s[0]}</span></div>
        <p>"${s[3]}"</p>
        <div class="ej_meta"><span><i class="fas fa-user"></i> ${s[1]}</span><span><i class="fas fa-heart"></i> ${s[2]}</span></div>
        <span class="ej_ver"><i class="fas fa-eye"></i> Ver demostración</span>
      </a>`}).join("")}</div>
    <div class="sec_cta"><a href="/ejemplos" class="btn_sec wi_nav"><i class="fas fa-th-large"></i><span>Ver Todos los Ejemplos</span></a></div>
  </section>

  <section class="sec_test">
    <div class="test_bg">
      <div class="test_inner">
        <div class="test_left">
          <img src="./smile.avif" alt="${n}" class="test_img">
          <h2><i class="fas fa-comments"></i> Lo que dicen nuestros usuarios</h2>
          <p>Miles de personas ya expresaron sus sentimientos con <strong>${n}</strong></p>
        </div>
        <div class="test_right">${b.map(([s,a,e,i])=>`
          <div class="test_card">
            <div class="test_stars">${i}</div>
            <p>"${s}"</p>
            <div class="test_a"><strong>${a}</strong><span>${e}</span></div>
          </div>`).join("")}</div>
      </div>
    </div>
  </section>

  <section class="sec_dual">
    <div class="dual_grid">
      <div class="dual_left">
        ${r("fa-lightbulb","¿Cómo funciona?")}
        <div class="pasos_list">${j.map(([s,a,e],i)=>`
          <div class="paso"><div class="paso_n">${i+1}</div><div><h3>${a}</h3><p>${e}</p></div></div>`).join("")}</div>
      </div>
      <div class="dual_right">
        ${r("fa-circle-question","Preguntas Frecuentes")}
        <div class="faq_list">${S.map(([s,a])=>`
          <details class="faq_item"><summary><span>${s}</span><i class="fas fa-chevron-down"></i></summary><p>${a}</p></details>`).join("")}</div>
      </div>
    </div>
  </section>

  <section class="sec_feat">
    ${r("fa-sparkles",`¿Por qué elegir ${n}?`)}
    <div class="feat_grid">${y.map(([s,a,e])=>`
      <div class="feat_card"><div class="feat_ico"><i class="fas ${s}"></i></div><h3>${a}</h3><p>${e}</p></div>`).join("")}</div>
  </section>

  <section class="cta_final">
    <i class="fas fa-heart cta_ico"></i>
    <h2>¿Listo para crear tu mensaje perfecto?</h2>
    <p>Únete a miles de personas que expresan sus sentimientos con <strong>${n}</strong></p>
    <a href="/crear" class="cta_btn wi_nav"><i class="fas fa-wand-magic-sparkles"></i> Crear Mensaje - Gratis</a>
    <div class="cta_tags"><span><i class="fas fa-check"></i> Sin registro</span><span><i class="fas fa-check"></i> 100% gratis</span><span><i class="fas fa-check"></i> Ilimitado</span></div>
  </section>
</div>`;let l=null,c=[];const P=()=>{let s=0;const a=t(".hero_roles .role");l=setInterval(()=>{a.eq(s).removeClass("active"),s=(s+1)%a.length,a.eq(s).addClass("active")},2500),c.push(d(".hero_stats",()=>{t(".hstat_n").each(function(){const e=t(this),i=+e.data("target"),v=Math.ceil(i/40);let o=0,m=setInterval(()=>{o=Math.min(o+v,i),e.text(o<i?Math.floor(o):`${i}+`),o>=i&&clearInterval(m)},30)})})),[".ej_item",".paso",".test_card",".feat_card",".faq_item"].forEach(e=>c.push(d(e,i=>t(i).addClass("visible"),{stagger:120}))),t(document).on("click.inicio",".wi_nav",function(e){e.preventDefault(),h.navigate(this.getAttribute("href"))}).on("click.inicio",".wi_scroll",function(e){e.preventDefault();const i=document.querySelector(this.getAttribute("href"));i&&window.scrollTo({top:i.getBoundingClientRect().top+scrollY-80,behavior:"smooth"})})},T=()=>{clearInterval(l),l=null,c.forEach(s=>s?.disconnect?.()),c=[],t(document).off(".inicio")};export{T as cleanup,P as init,k as render};
