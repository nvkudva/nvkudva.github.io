import * as consoleViews from './views.js';
import { mountShell, syncShell } from './shell.js';

/* The app decides where a load lands (a deep link is a scroll position now),
   so the browser must not restore the previous one over the top of it. */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

const root = document.documentElement;
const themeMeta = document.querySelector('meta[name="theme-color"]');

const systemDark = matchMedia('(prefers-color-scheme:dark)');
const state = {
  mode: root.dataset.mode || (systemDark.matches ? 'dark' : 'light'),
};

/* path <-> pane id. The site is one document; a route is a scroll position. */
const ROUTES = [
  ['/', 'overview'],
  ['/resume', 'resume'],
  ['/projects', 'projects'],
  ['/building', 'building'],
  ['/contact', 'contact'],
];
const idFor = (path) => (ROUTES.find(([p]) => p === path) || ROUTES[0])[1];
const pathFor = (id) => (ROUTES.find(([, i]) => i === id) || ROUTES[0])[0];

const TITLES = {
  '/': 'Vijay Krishna Kudva | Engineering Leader',
  '/projects': 'Projects | Vijay Krishna Kudva',
  '/building': 'AI projects | Vijay Krishna Kudva',
  '/resume': 'Experience | Vijay Krishna Kudva',
  '/contact': 'Contact | Vijay Krishna Kudva',
};

/* ---------------- persistence ---------------- */
function save() {
  try { localStorage.setItem('vk.theme', JSON.stringify(state)); } catch { /* private mode */ }
}
function syncThemeColor() {
  themeMeta.content = getComputedStyle(root)
    .getPropertyValue('--paper').trim();
}
/* Until the visitor toggles, no mode is stamped and the system preference rules. */
function stamp() {
  root.dataset.mode = state.mode;
  syncThemeColor();
  save();
}

/* ---------------- render ---------------- */
function markNav(path) {
  document.querySelectorAll('[data-nav] a[data-link]').forEach((a) => {
    if (new URL(a.href).pathname === path) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}

/* The sticky rail (mobile) sits over the page, so panes need to stop below it.
   The compact bar does the same job on a desktop. */
function stick() {
  const rail = document.querySelector('.rail');
  let h = 0;
  if (rail && matchMedia('(max-width:960px)').matches) h = rail.getBoundingClientRect().height;
  const bar = document.querySelector('.topbar');
  if (bar && getComputedStyle(bar).display !== 'none') h += bar.offsetHeight;
  root.style.setProperty('--stick', `${Math.round(h)}px`);
}

/* The compact bar repeats only what still matters once the hero is gone.
   It slides in as the big name leaves, and never competes with it. */
function watchTopbar() {
  const bar = document.querySelector('.topbar');
  if (!bar) return;
  let queued = false;
  const update = () => {
    const hero = document.querySelector('#overview .hero');
    const past = window.scrollY > 24 && (!hero || hero.getBoundingClientRect().bottom < 64);
    bar.classList.toggle('on', past);
  };
  addEventListener('scroll', () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; update(); });
  }, { passive: true });
  addEventListener('resize', update);
  update();
}

/* Programmatic scrolls pass over every pane in between; the spy stays quiet
   until the scroll settles so the nav doesn't strobe. */
let locked = false;
let unlock;
function lock() {
  locked = true;
  clearTimeout(unlock);
  unlock = setTimeout(() => { locked = false; }, 700);
}

let spy;
function watchPanes() {
  spy?.disconnect();
  spy = new IntersectionObserver((entries) => {
    if (locked) return;
    const hit = entries.filter((e) => e.isIntersecting)[0];
    if (!hit) return;
    const path = pathFor(hit.target.id);
    if (path === location.pathname) return;
    history.replaceState({}, '', path);
    document.title = TITLES[path];
    markNav(path);
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  document.querySelectorAll('.pane').forEach((el) => spy.observe(el));
}

function paint() {
  document.getElementById('main').innerHTML = consoleViews.page();
  stick();
  watchPanes();
  hookVideos();
  markNav(location.pathname);
  document.title = TITLES[location.pathname] || TITLES['/'];
  syncShell();
}

/* Films stay silent and controlless, and play on their own as soon as a card
   is in view — the still is only a poster while the film loads. */
function hookVideos() {
  const cards = [...document.querySelectorAll('.pcard')].filter((c) => c.querySelector('video'));
  if (!cards.length) return;
  if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const v = e.target.querySelector('video');
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
  }, { threshold: 0.4 });
  cards.forEach((c) => io.observe(c));
}

function jump(path, smooth, targetId) {
  const el = document.getElementById(targetId || idFor(path));
  if (!el) return;
  const glide = smooth && !matchMedia('(prefers-reduced-motion:reduce)').matches;
  lock();
  snap(el, glide);
  settle(el, ++trip);
}

/* `html { scroll-behavior: smooth }` outranks a behavior:'auto' option in some
   engines, so an instant landing has to switch the CSS off around the scroll. */
function snap(el, glide) {
  if (glide) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
  const prev = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';
  el.scrollIntoView({ block: 'start' });
  root.style.scrollBehavior = prev;
}

/* Webfonts and lazy screenshots change the height of everything above the
   target after the scroll has already landed, which leaves the section short
   of the top. Re-align while the page settles — but yield the moment the
   reader takes over. */
