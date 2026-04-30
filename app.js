// app.js — GlimzoMC
'use strict';

const CONFIG = {
  ip:      'play.glimzomc.fun',
  discord: 'https://dsc.gg/glimzomc',
};

const MODES = [
  {
    id: 'bedwars', name: 'BedWars', tag: 'Team PvP', emoji: '🛏️',
    desc: 'Protect your bed. Destroy theirs. Team-based survival where your bed is your lifeline.',
    bg: 'linear-gradient(135deg,#0d2b1a,#052218,#0a1510)', color: '#4ade80',
    pills: ['2–8 Players', 'Team Mode', 'Ranked'],
    overviewTitle: 'The Classic. Rebuilt for Competition.',
    overviewText: 'BedWars on GlimzoMC takes everything you know about the classic format and sharpens it. Teams of up to four fight across floating islands, gathering resources, upgrading defenses, and racing to destroy enemy beds. Once your bed is gone, you no longer respawn — and that pressure is what makes every fight count.',
    features: [
      { icon: '🏗️', title: 'Custom Island Layouts',  desc: 'Hand-crafted maps with balanced resource points, vertical play, and clean mid designs.' },
      { icon: '⚙️', title: 'Upgrade System',          desc: 'Spend diamonds and emeralds on team upgrades: sharper swords, better armor, faster generators.' },
      { icon: '📊', title: 'ELO & Ranked Mode',       desc: 'Competitive queues with ELO tracking, rank badges, and seasonal leaderboards.' },
      { icon: '🎯', title: 'Solo, Duos & Squads',     desc: 'Queue as a solo, bring a partner, or run a full squad with balanced matchmaking.' },
    ],
    why: ['Low-ping servers optimized for responsive PvP combat.','Anti-cheat running 24/7 so every win is legitimate.','Active ranked scene with real competition.','Seasonal resets keep the leaderboard fresh.'],
    stats: [{ label: 'Team Size', val: 'N/A' },{ label: 'Match Length', val: 'N/A' },{ label: 'Mode Type', val: 'N/A' },{ label: 'Status', val: 'N/A' }],
  },
  {
    id: 'clashbox', name: 'Clashbox', tag: 'Arena', emoji: '💥',
    desc: 'Confined. Chaotic. Non-stop kills in our signature close-quarters arena mode.',
    bg: 'linear-gradient(135deg,#1a0d00,#1f0a00,#100800)', color: '#fb923c',
    pills: ['Free For All', 'Fast-Paced', 'No Respawn Delay'],
    overviewTitle: 'Pure Chaos. Maximum Kills.',
    overviewText: "Clashbox drops players into a compact, high-intensity arena designed for constant combat. No downtime, no running — just fights. The map forces encounters while still rewarding smart movement. It's GlimzoMC's most unique gamemode.",
    features: [
      { icon: '🗺️', title: 'Custom Arena Design', desc: 'A multi-level arena with tight corridors, open upper floors, and vertical play.' },
      { icon: '⚡', title: 'Instant Respawn', desc: "Die and you're back in seconds. No lobby waiting, no downtime." },
      { icon: '🔥', title: 'Kill Streaks', desc: 'Chain kills for multipliers and streak rewards. Keep fighting to keep your bonus.' },
      { icon: '🏆', title: 'Match Leaderboard', desc: 'Live in-match scoreboard with kills, deaths, and streaks.' },
    ],
    why: ['Fastest gameplay loop on the server — perfect for warmup.',"Unique map you won't find anywhere else.",'Streak system adds a meta layer beyond raw aim.','Great for practicing PvP mechanics at high intensity.'],
    stats: [{ label: 'Players', val: 'N/A' },{ label: 'Match Length', val: 'N/A' },{ label: 'Mode Type', val: 'N/A' },{ label: 'Status', val: 'N/A' }],
  },
  {
    id: 'rampage', name: 'Rampage', tag: 'Kill Streak', emoji: '🔥',
    desc: 'Kill streaks, score multipliers, and chaos. Climb the board or get left behind.',
    bg: 'linear-gradient(135deg,#1a0a0a,#200808,#110505)', color: '#f87171',
    pills: ['Multipliers', 'Score-Based', 'Leaderboard'],
    overviewTitle: 'Keep the Streak Alive.',
    overviewText: 'Rampage is a score-attack gamemode built around kill streaks and momentum. Every kill charges your multiplier. Dying resets it. The longer your streak, the more points each kill is worth — and the bigger target on your back.',
    features: [
      { icon: '📈', title: 'Score Multiplier System', desc: 'Earn x1 up to x5 multipliers based on your kill streak. Every death costs you momentum.' },
      { icon: '🎯', title: 'Bounty Targets', desc: 'Players on long streaks get marked. Taking them out earns bonus score for everyone.' },
      { icon: '🗺️', title: 'Open Combat Maps', desc: 'Larger maps with varied terrain encourage movement-based play rather than camping.' },
      { icon: '📊', title: 'Season Rankings', desc: 'Top Rampage scores are tracked seasonally. Compete for a spot on the all-time board.' },
    ],
    why: ['High-skill ceiling — streak management separates good from great.','Bounty system creates emergent clutch moments.','Seasonal rankings give long-term goals.','Map variety prevents stale gameplay loops.'],
    stats: [{ label: 'Players', val: 'N/A' },{ label: 'Match Length', val: 'N/A' },{ label: 'Mode Type', val: 'N/A' },{ label: 'Status', val: 'N/A' }],
  },
  {
    id: 'warfare', name: 'Warfare', tag: 'Team Battle', emoji: '🛡️',
    desc: 'Large-scale team battles with objectives, respawns, and tactical combat.',
    bg: 'linear-gradient(135deg,#0a0d1a,#080b1f,#050810)', color: '#818cf8',
    pills: ['Objectives', 'Team Play', 'Large Scale'],
    overviewTitle: 'Coordinate. Push. Win.',
    overviewText: "Warfare is GlimzoMC's large-scale team combat mode. Two teams fight over objectives across a wide map. Respawns are tied to territory control — lose your spawns and lose ground.",
    features: [
      { icon: '🏴', title: 'Objective Control', desc: 'Capture and hold zones to control respawn points and earn victory points over time.' },
      { icon: '👥', title: 'Squad System', desc: 'Form squads within your team for coordinated pushes and shared respawn locations.' },
      { icon: '⚔️', title: 'Class Roles', desc: 'Choose a role — assault, support, or sniper — each with different loadout advantages.' },
      { icon: '🗺️', title: 'Large Custom Maps', desc: 'Expansive maps with open fields, bridges, chokepoints, and fortified positions.' },
    ],
    why: ['The only large-scale team mode designed for coordination.','Roles add depth without complexity.','Respawn system creates real momentum swings.','Discord voice makes coordination seamless.'],
    stats: [{ label: 'Team Size', val: 'N/A' },{ label: 'Match Length', val: 'N/A' },{ label: 'Mode Type', val: 'N/A' },{ label: 'Status', val: 'N/A' }],
  },
];

const PAGE_SLUGS = { home: '/', gamemodes: '/gamemodes/', community: '/community/', login: '/login/', register: '/register/' };
const SLUG_TO_PAGE = { '/': 'home', '/gamemodes/': 'gamemodes', '/community/': 'community', '/login/': 'login', '/register/': 'register' };

