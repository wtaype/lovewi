import './inicio.css';
import $ from 'jquery';
import { app, version } from '../wii.js';

export const render = () => `
  <div class="inicio_container">
    <section class="hero">
      <div class="hero_badge">
        <i class="fas fa-heart"></i>
        <span>San Valentín 2026</span>
      </div>
      <h1 class="hero_title">Crea <span class="gradient_text">Mensajes de Amor</span> Únicos y Especiales</h1>
      <p class="hero_subtitle">Expresa tus sentimientos con mensajes personalizados, románticos y hermosos. Para tu pareja, amor o persona especial 💌</p>
      <div class="hero_actions">
        <a href="/crear" class="btn_primary"><i class="fas fa-heart"></i> Crear Mensaje Ahora</a>
        <a href="#ejemplos" class="btn_secondary"><i class="fas fa-images"></i> Ver Ejemplos</a>
      </div>
      <div class="hero_stats">
        <div class="stat_mini"><i class="fas fa-heart"></i><span>100% Gratis</span></div>
        <div class="stat_mini"><i class="fas fa-infinity"></i><span>Sin Límites</span></div>
        <div class="stat_mini"><i class="fas fa-palette"></i><span>5 Temas</span></div>
      </div>
    </section>

    <section class="features">
      <div class="feature_item">
        <div class="feature_icon"><i class="fas fa-heart"></i></div>
        <h3>Mensajes Románticos</h3>
        <p>Dedicatorias únicas para San Valentín, aniversarios y fechas especiales</p>
      </div>
      <div class="feature_item">
        <div class="feature_icon"><i class="fas fa-palette"></i></div>
        <h3>5 Temas Hermosos</h3>
        <p>Elige entre Cielo, Dulce, Paz, Mora y Futuro para expresar tus sentimientos</p>
      </div>
      <div class="feature_item">
        <div class="feature_icon"><i class="fas fa-share-nodes"></i></div>
        <h3>Comparte Fácil</h3>
        <p>Descarga o comparte en redes sociales con un solo clic</p>
      </div>
    </section>

    <section class="ejemplos" id="ejemplos">
      <h2 class="section_title"><i class="fas fa-heart"></i> Ejemplos de Mensajes de Amor</h2>
      
      <div class="ejemplos_grid">
        <div class="ejemplo_card tema_dulce">
          <div class="ejemplo_header">
            <i class="fas fa-heart"></i>
            <h3>Para Mi Amor</h3>
          </div>
          <p class="ejemplo_text">"Eres la razón de mi sonrisa, la luz de mis días y el amor de mi vida. Contigo todo es mejor. Te amo infinitamente 💕"</p>
          <div class="ejemplo_tags">
            <span class="tag">Romántico</span>
            <span class="tag">San Valentín</span>
          </div>
        </div>

        <div class="ejemplo_card tema_paz">
          <div class="ejemplo_header">
            <i class="fas fa-calendar-heart"></i>
            <h3>Feliz Aniversario</h3>
          </div>
          <p class="ejemplo_text">"Cada día a tu lado es un regalo. Gracias por llenar mi vida de amor, risas y momentos inolvidables. Feliz aniversario, mi amor 💚"</p>
          <div class="ejemplo_tags">
            <span class="tag">Aniversario</span>
            <span class="tag">Especial</span>
          </div>
        </div>

        <div class="ejemplo_card tema_mora">
          <div class="ejemplo_header">
            <i class="fas fa-envelope-heart"></i>
            <h3>Carta de Amor</h3>
          </div>
          <p class="ejemplo_text">"Desde que llegaste a mi vida todo cambió. Eres mi persona favorita, mi cómplice, mi todo. Gracias por existir y amarme así 💜"</p>
          <div class="ejemplo_tags">
            <span class="tag">Carta</span>
            <span class="tag">Profundo</span>
          </div>
        </div>

        <div class="ejemplo_card tema_cielo">
          <div class="ejemplo_header">
            <i class="fas fa-sun"></i>
            <h3>Buenos Días</h3>
          </div>
          <p class="ejemplo_text">"Buenos días, mi amor. Despertar pensando en ti es lo mejor del día. Que tengas un día increíble lleno de sonrisas. Te amo 💙"</p>
          <div class="ejemplo_tags">
            <span class="tag">Diario</span>
            <span class="tag">Mañana</span>
          </div>
        </div>

        <div class="ejemplo_card tema_dulce">
          <div class="ejemplo_header">
            <i class="fas fa-ring"></i>
            <h3>Declaración de Amor</h3>
          </div>
          <p class="ejemplo_text">"No sabía que el amor verdadero existía hasta que te conocí. Eres mi sueño hecho realidad. ¿Quieres ser mi novia/novio? ❤️"</p>
          <div class="ejemplo_tags">
            <span class="tag">Declaración</span>
            <span class="tag">Especial</span>
          </div>
        </div>

        <div class="ejemplo_card tema_futuro">
          <div class="ejemplo_header">
            <i class="fas fa-moon"></i>
            <h3>Buenas Noches</h3>
          </div>
          <p class="ejemplo_text">"Que descanses mi amor. Sueña bonito, con nosotros, con nuestro futuro juntos. Mañana será otro día maravilloso a tu lado 🌙"</p>
          <div class="ejemplo_tags">
            <span class="tag">Noche</span>
            <span class="tag">Dulce</span>
          </div>
        </div>

        <div class="ejemplo_card tema_paz">
          <div class="ejemplo_header">
            <i class="fas fa-hands-holding-heart"></i>
            <h3>Gracias por Todo</h3>
          </div>
          <p class="ejemplo_text">"Gracias por amarme tal como soy, por apoyarme siempre y por hacer de cada momento algo especial. Eres lo mejor que me ha pasado 💚"</p>
          <div class="ejemplo_tags">
            <span class="tag">Gratitud</span>
            <span class="tag">Sincero</span>
          </div>
        </div>

        <div class="ejemplo_card tema_mora">
          <div class="ejemplo_header">
            <i class="fas fa-infinity"></i>
            <h3>Amor Eterno</h3>
          </div>
          <p class="ejemplo_text">"Mi amor por ti no tiene fin. Contigo quiero envejecer, vivir mil aventuras y crear recuerdos inolvidables. Para siempre juntos 💜"</p>
          <div class="ejemplo_tags">
            <span class="tag">Eterno</span>
            <span class="tag">Compromiso</span>
          </div>
        </div>

        <div class="ejemplo_card tema_dulce">
          <div class="ejemplo_header">
            <i class="fas fa-kiss"></i>
            <h3>Te Extraño Mucho</h3>
          </div>
          <p class="ejemplo_text">"Cada segundo sin ti se siente eterno. Te extraño más de lo que las palabras pueden expresar. Pronto estaremos juntos de nuevo ❤️"</p>
          <div class="ejemplo_tags">
            <span class="tag">Nostalgia</span>
            <span class="tag">Distancia</span>
          </div>
        </div>

        <div class="ejemplo_card tema_cielo">
          <div class="ejemplo_header">
            <i class="fas fa-star"></i>
            <h3>Eres Mi Estrella</h3>
          </div>
          <p class="ejemplo_text">"Eres mi estrella en la noche oscura, mi guía, mi luz. Contigo todo tiene sentido. Gracias por iluminar mi vida 💙"</p>
          <div class="ejemplo_tags">
            <span class="tag">Poético</span>
            <span class="tag">Inspirador</span>
          </div>
        </div>

        <div class="ejemplo_card tema_paz">
          <div class="ejemplo_header">
            <i class="fas fa-seedling"></i>
            <h3>Nuestro Amor Crece</h3>
          </div>
          <p class="ejemplo_text">"Nuestro amor crece cada día como una planta hermosa. Juntos construimos un jardín de momentos felices y recuerdos preciosos 🌱"</p>
          <div class="ejemplo_tags">
            <span class="tag">Esperanza</span>
            <span class="tag">Crecimiento</span>
          </div>
        </div>

        <div class="ejemplo_card tema_mora">
          <div class="ejemplo_header">
            <i class="fas fa-crown"></i>
            <h3>Mi Reina/Rey</h3>
          </div>
          <p class="ejemplo_text">"Eres la reina/rey de mi corazón. Tu amor me hace sentir completo. Juntos somos invencibles. Te amo con toda mi alma 👑"</p>
          <div class="ejemplo_tags">
            <span class="tag">Admiración</span>
            <span class="tag">Devoción</span>
          </div>
        </div>
      </div>
    </section>

    <section class="benefits">
      <h2 class="section_title"><i class="fas fa-sparkles"></i> ¿Por qué usar ${app}?</h2>
      <div class="benefits_grid">
        <div class="benefit_card">
          <div class="benefit_icon"><i class="fas fa-heart"></i></div>
          <h3>Mensajes Únicos</h3>
          <p>Cada mensaje es especial y personalizado para expresar tus verdaderos sentimientos</p>
        </div>
        <div class="benefit_card">
          <div class="benefit_icon"><i class="fas fa-gift"></i></div>
          <h3>100% Gratis</h3>
          <p>Crea todos los mensajes que quieras sin costo alguno, sin límites ni restricciones</p>
        </div>
        <div class="benefit_card">
          <div class="benefit_icon"><i class="fas fa-palette"></i></div>
          <h3>5 Temas Hermosos</h3>
          <p>Elige entre Cielo, Dulce, Paz, Mora y Futuro para darle el toque perfecto</p>
        </div>
        <div class="benefit_card">
          <div class="benefit_icon"><i class="fas fa-lock"></i></div>
          <h3>Privado y Seguro</h3>
          <p>Tus mensajes son privados. No compartimos información con nadie</p>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="cta_icon"><i class="fas fa-heart"></i></div>
      <h2>¿Listo para crear tu mensaje de amor perfecto?</h2>
      <p>Únete a miles de personas que expresan sus sentimientos con <strong>${app}</strong></p>
      <a href="/crear" class="cta_btn"><i class="fas fa-heart"></i> Crear Mi Mensaje Ahora</a>
      <p class="cta_note">
        <i class="fas fa-check"></i> Gratis 
        <i class="fas fa-check"></i> Sin registro 
        <i class="fas fa-check"></i> Ilimitado
      </p>
    </section>
  </div>
`;

export const init = () => {
  // Scroll suave a ejemplos
  $('a[href="#ejemplos"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#ejemplos').offset().top - 80 }, 600);
  });

  console.log(`💌 ${app} ${version} - Inicio cargado`);
};

export const cleanup = () => {
  $('a[href="#ejemplos"]').off();
  console.log('🧹 Inicio limpiado');
};