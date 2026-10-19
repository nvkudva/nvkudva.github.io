import { profile } from './data.js';

const NAV = [
  ['/', 'Overview'],
  ['/resume', 'Experience'],
  ['/projects', 'Projects'],
  ['/building', 'Building'],
  ['/contact', 'Contact'],
];

/* Reachable from every page, in one tap. The phone numbers live on /contact. */
const hail = (cls) => `
  <div class="${cls}">
    <a href="mailto:${profile.email}">${profile.email}</a>
  </div>`;

const foot = () => `
  <footer class="sitefoot">
    <span>© ${new Date().getFullYear()} ${profile.name}</span>
  </footer>`;

/* ---------------------------------------------------------- console */
const console_ = () => `
  <div class="shell">
    <nav class="rail" aria-label="Primary">
      <a class="brand" href="/" data-link>
        <span>${profile.name}<small>Engineering Leader</small></span>
      </a>

      ${hail('hail')}

      <div class="nav" data-nav>
        ${NAV.map(([h, t]) => `<a href="${h}" data-link>${t}</a>`).join('')}
      </div>

      <div class="ctl">
        <button class="tsw" data-act="mode:toggle" role="switch" title="Toggle dark mode" aria-label="Dark mode"><svg class="sun" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="3.6"/><path d="M10 1.6v2.2M10 16.2v2.2M18.4 10h-2.2M3.8 10H1.6M15.94 4.06l-1.56 1.56M5.62 14.38l-1.56 1.56M15.94 15.94l-1.56-1.56M5.62 5.62L4.06 4.06"/></svg><svg class="moon" viewBox="0 0 20 20" aria-hidden="true"><path d="M16.2 12.4A7 7 0 017.6 3.8a6.6 6.6 0 108.6 8.6z"/></svg></button>
      </div>

    </nav>

    <main id="main"></main>
  </div>
  <div class="footwrap">${foot()}</div>`;

export function mountShell() {
  document.getElementById('app').innerHTML = console_();
}

export function syncShell() {
  const r = document.documentElement;
  const dark = r.dataset.mode === 'dark';

  document.querySelectorAll('[data-act]').forEach((b) => {
    const act = b.dataset.act;
    if (act === 'mode:toggle') b.setAttribute('aria-checked', String(dark));
  });
}
