import {
  profile, platforms, projects,
  experience, strengths, speaking, writing, education, socials, icons,
} from './data.js';
import { qr } from './qr.js';
import { acts } from './shell.js';

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const svg = (k) => `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="${icons[k]}"/></svg>`;
const ext = (u) => (u.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '');

const portrait = () => `
  <div class="rise" style="animation-delay:.2s">
    <div class="portrait">
      <i class="tick tl"></i><i class="tick tr"></i><i class="tick bl"></i><i class="tick br"></i>
      <img src="/assets/img/portrait.jpg" alt="Vijay Krishna Kudva" width="1200" height="1600" fetchpriority="high">
    </div>
    <div class="portcap">Bangalore, 2026</div>
  </div>`;

/* Two destinations per project, as one split control: the running app on the
   left, the code on the right. A half that has nowhere to go is disabled and
   says why, rather than being hidden. */
function actions(p, repo) {
  const liveOn = p.status === 'live' && p.deployUrl;
  const liveWhy = p.status === 'broken-deployment' ? 'Deploy 404'
    : p.status === 'not-web' ? 'Native app'
      : p.status === 'closed-source' ? 'Private app' : 'Not deployed';

  const live = liveOn
    ? `<a class="pact" href="${p.deployUrl}" target="_blank" rel="noopener noreferrer">${svg('live')}Live site</a>`
    : `<span class="pact off" aria-disabled="true">${svg('live')}${esc(liveWhy)}</span>`;

  const source = p.private
    ? `<span class="pact off" aria-disabled="true">${svg('github')}Closed source</span>`
    : `<a class="pact" href="${repo}" target="_blank" rel="noopener noreferrer">${svg('github')}Source</a>`;

  return `<div class="pacts">${live}${source}</div>`;
}

/* Project card: screenshot, copy, and a QR to the live URL. A project with a
   marketing film plays it muted in place of the still, on hover or in view. */
function card(p, i) {
  const repo = `https://github.com/nvkudva/${p.name}`;
  const still = p.shot
    ? `<img src="${p.shot}" alt="Screenshot of ${esc(p.title)}" loading="lazy" decoding="async" width="1100" height="619">`
    : `<div class="noshot"><span>${esc(p.title)}</span></div>`;
  const shot = p.video
    ? `<video src="${p.video}" poster="${p.shot || ''}" muted loop playsinline preload="none" aria-label="${esc(p.title)} demo"></video>`
    : still;

  /* The card opens the running app; failing that, the public source. A
     closed-source project with no deployment has nowhere to go, so it stays
     inert rather than leading to a 404. */
  const openTo = p.deployUrl || p.site || (p.private ? '' : repo);
  const qrLink = (p.deployUrl || p.site) && qr[p.name]
    ? `<a class="pqr" href="${p.deployUrl || p.site}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(p.title)} on your phone" title="Scan or click to open ${esc(p.title)}">${qr[p.name]}</a>`
    : '';

  return `
    <article class="pcard" id="p-${esc(p.name)}"${openTo ? ` data-open="${openTo}"` : ''}>
      <div class="pshot">${shot}</div>
      <div class="pbody">
        <div class="phead">
          <h3>${esc(p.title)}</h3>
        </div>
        <p>${esc(p.desc)}</p>
        <div class="pmeta">
          <div class="tags">
            ${p.lang ? `<span class="tag lang">${esc(p.lang)}</span>` : ''}
            ${p.license ? `<span class="tag">${esc(p.license)}</span>` : ''}
            ${p.wip ? '<span class="tag wip">in progress</span>' : ''}
            ${p.private ? '<span class="tag lock">closed source</span>' : ''}
          </div>
          <div class="pstack">
            ${actions(p, repo)}
          </div>
        </div>
        ${qrLink ? `<div class="pfoot">${qrLink}</div>` : ''}
      </div>
      <span class="pno">${String(i + 1).padStart(2, '0')}</span>
    </article>`;
}

const miniProject = (index) => `
    <a class="mini" href="/projects" data-link data-target="plat-${index}">${esc(platforms[index].name.split(': ')[0])}</a>`;

/* A personal project, linked to its card on /building. */
const shippedProject = (name) => {
  const project = projects.find((p) => p.name === name);
  return `
    <a class="mini" href="/building#p-${esc(name)}" data-link>${esc(project ? project.title : name)}</a>`;
};

const socialRow = () => `
  <div class="links">
    ${socials.map((s) => `
      <a class="link" href="${s.u}"${ext(s.u)}>
        ${svg(s.i)}
        <span>${esc(s.n)}<small>${esc(s.h)}</small></span>
      </a>`).join('')}
  </div>`;

/* ------------------------------------------------------------------ */

export const home = () => `
  <section class="hero">
    <div>
      <div class="statusline rise" style="animation-delay:.06s">
        <span>${esc(profile.location)}</span>
      </div>
      <div class="herohead rise" style="animation-delay:.05s">
        <h1>${esc(profile.name)}</h1>
        ${acts()}
      </div>
      <p class="lede rise" style="animation-delay:.1s">${profile.lede[0]}</p>
      <p class="bio rise" style="animation-delay:.14s">${esc(profile.personal)}</p>
      <div class="pedigree rise" style="animation-delay:.18s">${esc(profile.pedigree)}</div>
    </div>
  </section>

  <div class="duo">
    <section id="strengths">
      <div class="eyebrow">Core strengths</div>
      <div class="sbox">
        ${Object.entries(strengths).map(([k, v]) => `
        <h3>${esc(k)}</h3>
        <div class="chips">${v.map((s) => `<span class="chip">${esc(s)}</span>`).join('')}</div>`).join('')}
      </div>
    </section>
  </div>`;

