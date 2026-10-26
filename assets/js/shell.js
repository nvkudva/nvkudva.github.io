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
        <p class="summary-sub">Engineering Leader · Ex Uber, Myntra, Intuit</p>
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
      <p class="summary-lede">A rare engineering leader who combines tier-one platform pedigree (Uber, Myntra, Intuit) with genuine, production-grade AI-native fluency — comfortable at the intersection of executive org design, multi-million-dollar cost optimization, and deep architecture, leading hundreds of engineers without losing technical edge.</p>

      <div class="summary-stats">
        <div><b>3 → 24+</b><span>Engineers scaled, 3 continents</span></div>
        <div><b>84%</b><span>Salesforce licence cost cut</span></div>
        <div><b>30,000+</b><span>Global agents on his platforms</span></div>
        <div><b>14M MAU</b><span>Myntra mobile web, from 100K</span></div>
      </div>

      <section class="summary-section">
        <h3>Global org scaling &amp; operational efficiency</h3>
        <ul>
          <li>Scaled engineering orgs from <strong>3 to 24+ engineers</strong> across three continents (US, India, Brazil) at Uber, integrating multiple teams and managers into unified cross-geo execution pods.</li>
          <li>Replaced high-cost external dependencies by architecting internal solutions — notably Uber&rsquo;s Salesforce migration, delivering an <strong>84% reduction</strong> in enterprise licensing costs that saved millions annually.</li>
        </ul>
      </section>

      <section class="summary-section">
        <h3>Massive-scale platform modernization</h3>
        <div class="summary-entry">
          <div class="summary-org">Uber · CO Console &amp; BlissNxt</div>
          <p>Spearheaded enterprise onboarding and support platforms used by <strong>30,000+ global agents</strong>; reduced partner/business onboarding cycle times by up to <strong>90%</strong>, accelerated UI load speeds by <strong>3&times;</strong>, and cut widget build cycles from <strong>4 weeks to 5 days</strong>.</p>
        </div>
        <div class="summary-entry">
          <div class="summary-org">Myntra · PWA &amp; AMP</div>
          <p>Architected the mobile web platform that scaled from <strong>100K to 14M MAU</strong> with a <strong>37% conversion lift</strong> and <strong>71% bundle reduction</strong>; featured as an industry benchmark on stage at <strong>Google I/O</strong>.</p>
        </div>
      </section>

      <section class="summary-section">
        <h3>Ahead-of-the-curve GenAI execution</h3>
        <ul>
          <li>Led Uber&rsquo;s <strong>first GenAI-powered B2B customer support bot</strong> on core care infrastructure.</li>
          <li>Spent the last year road-testing the future of development (&ldquo;the software factory&rdquo;), shipping open-weight local model gateways, multi-agent orchestrators, and in-browser WebAssembly ML runtimes.</li>
          <li>Knows how to transition teams from classical development into <strong>agentic, AI-augmented engineering workflows</strong>.</li>
        </ul>
      </section>

      <aside class="summary-rec">
        <div class="summary-eyebrow">Recommendation</div>
        <p><strong>Fast-track to Director / VP round.</strong> Ideal fit to lead large-scale platform modernization, drive cross-geo consolidation, or build out an enterprise AI-enablement organization.</p>
      </aside>
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
          ${svg('doc')}<span>Résumé</span>
        </a>
      </div>
`;

const console_ = () => `
  <div class="shell">
    <nav class="rail" aria-label="Primary">
      <div class="rail-id">
        <a class="tb-name" href="/" data-link>${profile.name}</a>
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
  const dark = r.dataset.mode === 'dark';

  document.querySelectorAll('[data-act]').forEach((b) => {
    const act = b.dataset.act;
    if (act === 'mode:toggle') b.setAttribute('aria-checked', String(dark));
  });
}