function navigate(page, pushHistory = true) {
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-links a[data-nav]').forEach((a) => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (pushHistory) { const slug = PAGE_SLUGS[page] || '/'; history.pushState({ page }, '', slug); }
  if (page === 'gamemodes') showGmList();
  if (page === 'community' && sb) loadForumData();
  if (page === 'login') {
    const u = document.getElementById('login-username'); const p = document.getElementById('login-pw'); const e = document.getElementById('login-error');
    if (u) u.value = ''; if (p) p.value = ''; if (e) { e.textContent = ''; e.classList.remove('show'); }
  }
  if (page === 'register') {
    ['reg-username','reg-pw','reg-pw2'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    const eEl = document.getElementById('reg-error'); const sEl = document.getElementById('reg-success');
    if (eEl) { eEl.textContent = ''; eEl.classList.remove('show'); }
    if (sEl) { sEl.textContent = ''; sEl.classList.remove('show'); }
    const hint = document.getElementById('reg-username-hint');
    if (hint) { hint.textContent = 'Letters, numbers and underscores only.'; hint.className = 'auth-hint'; hint.style.color = ''; }
    const fill = document.getElementById('reg-pw-strength-fill');
    if (fill) fill.style.width = '0%';
    regUsernameOk = false;
    const btn = document.getElementById('reg-btn');
    if (btn) { btn.disabled = false; btn.textContent = 'Register'; }
  }
}

document.querySelectorAll('[data-nav]').forEach((el) => {
  el.addEventListener('click', () => navigate(el.dataset.nav));
});

function getGMData() {
  return MODES.map(m => ({
    ...m,
    name:         siteSettings['gm-' + m.id + '-name']         || m.name,
    desc:         siteSettings['gm-' + m.id + '-desc']         || m.desc,
    tag:          siteSettings['gm-' + m.id + '-tag']          || m.tag,
    overviewTitle:siteSettings['gm-' + m.id + '-ovTitle']      || m.overviewTitle,
    overviewText: siteSettings['gm-' + m.id + '-ovText']       || m.overviewText,
  }));
}

function buildHomeCards() {
  const grid = document.getElementById('home-modes-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const live = typeof getGMData !== 'undefined' ? getGMData() : MODES;
  live.forEach((m) => {
    const card = document.createElement('div');
    card.className = 'gm-prev-card';
    card.innerHTML = `<span class="gm-prev-emoji" data-edit="gm-${m.id}-emoji" data-edit-type="text" data-edit-label="${m.name} Emoji">${siteSettings['gm-'+m.id+'-emoji']||m.emoji}</span><div class="gm-prev-tag" data-edit="gm-${m.id}-tag" data-edit-type="text" data-edit-label="${m.name} Tag">${siteSettings['gm-'+m.id+'-tag']||m.tag}</div><div class="gm-prev-name" data-edit="gm-${m.id}-name" data-edit-type="text" data-edit-label="${m.name} Name">${siteSettings['gm-'+m.id+'-name']||m.name}</div><div class="gm-prev-desc" data-edit="gm-${m.id}-desc" data-edit-type="text" data-edit-label="${m.name} Description">${siteSettings['gm-'+m.id+'-desc']||m.desc}</div><span class="gm-prev-arrow">→</span>`;
    card.addEventListener('click', (e) => {
      if (editModeActive && e.target.closest('[data-edit]')) return;
      navigate('gamemodes'); setTimeout(() => showDetail(m), 50);
    });
    grid.appendChild(card);
  });
  observeFadeIn(grid.querySelectorAll('.gm-prev-card'));
  if (editModeActive) reattachEditListeners();
}

function buildGmCards() {
  const grid = document.getElementById('cards-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const live = typeof getGMData !== 'undefined' ? getGMData() : MODES;
  live.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'gmode-card';
    card.style.cssText = `transition:opacity .5s ease ${i * 0.07}s,transform .5s ease ${i * 0.07}s,border-color .25s,box-shadow .25s;`;
    const emoji = siteSettings['gm-'+m.id+'-emoji'] || m.emoji;
    const tag   = siteSettings['gm-'+m.id+'-tag']   || m.tag;
    const name  = siteSettings['gm-'+m.id+'-name']  || m.name;
    const desc  = siteSettings['gm-'+m.id+'-desc']  || m.desc;
    card.innerHTML = `<div class="card-thumb"><div class="card-thumb-bg" style="background:${m.bg}"></div><div class="card-thumb-overlay"></div><div class="card-thumb-icon" data-edit="gm-${m.id}-emoji" data-edit-type="text" data-edit-label="${name} Emoji">${emoji}</div><div class="card-tag-pill" data-edit="gm-${m.id}-tag" data-edit-type="text" data-edit-label="${name} Tag">${tag}</div></div><div class="card-body"><div class="card-name" data-edit="gm-${m.id}-name" data-edit-type="text" data-edit-label="${name} Name">${name}</div><div class="card-desc" data-edit="gm-${m.id}-desc" data-edit-type="text" data-edit-label="${name} Card Description">${desc}</div><div class="card-footer"><div style="display:flex;gap:8px;">${m.pills.slice(0,2).map((p)=>`<span class="meta-pill">${p}</span>`).join('')}</div><span class="card-cta-lbl">Learn More →</span></div></div>`;
    card.addEventListener('click', (e) => {
      if (editModeActive && e.target.closest('[data-edit]')) return;
      showDetail(m);
    });
    grid.appendChild(card);
  });
  const coming = document.createElement('div');
  coming.className = 'gmode-card coming-card';
  coming.innerHTML = `<div class="card-thumb"><div class="card-thumb-bg" style="background:linear-gradient(135deg,#0a1a0f,#050d08)"></div><div class="card-thumb-overlay"></div><div class="card-thumb-icon">🔒</div><div class="card-tag-pill" data-edit="gm-coming-tag" data-edit-type="text" data-edit-label="Coming Soon Tag">${siteSettings['gm-coming-tag']||'Coming Soon'}</div></div><div class="card-body"><div class="card-name" data-edit="gm-coming-name" data-edit-type="text" data-edit-label="Coming Soon Name">${siteSettings['gm-coming-name']||'??? Mode'}</div><div class="card-desc" data-edit="gm-coming-desc" data-edit-type="text" data-edit-label="Coming Soon Description">${siteSettings['gm-coming-desc']||'Something new is in development. Follow our Discord for announcements.'}</div><div class="card-footer"><span class="meta-pill">TBA</span></div></div>`;
  grid.appendChild(coming);
  observeFadeIn(grid.querySelectorAll('.gmode-card:not(.coming-card)'));
  if (editModeActive) reattachEditListeners();
}

function showDetail(m) {
  document.getElementById('gm-list-wrap').style.display = 'none';
  document.getElementById('gm-detail-wrap').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.getElementById('d-bg').style.background = m.bg;
  const iconBox = document.getElementById('d-icon');
  iconBox.textContent = m.emoji;
  iconBox.style.cssText = `width:110px;height:110px;border-radius:20px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:60px;background:${m.bg};border:1px solid ${m.color}44;box-shadow:0 8px 40px ${m.color}30;`;
  document.getElementById('d-tag').textContent = `⬤ ${m.tag}`;
  document.getElementById('d-tag').style.color = m.color;
  document.getElementById('d-name').textContent = m.name;
  const detailTagline = siteSettings['gm-'+m.id+'-ovTitle'] || m.overviewTitle || '';
  const detailName = siteSettings['gm-'+m.id+'-name'] || m.name;
  document.getElementById('d-tagline').textContent = detailTagline;
  document.getElementById('d-tagline').setAttribute('data-edit', 'gm-'+m.id+'-ovTitle');
  document.getElementById('d-tagline').setAttribute('data-edit-type', 'text');
  document.getElementById('d-tagline').setAttribute('data-edit-label', m.name+' Tagline');
  document.getElementById('d-name').setAttribute('data-edit', 'gm-'+m.id+'-name');
  document.getElementById('d-name').setAttribute('data-edit-type', 'text');
  document.getElementById('d-name').setAttribute('data-edit-label', m.name+' Display Name');
  document.getElementById('d-pills').innerHTML = m.pills.map((p) => `<span class="detail-pill">${p}</span>`).join('');
  const ovTitle = siteSettings['gm-'+m.id+'-ovTitle'] || m.overviewTitle || 'What It Is';
  const ovText  = siteSettings['gm-'+m.id+'-ovText']  || m.overviewText  || '';
  document.getElementById('d-main').innerHTML = `<div class="ds-section"><div class="ds-label">Overview</div><div class="ds-title" data-edit="gm-${m.id}-ovTitle" data-edit-type="text" data-edit-label="${m.name} Overview Title">${ovTitle}</div><p class="ds-text" data-edit="gm-${m.id}-ovText" data-edit-type="text" data-edit-label="${m.name} Overview Text">${ovText}</p></div><div class="ds-section"><div class="ds-label">Features</div><div class="ds-title">What Makes It Unique</div><div class="features-list">${m.features.map((f,fi)=>`<div class="feature-row"><div class="feature-ico" style="background:${m.color}18;" data-edit="gm-${m.id}-feat${fi}-icon" data-edit-type="text" data-edit-label="${m.name} Feature ${fi+1} Icon">${siteSettings['gm-'+m.id+'-feat'+fi+'-icon']||f.icon}</div><div class="feature-text"><h4 data-edit="gm-${m.id}-feat${fi}-title" data-edit-type="text" data-edit-label="${m.name} Feature ${fi+1} Title">${siteSettings['gm-'+m.id+'-feat'+fi+'-title']||f.title}</h4><p data-edit="gm-${m.id}-feat${fi}-desc" data-edit-type="text" data-edit-label="${m.name} Feature ${fi+1} Desc">${siteSettings['gm-'+m.id+'-feat'+fi+'-desc']||f.desc}</p></div></div>`).join('')}</div></div><div class="ds-section"><div class="ds-label">Why GlimzoMC</div><div class="ds-title">Why Play This Here</div><div class="why-list">${m.why.map((w,wi)=>`<div class="why-row"><span class="why-check" style="color:${m.color}">✓</span><span data-edit="gm-${m.id}-why${wi}" data-edit-type="text" data-edit-label="${m.name} Why ${wi+1}">${siteSettings['gm-'+m.id+'-why'+wi]||w}</span></div>`).join('')}</div></div>`;
  document.getElementById('d-sidebar').innerHTML = `<div class="sidebar-card"><h3>Mode Info</h3>${m.stats.map((s,i)=>`<div class="stat-row" style="${i===m.stats.length-1?'border-bottom:none;padding-bottom:0;':''}"><span class="stat-label">${s.label}</span><span style="font-weight:700;color:${m.color};">${s.val}</span></div>`).join('')}</div><div class="sidebar-card"><h3>Screenshots</h3><div class="ss-placeholder"><span style="font-size:24px;">🖼</span><span>Screenshot coming soon</span></div><div class="ss-placeholder"><span style="font-size:24px;">🖼</span><span>Screenshot coming soon</span></div></div>`;
  if (typeof reattachEditListeners === 'function' && editModeActive) reattachEditListeners();
}

let gmCardsBuilt = false;
function showGmList() {
  document.getElementById('gm-list-wrap').style.display = 'block';
  document.getElementById('gm-detail-wrap').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (!gmCardsBuilt) {
    const grid = document.getElementById('cards-grid');
    if (grid) grid.innerHTML = '';
    buildGmCards();
    gmCardsBuilt = true;
  }
}

document.getElementById('back-btn')?.addEventListener('click', showGmList);

function copyIP(btnId) {
  navigator.clipboard.writeText(CONFIG.ip).catch(() => {});
  const btn = document.getElementById(btnId);
  if (!btn) return;
  btn.classList.add('copied');
  setTimeout(() => btn.classList.remove('copied'), 2000);
}
document.getElementById('playBtn')?.addEventListener('click', () => copyIP('playBtn'));
document.getElementById('d-play')?.addEventListener('click', () => copyIP('d-play'));
document.getElementById('ctaBannerPlay')?.addEventListener('click', () => copyIP('ctaBannerPlay'));

function openSearch() { document.getElementById('search-overlay').classList.add('active'); setTimeout(() => document.getElementById('searchOverlayInput').focus(), 50); }
function closeSearch() { document.getElementById('search-overlay').classList.remove('active'); }
document.getElementById('navSearchInput')?.addEventListener('click', openSearch);
document.getElementById('searchClose')?.addEventListener('click', closeSearch);
document.getElementById('search-overlay')?.addEventListener('click', (e) => { if (e.target === document.getElementById('search-overlay')) closeSearch(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSearch(); });

function observeFadeIn(els) {
  const obs = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } }); }, { threshold: 0.08 });
  els.forEach((el) => { el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity .5s ease, transform .5s ease, border-color .25s, background .25s, box-shadow .25s'; obs.observe(el); });
}
observeFadeIn(document.querySelectorAll('.why-item, .feat-item'));

const ANNOUNCEMENTS = [
  { badge: 'new', title: 'GlimzoMC is now in Early Access!', desc: 'The server is officially open. Be one of the first players to join and help shape the competitive meta.', date: 'April 2025' },
  { badge: 'update', title: 'BedWars — First Map Released', desc: 'Our first custom BedWars map is live. Hand-crafted with balanced resource points and clean mid design.', date: 'April 2025' },
  { badge: 'update', title: 'Clashbox Arena Now Open', desc: 'The signature close-quarters arena mode is ready. Drop in, chain kills, and climb the match leaderboard.', date: 'April 2025' },
  { badge: 'hotfix', title: 'Anti-Cheat Improvements', desc: 'Updated detection systems for more accurate flagging. False positives have been significantly reduced.', date: 'April 2025' },
];
const EVENTS = [
  { emoji: '🏆', name: 'Launch Weekend Tournament', meta: 'BedWars · All skill levels welcome', status: 'live' },
  { emoji: '⚔️', name: 'Clashbox Kill Race', meta: 'Most kills in 1 hour wins', status: 'live' },
  { emoji: '🌟', name: 'Ranked Season 1', meta: 'ELO ladders open soon', status: 'soon' },
];
const CHANGELOG = [
  { ver: 'v0.3', title: 'Anti-cheat pass + performance fixes', date: 'Apr 2025' },
  { ver: 'v0.2', title: 'Clashbox arena released', date: 'Apr 2025' },
  { ver: 'v0.1', title: 'Server launch — BedWars live', date: 'Apr 2025' },
];

function buildAnnouncements() { const list = document.getElementById('announce-list'); if (!list) return; const data = typeof getAnnouncements !== 'undefined' ? getAnnouncements() : ANNOUNCEMENTS; list.innerHTML = data.map((a) => `<div class="announce-card"><span class="ann-badge ${a.badge}">${a.badge}</span><div class="ann-content"><div class="ann-title">${a.title}</div><div class="ann-desc">${a.desc}</div><div class="ann-date">${a.date}</div></div></div>`).join(''); }
function buildEvents() { const list = document.getElementById('events-list'); if (!list) return; list.innerHTML = EVENTS.map((e) => `<div class="event-card"><span class="event-emoji">${e.emoji}</span><div class="event-info"><div class="event-name">${e.name}</div><div class="event-meta">${e.meta}</div></div><span class="event-status ${e.status}">${e.status === 'live' ? '● Live' : '◌ Soon'}</span></div>`).join(''); }
function buildChangelog() { const list = document.getElementById('changelog-list'); if (!list) return; const data = typeof getChangelog !== 'undefined' ? getChangelog() : CHANGELOG; list.innerHTML = data.map((c) => `<div class="changelog-item"><span class="cl-ver">${c.ver}</span><div class="cl-text"><div class="cl-title">${c.title}</div><div class="cl-date">${c.date}</div></div></div>`).join(''); }

buildHomeCards();
buildAnnouncements();
buildEvents();
buildChangelog();

// ═══════════════════════════════════════════════════════
//  SUPABASE / FORUM
// ═══════════════════════════════════════════════════════
const SUPABASE_URL = 'https://bglgsikoblveeofpdyuv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnbGdzaWtvYmx2ZWVvZnBkeXV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxNzAyNDEsImV4cCI6MjA5Mjc0NjI0MX0.9WdcO6cvrbQ93TIGcgDOR6MU5VKD6zovEkYd-aNWYAA';

let sb = null, fUser = null, fProfile = null, fAllPosts = [], fCats = [], fActiveCat = null, fCurrentPost = null;
const ADMIN_EMOJIS = ['🛡️','⚔️','🏆','💥','🔥','🌟','📢'];

function initSupabase() {
  if (typeof supabase === 'undefined') return;
  sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  injectForumDOM();
  initForumAuth();
  loadServerStatus();
  if (document.getElementById('page-community')?.classList.contains('active')) loadForumData();
}

function injectForumDOM() {
  if (!document.getElementById('post-overlay-home')) {
    const o = document.createElement('div');
    o.id = 'post-overlay-home'; o.className = 'post-overlay';
    o.innerHTML = `<div class="post-overlay-inner"><button class="back-btn-home" onclick="closePostOverlay()">← Back to Forum</button><div id="pod-content"></div><div id="pod-replies-title" class="replies-hd">Replies</div><div id="pod-replies"></div><div id="pod-reply-form"></div></div>`;
    document.body.appendChild(o);
  }
  if (!document.getElementById('fmodal-post')) {
    const m = document.createElement('div'); m.id = 'fmodal-post'; m.className = 'fmodal-overlay';
    m.innerHTML = `<div class="fmodal"><div class="fmodal-hd"><div class="fmodal-title">New Post</div><button class="fmodal-close" onclick="closeFModal('fmodal-post')">✕</button></div><div class="fform-group"><label class="fform-label">Title</label><input type="text" class="fform-input" id="f-post-title" placeholder="What's your post about?" /></div><div class="fform-group"><label class="fform-label">Category</label><select class="fform-select" id="f-post-cat"></select></div><div class="fform-group"><label class="fform-label">Content</label><textarea class="fform-textarea" id="f-post-content" placeholder="Write your post..."></textarea></div><button class="fform-submit" onclick="submitForumPost()">Publish Post</button></div>`;
    m.addEventListener('click', e => { if (e.target===m) closeFModal('fmodal-post'); });
    document.body.appendChild(m);
  }
  if (!document.getElementById('fmodal-auth')) {
    const m = document.createElement('div'); m.id = 'fmodal-auth'; m.className = 'fmodal-overlay';
    m.innerHTML = `<div class="fmodal"><div class="fmodal-hd"><div class="fmodal-title" id="fauth-title">Log In</div><button class="fmodal-close" onclick="closeFModal('fmodal-auth')">✕</button></div><div class="auth-tabs-home"><button class="auth-tab-home active" id="ftab-login" onclick="switchFTab('login')">Log In</button><button class="auth-tab-home" id="ftab-signup" onclick="switchFTab('signup')">Sign Up</button></div><div id="fauth-login"><div class="fform-group"><label class="fform-label">Username</label><input type="text" class="fform-input" id="f-login-username" placeholder="YourUsername" /></div><div class="fform-group"><label class="fform-label">Password</label><input type="password" class="fform-input" id="f-login-pw" placeholder="••••••••" /></div><button class="fform-submit" onclick="forumLogin()">Log In</button></div><div id="fauth-signup" style="display:none;"><div class="fform-group"><label class="fform-label">Username</label><input type="text" class="fform-input" id="f-signup-user" placeholder="YourUsername" /></div><div class="fform-group"><label class="fform-label">Email</label><input type="email" class="fform-input" id="f-signup-email" placeholder="you@gmail.com" /></div><div class="fform-group"><label class="fform-label">Password</label><input type="password" class="fform-input" id="f-signup-pw" placeholder="Min 6 characters" /></div><button class="fform-submit" onclick="forumSignup()">Create Account</button></div></div>`;
    m.addEventListener('click', e => { if (e.target===m) closeFModal('fmodal-auth'); });
    document.body.appendChild(m);
  }
  if (!document.getElementById('ftoast')) {
    const t = document.createElement('div'); t.id = 'ftoast'; t.className = 'ftoast';
    t.innerHTML = `<span id="ftoast-icon">✓</span><span id="ftoast-msg"></span>`;
    document.body.appendChild(t);
  }
}

async function initForumAuth() {
  const { data: { session } } = await sb.auth.getSession();
  if (session?.user) await setForumUser(session.user);
  sb.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session?.user) { if (!fUser) await setForumUser(session.user); }
    else if (!session) { fUser = null; fProfile = null; renderForumNav(); updateStatusBadgeForAdmin(); }
  });
}

