const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-navigation');
const navigationLinks = [...document.querySelectorAll('.site-navigation a[href^="#"]')];
const sections = navigationLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

document.getElementById('current-year').textContent = new Date().getFullYear();

function closeMenu() {
  navigation.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  document.body.classList.toggle('menu-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navigationLinks.forEach((link) => link.addEventListener('click', closeMenu));

if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const revealObserver = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    }),
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}

const activeLinkObserver = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navigationLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  }),
  { rootMargin: '-35% 0px -58% 0px', threshold: 0 }
);

sections.forEach((section) => activeLinkObserver.observe(section));

window.addEventListener('resize', () => {
  if (window.innerWidth > 620) closeMenu();
});