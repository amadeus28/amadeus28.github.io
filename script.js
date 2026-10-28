const DIR = 'Certifications and Webinars/';
const file = (p) => encodeURI(DIR + p);
const credly = (id) => `https://www.credly.com/badges/${id}/public_url`;

/* ---------- data ---------- */

const certs = [
  { name: 'DevNet Associate', issuer: 'Cisco', date: 'Apr 2026', badge: 'devnet-associate.png', credly: '427a14a9-955a-4c6f-b689-a8118dff3fcf', pdf: 'DevNet Associate - Certificate.pdf' },
  { name: 'PMI Project Management Ready™', issuer: 'Project Management Institute', date: 'Mar 2026', badge: 'pmi-project-management-ready.png', credly: 'e7d8e5d8-dc7f-4379-b713-5930a83cec58' },
  { name: 'CCNA: Enterprise Networking, Security, and Automation', issuer: 'Cisco', date: 'Dec 2025', badge: 'ccna-enterprise-networking-security-and-automation.png', credly: '888316eb-e863-4d80-8225-dd50bb7e489c', pdf: 'CCNA Enterprise Networking Security and Automation - Certificate.pdf' },
  { name: 'IT Specialist – Databases', issuer: 'Certiport', date: 'Nov 2025', badge: 'it-specialist-databases.png', credly: '94dbcb74-43de-4421-8a6f-a8f83b509017' },
  { name: 'NDG Linux Essentials', issuer: 'Cisco', date: 'Nov 2025' },
  { name: 'CCNA: Switching, Routing, and Wireless Essentials', issuer: 'Cisco', date: 'Mar 2025', badge: 'ccna-switching-routing-and-wireless-essentials.1.png', credly: '1e585b23-9e34-48a5-a31d-32d4f5d94ae7', pdf: 'CCNA Switching Routing and Wireless Essentials - Certification.pdf' },
  { name: 'Cisco Certified Support Technician Networking', issuer: 'Cisco', date: 'Feb 2025', badge: 'cisco-certified-support-technician-networking-ccst-.png', credly: '5e0785b0-7834-440b-80a1-bb190bd10499' },
  { name: 'IT Specialist – Python', issuer: 'Certiport', date: 'Feb 2025', badge: 'it-specialist-python.png', credly: 'f480f35a-761f-4b10-97d8-a6d53a85a60a' },
  { name: 'CCNA: Introduction to Networks', issuer: 'Cisco', date: 'Feb 2025', badge: 'ccna-introduction-to-networks.png', credly: '39cd1940-12be-4727-823b-0ed9c6286a41', pdf: 'CCNA Introduction to Networks - Certificate.pdf' },
];

const courses = [
  { title: 'Public Speaking Foundations (2023)', sub: 'LinkedIn Learning', date: 'Sep 2025', href: 'Cert/CertificateOfCompletion_Public Speaking Foundations 2023.pdf' },
  { title: 'Figma Essential Training: The Basics', sub: 'LinkedIn Learning · 1h 37m', date: 'Sep 2025', href: 'Cert/CertificateOfCompletion_Figma Essential Training The Basics.pdf' },
  { title: 'Essential Skills in Adobe Premiere Pro 2025', sub: 'LinkedIn Learning · Professional Certificate · 5h 53m', date: 'Aug 2025', href: 'Cert/CertificateOfCompletion_Essential Skills in Adobe Premiere Pro 2025 Professional Certificate.pdf' },
];

const webinars = [
  { title: "The Art of Breaking Things: A Hacker's Way of Thinking", org: 'Appkademiya', date: 'Oct 22, 2026', img: 'hacker.jpg' },
  { title: 'AI Agents: The Next Digital Workforce', org: 'MV Consultancy', date: 'Oct 2, 2026', img: 'ai-agents.jpg' },
  { title: 'Generate, the Human Way: AI in Marketing and Business', org: 'Yap Studios', date: 'Sep 28, 2026', img: 'generate-human-way.jpg' },
  { title: 'Customer Experience Excellence: Turn Customers into Loyal Customers', org: 'MV Consultancy', date: 'Sep 27, 2026', img: 'customer-experience.jpg' },
];

/* ---------- render ---------- */

const el = (tag, attrs = {}, ...children) => {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else node.setAttribute(k, v);
  }
  node.append(...children.filter(Boolean));
  return node;
};
const extLink = (href, text, cls = 'link') =>
  el('a', { class: cls, href, target: '_blank', rel: 'noopener' }, text);

const badgeList = document.getElementById('badgeList');
certs.forEach((c) => {
  const img = c.badge
    ? el('img', { class: 'badge__img', src: file('Badge/' + c.badge), alt: '', loading: 'lazy' })
    : el('div', { class: 'badge__img badge__img--blank' }, 'NDG');
  const links = el('div', { class: 'badge__links' },
    c.credly && extLink(credly(c.credly), 'Verify ↗'),
    c.pdf && extLink(file('Cert/' + c.pdf), 'Certificate'));
  badgeList.append(el('article', { class: 'badge' },
    img,
    el('p', { class: 'badge__name' }, c.name),
    el('p', { class: 'badge__meta' }, `${c.issuer} · ${c.date}`),
    links));
});
document.getElementById('certCount').textContent = certs.length;