async function setForumUser(user) {
  fUser = user;
  let { data } = await sb.from('profiles').select('*').eq('id', user.id).single();
  // Retry once — profile insert may not be immediately visible
  if (!data) {
    await new Promise(r => setTimeout(r, 600));
    const res = await sb.from('profiles').select('*').eq('id', user.id).single();
    data = res.data;
  }
  fProfile = data;
  renderForumNav();
  updateStatusBadgeForAdmin();
}

// ── THE FIX: rewireNavLinks is called BEFORE the authCard early-return ──
function renderForumNav() {
  const navRight = document.getElementById('nav-right');
  if (navRight) {
    if (fUser && fProfile) {
      const init = fProfile.username[0].toUpperCase();
      const isAdmin = fProfile.role === 'admin';
      navRight.innerHTML = `<div class="nav-user-bar">
        <div class="nav-user-btn" onclick="toggleNavDropdown()">
          <div class="nav-user-av" style="background:${fProfile.avatar_color}22;color:${fProfile.avatar_color};">${init}</div>
          <span class="nav-user-name">${fProfile.username}${isAdmin ? ' <span style="font-size:10px;color:var(--g);font-weight:800;">[ADMIN]</span>' : ''}</span>
          <span class="nav-user-chevron">▾</span>
        </div>
        <div class="nav-dropdown" id="nav-dropdown">
          <div class="nav-dropdown-user">
            <div class="nav-dd-av" style="background:${fProfile.avatar_color}22;color:${fProfile.avatar_color};">${init}</div>
            <div><div class="nav-dd-name">${fProfile.username}</div><div class="nav-dd-role">${isAdmin ? '🛡️ Staff' : '👤 Member'}</div></div>
          </div>
          <div class="nav-dropdown-divider"></div>
          ${isAdmin ? `<button class="nav-dd-item nav-dd-editmode" onclick="toggleEditMode()"><span>✏️</span> Edit Mode</button><div class="nav-dropdown-divider"></div>` : ''}
          <button class="nav-dd-item" onclick="forumSignout()"><span>⬡</span> Sign Out</button>
        </div>
      </div>`;
    } else {
      navRight.innerHTML = `
        <a class="btn-nav-login" data-nav="login" style="cursor:pointer;">Log In</a>
        <a class="btn-nav-register" data-nav="register" style="cursor:pointer;">Sign Up</a>`;
    }
  }

  // ALWAYS rewire and update admin buttons — no early return before this
  rewireNavLinks();
  const newThreadBtn = document.getElementById('btn-new-thread');
  if (newThreadBtn) newThreadBtn.style.display = (fProfile?.role === 'admin') ? 'inline-flex' : 'none';

  // Auth card is optional — only update if it exists
  const authCard = document.getElementById('fhx-auth-card');
  if (authCard) {
    if (fUser && fProfile) {
      const init = fProfile.username[0].toUpperCase();
      const isAdmin = fProfile.role === 'admin';
      authCard.innerHTML = `<div class="fhx-card-title">${isAdmin ? '🛡️ Staff' : '👤 Account'}</div>
        <div class="fhx-user-bar">
          <div class="fhx-user-av" style="background:${fProfile.avatar_color}22;color:${fProfile.avatar_color};">${init}</div>
          <span class="fhx-user-name">${fProfile.username}${isAdmin ? ' <span style="font-size:10px;color:var(--g);font-weight:800;">[ADMIN]</span>' : ''}</span>
          <button class="fhx-signout" onclick="forumSignout()">Sign Out</button>
        </div>`;
    } else {
      authCard.innerHTML = `<div class="fhx-card-title">Join the Community</div>
        <div class="fhx-auth-btns">
          <button class="fhx-btn-login" onclick="openFAuth('login')">Log In</button>
          <button class="fhx-btn-signup" onclick="openFAuth('signup')">Sign Up</button>
        </div>`;
    }
  }

  renderReplyForm();
  if (fCurrentPost) renderSidebarReplies(fCurrentPost);
  renderPublicCommentForm();
}

async function forumLogin() {
  const username = document.getElementById('f-login-username').value.trim();
  const pw = document.getElementById('f-login-pw').value;
  if (!username) return fToast('❌ Enter your username', true);
  if (!pw) return fToast('❌ Enter your password', true);
  const { data: profile } = await sb.from('profiles').select('email').eq('username', username).single();
  if (!profile) return fToast('❌ Username not found. Check spelling or sign up.', true);
  if (!profile.email) return fToast('❌ Account setup incomplete. Please sign up again.', true);
  const { error } = await sb.auth.signInWithPassword({ email: profile.email, password: pw });
  if (error) return fToast('❌ Incorrect password', true);
  closeFModal('fmodal-auth'); fToast('✓ Logged in!');
}

async function forumSignup() {
  const username = document.getElementById('f-signup-user').value.trim();
  const email = document.getElementById('f-signup-email').value.trim();
  const pw = document.getElementById('f-signup-pw').value;
  if (!username || username.length < 3) return fToast('❌ Username must be 3+ characters', true);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fToast('❌ Enter a valid email address', true);
  if (!pw || pw.length < 6) return fToast('❌ Password must be 6+ characters', true);
  if (!/^[a-zA-Z0-9_]+$/.test(username)) return fToast('❌ Username: letters, numbers, underscores only', true);
  const { data: existing } = await sb.from('profiles').select('id').eq('username', username).single();
  if (existing) return fToast('❌ Username already taken', true);
  const { data, error } = await sb.auth.signUp({ email, password: pw });
  if (error) {
    if (error.message.toLowerCase().includes('already registered') || error.message.toLowerCase().includes('already been registered')) {
      return fToast('❌ This email is already registered. Try logging in instead.', true);
    }
    return fToast('❌ ' + error.message, true);
  }
  if (data.user) {
    const { error: insertError } = await sb.from('profiles').insert({ id: data.user.id, username, email, avatar_color: '#4ade80' });
    if (insertError) return fToast('❌ Profile setup failed: ' + insertError.message, true);
  }
  closeFModal('fmodal-auth'); fToast('✓ Account created! You are now logged in.');
}

async function forumSignout() { await sb.auth.signOut(); fToast('✓ Signed out'); }

let currentForumCat = 'all';
let currentGmSub = null;

function toggleGmDropdown(e, btn) {
  e.stopPropagation();
  const dd = document.getElementById('forum-gm-dropdown');
  const isOpen = dd.classList.contains('open');
  // close any open state first
  closeGmDropdown();
  if (!isOpen) {
    dd.classList.add('open');
    btn.classList.add('open', 'active');
    // close on outside click
    setTimeout(() => document.addEventListener('click', closeGmDropdown, { once: true }), 0);
  }
}

function closeGmDropdown() {
  const dd = document.getElementById('forum-gm-dropdown');
  const btn = document.querySelector('.forum-cat-gm-btn');
  if (dd) dd.classList.remove('open');
  if (btn && !currentGmSub) btn.classList.remove('open', 'active');
  else if (btn) btn.classList.remove('open');
}

function switchForumCatGm(gm, btn) {
  currentGmSub = gm;
  currentForumCat = 'gamemode-' + gm;
  // deactivate all main tabs
  document.querySelectorAll('.forum-cat-btn').forEach(b => b.classList.remove('active'));
  // activate parent gm button
  document.querySelector('.forum-cat-gm-btn')?.classList.add('active');
  // activate sub option
  document.querySelectorAll('.forum-gm-opt').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  closeGmDropdown();
  loadForumData();
}

function switchForumCat(cat, btn) {
  currentForumCat = cat;
  currentGmSub = null;
  document.querySelectorAll('.forum-cat-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.forum-gm-opt').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  loadForumData();
}

async function loadForumData() {
  await loadForumCategories();
  const { data } = await sb.from('posts').select(`*, profiles(username, avatar_color, role), categories(name, icon), replies(count)`).order('created_at', { ascending: false });
  fAllPosts = data || [];
  renderAdminPosts();
  renderLatestFeed();
  await loadPublicComments();
}

async function loadForumCategories() {
  const { data } = await sb.from('categories').select('*').order('id');
  const defaultCats = [
    { id: 1, icon: '📢', name: 'Updates' },
    { id: 2, icon: '💬', name: 'General' },
    { id: 3, icon: '🎮', name: 'Gamemode Specific' },
  ];
  fCats = (data && data.length) ? data : defaultCats;
  const sel = document.getElementById('f-post-cat');
  if (sel) { sel.innerHTML = ''; fCats.forEach(c => sel.innerHTML += `<option value="${c.id}">${c.icon} ${c.name}</option>`); }
}