/* ------------------------------------------------------------------ */

export const projectsView = () => `
  <section>
    <div class="eyebrow">Platforms · shipped at scale</div>
    <h1 style="font-size:clamp(28px,4vw,44px)">Projects &amp; Platforms built</h1>
    <div class="openlist">
      ${platforms.map((p, i) => `
        <article class="plat" id="plat-${i}">
          <div>
            <div class="org">${esc(p.org)} <span>${esc(p.years)}</span></div>
            <h3>${esc(p.name)}</h3>
            <p>${esc(p.body)}</p>
          </div>
          <div class="mx">
            <div class="mxh">Impact</div>
            ${p.metrics.map(([v, k]) => `<div><b>${esc(v)}</b><span>${esc(k)}</span></div>`).join('')}
          </div>
        </article>`).join('')}
    </div>
  </section>`;

/* ------------------------------------------------------------------ */

const inFlight = projects.filter((p) => p.current);
const ordered = [...projects.filter((p) => !p.current), ...inFlight];

export const buildingView = () => `
  <section>
    <div class="eyebrow">Personal projects · built since May 2025</div>
    <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">
      <h1 style="font-size:clamp(28px,4vw,44px)">What I'm building now</h1>
      <a class="btn" href="https://github.com/nvkudva?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
    </div>
  </section>

  <section>
    <div class="pgrid">
      ${ordered.filter((p) => !p.current).map((p) => card(p, ordered.indexOf(p))).join('')}
    </div>
  </section>

  <section>
    <div class="eyebrow">Currently building</div>
    <div class="pgrid">
      ${inFlight.map((p) => card(p, ordered.indexOf(p))).join('')}
    </div>
    <div class="cta">
      <a class="btn" href="https://github.com/nvkudva?tab=repositories" target="_blank" rel="noopener noreferrer">All repositories on GitHub ↗</a>
    </div>
  </section>

  <section id="speaking">
    <div class="eyebrow">Speaking &amp; recognition</div>
    <div class="rows">
      ${speaking.map((s) => `
        <div class="row"><span class="y">${esc(s.y)}</span><span class="t">${esc(s.t)}</span><span class="badge">${esc(s.tag)}</span></div>`).join('')}
    </div>
  </section>

  <section id="writing">
    <div class="eyebrow">Writing · medium.com/@nvkudva</div>
    <div class="rows">
      ${writing.map((w) => `
        <a class="row" href="${w.u}" target="_blank" rel="noopener noreferrer"><span class="y">${esc(w.d.split(' ')[1])}</span><span class="t">${esc(w.t)}</span><span class="badge">Read ↗</span></a>`).join('')}
    </div>
  </section>`;

/* ------------------------------------------------------------------ */

export const resumeView = () => `
  <section class="resumetop">
    <h1 style="font-size:clamp(28px,4vw,44px)">Experience</h1>
  </section>

  <section id="experience">
    ${experience.map((e) => `
      <article class="job">
        <div><div class="org">${esc(e.org)}</div><div class="when">${esc(e.years).replace(' – ', ' –<br>')}</div><div class="where">${esc(e.where)}</div></div>
        <div class="roles">
          ${(e.roles || [e]).map((r) => `
          <div class="role">
            <h3>${esc(r.title)}</h3>
            ${e.roles ? `<div class="rng">${esc(r.years)}${r.where ? ` · ${esc(r.where)}` : ''}</div>` : ''}
            <ul>${r.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
            ${r.built ? `<div class="built"><span class="blabel">Projects</span>${r.built.map(miniProject).join('')}</div>` : ''}
            ${r.builtProjects ? `<div class="built"><span class="blabel">Projects</span>${r.builtProjects.map(shippedProject).join('')}</div>` : ''}
          </div>`).join('')}
        </div>
      </article>`).join('')}
  </section>

  <section id="education">
    <div class="eyebrow">Education</div>
    <div class="rows">
      ${education.map((e) => `
        <div class="row"><span class="y">${esc(e.y.slice(0, 4))}</span><span class="t"><b style="color:var(--ink)">${esc(e.d)}</b>: ${esc(e.o)}</span></div>`).join('')}
    </div>
  </section>`;

/* ------------------------------------------------------------------ */

export const contactView = () => `
  <section>
    <div class="eyebrow">Contact</div>
    <h1 style="font-size:clamp(28px,4vw,44px)">Let's talk</h1>
    <p class="lede">
      I'm open to senior engineering leadership roles anywhere in the world, driving AI-forward platform and product engineering at scale.
      Fastest route is email, I reply within a day.
    </p>
    <div class="cta">
      <a class="btn primary" href="mailto:${profile.email}">${esc(profile.email)}</a>
      ${profile.phones.map((p) => `<a class="btn" href="tel:${p.replace(/\s/g, '')}">${esc(p)}</a>`).join('')}
    </div>
  </section>

  <section>
    <div class="eyebrow">Everywhere else</div>
    ${socialRow()}
  </section>`;

export const notFound = () => `
  <section style="padding-top:24px">
    <div class="eyebrow">404</div>
    <h1>That page doesn't exist</h1>
    <p class="lede">The link may be old, or I may have moved things around.</p>
    <div class="cta"><a class="btn primary" href="/" data-link>Back to overview</a></div>
  </section>`;

/* ------------------------------------------------------------------ */

/* One scrollable document. Each pane is a scroll target for the nav. */
export const page = () => `
  <div class="pane" id="overview">${home()}</div>
  <div class="pane" id="resume">${resumeView()}</div>
  <div class="pane" id="projects">${projectsView()}</div>
  <div class="pane" id="building">${buildingView()}</div>
  <div class="pane" id="contact">${contactView()}</div>`;
