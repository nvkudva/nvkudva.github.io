import { profile } from './data.js';

const NAV = [
  ['/', 'Overview'],
  ['/resume', 'Experience'],
  ['/projects', 'Projects'],
  ['/building', 'AI projects'],
  ['/contact', 'Contact'],
];
const foot = () => `
  <footer class="sitefoot">
    <span>© ${new Date().getFullYear()} ${profile.name}</span>
  </footer>`;

const summaryDialog = () => `
  <div class="fab-dock">
    <button class="summarize-fab" type="button" data-summary-open aria-haspopup="dialog">
      <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.2l1.1 3.4L12.6 5.8l-3.5 1.2L8 10.4 6.9 7 3.4 5.8l3.5-1.2L8 1.2zM12.4 9.6l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1zM3.6 10.2l.5 1.6 1.6.5-1.6.5-.5 1.6-.5-1.6-1.6-.5 1.6-.5.5-1.6z"/></svg>
      <span>Summarize</span>
    </button>
    ${contactFab()}
  </div>

  <dialog class="summary-dialog" data-summary-dialog aria-labelledby="summary-title">
    <div class="summary-head">
      <div>
        <div class="summary-eyebrow">Executive summary</div>
        <h2 id="summary-title">Vijay Krishna Kudva</h2>
        <p class="summary-sub">Engineering Leader · <strong class="summary-pedigree">Ex Uber, Myntra, Intuit</strong></p>
      </div>
      <button class="summary-close" type="button" data-summary-close aria-label="Close summary">
        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
      </button>
    </div>

    <div class="summary-loading" data-summary-loading role="status" aria-live="polite">
      <div class="summary-spinner" aria-hidden="true"></div>
      <p class="summary-loading-title">Summarizing…</p>
      <p class="summary-loading-sub">Reading experience, platforms and impact</p>
      <div class="summary-skeleton" aria-hidden="true"><span></span><span></span><span></span></div>
    </div>

    <div class="summary-body" data-summary-body hidden>
      <p class="summary-lede">An <strong>Ex-Uber</strong> engineering leader pairing hands-on platform architecture with <strong>global org scaling</strong>, multi-million-dollar cost savings, and production AI execution.</p>

      <section class="summary-section">
        <h3>Global org scaling &amp; operational efficiency</h3>
        <ul>
          <li>Scaled orgs from <strong>3 to 24+ engineers</strong> across <strong>three continents (US, India, Brazil)</strong> at Uber, unifying teams into <strong>cross-geo execution pods</strong>.</li>
          <li>Replaced costly vendor dependencies with internal platforms — notably Uber&rsquo;s <strong>Salesforce migration</strong>, cutting enterprise licensing costs by <strong>84%</strong> (<strong>millions saved annually</strong>).</li>
        </ul>
      </section>

      <section class="summary-section">
        <h3>Massive-scale platform modernization</h3>
        <div class="summary-entry">
          <div class="summary-org">Uber · CO Console &amp; BlissNxt</div>
          <p>Spearheaded onboarding and support platforms for <strong>30,000+ global agents</strong> — cutting onboarding time by <strong>90%</strong>, accelerating UI loads <strong>3&times;</strong>, and shrinking widget builds from <strong>4 weeks to 5 days</strong>.</p>
        </div>
        <div class="summary-entry">
          <div class="summary-org">Myntra · PWA &amp; AMP</div>
          <p>Architected mobile web scaling from <strong>100K to 14M MAU</strong> with a <strong>37% conversion lift</strong> and <strong>71% bundle reduction</strong> — featured on stage at <strong>Google I/O</strong>.</p>
        </div>
      </section>

      <section class="summary-section">
        <h3>Ahead-of-the-curve GenAI execution</h3>
        <ul>
          <li>Led Uber&rsquo;s <strong>first GenAI-powered B2B support bot</strong> on core care infrastructure.</li>
          <li>Built and road-tested <strong>&ldquo;the software factory&rdquo;</strong> — shipping <strong>open-weight local model gateways</strong>, <strong>multi-agent orchestrators</strong>, and <strong>in-browser WebAssembly ML runtimes</strong>.</li>
          <li>Transitions teams from classical development into <strong>agentic, AI-augmented engineering workflows</strong>.</li>
        </ul>
      </section>
    </div>
  </dialog>`;