function filterForumCat(id, el) {
  fActiveCat = id;
  document.querySelectorAll('.cat-item-home').forEach(i => i.classList.remove('active'));
  document.querySelectorAll('.cat-pill').forEach(i => i.classList.remove('active'));
  el.classList.add('active'); renderCommunityPosts();
}

function renderAdminPosts() {
  const list = document.getElementById('admin-posts-list');
  if (!list) return;
  const adminPosts = fAllPosts.filter(p => p.profiles?.role === 'admin');
  if (!adminPosts.length) { list.innerHTML = ''; return; }
  list.innerHTML = adminPosts.map((p, i) => {
    const emoji = ADMIN_EMOJIS[i % ADMIN_EMOJIS.length];
    const replies = p.replies?.[0]?.count || 0;
    const excerpt = p.content.length > 160 ? p.content.slice(0, 160) + '...' : p.content;
    const isCurrentAdmin = fProfile?.role === 'admin';
    const deleteBtn = isCurrentAdmin ? `<button class="post-delete-btn" onclick="event.stopPropagation();deleteForumPost(${p.id})" title="Delete post">🗑 Delete</button>` : '';
    return `<div class="admin-post-card" onclick="openForumPost(${p.id})"><div class="admin-post-banner">${emoji}</div><div class="admin-post-body"><div class="admin-post-meta"><span class="admin-badge">📢 Admin</span><span class="admin-name">@${p.profiles?.username || 'Staff'}</span><span class="admin-time">${fTimeAgo(p.created_at)}</span>${deleteBtn}</div><div class="admin-post-title">${p.title}</div><div class="admin-post-excerpt">${excerpt}</div><div class="admin-post-footer"><span class="admin-reply-count">💬 ${replies} ${replies===1?'reply':'replies'}</span><span class="admin-read-more">Read More →</span></div></div></div>`;
  }).join('');
}

async function loadPublicComments() {
  const list = document.getElementById('pub-comments-list');
  const countEl = document.getElementById('pub-comments-count');
  if (!list) return;

  // Fetch comments
  const { data: comments } = await sb.from('public_comments').select('*').order('created_at', { ascending: false });
  const rows = comments || [];

  // Manually fetch profiles for each unique author
  const authorIds = [...new Set(rows.map(c => c.author_id).filter(Boolean))];
  let profileMap = {};
  if (authorIds.length) {
    const { data: profs } = await sb.from('profiles').select('id, username, avatar_color, role').in('id', authorIds);
    (profs || []).forEach(p => { profileMap[p.id] = p; });
  }

  if (countEl) countEl.textContent = rows.length + ' comment' + (rows.length !== 1 ? 's' : '');
  if (!rows.length) {
    list.innerHTML = `<div style="border-top:1px solid rgba(74,222,128,.08);padding:14px 14px;font-size:12px;color:var(--gr);opacity:.4;">No comments yet. Be the first!</div>`;
  } else {
    const currentIsAdmin = fProfile?.role === 'admin';
    list.innerHTML = `<div style="border-top:1px solid rgba(74,222,128,.08);">` + rows.map(c => {
      const prof = profileMap[c.author_id];
      const color = prof?.avatar_color || '#4ade80';
      const init = prof?.username?.[0]?.toUpperCase() || '?';
      const isAdmin = prof?.role === 'admin';
      const canDelete = fUser && (fUser.id === c.author_id || currentIsAdmin);
      return `<div class="pub-comment" id="pub-comment-${c.id}"><div class="pub-comment-av" style="background:${color}22;color:${color};">${init}</div><div class="pub-comment-body"><div class="pub-comment-meta"><span class="pub-comment-user" style="color:${color};">@${prof?.username || 'Unknown'}</span>${isAdmin ? '<span class="pub-comment-admin-badge">[ADMIN]</span>' : ''}<span class="pub-comment-time">${fTimeAgo(c.created_at)}</span>${canDelete ? `<button class="pub-comment-delete" onclick="deletePublicComment(${c.id})">✕</button>` : ''}</div><div class="pub-comment-text">${c.content}</div></div></div>`;
    }).join('') + `</div>`;
  }
  renderPublicCommentForm();
}

function renderPublicCommentForm() {
  const el = document.getElementById('pub-comment-form-wrap');
  if (!el) return;
  if (fUser && fProfile) {
    const color = fProfile.avatar_color || '#4ade80';
    const init = fProfile.username[0].toUpperCase();
    el.innerHTML = `<div class="pub-comment-form"><div class="pub-comment-form-av" style="background:${color}22;color:${color};">${init}</div><div class="pub-comment-form-inner"><textarea class="pub-comment-ta" id="pub-comment-ta" placeholder="Write a comment..."></textarea><button class="pub-comment-submit" onclick="submitPublicComment()">Post Comment</button></div></div>`;
  } else {
    el.innerHTML = `<div class="pub-comment-login-prompt"><a onclick="navigate('login')" style="cursor:pointer;">Log In</a> or <a onclick="navigate('register')" style="cursor:pointer;">Sign Up</a> to comment.</div>`;
  }
}

async function submitPublicComment() {
  if (!fUser) return openFAuth('login');
  const ta = document.getElementById('pub-comment-ta');
  const content = ta?.value.trim();
  if (!content) return fToast('❌ Comment cannot be empty', true);
  const { error } = await sb.from('public_comments').insert({ content, author_id: fUser.id });
  if (error) return fToast('❌ ' + error.message, true);
  ta.value = '';
  await loadPublicComments();
  fToast('✓ Comment posted!');
}

function renderCommunityPosts() {}
function filterPostsHome() {}

async function deleteForumPost(id) {
  if (!fUser || fProfile?.role !== 'admin') return;
  if (!confirm('Delete this post? This cannot be undone.')) return;
  // Delete replies first
  await sb.from('replies').delete().eq('post_id', id);
  const { error } = await sb.from('posts').delete().eq('id', id);
  if (error) return fToast('❌ Failed to delete post', true);
  fToast('✓ Post deleted');
  await loadForumData();
}

async function deletePublicComment(id) {
  if (!fUser) return;
  const isAdmin = fProfile?.role === 'admin';
  let query = sb.from('public_comments').delete().eq('id', id);
  if (!isAdmin) query = query.eq('author_id', fUser.id);
  const { error } = await query;
  if (error) return fToast('❌ ' + error.message, true);
  await loadPublicComments();
  fToast('✓ Comment deleted.');
}

function renderLatestFeed() {
  const feed = document.getElementById('latest-posts-feed');
  if (!feed) return;
  const latest = fAllPosts.slice(0, 8);
  if (!latest.length) { feed.innerHTML = `<div style="padding:14px;font-size:12px;color:var(--gr);opacity:.4;">No posts yet.</div>`; return; }
  feed.innerHTML = latest.map(p => {
    const color = p.profiles?.avatar_color || '#4ade80';
    const init = p.profiles?.username?.[0]?.toUpperCase() || '?';
    return `<div class="latest-post-item" onclick="openForumPost(${p.id})"><div class="lpi-av" style="background:${color}18;color:${color};">${init}</div><div class="lpi-info"><div class="lpi-title">${p.title.length>48?p.title.slice(0,48)+'...':p.title}</div><div class="lpi-meta">@${p.profiles?.username||'Unknown'} · ${fTimeAgo(p.created_at)}</div></div></div>`;
  }).join('');
}

async function openForumPost(id) {
  fCurrentPost = id;
  const overlay = document.getElementById('post-overlay-home');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  const post = fAllPosts.find(p => p.id === id);
  if (post) sb.from('posts').update({ views: (post.views||0)+1 }).eq('id', id);
  const { data: p } = await sb.from('posts').select(`*, profiles(username,avatar_color,role), categories(name,icon)`).eq('id', id).single();
  const isAdmin = p.profiles?.role === 'admin';
  const color = p.profiles?.avatar_color || '#4ade80';
  document.getElementById('pod-content').innerHTML = `<div class="post-dh"><div class="post-dcat">${p.categories?.icon||''} ${p.categories?.name||''}</div>${isAdmin ? '<div style="display:inline-flex;align-items:center;gap:6px;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.25);padding:3px 10px;border-radius:100px;font-size:10px;font-weight:800;letter-spacing:2px;color:var(--g);margin-bottom:10px;">📢 STAFF ANNOUNCEMENT</div>' : ''}<div class="post-dtitle">${p.title}</div><div class="post-dmeta"><span style="color:${color};font-weight:700;">@${p.profiles?.username||'Unknown'}</span>${isAdmin ? '<span style="font-size:10px;background:rgba(74,222,128,.1);color:var(--g);padding:2px 8px;border-radius:100px;font-weight:800;">[ADMIN]</span>' : ''}<span>•</span><span>${fTimeAgo(p.created_at)}</span><span>•</span><span>${p.views||0} views</span></div><div class="post-dcontent">${p.content}</div></div>`;
  await loadForumReplies(id);
  renderSidebarReplies(id);
  renderReplyForm();
}

function closePostOverlay() {
  document.getElementById('post-overlay-home').classList.remove('active');
  document.body.style.overflow = '';
  fCurrentPost = null;
  loadForumData();
}

async function loadForumReplies(postId) {
  const { data } = await sb.from('replies').select(`*, profiles(username,avatar_color,role)`).eq('post_id', postId).order('created_at');
  const count = data?.length || 0;
  document.getElementById('pod-replies-title').textContent = `${count} ${count===1?'Reply':'Replies'}`;
  document.getElementById('pod-replies').innerHTML = count ? (data||[]).map(r => {
    const color = r.profiles?.avatar_color || '#4ade80';
    const init = r.profiles?.username?.[0]?.toUpperCase() || '?';
    const isAdmin = r.profiles?.role === 'admin';
    return `<div class="reply-c" style="${isAdmin?'border-color:rgba(74,222,128,.2);background:rgba(74,222,128,.04);':''}"><div class="rav" style="background:${color}18;color:${color};">${init}</div><div class="rb"><div class="rauth">@${r.profiles?.username||'Unknown'}${isAdmin?'<span style="font-size:10px;background:rgba(74,222,128,.1);color:var(--g);padding:1px 7px;border-radius:100px;font-weight:800;margin-left:6px;">[ADMIN]</span>':''}<span class="rtime">${fTimeAgo(r.created_at)}</span></div><div class="rcontent">${r.content}</div></div></div>`;
  }).join('') : `<div class="forum-empty" style="padding:28px 0;"><div class="forum-empty-txt">No replies yet. Start the conversation!</div></div>`;
}

async function renderSidebarReplies(postId) {
  const sidebar = document.getElementById('sidebar-replies');
  const replyForm = document.getElementById('sidebar-reply-form');
  const replyPrompt = document.getElementById('sidebar-reply-prompt');
  if (!sidebar) return;
  const { data } = await sb.from('replies').select(`*, profiles(username, avatar_color, role)`).eq('post_id', postId).order('created_at', { ascending: false }).limit(10);
  if (!data || !data.length) { sidebar.innerHTML = `<div style="padding:14px;font-size:12px;color:var(--gr);opacity:.4;">No replies yet. Be the first!</div>`; }
  else { sidebar.innerHTML = data.map(r => { const color = r.profiles?.avatar_color || '#4ade80'; const init = r.profiles?.username?.[0]?.toUpperCase() || '?'; const isAdmin = r.profiles?.role === 'admin'; return `<div class="latest-post-item" style="flex-direction:column;align-items:flex-start;gap:6px;"><div style="display:flex;align-items:center;gap:8px;width:100%;"><div class="lpi-av" style="background:${color}18;color:${color};">${init}</div><span style="font-size:12px;font-weight:700;color:${color};">@${r.profiles?.username||'Unknown'}${isAdmin?' <span style="font-size:9px;background:rgba(74,222,128,.1);color:var(--g);padding:1px 6px;border-radius:100px;font-weight:800;">[ADMIN]</span>':''}</span><span style="font-size:10px;color:var(--gr);opacity:.35;margin-left:auto;">${fTimeAgo(r.created_at)}</span></div><div style="font-size:12px;color:var(--gr);opacity:.75;line-height:1.5;padding-left:36px;">${r.content.length>120?r.content.slice(0,120)+'...':r.content}</div></div>`; }).join(''); }
  if (replyForm && replyPrompt) { if (fUser) { replyForm.style.display = 'block'; replyPrompt.style.display = 'none'; } else { replyForm.style.display = 'none'; replyPrompt.style.display = 'block'; } }
}

