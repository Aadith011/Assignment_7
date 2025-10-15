const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && phone && email && message) {
    window.alert(`Thank you, ${name}. Your message has been sent.`);
  } else {
    document.getElementById('responseMessage').innerHTML = `<p style="color: red;">Please fill in all fields.</p>`;
  }
});