let trip = 0;
function settle(el, mine) {
  const want = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const events = ['wheel', 'touchstart', 'keydown'];
  let live = true;
  let last = -1;
  const stop = () => { live = false; };
  events.forEach((e) => addEventListener(e, stop, { passive: true }));

  (function tick(n) {
    /* A newer jump supersedes this one. */
    if (!live || mine !== trip || n > 12) { events.forEach((e) => removeEventListener(e, stop)); return; }
    const y = Math.round(scrollY);
    /* Only correct once the scroll has stopped moving, so a smooth glide
       isn't cut short. */
    if (y === last && Math.abs(el.getBoundingClientRect().top - want) > 2) {
      lock();
      snap(el, false);
    }
    last = y;
    setTimeout(() => tick(n + 1), 120);
  }(0));
}

function remount() {
  const here = location.pathname;
  mountShell();
  paint();
  jump(here, false);
}

function animate(fn) {
  const ok = document.startViewTransition
    && !document.hidden
    && !matchMedia('(prefers-reduced-motion:reduce)').matches;
  if (!ok) { fn(); return; }
  const t = document.startViewTransition(fn);
  /* A transition can be aborted (tab hidden, another one starts). That rejects
     these promises; swallow it so it never surfaces as an unhandled rejection. */
  t.ready.catch(() => {});
  t.finished.catch(() => {});
  t.updateCallbackDone.catch(() => {});
}

function go(path, push = true, targetId) {
  if (push) history.pushState({}, '', path);
  markNav(path);
  document.title = TITLES[path] || TITLES['/'];
  jump(path, push, targetId);
}

/* ---------------- summary popup ---------------- */
let summaryTimer;
function openSummary() {
  const dialog = document.querySelector('[data-summary-dialog]');
  if (!dialog || dialog.open) return;
  const loading = dialog.querySelector('[data-summary-loading]');
  const body = dialog.querySelector('[data-summary-body]');
  loading.hidden = false;
  body.hidden = true;
  dialog.showModal();
  clearTimeout(summaryTimer);
  summaryTimer = setTimeout(() => { loading.hidden = true; body.hidden = false; }, 2000);
}
function closeSummary() {
  const dialog = document.querySelector('[data-summary-dialog]');
  clearTimeout(summaryTimer);
  if (dialog?.open) dialog.close();
}
document.addEventListener('close', (e) => {
  if (e.target.matches?.('[data-summary-dialog]') && !e.target.open) clearTimeout(summaryTimer);
}, true);

/* ---------------- interaction ---------------- */
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-summary-open]')) { openSummary(); return; }
  if (e.target.closest('[data-summary-close]')) { closeSummary(); return; }
  const dialog = e.target.closest('[data-summary-dialog]');
  if (dialog && e.target === dialog) closeSummary();

  const subt = e.target.closest('[data-sub]');
  if (subt) {
    const open = subt.getAttribute('aria-expanded') === 'true';
    subt.setAttribute('aria-expanded', String(!open));
    const list = document.getElementById(subt.getAttribute('aria-controls'));
    if (list) list.hidden = open;
    return;
  }

  const act = e.target.closest('[data-act]');
  if (act) {
    const [kind, val] = act.dataset.act.split(':');
    if (kind === 'mode') {
      state.mode = val === 'toggle' ? (state.mode === 'dark' ? 'light' : 'dark') : val;
      animate(() => { stamp(); syncShell(); });
    }
    return;
  }

  /* the card itself opens the live app; inner links keep their own targets */
  const openable = e.target.closest('[data-open]');
  if (openable && !e.target.closest('a,button')) {
    window.location.href = openable.dataset.open;
    return;
  }

  const a = e.target.closest('a[data-link]');
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
  const path = new URL(a.href).pathname;
  e.preventDefault();
  go(path, true, a.dataset.target || a.hash.slice(1));
});

addEventListener('popstate', () => go(location.pathname, false));
addEventListener('resize', stick);

systemDark.addEventListener('change', (e) => {
  if (root.dataset.mode) return;
  state.mode = e.matches ? 'dark' : 'light';
  syncThemeColor();
  syncShell();
});

syncThemeColor();
remount();
watchTopbar();

/* ---------------- pwa + update flow ---------------- */
function showUpdateToast(waiting) {
  if (document.querySelector('.toast')) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.setAttribute('role', 'status');
  el.innerHTML = `
    <span>A new version is available.</span>
    <button class="toast-go">Reload</button>
    <button class="toast-x" aria-label="Dismiss">✕</button>`;
  document.body.append(el);
  setTimeout(() => el.classList.add('in'), 30);

  el.querySelector('.toast-go').onclick = () => {
    el.querySelector('.toast-go').textContent = 'Reloading…';
    waiting.postMessage('SKIP_WAITING');
  };
  el.querySelector('.toast-x').onclick = () => el.classList.remove('in');
}

if ('serviceWorker' in navigator) {
  addEventListener('load', async () => {
    let reg;
    try { reg = await navigator.serviceWorker.register('/sw.js'); } catch { return; }

    if (reg.waiting && navigator.serviceWorker.controller) showUpdateToast(reg.waiting);

    reg.addEventListener('updatefound', () => {
      const fresh = reg.installing;
      if (!fresh) return;
      fresh.addEventListener('statechange', () => {
        /* `controller` is null on a first install — no prompt for a first visit. */
        if (fresh.state === 'installed' && navigator.serviceWorker.controller) showUpdateToast(fresh);
      });
    });

    const check = () => { if (navigator.onLine) reg.update().catch(() => {}); };
    document.addEventListener('visibilitychange', () => { if (!document.hidden) check(); });
    setInterval(check, 60 * 60 * 1000);
  });

  let reloading = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (reloading) return;
    reloading = true;
    location.reload();
  });
}