const renderRows = (id, items) => {
  const list = document.getElementById(id);
  items.forEach((r) => {
    list.append(el('li', {},
      el('p', { class: 'row__title' }, extLink(file(r.href), r.title, '')),
      el('p', { class: 'row__date' }, r.date),
      el('p', { class: 'row__sub' }, r.sub)));
  });
};
renderRows('courseList', courses);

const webinarList = document.getElementById('webinarList');
webinars.forEach((w) => {
  webinarList.append(el('figure', { class: 'webinar' },
    el('img', { src: 'assets/webinars/' + w.img, alt: `Certificate of participation: ${w.title}`, loading: 'lazy' }),
    el('p', { class: 'webinar__meta' }, `Webinar · ${w.date}`),
    el('p', { class: 'webinar__title' }, w.title),
    el('p', { class: 'webinar__host' }, `Hosted by ${w.org}`)));
});

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- theme toggle ---------- */

const root = document.documentElement;
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = () => root.getAttribute('data-theme') || (systemDark.matches ? 'dark' : 'light');

document.getElementById('themeToggle').addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

/* ---------- sidebar ---------- */

const menuBtn = document.getElementById('menuBtn');
const setMenu = (open) => {
  document.body.classList.toggle('menu-open', open);
  menuBtn.setAttribute('aria-expanded', open);
};
menuBtn.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
document.getElementById('scrim').addEventListener('click', () => setMenu(false));
document.querySelectorAll('#sideNav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

// Highlight the section currently in view
const navLinks = new Map(
  [...document.querySelectorAll('#sideNav a')].map((a) => [a.getAttribute('href').slice(1), a])
);
const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    navLinks.forEach((a) => a.classList.remove('is-current'));
    navLinks.get(e.target.id)?.classList.add('is-current');
  });
}, { rootMargin: '-45% 0px -50% 0px' });
navLinks.forEach((_, id) => spy.observe(document.getElementById(id)));

/* ---------- portrait that looks at the cursor ---------- */

const portrait = document.getElementById('portrait');

// Sector order follows atan2 angles in 45° steps, starting at "right" and going clockwise
// (screen y grows downward).
const SECTORS = ['right', 'bottom-right', 'down', 'bottom-left', 'left', 'top-left', 'up', 'top-right'];
const images = {};
['front', ...SECTORS].forEach((dir) => {
  let img = portrait.querySelector(`[data-dir="${dir}"]`);
  if (!img) {
    img = el('img', { src: `assets/me/${dir}.webp`, alt: '', 'data-dir': dir, 'aria-hidden': 'true' });
    portrait.append(img);
  }
  images[dir] = img;
});

let activeDir = 'front';
const setDir = (dir) => {
  if (dir === activeDir) return;
  images[activeDir].classList.remove('is-active');
  images[dir].classList.add('is-active');
  activeDir = dir;
};

// Pointer position; null means "no pointer", which resets to the front pose.
let pointer = null;

const update = () => {
  if (!pointer) return setDir('front');
  const r = portrait.getBoundingClientRect();
  // Aim at the face (upper ~35% of the photo) rather than the image centre
  const dx = pointer.x - (r.left + r.width / 2);
  const dy = pointer.y - (r.top + r.height * 0.35);

  if (Math.hypot(dx, dy) < r.width * 0.22) return setDir('front');
  const idx = Math.round(Math.atan2(dy, dx) / (Math.PI / 4));
  setDir(SECTORS[(idx + 8) % 8]);
};

window.addEventListener('pointermove', (e) => {
  pointer = { x: e.clientX, y: e.clientY };
  update();
}, { passive: true });
window.addEventListener('pointerup', (e) => {
  if (e.pointerType === 'touch') { pointer = null; update(); }
});
window.addEventListener('scroll', update, { passive: true });
document.documentElement.addEventListener('pointerleave', () => { pointer = null; update(); });
window.addEventListener('blur', () => { pointer = null; update(); });

/* ---------- hover sounds ---------- */

const soundBtn = document.getElementById('soundToggle');
let soundOn = true;
try { soundOn = localStorage.getItem('sound') !== 'off'; } catch (e) {}
soundBtn.setAttribute('aria-pressed', soundOn);

soundBtn.addEventListener('click', () => {
  soundOn = !soundOn;
  soundBtn.setAttribute('aria-pressed', soundOn);
  try { localStorage.setItem('sound', soundOn ? 'on' : 'off'); } catch (e) {}
  if (soundOn) tick(true);
});

let audio = null;
let lastTick = 0;
// Short synthesized click; browsers only allow audio after the first click/tap on the page
function tick(force = false) {
  if (!soundOn) return;
  const now = performance.now();
  if (!force && now - lastTick < 60) return;
  lastTick = now;
  audio = audio || new (window.AudioContext || window.webkitAudioContext)();
  if (audio.state === 'suspended') audio.resume();
  const t = audio.currentTime;
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(1400, t);
  osc.frequency.exponentialRampToValueAtTime(700, t + 0.05);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.08, t + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
  osc.connect(gain).connect(audio.destination);
  osc.start(t);
  osc.stop(t + 0.08);
}

document.addEventListener('pointerover', (e) => {
  if (e.pointerType !== 'mouse') return;
  const target = e.target.closest('a, button');
  if (target && !target.contains(e.relatedTarget)) tick();
});
// Unlock audio on the first interaction so later hovers can play
document.addEventListener('pointerdown', () => {
  if (soundOn && !audio) {
    audio = new (window.AudioContext || window.webkitAudioContext)();
  }
}, { once: true });
