import './amistad.css';

export const render = (data) => `
  <div class="pl_amistad">
    <div class="pl_fondo"></div>
    <div class="pl_contenido">
      <p class="pl_lbl">Para ti</p>
      <h1 class="pl_para">${data.para || '___'}</h1>
      <div class="pl_emoji">🤝</div>
      <p class="pl_msg">${data.msg || ''}</p>
      <p class="pl_de">Tu amig@, <strong>${data.de || '___'}</strong></p>
    </div>
  </div>`;

export const init = (data) => {
  setTimeout(() => document.querySelector('.pl_contenido')?.classList.add('visible'), 100);
};