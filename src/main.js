import './styles/styles.scss';

const iconMenu = document.querySelector('.mobile-icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');

iconMenu.addEventListener('click', toggleMenu);
window.addEventListener('resize', toggleMenu);

function toggleMenu() {
  const windowWidth = window.innerWidth;

  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
  }

  if (windowWidth > 555) {
    mobileMenu.style.display = 'none';
  }
}


const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    const mobileIcon = icon.querySelector('img:not(.hover-icon)');
    const hoverIcon = icon.querySelector('.hover-icon');

    mobileIcon.style.display = 'none';
    hoverIcon.style.display = 'block';
  });

  icon.addEventListener('mouseleave', () => {
    const mobileIcon = icon.querySelector('img:not(.hover-icon)');
    const hoverIcon = icon.querySelector('.hover-icon');

    mobileIcon.style.display = 'block';
    hoverIcon.style.display = 'none';
  })
})
