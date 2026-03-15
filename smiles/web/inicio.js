import './inicio.css';
import { app, version } from '../wii.js';
import { $, wiVista, year } from '../widev.js';

export const render = () => `
  <div class="inicio">
    <section class="hero">
      <div class="hero_fondo"></div>
      <div class="hero_contenido">
        <div class="hero_badge">
          <i class="fas fa-heart"></i>
          <span>San Valentín ${year()} y Más</span>
        </div>
        <h1 class="hero_titulo">
          Expresa tus <span class="gradiente">Sentimientos</span><br>
          con Mensajes <span class="gradiente">Únicos</span>
        </h1>
        <p class="hero_subtitulo">
          Crea dedicatorias personalizadas para tu pareja, amor o persona especial.<br>
          Elige entre 5 temas hermosos y comparte en segundos 💌
        </p>
        <div class="hero_botones">
          <a href="/crear" class="btn_principal">
            <i class="fas fa-wand-magic-sparkles"></i>
            <span>Crear Mensaje Gratis</span>
          </a>
          <a href="#ejemplos" class="btn_secundario">
            <i class="fas fa-images"></i>
            <span>Ver Ejemplos</span>
          </a>
        </div>
        <div class="hero_stats">
          <div class="stat"><i class="fas fa-heart"></i><span>100% Gratis</span></div>
          <div class="stat"><i class="fas fa-infinity"></i><span>Sin Límites</span></div>
          <div class="stat"><i class="fas fa-palette"></i><span>5 Temas</span></div>
          <div class="stat"><i class="fas fa-share-nodes"></i><span>Fácil de Compartir</span></div>
        </div>
      </div>
      <div class="hero_imagen">
        <span class="img_inicio"></span>
        <div class="hero_decoracion">
          <i class="fas fa-heart"></i>
          <i class="fas fa-heart"></i>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </section>

    <section class="caracteristicas">
      <h2 class="seccion_titulo">
        <i class="fas fa-sparkles"></i>
        ¿Por qué elegir ${app}?
      </h2>
      <div class="caracteristicas_grid">
        <div class="caracteristica" data-vista="car1">
          <div class="caracteristica_icono"><i class="fas fa-heart"></i></div>
          <h3>Mensajes Personalizados</h3>
          <p>Crea dedicatorias únicas para San Valentín, aniversarios, cumpleaños y fechas especiales</p>
        </div>
        <div class="caracteristica" data-vista="car2">
          <div class="caracteristica_icono"><i class="fas fa-mobile-screen"></i></div>
          <h3>100% Responsive</h3>
          <p>Perfectos en móvil, tablet y escritorio. Comparte en WhatsApp, Telegram y más</p>
        </div>
        <div class="caracteristica" data-vista="car3">
          <div class="caracteristica_icono"><i class="fas fa-lock"></i></div>
          <h3>Privado y Seguro</h3>
          <p>Tus mensajes son privados. Sin registro obligatorio, sin publicidad molesta</p>
        </div>
        <div class="caracteristica" data-vista="car4">
          <div class="caracteristica_icono"><i class="fas fa-music"></i></div>
          <h3>Agrega Música</h3>
          <p>Añade tu canción favorita para hacer el mensaje aún más especial y emotivo</p>
        </div>
        <div class="caracteristica" data-vista="car5">
          <div class="caracteristica_icono"><i class="fas fa-cloud"></i></div>
          <h3>Guarda en la Nube</h3>
          <p>Crea cuenta gratis y accede a tus mensajes desde cualquier dispositivo</p>
        </div>
      </div>
    </section>

    <section class="ejemplos" id="ejemplos">
      <h2 class="seccion_titulo">
        <i class="fas fa-wand-magic-sparkles"></i>
        Ejemplos de Mensajes de Amor
      </h2>
      <p class="seccion_descripcion">Inspírate con estos ejemplos y crea el tuyo en segundos</p>
      
      <div class="ejemplos_grid">
        <div class="ejemplo cielo" data-vista="ej1">
          <div class="ejemplo_header">
            <i class="fas fa-heart"></i>
            <h3>Para Mi Amor</h3>
          </div>
          <p>"Cada día a tu lado es un regalo. Eres mi cielo, mi paz, mi todo. Te amo más de lo que las palabras pueden expresar 💙"</p>
          <span class="ejemplo_tema">Tema Cielo</span>
        </div>

        <div class="ejemplo dulce" data-vista="ej2">
          <div class="ejemplo_header">
            <i class="fas fa-calendar-heart"></i>
            <h3>Feliz Aniversario</h3>
          </div>
          <p>"Un año más juntos, mil sonrisas compartidas, infinitos te amo. Gracias por hacer de cada día una aventura especial 💕"</p>
          <span class="ejemplo_tema">Tema Dulce</span>
        </div>

        <div class="ejemplo paz" data-vista="ej3">
          <div class="ejemplo_header">
            <i class="fas fa-sun"></i>
            <h3>Buenos Días</h3>
          </div>
          <p>"Buenos días, amor. Despertar pensando en ti es lo mejor del día. Que tu jornada esté llena de alegría y éxitos 💚"</p>
          <span class="ejemplo_tema">Tema Paz</span>
        </div>

        <div class="ejemplo mora" data-vista="ej4">
          <div class="ejemplo_header">
            <i class="fas fa-envelope-heart"></i>
            <h3>Carta de Amor</h3>
          </div>
          <p>"Desde que llegaste a mi vida todo cambió. Eres mi cómplice, mi mejor amigo, mi amor verdadero. Gracias por existir 💜"</p>
          <span class="ejemplo_tema">Tema Mora</span>
        </div>

        <div class="ejemplo futuro" data-vista="ej5">
          <div class="ejemplo_header">
            <i class="fas fa-moon"></i>
            <h3>Buenas Noches</h3>
          </div>
          <p>"Que descanses, mi amor. Sueña bonito, con nosotros, con nuestro futuro juntos. Mañana será otro día maravilloso a tu lado 🌙"</p>
          <span class="ejemplo_tema">Tema Futuro</span>
        </div>

        <div class="ejemplo dulce" data-vista="ej6">
          <div class="ejemplo_header">
            <i class="fas fa-ring"></i>
            <h3>Declaración</h3>
          </div>
          <p>"No sabía que el amor verdadero existía hasta que te conocí. Eres mi sueño hecho realidad. ¿Quieres ser mi novia? ❤️"</p>
          <span class="ejemplo_tema">Tema Dulce</span>
        </div>
      </div>

      <div class="ejemplos_cta">
        <a href="/crear" class="btn_ejemplos">
          <i class="fas fa-plus-circle"></i>
          Crear Mi Mensaje Ahora
        </a>
      </div>
    </section>

    <section class="como_funciona">
      <h2 class="seccion_titulo">
        <i class="fas fa-lightbulb"></i>
        ¿Cómo funciona?
      </h2>
      <div class="pasos">
        <div class="paso" data-vista="paso1">
          <div class="paso_numero">1</div>
          <div class="paso_contenido">
            <h3>Elige tu Tema</h3>
            <p>Selecciona entre Cielo, Dulce, Paz, Mora o Futuro según tus emociones</p>
          </div>
        </div>
        <div class="paso" data-vista="paso2">
          <div class="paso_numero">2</div>
          <div class="paso_contenido">
            <h3>Personaliza</h3>
            <p>Escribe el nombre de tu amor, tu nombre y el mensaje especial que quieres transmitir</p>
          </div>
        </div>
        <div class="paso" data-vista="paso3">
          <div class="paso_numero">3</div>
          <div class="paso_contenido">
            <h3>Comparte</h3>
            <p>Obtén tu enlace único y compártelo por WhatsApp, Telegram o redes sociales en segundos</p>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonios">
      <h2 class="seccion_titulo">
        <i class="fas fa-comments"></i>
        Lo que dicen nuestros usuarios
      </h2>
      <div class="testimonios_grid">
        <div class="testimonio" data-vista="test1">
          <div class="testimonio_header">
            <i class="fas fa-quote-left"></i>
          </div>
          <p>"Perfecta para sorprender a mi novia en San Valentín. El tema Dulce es hermoso y ella lloró de emoción 💕"</p>
          <div class="testimonio_autor">
            <strong>Carlos M.</strong>
            <span>San Valentín 2025</span>
          </div>
        </div>
        <div class="testimonio" data-vista="test2">
          <div class="testimonio_header">
            <i class="fas fa-quote-left"></i>
          </div>
          <p>"Usé ${app} para mi aniversario y fue un éxito total. Super fácil de usar y los temas son preciosos 🎉"</p>
          <div class="testimonio_autor">
            <strong>Ana R.</strong>
            <span>Aniversario</span>
          </div>
        </div>
        <div class="testimonio" data-vista="test3">
          <div class="testimonio_header">
            <i class="fas fa-quote-left"></i>
          </div>
          <p>"Lo mejor es que es gratis y sin límites. He creado varios mensajes y todos quedaron increíbles 💙"</p>
          <div class="testimonio_autor">
            <strong>Miguel S.</strong>
            <span>Usuario frecuente</span>
          </div>
        </div>
      </div>
    </section>

    <section class="cta_final">
      <div class="cta_contenido">
        <i class="fas fa-heart cta_icono"></i>
        <h2>¿Listo para crear tu mensaje perfecto?</h2>
        <p>Únete a miles de personas que expresan sus sentimientos con <strong>${app}</strong></p>
        <a href="/crear" class="cta_boton">
          <i class="fas fa-wand-magic-sparkles"></i>
          Crear Mensaje Ahora - Gratis
        </a>
        <div class="cta_beneficios">
          <span><i class="fas fa-check"></i> Sin registro</span>
          <span><i class="fas fa-check"></i> 100% gratis</span>
          <span><i class="fas fa-check"></i> Ilimitado</span>
          <span><i class="fas fa-check"></i> 5 temas</span>
        </div>
      </div>
    </section>
  </div>
`;

export const init = () => {
  // Animaciones con Intersection Observer
  ['.caracteristica', '.ejemplo', '.paso', '.testimonio'].forEach(sel => {
    wiVista(sel, (el) => $(el).addClass('visible'));
  });

  // Scroll suave
  $('a[href^="#"]').on('click', function (e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 80 }, 600);
    }
  });

  // Animación de corazones flotantes
  setInterval(() => {
    const heart = $('<i class="fas fa-heart floating-heart"></i>');
    const left = Math.random() * 90 + 5;
    heart.css({ left: `${left}%`, animationDuration: `${Math.random() * 2 + 3}s` });
    $('.hero_decoracion').append(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 2000);

  console.log(`💌 ${app} ${version} - Inicio profesional cargado`);
};

export const cleanup = () => {
  $('a[href^="#"]').off('click');
  $('.floating-heart').remove();
  console.log('🧹 Inicio limpiado');
};