/* Lucide-style 24px stroke icons (MIT) for crisp, modern header actions. */
const headerIcons = {
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
};
const hsvg = (k) => `<svg viewBox="0 0 24 24" aria-hidden="true">${headerIcons[k]}</svg>`;

/* ---------------------------------------------------------- console */
/* Shared with the hero: the same contact actions, next to the name there too. */
export const acts = () => `
      <div class="tb-acts">
        <a class="tba" href="tel:${profile.phones[0].replace(/\s/g, '')}" aria-label="Call ${profile.phones[0]}" title="Call">
          ${hsvg('phone')}<span>${profile.phones[0]}</span>
        </a>
        <a class="tba" href="mailto:${profile.email}" aria-label="Email ${profile.email}" title="Email">
          ${hsvg('mail')}<span>Email</span>
        </a>
        <a class="tba" href="https://www.linkedin.com/in/nvkudva/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
          ${hsvg('linkedin')}<span>LinkedIn</span>
        </a>
        <a class="tba" href="${profile.resume}" download aria-label="Download résumé" title="Download résumé">
          ${hsvg('download')}<span>Résumé</span>
        </a>
      </div>
`;

const contactFab = () => {
  const tel = profile.phones[0].replace(/\s/g, '');
  const wa = tel.replace(/^\+/, '');
  return `
  <div class="contact-fab-wrap" data-contact-wrap>
    <div class="contact-menu" id="contact-fab-menu" role="menu" data-contact-menu hidden>
      <a class="contact-item" role="menuitem" href="tel:${tel}">
        ${hsvg('phone')}<span>Call Now</span>
      </a>
      <a class="contact-item" role="menuitem" href="https://wa.me/${wa}" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg><span>WhatsApp</span>
      </a>
      <a class="contact-item" role="menuitem" href="mailto:${profile.email}">
        ${hsvg('mail')}<span>Email</span>
      </a>
    </div>
    <button class="contact-fab" type="button" data-contact-toggle aria-haspopup="menu" aria-expanded="false" aria-controls="contact-fab-menu" aria-label="Contact options" title="Contact">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8"/><path d="M8 13h5"/></svg>
    </button>
  </div>`;
};

const console_ = () => `
  <div class="shell">
    <nav class="rail" aria-label="Primary">
      <div class="rail-id">
        <a class="tb-name" href="/" data-link data-rail-brand data-name="${profile.name}">Portfolio</a>
        ${acts()}
      </div>

      <div class="nav" data-nav>
        ${NAV.map(([h, t]) => `<a href="${h}" data-link>${t}</a>`).join('')}
      </div>

      <div class="ctl">
        <button class="tsw" data-act="mode:toggle" role="switch" title="Toggle dark mode" aria-label="Dark mode"><svg class="sun" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="3.6"/><path d="M10 1.6v2.2M10 16.2v2.2M18.4 10h-2.2M3.8 10H1.6M15.94 4.06l-1.56 1.56M5.62 14.38l-1.56 1.56M15.94 15.94l-1.56-1.56M5.62 5.62L4.06 4.06"/></svg><svg class="moon" viewBox="0 0 20 20" aria-hidden="true"><path d="M16.2 12.4A7 7 0 017.6 3.8a6.6 6.6 0 108.6 8.6z"/></svg></button>
      </div>

    </nav>

    <header class="topbar">
      <a class="tb-name" href="/" data-link>${profile.name}</a>
      <span class="tb-role">${profile.role}</span>
      ${acts()}
    </header>

    <main id="main"></main>
  </div>
  <div class="footwrap">${foot()}</div>
  ${summaryDialog()}`;

export function mountShell() {
  document.getElementById('app').innerHTML = console_();
}

export function syncShell() {
  const r = document.documentElement;
  const dark = (r.dataset.mode || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light')) === 'dark';

  document.querySelectorAll('[data-act]').forEach((b) => {
    const act = b.dataset.act;
    if (act === 'mode:toggle') b.setAttribute('aria-checked', String(dark));
  });
}
