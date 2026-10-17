'use strict';

document.getElementById('year').textContent = String(new Date().getFullYear());

const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
let statusTimer;
if (window.isSecureContext && navigator.clipboard?.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    clearTimeout(statusTimer);
    try {
      await navigator.clipboard.writeText('yangruijie@mail.ustc.edu.cn');
      copyStatus.textContent = 'Email copied';
    } catch {
      copyStatus.textContent = 'Please select and copy the email address.';
    }
    statusTimer = setTimeout(() => { copyStatus.textContent = ''; }, 4000);
  });
}

if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main > section').forEach(section => observer.observe(section));
}