function renderReplyForm() {
  const el = document.getElementById('pod-reply-form');
  if (!el) return;
  if (fUser) { el.innerHTML = `<div class="reply-form-home"><h3>Leave a Reply</h3><textarea class="reply-ta" id="pod-reply-ta" placeholder="Write your reply..."></textarea><button class="reply-sub" onclick="submitForumReply()">Post Reply</button></div>`; }
  else { el.innerHTML = `<div class="login-prompt-home"><a onclick="openFAuth('login')">Log in</a> to leave a reply.</div>`; }
}

async function submitForumReply() {
  if (!fUser) return openFAuth('login');
  const ta = document.getElementById('sidebar-reply-ta') || document.getElementById('pod-reply-ta');
  const content = ta?.value.trim();
  if (!content) return fToast('❌ Reply cannot be empty', true);
  const { error } = await sb.from('replies').insert({ content, post_id: fCurrentPost, author_id: fUser.id });
  if (error) return fToast('❌ ' + error.message, true);
  if (ta) ta.value = '';
  await loadForumReplies(fCurrentPost);
  await renderSidebarReplies(fCurrentPost);
  fToast('✓ Reply posted!');
}

async function submitSidebarReply() {
  if (!fUser) return openFAuth('login');
  const ta = document.getElementById('sidebar-reply-ta');
  const content = ta?.value.trim();
  if (!content) return fToast('❌ Reply cannot be empty', true);
  if (!fCurrentPost) return fToast('❌ No thread selected', true);
  const { error } = await sb.from('replies').insert({ content, post_id: fCurrentPost, author_id: fUser.id });
  if (error) return fToast('❌ ' + error.message, true);
  ta.value = '';
  await renderSidebarReplies(fCurrentPost);
  fToast('✓ Reply posted!');
}

function openNewPostHome() { if (!fUser) return openFAuth('login'); document.getElementById('fmodal-post').classList.add('active'); }

async function submitForumPost() {
  if (!fUser) return openFAuth('login');
  const title = document.getElementById('f-post-title').value.trim();
  const content = document.getElementById('f-post-content').value.trim();
  const category_id = parseInt(document.getElementById('f-post-cat').value);
  if (!title) return fToast('❌ Title is required', true);
  if (!content) return fToast('❌ Content is required', true);
  const { error } = await sb.from('posts').insert({ title, content, category_id, author_id: fUser.id });
  if (error) return fToast('❌ ' + error.message, true);
  closeFModal('fmodal-post');
  document.getElementById('f-post-title').value = '';
  document.getElementById('f-post-content').value = '';
  await loadForumData();
  fToast('✓ Post published!');
}

function openFAuth(tab) { document.getElementById('fmodal-auth').classList.add('active'); switchFTab(tab); }
function switchFTab(tab) { document.getElementById('fauth-login').style.display = tab==='login'?'block':'none'; document.getElementById('fauth-signup').style.display = tab==='signup'?'block':'none'; document.getElementById('ftab-login').classList.toggle('active', tab==='login'); document.getElementById('ftab-signup').classList.toggle('active', tab==='signup'); document.getElementById('fauth-title').textContent = tab==='login'?'Log In':'Sign Up'; }
function closeFModal(id) { document.getElementById(id).classList.remove('active'); }

function fToast(msg, isErr=false) {
  const el = document.getElementById('ftoast');
  if (!el) return;
  el.className = 'ftoast active' + (isErr?' err':'');
  document.getElementById('ftoast-icon').textContent = isErr?'❌':'✓';
  document.getElementById('ftoast-msg').textContent = msg.replace(/^[❌✓]\s*/,'');
  clearTimeout(window._fToastTimer);
  window._fToastTimer = setTimeout(() => el.classList.remove('active'), 3500);
}
function fTimeAgo(d) {
  const s = Math.floor((Date.now()-new Date(d))/1000);
  if (s<60) return 'just now';
  if (s<3600) return `${Math.floor(s/60)}m ago`;
  if (s<86400) return `${Math.floor(s/3600)}h ago`;
  return `${Math.floor(s/86400)}d ago`;
}

function toggleAuthPw(id, btn) { const inp = document.getElementById(id); if (!inp) return; if (inp.type === 'password') { inp.type = 'text'; btn.textContent = 'Hide'; } else { inp.type = 'password'; btn.textContent = 'Show'; } }
function showAuthError(id, msg) { const el = document.getElementById(id); if (!el) return; el.textContent = msg; el.classList.add('show'); }
function hideAuthError(id) { const el = document.getElementById(id); if (el) { el.textContent = ''; el.classList.remove('show'); } }

async function doLoginPage() {
  if (!sb) return showAuthError('login-error', 'Still connecting, please wait.');
  const username = document.getElementById('login-username')?.value.trim();
  const pw = document.getElementById('login-pw')?.value;
  hideAuthError('login-error');
  if (!username) return showAuthError('login-error', 'Please enter your username.');
  if (!pw) return showAuthError('login-error', 'Please enter your password.');
  const { data: profile } = await sb.from('profiles').select('email').eq('username', username).single();
  if (!profile) return showAuthError('login-error', 'Username not found. Check spelling or sign up for an account.');
  if (!profile.email) return showAuthError('login-error', 'Account setup incomplete. Please sign up again or contact support.');
  const { data, error } = await sb.auth.signInWithPassword({ email: profile.email, password: pw });
  if (error) return showAuthError('login-error', 'Incorrect password. Please try again.');
  if (data.user) await setForumUser(data.user);
  navigate('home');
}

let regUsernameOk = false;

async function checkRegUsername() {
  if (!sb) return;
  const val = document.getElementById('reg-username')?.value.trim();
  const hint = document.getElementById('reg-username-hint');
  const inp = document.getElementById('reg-username');
  if (!val) { hint.textContent = 'Letters, numbers and underscores only.'; hint.className = 'auth-hint'; hint.style.color = ''; inp.classList.remove('error'); regUsernameOk = false; return; }
  if (!/^[a-zA-Z0-9_]{3,20}$/.test(val)) { hint.textContent = 'Username must be 3-20 characters, letters/numbers/underscores only.'; hint.className = 'auth-hint err'; hint.style.color = ''; inp.classList.add('error'); regUsernameOk = false; return; }
  const { data } = await sb.from('profiles').select('id').eq('username', val).single();
  if (data) { hint.textContent = 'This username is already taken.'; hint.className = 'auth-hint err'; hint.style.color = ''; inp.classList.add('error'); regUsernameOk = false; }
  else { hint.textContent = '✓ Username is available!'; hint.className = 'auth-hint'; hint.style.color = '#4ade80'; inp.classList.remove('error'); regUsernameOk = true; }
}

function checkRegPwStrength() {
  const pw = document.getElementById('reg-pw')?.value || '';
  const fill = document.getElementById('reg-pw-strength-fill');
  const hint = document.getElementById('reg-pw-hint');
  if (!fill || !hint) return;
  let s = 0;
  if (pw.length >= 6) s++; if (pw.length >= 10) s++; if (/[A-Z]/.test(pw)) s++; if (/[0-9]/.test(pw)) s++; if (/[^a-zA-Z0-9]/.test(pw)) s++;
  const colors = ['#f87171','#fb923c','#fbbf24','#86efac','#4ade80'];
  const labels = ['Too short','Weak','Fair','Good','Strong'];
  fill.style.width = ((s/5)*100) + '%';
  fill.style.background = colors[s-1] || '#f87171';
  hint.textContent = pw.length < 6 ? 'Minimum 6 characters.' : (labels[s-1] || 'Too short');
}

async function doRegisterPage() {
  if (!sb) return showAuthError('reg-error', 'Still connecting, please wait.');
  const username = document.getElementById('reg-username')?.value.trim();
  const email = document.getElementById('reg-email')?.value.trim();
  const pw = document.getElementById('reg-pw')?.value;
  const pw2 = document.getElementById('reg-pw2')?.value;
  const terms = document.getElementById('reg-terms')?.checked;
  hideAuthError('reg-error');
  document.getElementById('reg-success')?.classList.remove('show');
  if (!username) return showAuthError('reg-error', 'Please enter a username.');
  if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) return showAuthError('reg-error', 'Username must be 3-20 chars, letters/numbers/underscores only.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showAuthError('reg-error', 'Please enter a valid email address.');
  if (!pw || pw.length < 6) return showAuthError('reg-error', 'Password must be at least 6 characters.');
  if (pw !== pw2) return showAuthError('reg-error', 'Passwords do not match.');
  if (!terms) return showAuthError('reg-error', 'You must agree to the terms and privacy policy.');
  const btn = document.getElementById('reg-btn');
  btn.disabled = true; btn.textContent = 'Checking username...';
  const { data: existing } = await sb.from('profiles').select('id').eq('username', username).single();
  if (existing) { btn.disabled = false; btn.textContent = 'Sign Up'; return showAuthError('reg-error', 'That username is already taken.'); }
  btn.textContent = 'Creating account...';
  const { data, error } = await sb.auth.signUp({ email, password: pw });
  if (error) {
    btn.disabled = false; btn.textContent = 'Sign Up';
    if (error.message.toLowerCase().includes('already registered') || error.message.toLowerCase().includes('already been registered')) {
      return showAuthError('reg-error', 'This email is already registered. Try logging in instead.');
    }
    return showAuthError('reg-error', error.message);
  }
  if (data.user) {
    const { error: insertError } = await sb.from('profiles').insert({ id: data.user.id, username, email, avatar_color: '#4ade80' });
    if (insertError) { btn.disabled = false; btn.textContent = 'Sign Up'; return showAuthError('reg-error', 'Account created but profile setup failed. Please contact support.'); }
    await setForumUser(data.user);
  }
  navigate('home');
}

function toggleNavDropdown() { const dd = document.getElementById('nav-dropdown'); if (!dd) return; dd.classList.toggle('open'); }

document.addEventListener('click', (e) => {
  const bar = document.querySelector('.nav-user-bar');
  if (bar && !bar.contains(e.target)) document.getElementById('nav-dropdown')?.classList.remove('open');
  const wrap = document.getElementById('server-status-badge')?.closest('.hero-badge-wrap');
  if (wrap && !wrap.contains(e.target)) closeStatusDropdown();
});

function rewireNavLinks() {
  document.querySelectorAll('[data-nav]').forEach((el) => {
    if (!el._navWired) {
      el._navWired = true;
      el.addEventListener('click', () => navigate(el.dataset.nav));
    }
  });
}

window.addEventListener('popstate', (e) => { const page = e.state?.page || SLUG_TO_PAGE[location.pathname] || 'home'; navigate(page, false); });
(function routeOnLoad() { const page = SLUG_TO_PAGE[location.pathname] || 'home'; if (page !== 'home') navigate(page, false); })();
document.addEventListener('keydown', (e) => { if (e.key === 'Enter' && document.getElementById('page-login')?.classList.contains('active')) doLoginPage(); });

initSupabase();

// ═══ ANIMATIONS ═══
window.addEventListener('scroll', () => { document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 40); }, { passive: true });
(function initReveal() {
  const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('reveal-visible'); obs.unobserve(e.target); } }); }, { threshold: 0.1 });
  document.querySelectorAll('.feat-item, .why-item, .fhx-card, .announce-card, .event-card, .changelog-item, .footer-col, .footer-brand').forEach(el => { el.classList.add('reveal'); obs.observe(el); });
})();

// ═══ SERVER STATUS ═══
const STATUS_CONFIG = {
  online:      { dot: 'online',      text: 'Server Online — Java 1.8–1.21' },
  offline:     { dot: 'offline',     text: 'Server Offline' },
  maintenance: { dot: 'maintenance', text: 'Server On Maintenance' },
};

