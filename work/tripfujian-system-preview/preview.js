const views = [...document.querySelectorAll('[data-view]')];
const links = [...document.querySelectorAll('[data-view-link]')];
const menu = document.querySelector('.mobile-menu');
const menuButton = document.querySelector('.menu-button');

function showView(name, updateHash = true) {
  const target = views.find((view) => view.dataset.view === name) || views[0];
  views.forEach((view) => view.classList.toggle('is-active', view === target));
  links.forEach((link) => link.classList.toggle('is-active', link.dataset.viewLink === target.dataset.view));
  menu?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (updateHash) history.replaceState(null, '', `#${target.dataset.view}`);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

links.forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();
  showView(link.dataset.viewLink);
}));

menuButton?.addEventListener('click', () => {
  const open = menu?.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(Boolean(open)));
});

showView(location.hash.slice(1) || 'home', false);

