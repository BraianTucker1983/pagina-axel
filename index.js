const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Validar formato básico de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
      alert('Por favor ingresa un email válido.');
      return;
    }

    // Crear link mailto
    const subject = encodeURIComponent('Contacto desde la web: Clases de Batería');
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`);

    window.location.href = `mailto:braiantucker@gmail.com?subject=${subject}&body=${body}`;
  });
});

document.getElementById('whatsapp-float').addEventListener('click', function(e) {
  e.preventDefault();

  // Número de WhatsApp internacional sin signos, ejemplo: 5491122334455
  const phoneNumber = '5491153143204';

  // Mensaje inicial opcional
  const message = encodeURIComponent('Hola! Quiero más info sobre las clases de batería acústica.');

  // URL para abrir WhatsApp web o app móvil
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(whatsappUrl, '_blank');
});