async function loadServerStatus() {
  if (!sb) return;
  const { data } = await sb.from('server_status').select('status').eq('id', 1).single();
  if (data) applyStatus(data.status);
}

function applyStatus(status) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.online;
  const dot = document.getElementById('status-dot');
  const text = document.getElementById('status-text');
  if (dot) { dot.className = 'badge-dot ' + cfg.dot; }
  if (text) text.textContent = cfg.text;
}

async function setServerStatus(status) {
  if (!sb || !fProfile || fProfile.role !== 'admin') return;
  await sb.from('server_status').update({ status }).eq('id', 1);
  applyStatus(status);
  closeStatusDropdown();
  fToast('✓ Status updated!');
}

function toggleStatusDropdown() {
  const dd = document.getElementById('status-dropdown');
  if (!dd) return;
  dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
}

function closeStatusDropdown() {
  const dd = document.getElementById('status-dropdown');
  if (dd) dd.style.display = 'none';
}

function updateStatusBadgeForAdmin() {
  const badge = document.getElementById('server-status-badge');
  const arrow = document.getElementById('status-arrow');
  const isAdmin = fProfile?.role === 'admin';
  if (badge) badge.classList.toggle('clickable', isAdmin);
  if (arrow) arrow.style.display = isAdmin ? 'inline' : 'none';
  if (badge) badge.onclick = isAdmin ? toggleStatusDropdown : null;
}

// ═══════════════════════════════════════════════════════
// GLIMZO ADMIN EDITOR ENGINE
// ═══════════════════════════════════════════════════════

let editModeActive = false;
let editSelected = null;
let siteSettings = {};

async function loadSiteSettings() {
  if (!sb) return;
  const { data } = await sb.from('site_settings').select('*');
  if (!data) return;
  data.forEach(row => { siteSettings[row.key] = row.value; });
  applySiteSettings();
}

function applySiteSettings() {
  // Apply CSS vars first
  ['--g','--bg','--w','--gr'].forEach(v => {
    if (siteSettings[v]) document.documentElement.style.setProperty(v, siteSettings[v]);
  });

  // Apply content and inline styles per element
  document.querySelectorAll('[data-edit]').forEach(el => {
    const key = el.dataset.edit;
    const type = el.dataset.editType || 'text';
    if (siteSettings[key]) {
      if (type === 'text') el.textContent = siteSettings[key];
      else if (type === 'html') el.innerHTML = siteSettings[key];
      else if (type === 'src') el.src = siteSettings[key];
    }
    if (siteSettings[key + '__color']) el.style.color = siteSettings[key + '__color'];
    if (siteSettings[key + '__bg']) el.style.backgroundColor = siteSettings[key + '__bg'];
    if (siteSettings[key + '__fontSize']) el.style.fontSize = siteSettings[key + '__fontSize'];
    if (siteSettings[key + '__fontWeight']) el.style.fontWeight = siteSettings[key + '__fontWeight'];
    if (siteSettings[key + '__padding']) el.style.padding = siteSettings[key + '__padding'];
  });
}

async function saveSetting(key, value) {
  siteSettings[key] = value;
  await sb.from('site_settings').upsert({ key, value }, { onConflict: 'key' });
}

function toggleEditMode() {
  if (!fProfile || fProfile.role !== 'admin') return;
  editModeActive = !editModeActive;
  document.body.classList.toggle('edit-mode-active', editModeActive);
  const toolbar = document.getElementById('edit-toolbar');
  if (editModeActive) {
    if (!toolbar) injectEditorUI();
    else toolbar.style.display = 'flex';
    attachEditableClicks();
    showEditorToast('✏️ Edit Mode ON — click any highlighted element to edit');
  } else {
    if (toolbar) toolbar.style.display = 'none';
    detachEditableClicks();
    closeEditPanel();
    showEditorToast('✓ Edit Mode OFF');
  }
  const btn = document.querySelector('.nav-dd-editmode');
  if (btn) btn.innerHTML = `<span>${editModeActive ? '🔴' : '✏️'}</span> ${editModeActive ? 'Exit Edit Mode' : 'Edit Mode'}`;
}

function attachEditableClicks() {
  document.querySelectorAll('[data-edit]').forEach(el => {
    el.classList.add('editable-el');
    el._editHandler = function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (editSelected) editSelected.classList.remove('editable-selected');
      editSelected = el;
      el.classList.add('editable-selected');
      openEditPanel(el);
    };
    el.addEventListener('click', el._editHandler);
  });
}

function detachEditableClicks() {
  document.querySelectorAll('[data-edit]').forEach(el => {
    el.classList.remove('editable-el', 'editable-selected');
    if (el._editHandler) {
      el.removeEventListener('click', el._editHandler);
      delete el._editHandler;
    }
  });
  if (editSelected) editSelected = null;
}

function onEditClick(e) {}

function openEditPanel(el) {
  let panel = document.getElementById('edit-panel');
  if (!panel) return;
  panel.style.display = 'flex';

  const key = el.dataset.edit;
  const type = el.dataset.editType || 'text';
  const label = el.dataset.editLabel || key;
  const currentValue = siteSettings[key] || el.textContent.trim();

  panel.innerHTML = `
    <div class="ep-header">
      <div class="ep-title">Editing: <span>${label}</span></div>
      <button class="ep-close" onclick="closeEditPanel()">✕</button>
    </div>
    <div class="ep-body">
      ${type === 'text' || type === 'html' ? `
        <div class="ep-field">
          <label class="ep-label">Content</label>
          <textarea class="ep-textarea" id="ep-content" rows="4">${currentValue}</textarea>
        </div>` : ''}
      ${type === 'src' ? `
        <div class="ep-field">
          <label class="ep-label">Image URL</label>
          <input class="ep-input" id="ep-content" value="${currentValue}" placeholder="https://..." />
          <div class="ep-hint">Paste a direct image URL</div>
        </div>` : ''}
      <div class="ep-field">
        <label class="ep-label">Text Color</label>
        <div class="ep-color-row">
          <input type="color" class="ep-colorpicker" id="ep-color" value="${rgbToHex(el.style.color) || '#f0fdf4'}" oninput="livePreviewColor(this.value)" />
          <input class="ep-input sm" id="ep-color-text" value="${el.style.color || ''}" placeholder="#4ade80" oninput="document.getElementById('ep-color').value=this.value;livePreviewColor(this.value)" />
        </div>
      </div>
      <div class="ep-field">
        <label class="ep-label">Font Size</label>
        <div class="ep-color-row">
          <input type="range" class="ep-range" id="ep-fontsize" min="10" max="120" value="${parseInt(getComputedStyle(el).fontSize)||16}" oninput="livePreviewFontSize(this.value)" />
          <span class="ep-range-val" id="ep-fontsize-val">${parseInt(getComputedStyle(el).fontSize)||16}px</span>
        </div>
      </div>
      <div class="ep-field">
        <label class="ep-label">Font Weight</label>
        <select class="ep-select" id="ep-fontweight" onchange="livePreviewFontWeight(this.value)">
          ${[400,500,600,700,800].map(w=>`<option value="${w}" ${parseInt(getComputedStyle(el).fontWeight||400)===w?'selected':''}>${w}</option>`).join('')}
        </select>
      </div>
      <div class="ep-field">
        <label class="ep-label">Background Color</label>
        <div class="ep-color-row">
          <input type="color" class="ep-colorpicker" id="ep-bg" value="${rgbToHex(el.style.backgroundColor)||'#050d08'}" oninput="livePreviewBg(this.value)" />
          <input class="ep-input sm" id="ep-bg-text" value="${el.style.backgroundColor||''}" placeholder="transparent" oninput="document.getElementById('ep-bg').value=this.value;livePreviewBg(this.value)" />
        </div>
      </div>
      <div class="ep-field">
        <label class="ep-label">Padding</label>
        <input class="ep-input" id="ep-padding" value="${el.style.padding||''}" placeholder="e.g. 12px 24px" oninput="livePreviewPadding(this.value)" />
      </div>
    </div>
    <div class="ep-footer">
      <div class="ep-theme-section">
        <div class="ep-theme-title">🎨 Global Theme Colors</div>
        <div class="ep-theme-grid">
          <div class="ep-theme-item">
            <label>Accent</label>
            <input type="color" class="ep-colorpicker sm" value="${siteSettings['--g']||'#4ade80'}" oninput="liveThemeColor('--g',this.value)" />
          </div>
          <div class="ep-theme-item">
            <label>Background</label>
            <input type="color" class="ep-colorpicker sm" value="${siteSettings['--bg']||'#050d08'}" oninput="liveThemeColor('--bg',this.value)" />
          </div>
          <div class="ep-theme-item">
            <label>Text</label>
            <input type="color" class="ep-colorpicker sm" value="${siteSettings['--w']||'#f0fdf4'}" oninput="liveThemeColor('--w',this.value)" />
          </div>
          <div class="ep-theme-item">
            <label>Muted</label>
            <input type="color" class="ep-colorpicker sm" value="${siteSettings['--gr']||'#86efac'}" oninput="liveThemeColor('--gr',this.value)" />
          </div>
        </div>
      </div>
      <div class="ep-btn-row">
        <button class="ep-btn-save" onclick="saveElementEdits()">💾 Save Changes</button>
        <button class="ep-btn-clear" onclick="clearElementStyles()">🗑 Reset Styles</button>
        <button class="ep-btn-cancel" onclick="closeEditPanel()">Cancel</button>
      </div>
    </div>
  `;
}

function livePreviewColor(v) { if (editSelected) { editSelected.style.color = v; document.getElementById('ep-color-text').value = v; const el = document.getElementById('ep-color'); if(el) el.dataset.dirty = '1'; } }
function livePreviewBg(v) { if (editSelected) { editSelected.style.backgroundColor = v; document.getElementById('ep-bg-text').value = v; const el = document.getElementById('ep-bg'); if(el) el.dataset.dirty = '1'; } }
function livePreviewFontSize(v) { if (editSelected) { editSelected.style.fontSize = v + 'px'; document.getElementById('ep-fontsize-val').textContent = v + 'px'; const el = document.getElementById('ep-fontsize'); if(el) el.dataset.dirty = '1'; } }
function livePreviewFontWeight(v) { if (editSelected) { editSelected.style.fontWeight = v; const el = document.getElementById('ep-fontweight'); if(el) el.dataset.dirty = '1'; } }
function livePreviewPadding(v) { if (editSelected) { editSelected.style.padding = v; const el = document.getElementById('ep-padding'); if(el) el.dataset.dirty = '1'; } }
function liveThemeColor(varName, val) {
  document.documentElement.style.setProperty(varName, val);
  siteSettings[varName] = val;
  siteSettings[varName + '__dirty'] = true;
}

async function saveElementEdits() {
  if (!editSelected) return;
  const key = editSelected.dataset.edit;
  const type = editSelected.dataset.editType || 'text';
  const contentEl = document.getElementById('ep-content');
  const saves = [];

  // Save content only
  if (contentEl) {
    const val = contentEl.value;
    if (type === 'text') editSelected.textContent = val;
    else if (type === 'html') editSelected.innerHTML = val;
    else if (type === 'src') editSelected.src = val;
    saves.push(saveSetting(key, val));
  }

  // Only save style fields if user explicitly changed them (tracked via data-dirty)
  const colorEl = document.getElementById('ep-color');
  const bgEl = document.getElementById('ep-bg');
  const fontSizeEl = document.getElementById('ep-fontsize');
  const fontWeightEl = document.getElementById('ep-fontweight');
  const paddingEl = document.getElementById('ep-padding');

  if (colorEl?.dataset.dirty) { editSelected.style.color = colorEl.value; saves.push(saveSetting(key + '__color', colorEl.value)); }
  if (bgEl?.dataset.dirty) { editSelected.style.backgroundColor = bgEl.value; saves.push(saveSetting(key + '__bg', bgEl.value)); }
  if (fontSizeEl?.dataset.dirty) { editSelected.style.fontSize = fontSizeEl.value + 'px'; saves.push(saveSetting(key + '__fontSize', fontSizeEl.value + 'px')); }
  if (fontWeightEl?.dataset.dirty) { editSelected.style.fontWeight = fontWeightEl.value; saves.push(saveSetting(key + '__fontWeight', fontWeightEl.value)); }
  if (paddingEl?.dataset.dirty) { editSelected.style.padding = paddingEl.value; saves.push(saveSetting(key + '__padding', paddingEl.value)); }

  // Save global theme vars only if they were changed via liveThemeColor
  ['--g','--bg','--w','--gr'].forEach(v => {
    if (siteSettings[v + '__dirty']) saves.push(saveSetting(v, siteSettings[v]));
  });

  await Promise.all(saves);
  // Re-render cards if a gamemode key was edited
  if (key && key.startsWith('gm-')) {
    if (typeof buildGmCards === 'function') { document.getElementById('cards-grid').innerHTML = ''; buildGmCards(); }
    if (typeof buildHomeCards === 'function') { document.getElementById('home-modes-grid').innerHTML = ''; buildHomeCards(); }
  }
  showEditorToast('✓ Changes saved!');
}

