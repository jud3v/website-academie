const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
   navLinks.classList.toggle('open')
   links.forEach(link => {
      link.classList.toggle('fade')
   })
});

(() => {
   setTimeout(() => {
      switch (window.location.pathname){
         case '/website-academie/index.html':
         case '/website-academie/':
            document.querySelector('.spy').classList.toggle('active');
            break;
         case '/website-academie/pages/players.html':
            document.querySelector('.spy').classList.toggle('active');
            break;
         case '/website-academie/pages/about.html':
            document.querySelector('.spy').classList.toggle('active');
            break;
         case '/website-academie/pages/contact.html':
            document.querySelector('.spy').classList.toggle('active');
            break;
         default:
            return false;
      }
   },250)
})()