import{j as i}from"./vendor-gzd0YkcT.js";import{p as e,h as o,n as c}from"./main-IZC3CXfk.js";const r=()=>{const t=o();return`
<div class="plantilla">
  <div class="pl_hero">
    <div class="pl_hero_contenido">
      <h1 class="pl_titulo"><i class="fas fa-palette"></i> Nuestras <span class="gradiente">Plantillas</span></h1>
      <p class="pl_subtitulo">Elige el estilo perfecto para expresar lo que sientes. Cada plantilla está diseñada para emocionar.</p>
      <div class="pl_stats">
        <div class="stat"><i class="fas fa-layer-group"></i> ${c().length} plantillas</div>
        <div class="stat"><i class="fas fa-tags"></i> ${t.length} categorías</div>
        <div class="stat"><i class="fas fa-music"></i> Con música</div>
      </div>
    </div>
  </div>

  <div class="pl_galeria">
    <div class="pl_filtros">
      <button class="pl_filtro active" data-cat="Todas"><i class="fas fa-border-all"></i> Todas</button>
      ${t.map(s=>`<button class="pl_filtro" data-cat="${s}"><i class="fas fa-tag"></i> ${s}</button>`).join("")}
    </div>
    <div class="pl_grid" id="plGrid">
      ${c().map(s=>n(s)).join("")}
    </div>
  </div>

  <div class="pl_cta">
    <div class="pl_cta_contenido">
      <div class="pl_cta_icono">💌</div>
      <h2>¿Listo para emocionar?</h2>
      <p>Elige tu plantilla favorita y crea un mensaje inolvidable en segundos</p>
      <a href="/crear" class="pl_cta_btn"><i class="fas fa-wand-magic-sparkles"></i> Crear mensaje</a>
    </div>
  </div>
</div>`},n=t=>{const a=e[t];return`
<div class="pl_card" data-cat="${a.k}" data-nombre="${t}">
  <div class="pl_card_preview" style="background:${a.b}">
    ${a.mu?'<div class="pl_card_music"><i class="fas fa-music"></i></div>':""}
    <i class="fas ${a.i} pl_card_icono"></i>
    <div class="pl_card_mini">
      <span class="pl_mini_label">Para ti</span>
      <span class="pl_mini_nombre">${t}</span>
      <span class="pl_mini_emoji">${a.e}</span>
    </div>
  </div>
  <div class="pl_card_contenido">
    <div class="pl_card_header">
      <h3><i class="fas ${a.i}" style="color:${a.x}"></i> ${t}</h3>
      <span class="pl_card_badge">${a.k}</span>
    </div>
    <p class="pl_card_desc">${a.d}</p>
    <div class="pl_card_ejemplo">
      <i class="fas fa-quote-left"></i>
      <p>${a.ej}</p>
    </div>
    <div class="pl_card_footer">
      <a href="/crear" class="pl_btn_usar" data-pl="${t}"><i class="fas fa-plus"></i> Usar</a>
      <button class="pl_btn_preview" data-pl="${t}" data-tip="Vista previa"><i class="fas fa-eye"></i></button>
    </div>
  </div>
</div>`},v=()=>{const t=new IntersectionObserver(a=>{a.forEach((s,l)=>{s.isIntersecting&&(setTimeout(()=>s.target.classList.add("visible"),l*80),t.unobserve(s.target))})},{threshold:.1});i(".pl_card").each((a,s)=>t.observe(s)),i(document).on("click.plg",".pl_filtro",function(){const a=i(this).data("cat");i(".pl_filtro").removeClass("active"),i(this).addClass("active"),i(".pl_card").each(function(){const s=a==="Todas"||i(this).data("cat")===a;i(this).stop().animate({opacity:0},150,function(){i(this).toggle(s),s&&i(this).animate({opacity:1},250)})})}),i(document).on("click.plg",".pl_btn_preview",function(){const a=i(this).data("pl"),s=e[a],l=`${location.origin}/?${a}&de=Lovewi&para=Alguien+especial&msg=${encodeURIComponent(s.ej)}${s.mu?`&musica=${encodeURIComponent(s.mu)}`:""}`;window.open(l,"_blank")}),i(document).on("click.plg",".pl_btn_usar",function(a){a.preventDefault();const s=i(this).data("pl");sessionStorage.setItem("wiPlantilla",s),history.pushState({},"","/crear"),window.dispatchEvent(new PopStateEvent("popstate"))})},_=()=>{i(document).off(".plg")};export{_ as cleanup,v as init,r as render};