function closeEditPanel() {
  const panel = document.getElementById('edit-panel');
  if (panel) panel.style.display = 'none';
  if (editSelected) { editSelected.classList.remove('editable-selected'); editSelected = null; }
}

function injectEditorUI() {
  // Toolbar
  const toolbar = document.createElement('div');
  toolbar.id = 'edit-toolbar';
  toolbar.innerHTML = `
    <div class="et-logo">✏️ EDIT MODE</div>
    <div class="et-hint">Click any <span>highlighted</span> element · or use Quick Edit sections →</div>
    <div class="et-sections">
      <button class="et-sec-btn" onclick="openQuickEdit('server')">⚙️ Server</button>
      <button class="et-sec-btn" onclick="openQuickEdit('gamemodes')">🎮 Gamemodes</button>
      <button class="et-sec-btn" onclick="openQuickEdit('announcements')">📢 Announcements</button>
      <button class="et-sec-btn" onclick="openQuickEdit('theme')">🎨 Theme</button>
      <button class="et-sec-btn" onclick="openQuickEdit('footer')">🔗 Footer</button>
    </div>
    <button class="et-exit" onclick="toggleEditMode()">✕ Exit</button>
  `;
  document.body.appendChild(toolbar);

  // Side panel
  const panel = document.createElement('div');
  panel.id = 'edit-panel';
  panel.style.display = 'none';
  document.body.appendChild(panel);

  // CSS
  const style = document.createElement('style');
  style.textContent = `
    /* Editable highlights */
    body.edit-mode-active [data-edit] { outline: 2px dashed rgba(74,222,128,.5) !important; cursor: pointer !important; position: relative; }
    body.edit-mode-active [data-edit]:hover { outline: 2px solid #4ade80 !important; background: rgba(74,222,128,.05) !important; }
    body.edit-mode-active .editable-selected { outline: 2px solid #4ade80 !important; box-shadow: 0 0 0 4px rgba(74,222,128,.15) !important; }

    /* Toolbar */
    #edit-toolbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 99999;
      display: flex; align-items: center; gap: 16px; padding: 10px 24px;
      background: #030a05; border-bottom: 2px solid #4ade80;
      box-shadow: 0 4px 30px rgba(74,222,128,.2);
      font-family: 'Barlow', sans-serif;
    }
    #edit-toolbar ~ * { margin-top: 48px; }
    .et-logo { font-weight: 800; font-size: 13px; letter-spacing: 2px; color: #4ade80; }
    .et-hint { font-size: 12px; color: #86efac; opacity: .7; flex: 1; }
    .et-hint span { color: #4ade80; font-weight: 700; }
    .et-exit { background: rgba(248,113,113,.1); border: 1px solid rgba(248,113,113,.4); color: #fca5a5; padding: 6px 16px; border-radius: 4px; font-size: 12px; font-weight: 700; cursor: pointer; letter-spacing: 1px; }
    .et-exit:hover { background: rgba(248,113,113,.2); }

    /* Edit panel */
    #edit-panel {
      position: fixed; right: 0; top: 0; bottom: 0; z-index: 99998;
      width: 340px; background: #050d08; border-left: 1px solid rgba(74,222,128,.2);
      box-shadow: -8px 0 40px rgba(0,0,0,.6);
      display: flex; flex-direction: column; font-family: 'Barlow', sans-serif;
      overflow: hidden;
    }
    .ep-header { display: flex; align-items: center; padding: 16px 20px; border-bottom: 1px solid rgba(74,222,128,.1); background: rgba(0,0,0,.3); }
    .ep-title { flex: 1; font-size: 13px; font-weight: 700; color: #86efac; letter-spacing: 1px; text-transform: uppercase; }
    .ep-title span { color: #4ade80; }
    .ep-close { background: none; border: none; color: #86efac; font-size: 18px; cursor: pointer; opacity: .5; }
    .ep-close:hover { opacity: 1; color: #fca5a5; }
    .ep-body { flex: 1; overflow-y: auto; padding: 16px 20px; display: flex; flex-direction: column; gap: 14px; }
    .ep-field { display: flex; flex-direction: column; gap: 6px; }
    .ep-label { font-size: 11px; font-weight: 700; color: #86efac; opacity: .6; letter-spacing: 1px; text-transform: uppercase; }
    .ep-textarea { background: rgba(0,0,0,.5); border: 1px solid rgba(74,222,128,.15); border-radius: 4px; padding: 10px 12px; color: #f0fdf4; font-family: 'Barlow', sans-serif; font-size: 13px; resize: vertical; outline: none; }
    .ep-textarea:focus { border-color: #4ade80; }
    .ep-input { background: rgba(0,0,0,.5); border: 1px solid rgba(74,222,128,.15); border-radius: 4px; padding: 8px 12px; color: #f0fdf4; font-family: 'Barlow', sans-serif; font-size: 13px; outline: none; width: 100%; }
    .ep-input.sm { width: 120px; }
    .ep-input:focus { border-color: #4ade80; }
    .ep-hint { font-size: 11px; color: #86efac; opacity: .4; }
    .ep-select { background: rgba(0,0,0,.5); border: 1px solid rgba(74,222,128,.15); border-radius: 4px; padding: 8px 12px; color: #f0fdf4; font-family: 'Barlow', sans-serif; font-size: 13px; outline: none; width: 100%; }
    .ep-color-row { display: flex; align-items: center; gap: 10px; }
    .ep-colorpicker { width: 40px; height: 36px; border: 1px solid rgba(74,222,128,.2); border-radius: 4px; cursor: pointer; background: none; padding: 2px; }
    .ep-colorpicker.sm { width: 32px; height: 28px; }
    .ep-range { flex: 1; accent-color: #4ade80; }
    .ep-range-val { font-size: 12px; color: #4ade80; font-weight: 700; min-width: 36px; }
    .ep-footer { border-top: 1px solid rgba(74,222,128,.1); padding: 16px 20px; display: flex; flex-direction: column; gap: 14px; background: rgba(0,0,0,.2); }
    .ep-theme-section { display: flex; flex-direction: column; gap: 10px; }
    .ep-theme-title { font-size: 11px; font-weight: 700; color: #86efac; opacity: .6; letter-spacing: 1px; text-transform: uppercase; }
    .ep-theme-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .ep-theme-item { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #86efac; }
    .ep-theme-item label { font-size: 11px; opacity: .7; flex: 1; }
    .ep-btn-row { display: flex; gap: 10px; }
    .ep-btn-save { flex: 1; background: #4ade80; color: #050d08; border: none; padding: 10px; border-radius: 4px; font-weight: 800; font-size: 13px; letter-spacing: 1px; cursor: pointer; }
    .ep-btn-save:hover { opacity: .88; }
    .ep-btn-cancel { background: rgba(74,222,128,.06); border: 1px solid rgba(74,222,128,.15); color: #86efac; padding: 10px 16px; border-radius: 4px; font-size: 13px; cursor: pointer; }
    .ep-btn-clear { background: rgba(248,113,113,.07); border: 1px solid rgba(248,113,113,.2); color: #fca5a5; padding: 10px 16px; border-radius: 4px; font-size: 13px; cursor: pointer; }
    .ep-btn-clear:hover { background: rgba(248,113,113,.15); }
    .ep-btn-cancel:hover { border-color: rgba(74,222,128,.3); }

    /* Editor toast */
    #edit-toast { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 99999; background: #0a1a0f; border: 1px solid rgba(74,222,128,.3); color: #4ade80; padding: 10px 20px; border-radius: 6px; font-size: 13px; font-weight: 700; font-family: 'Barlow', sans-serif; pointer-events: none; opacity: 0; transition: opacity .3s; }
    #edit-toast.show { opacity: 1; }

    /* nav edit mode button */
    .nav-dd-editmode { color: #4ade80 !important; }

    /* Toolbar section buttons */
    .et-sections { display: flex; gap: 6px; flex: 1; justify-content: center; flex-wrap: wrap; }
    .et-sec-btn { background: rgba(74,222,128,.08); border: 1px solid rgba(74,222,128,.2); color: #86efac; padding: 5px 12px; border-radius: 4px; font-size: 11px; font-weight: 700; letter-spacing: .5px; cursor: pointer; transition: all .2s; font-family: 'Barlow', sans-serif; }
    .et-sec-btn:hover { border-color: #4ade80; color: #4ade80; background: rgba(74,222,128,.15); }

    /* Quick edit panel extras */
    .ep-gm-group { display: flex; flex-direction: column; gap: 10px; }
    .ep-gm-title { font-size: 13px; font-weight: 800; color: #4ade80; letter-spacing: 1px; padding: 4px 0; }
    .ep-divider { height: 1px; background: rgba(74,222,128,.1); margin: 8px 0; }
  `;
  document.head.appendChild(style);

  // Toast
  const toast = document.createElement('div');
  toast.id = 'edit-toast';
  document.body.appendChild(toast);
}

async function clearElementStyles() {
  if (!editSelected) return;
  const key = editSelected.dataset.edit;
  // Remove inline styles
  editSelected.style.color = '';
  editSelected.style.backgroundColor = '';
  editSelected.style.fontSize = '';
  editSelected.style.fontWeight = '';
  editSelected.style.padding = '';
  // Delete from Supabase
  const styleKeys = ['__color','__bg','__fontSize','__fontWeight','__padding'];
  await Promise.all(styleKeys.map(suffix =>
    sb.from('site_settings').delete().eq('key', key + suffix)
  ));
  styleKeys.forEach(suffix => delete siteSettings[key + suffix]);
  showEditorToast('✓ Styles reset!');
}

function reattachEditListeners() {
  if (!editModeActive) return;
  attachEditableClicks();
}

