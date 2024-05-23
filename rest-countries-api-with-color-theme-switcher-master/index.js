document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
  
    themeToggle.addEventListener('click', function() {
      body.classList.toggle('dark');
    });
  });
  