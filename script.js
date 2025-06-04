document.addEventListener('DOMContentLoaded', function() {
    var myText = document.getElementById('myText');
    myText.style.visibility = 'visible';
    myText.classList.add('fade-in');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    if (targetID && targetID.startsWith('#')) {
      document.querySelector(targetID).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Volunteer Form validation
document.querySelector('form').addEventListener('submit', function (e) {
  const name = this.querySelector('input[type="text"]').value.trim();
  const city = this.querySelectorAll('input[type="text"]')[1].value.trim();
  const role = this.querySelector('select').value;

  if (!name || !city || !role) {
    e.preventDefault();
    alert('Please fill out all fields to volunteer 🐾');
  } else {
    alert(`Thanks for joining, ${name}! You're officially a city paw-saver 🐶✨`);
  }
});

