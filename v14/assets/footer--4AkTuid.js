import{j as a}from"./vendor-gzd0YkcT.js";import{l as t,c as r,d as l,a as o,v as e}from"./wii-CmqZrdN0.js";function i(){const s=new Date;return`
  <footer class="foo wb txc psa">
    <span>Creado con <i class="fas fa-heart"></i> by <a class="ftx lkme" href="${t}" target="_blank">${r}</a></span>
    <span>${l} - <span class="wty">${s.getFullYear()}</span></span>
    <span class="abw"> | ${o} ${e} | actualizado:
    <span class="wtu">${s.toLocaleString()}</span></span>
  </footer>
  `}a("body").append(i());a("head").append('<style>:root{--bgim:url("/lovewi/v14/wpuntos.svg")}body{background: var(--bgim), var(--bg)}</style>');a(".wimenu").on("click",function(){a(".wiheader").toggleClass("movil"),a(this).find("i").toggleClass("fa-bars fa-times")});const n=()=>{const s=a(".hero_imagen");s.length?s.append('<img src="/lovewi/v14/amor.webp" alt="Lovewi - Mensajes de Amor">'):requestAnimationFrame(n)};n();console.log(`✅ ${o} : ${e}`);export{i as footer};
