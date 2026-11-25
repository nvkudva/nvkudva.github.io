import { profile, icons } from './data.js';

const svg = (k) => `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="${icons[k]}"/></svg>`;

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
  <button class="summarize-fab" type="button" data-summary-open aria-haspopup="dialog">
    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.2l1.1 3.4L12.6 5.8l-3.5 1.2L8 10.4 6.9 7 3.4 5.8l3.5-1.2L8 1.2zM12.4 9.6l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1zM3.6 10.2l.5 1.6 1.6.5-1.6.5-.5 1.6-.5-1.6-1.6-.5 1.6-.5.5-1.6z"/></svg>
    <span>Summarize</span>
  </button>

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

/* ---------------------------------------------------------- console */
/* Shared with the hero: the same contact actions, next to the name there too. */
export const acts = () => `
      <div class="tb-acts">
        <a class="tba" href="tel:${profile.phones[0].replace(/\s/g, '')}" aria-label="Call ${profile.phones[0]}" title="Call">
          ${svg('phone')}<span>${profile.phones[0]}</span>
        </a>
        <a class="tba" href="mailto:${profile.email}" aria-label="Email ${profile.email}" title="Email">
          ${svg('mail')}<span>Email</span>
        </a>
        <a class="tba" href="https://www.linkedin.com/in/nvkudva/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
          ${svg('linkedin')}<span>LinkedIn</span>
        </a>
        <a class="tba" href="${profile.resume}" download aria-label="Download résumé" title="Download résumé">
          ${svg('download')}<span>Résumé</span>
        </a>
      </div>
`;

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