function showEditorToast(msg) {
  let t = document.getElementById('edit-toast');
  if (!t) { t = document.createElement('div'); t.id = 'edit-toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function rgbToHex(rgb) {
  if (!rgb || rgb.startsWith('#')) return rgb || '';
  const m = rgb.match(/\d+/g);
  if (!m || m.length < 3) return '';
  return '#' + m.slice(0,3).map(x => parseInt(x).toString(16).padStart(2,'0')).join('');
}

// Load site settings on init
document.addEventListener('DOMContentLoaded', loadSiteSettings);

// Make gamemode data editable via siteSettings


// Make announcements/changelog editable via siteSettings
function getAnnouncements() {
  const stored = siteSettings['announcements-json'];
  if (stored) { try { return JSON.parse(stored); } catch(e) {} }
  return ANNOUNCEMENTS;
}
function getChangelog() {
  const stored = siteSettings['changelog-json'];
  if (stored) { try { return JSON.parse(stored); } catch(e) {} }
  return CHANGELOG;
}

// ── QUICK EDIT SECTIONS ──────────────────────────────────
async function openQuickEdit(section) {
  let panel = document.getElementById('edit-panel');
  if (!panel) injectEditorUI();
  panel = document.getElementById('edit-panel');
  panel.style.display = 'flex';
  if (editSelected) { editSelected.classList.remove('editable-selected'); editSelected = null; }

  const gms = typeof getGMData !== 'undefined' ? getGMData() : MODES;

  const sections = {
    server: `
      <div class="ep-header"><div class="ep-title">⚙️ <span>Server Settings</span></div><button class="ep-close" onclick="closeEditPanel()">✕</button></div>
      <div class="ep-body">
        <div class="ep-field"><label class="ep-label">Server IP</label><input class="ep-input" id="qe-ip" value="${siteSettings['ip'] || 'play.glimzomc.fun'}" /></div>
        <div class="ep-field"><label class="ep-label">Discord Link</label><input class="ep-input" id="qe-discord" value="${siteSettings['discord'] || 'https://dsc.gg/glimzomc'}" /></div>
        <div class="ep-field"><label class="ep-label">Status Badge Text</label><input class="ep-input" id="qe-status" value="${siteSettings['status-text'] || 'Server Online — Java 1.8–1.21'}" /></div>
        <div class="ep-field"><label class="ep-label">Browser Tab Title</label><input class="ep-input" id="qe-title" value="${siteSettings['page-title'] || document.title}" /></div>
      </div>
      <div class="ep-footer"><div class="ep-btn-row">
        <button class="ep-btn-save" onclick="saveQuickEdit('server')">💾 Save</button>
        <button class="ep-btn-cancel" onclick="closeEditPanel()">Cancel</button>
      </div></div>`,

    gamemodes: `
      <div class="ep-header"><div class="ep-title">🎮 <span>Gamemodes</span></div><button class="ep-close" onclick="closeEditPanel()">✕</button></div>
      <div class="ep-body">
        ${gms.map(m => `
          <div class="ep-gm-group">
            <div class="ep-gm-title">${m.emoji} ${m.name}</div>
            <div class="ep-field"><label class="ep-label">Name</label><input class="ep-input" id="qe-gm-${m.id}-name" value="${siteSettings['gm-'+m.id+'-name'] || m.name}" /></div>
            <div class="ep-field"><label class="ep-label">Tag</label><input class="ep-input" id="qe-gm-${m.id}-tag" value="${siteSettings['gm-'+m.id+'-tag'] || m.tag}" /></div>
            <div class="ep-field"><label class="ep-label">Card Description</label><textarea class="ep-textarea" id="qe-gm-${m.id}-desc" rows="2">${siteSettings['gm-'+m.id+'-desc'] || m.desc}</textarea></div>
            <div class="ep-field"><label class="ep-label">Overview Title</label><input class="ep-input" id="qe-gm-${m.id}-ovTitle" value="${siteSettings['gm-'+m.id+'-ovTitle'] || m.overviewTitle || ''}" /></div>
            <div class="ep-field"><label class="ep-label">Overview Text</label><textarea class="ep-textarea" id="qe-gm-${m.id}-ovText" rows="3">${siteSettings['gm-'+m.id+'-ovText'] || m.overviewText || ''}</textarea></div>
          </div>`).join('<div class="ep-divider"></div>')}
      </div>
      <div class="ep-footer"><div class="ep-btn-row">
        <button class="ep-btn-save" onclick="saveQuickEdit('gamemodes')">💾 Save All</button>
        <button class="ep-btn-cancel" onclick="closeEditPanel()">Cancel</button>
      </div></div>`,

    announcements: `
      <div class="ep-header"><div class="ep-title">📢 <span>Announcements & Changelog</span></div><button class="ep-close" onclick="closeEditPanel()">✕</button></div>
      <div class="ep-body">
        <div class="ep-field">
          <label class="ep-label">Announcements (JSON)</label>
          <div class="ep-hint">Array of {badge, title, desc, date}</div>
          <textarea class="ep-textarea" id="qe-announcements" rows="10">${siteSettings['announcements-json'] || JSON.stringify(ANNOUNCEMENTS, null, 2)}</textarea>
        </div>
        <div class="ep-field">
          <label class="ep-label">Changelog (JSON)</label>
          <div class="ep-hint">Array of {ver, title, date}</div>
          <textarea class="ep-textarea" id="qe-changelog" rows="8">${siteSettings['changelog-json'] || JSON.stringify(CHANGELOG, null, 2)}</textarea>
        </div>
      </div>
      <div class="ep-footer"><div class="ep-btn-row">
        <button class="ep-btn-save" onclick="saveQuickEdit('announcements')">💾 Save</button>
        <button class="ep-btn-cancel" onclick="closeEditPanel()">Cancel</button>
      </div></div>`,

    theme: `
      <div class="ep-header"><div class="ep-title">🎨 <span>Global Theme</span></div><button class="ep-close" onclick="closeEditPanel()">✕</button></div>
      <div class="ep-body">
        <div class="ep-field"><label class="ep-label">Accent Color (buttons, highlights)</label>
          <div class="ep-color-row"><input type="color" class="ep-colorpicker" id="qe-g" value="${siteSettings['--g'] || '#4ade80'}" oninput="liveThemeColor('--g',this.value)" /><span class="ep-range-val" id="qe-g-val">${siteSettings['--g'] || '#4ade80'}</span></div></div>
        <div class="ep-field"><label class="ep-label">Page Background</label>
          <div class="ep-color-row"><input type="color" class="ep-colorpicker" id="qe-bg" value="${siteSettings['--bg'] || '#050d08'}" oninput="liveThemeColor('--bg',this.value)" /><span class="ep-range-val">${siteSettings['--bg'] || '#050d08'}</span></div></div>
        <div class="ep-field"><label class="ep-label">Text Color</label>
          <div class="ep-color-row"><input type="color" class="ep-colorpicker" id="qe-w" value="${siteSettings['--w'] || '#f0fdf4'}" oninput="liveThemeColor('--w',this.value)" /><span class="ep-range-val">${siteSettings['--w'] || '#f0fdf4'}</span></div></div>
        <div class="ep-field"><label class="ep-label">Muted Text Color</label>
          <div class="ep-color-row"><input type="color" class="ep-colorpicker" id="qe-gr" value="${siteSettings['--gr'] || '#86efac'}" oninput="liveThemeColor('--gr',this.value)" /><span class="ep-range-val">${siteSettings['--gr'] || '#86efac'}</span></div></div>
        <div class="ep-field"><label class="ep-label">Card / Section Background</label>
          <div class="ep-color-row"><input type="color" class="ep-colorpicker" id="qe-bgc" value="${siteSettings['--bgc'] || '#0a1a0f'}" oninput="liveThemeColor('--bgc',this.value)" /><span class="ep-range-val">${siteSettings['--bgc'] || '#0a1a0f'}</span></div></div>
        <div class="ep-field"><label class="ep-label">Border / Element Background</label>
          <div class="ep-color-row"><input type="color" class="ep-colorpicker" id="qe-bge" value="${siteSettings['--bge'] || '#0f2318'}" oninput="liveThemeColor('--bge',this.value)" /><span class="ep-range-val">${siteSettings['--bge'] || '#0f2318'}</span></div></div>
      </div>
      <div class="ep-footer"><div class="ep-btn-row">
        <button class="ep-btn-save" onclick="saveQuickEdit('theme')">💾 Save Theme</button>
        <button class="ep-btn-cancel" onclick="closeEditPanel()">Cancel</button>
      </div></div>`,

    footer: `
      <div class="ep-header"><div class="ep-title">🔗 <span>Footer</span></div><button class="ep-close" onclick="closeEditPanel()">✕</button></div>
      <div class="ep-body">
        <div class="ep-field"><label class="ep-label">Logo Text</label><input class="ep-input" id="qe-footer-logo" value="${siteSettings['footer-logo'] || 'GlimzoMC'}" /></div>
        <div class="ep-field"><label class="ep-label">Tagline</label><textarea class="ep-textarea" id="qe-footer-tagline" rows="2">${siteSettings['footer-tagline'] || 'A competitive Minecraft network.\nBuilt for players who want to win.'}</textarea></div>
        <div class="ep-field"><label class="ep-label">Copyright Text</label><input class="ep-input" id="qe-footer-copy" value="${siteSettings['footer-copy'] || '© 2026 GlimzoMC. All rights reserved.'}" /></div>
        <div class="ep-field"><label class="ep-label">Footer Server IP</label><input class="ep-input" id="qe-footer-ip" value="${siteSettings['footer-ip'] || 'play.glimzomc.fun'}" /></div>
        <div class="ep-field"><label class="ep-label">Col 1 Title</label><input class="ep-input" id="qe-fc1" value="${siteSettings['footer-col1-title'] || 'Play'}" /></div>
        <div class="ep-field"><label class="ep-label">Col 2 Title</label><input class="ep-input" id="qe-fc2" value="${siteSettings['footer-col2-title'] || 'Community'}" /></div>
        <div class="ep-field"><label class="ep-label">Col 3 Title</label><input class="ep-input" id="qe-fc3" value="${siteSettings['footer-col3-title'] || 'Server'}" /></div>
      </div>
      <div class="ep-footer"><div class="ep-btn-row">
        <button class="ep-btn-save" onclick="saveQuickEdit('footer')">💾 Save</button>
        <button class="ep-btn-cancel" onclick="closeEditPanel()">Cancel</button>
      </div></div>`,
  };

  panel.innerHTML = sections[section] || '';
}

async function saveQuickEdit(section) {
  const saves = [];
  const apply = (key, val) => { siteSettings[key] = val; saves.push(saveSetting(key, val)); };
  const v = id => document.getElementById(id)?.value;

  if (section === 'server') {
    apply('ip', v('qe-ip'));
    apply('discord', v('qe-discord'));
    apply('status-text', v('qe-status'));
    apply('page-title', v('qe-title'));
    // Live-apply
    const stEl = document.getElementById('status-text');
    if (stEl) stEl.textContent = v('qe-status');
    document.querySelectorAll('.btn-ip, [data-edit="footer-ip"]').forEach(el => el.textContent = v('qe-ip'));
    document.querySelectorAll('[href*="dsc.gg"]').forEach(el => el.href = v('qe-discord'));
    if (v('qe-title')) document.title = v('qe-title');
  }

  if (section === 'gamemodes') {
    const gms = typeof getGMData !== 'undefined' ? getGMData() : MODES;
    gms.forEach(m => {
      ['name','tag','desc','ovTitle','ovText'].forEach(field => {
        const val = v(`qe-gm-${m.id}-${field}`);
        if (val !== undefined) apply(`gm-${m.id}-${field}`, val);
      });
    });
    // Re-render cards
    if (typeof renderGamemodeCards === 'function') renderGamemodeCards();
  }

  if (section === 'announcements') {
    const aVal = v('qe-announcements');
    const cVal = v('qe-changelog');
    try { JSON.parse(aVal); apply('announcements-json', aVal); } catch(e) { return showEditorToast('❌ Announcements JSON is invalid'); }
    try { JSON.parse(cVal); apply('changelog-json', cVal); } catch(e) { return showEditorToast('❌ Changelog JSON is invalid'); }
    if (typeof buildAnnouncements === 'function') buildAnnouncements();
    if (typeof buildChangelog === 'function') buildChangelog();
  }

  if (section === 'theme') {
    ['--g','--bg','--w','--gr','--bgc','--bge'].forEach(varName => {
      const id = 'qe-' + varName.replace('--','');
      const val = v(id);
      if (val) { apply(varName, val); document.documentElement.style.setProperty(varName, val); }
    });
  }

  if (section === 'footer') {
    const fields = [
      ['footer-logo','qe-footer-logo'],['footer-tagline','qe-footer-tagline'],
      ['footer-copy','qe-footer-copy'],['footer-ip','qe-footer-ip'],
      ['footer-col1-title','qe-fc1'],['footer-col2-title','qe-fc2'],['footer-col3-title','qe-fc3'],
    ];
    fields.forEach(([key, elId]) => {
      const val = v(elId);
      if (val) {
        apply(key, val);
        const el = document.querySelector(`[data-edit="${key}"]`);
        if (el) el.textContent = val;
      }
    });
  }

  await Promise.all(saves);
  showEditorToast('✓ Saved!');
}
