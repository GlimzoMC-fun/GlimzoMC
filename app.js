// app.js — GlimzoMC
'use strict';

const CONFIG = {
  ip:      'play.glimzomc.fun',
  discord: 'https://discord.gg/AgxNjpqwDD',
};

// ═══════════════════════════════════════════════════════
//  GAMEMODE DATA
// ═══════════════════════════════════════════════════════
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
    why: [
      'Low-ping servers optimized for responsive PvP combat.',
      'Anti-cheat running 24/7 so every win is legitimate.',
      'Active ranked scene with real competition.',
      'Seasonal resets keep the leaderboard fresh.',
    ],
    stats: [
      { label: 'Team Size',    val: 'N/A' },
      { label: 'Match Length', val: 'N/A' },
      { label: 'Mode Type',    val: 'N/A' },
      { label: 'Status',       val: 'N/A' },
    ],
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
      { icon: '⚡', title: 'Instant Respawn',      desc: "Die and you're back in seconds. No lobby waiting, no downtime." },
      { icon: '🔥', title: 'Kill Streaks',          desc: 'Chain kills for multipliers and streak rewards. Keep fighting to keep your bonus.' },
      { icon: '🏆', title: 'Match Leaderboard',    desc: 'Live in-match scoreboard with kills, deaths, and streaks.' },
    ],
    why: [
      'Fastest gameplay loop on the server — perfect for warmup.',
      "Unique map you won't find anywhere else.",
      'Streak system adds a meta layer beyond raw aim.',
      'Great for practicing PvP mechanics at high intensity.',
    ],
    stats: [
      { label: 'Players',      val: 'N/A' },
      { label: 'Match Length', val: 'N/A' },
      { label: 'Mode Type',    val: 'N/A' },
      { label: 'Status',       val: 'N/A' },
    ],
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
      { icon: '🎯', title: 'Bounty Targets',           desc: 'Players on long streaks get marked. Taking them out earns bonus score for everyone.' },
      { icon: '🗺️', title: 'Open Combat Maps',         desc: 'Larger maps with varied terrain encourage movement-based play rather than camping.' },
      { icon: '📊', title: 'Season Rankings',          desc: 'Top Rampage scores are tracked seasonally. Compete for a spot on the all-time board.' },
    ],
    why: [
      'High-skill ceiling — streak management separates good from great.',
      'Bounty system creates emergent clutch moments.',
      'Seasonal rankings give long-term goals.',
      'Map variety prevents stale gameplay loops.',
    ],
    stats: [
      { label: 'Players',      val: 'N/A' },
      { label: 'Match Length', val: 'N/A' },
      { label: 'Mode Type',    val: 'N/A' },
      { label: 'Status',       val: 'N/A' },
    ],
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
      { icon: '👥', title: 'Squad System',       desc: 'Form squads within your team for coordinated pushes and shared respawn locations.' },
      { icon: '⚔️', title: 'Class Roles',        desc: 'Choose a role — assault, support, or sniper — each with different loadout advantages.' },
      { icon: '🗺️', title: 'Large Custom Maps',  desc: 'Expansive maps with open fields, bridges, chokepoints, and fortified positions.' },
    ],
    why: [
      'The only large-scale team mode designed for coordination.',
      'Roles add depth without complexity.',
      'Respawn system creates real momentum swings.',
      'Discord voice makes coordination seamless.',
    ],
    stats: [
      { label: 'Team Size',    val: 'N/A' },
      { label: 'Match Length', val: 'N/A' },
      { label: 'Mode Type',    val: 'N/A' },
      { label: 'Status',       val: 'N/A' },
    ],
  },
];

// ═══════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════
const PAGE_SLUGS = { home: '/', gamemodes: '/gamemodes/', community: '/community/', login: '/login/', register: '/register/' };
const SLUG_TO_PAGE = { '/': 'home', '/gamemodes/': 'gamemodes', '/community/': 'community', '/login/': 'login', '/register/': 'register' };

function navigate(page, pushHistory = true) {
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  document.querySelectorAll('.nav-links a[data-nav]').forEach((a) => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'instant' });

  // Update the URL without reloading
  if (pushHistory) {
    const slug = PAGE_SLUGS[page] || '/';
    history.pushState({ page }, '', slug);
  }

  if (page === 'gamemodes') {
    showGmList();
  }

  if (page === 'community') {
    if (sb) loadForumData();
  }

  if (page === 'login') {
    // clear fields and errors
    const uEl = document.getElementById('login-username');
    const pEl = document.getElementById('login-pw');
    const eEl = document.getElementById('login-error');
    if (uEl) uEl.value = '';
    if (pEl) pEl.value = '';
    if (eEl) { eEl.textContent = ''; eEl.classList.remove('show'); }
  }

  if (page === 'register') {
    // clear fields, errors, success
    ['reg-username','reg-email','reg-pw','reg-pw2'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
    const eEl = document.getElementById('reg-error');
    const sEl = document.getElementById('reg-success');
    if (eEl) { eEl.textContent = ''; eEl.classList.remove('show'); }
    if (sEl) { sEl.textContent = ''; sEl.classList.remove('show'); }
    const hint = document.getElementById('reg-username-hint');
    if (hint) { hint.textContent = 'Letters, numbers and underscores only.'; hint.className = 'auth-hint'; hint.style.color = ''; }
    const fill = document.getElementById('reg-pw-strength-fill');
    if (fill) { fill.style.width = '0%'; }
    regUsernameOk = false;
    const btn = document.getElementById('reg-btn');
    if (btn) { btn.disabled = false; btn.textContent = 'Register'; }
  }
}

// Wire nav clicks (covers nav, logo, and inline auth links)
document.querySelectorAll('[data-nav]').forEach((el) => {
  el.addEventListener('click', () => navigate(el.dataset.nav));
});

// ═══════════════════════════════════════════════════════
//  HOME PREVIEW CARDS
// ═══════════════════════════════════════════════════════
function buildHomeCards() {
  const grid = document.getElementById('home-modes-grid');
  if (!grid) return;

  MODES.forEach((m) => {
    const card = document.createElement('div');
    card.className = 'gm-prev-card';
    card.innerHTML = `
      <span class="gm-prev-emoji">${m.emoji}</span>
      <div class="gm-prev-tag">${m.tag}</div>
      <div class="gm-prev-name">${m.name}</div>
      <div class="gm-prev-desc">${m.desc}</div>
      <span class="gm-prev-arrow">→</span>`;
    card.addEventListener('click', () => {
      navigate('gamemodes');
      setTimeout(() => showDetail(m), 50);
    });
    grid.appendChild(card);
  });

  observeFadeIn(grid.querySelectorAll('.gm-prev-card'));
}

// ═══════════════════════════════════════════════════════
//  GAMEMODES PAGE CARDS
// ═══════════════════════════════════════════════════════
function buildGmCards() {
  const grid = document.getElementById('cards-grid');

  MODES.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'gmode-card';
    card.style.cssText = `transition:opacity .5s ease ${i * 0.07}s,transform .5s ease ${i * 0.07}s,border-color .25s,box-shadow .25s;`;
    card.innerHTML = `
      <div class="card-thumb">
        <div class="card-thumb-bg" style="background:${m.bg}"></div>
        <div class="card-thumb-overlay"></div>
        <div class="card-thumb-icon">${m.emoji}</div>
        <div class="card-tag-pill">${m.tag}</div>
      </div>
      <div class="card-body">
        <div class="card-name">${m.name}</div>
        <div class="card-desc">${m.desc}</div>
        <div class="card-footer">
          <div style="display:flex;gap:8px;">${m.pills.slice(0, 2).map((p) => `<span class="meta-pill">${p}</span>`).join('')}</div>
          <span class="card-cta-lbl">Learn More →</span>
        </div>
      </div>`;
    card.addEventListener('click', () => showDetail(m));
    grid.appendChild(card);
  });

  // Coming soon
  const coming = document.createElement('div');
  coming.className = 'gmode-card coming-card';
  coming.innerHTML = `
    <div class="card-thumb">
      <div class="card-thumb-bg" style="background:linear-gradient(135deg,#0a1a0f,#050d08)"></div>
      <div class="card-thumb-overlay"></div>
      <div class="card-thumb-icon">🔒</div>
      <div class="card-tag-pill">Coming Soon</div>
    </div>
    <div class="card-body">
      <div class="card-name">??? Mode</div>
      <div class="card-desc">Something new is in development. Follow our Discord for announcements.</div>
      <div class="card-footer"><span class="meta-pill">TBA</span></div>
    </div>`;
  grid.appendChild(coming);

  // Use IntersectionObserver so cards fade in when they actually become visible
  observeFadeIn(grid.querySelectorAll('.gmode-card:not(.coming-card)'));
}

// ═══════════════════════════════════════════════════════
//  GAMEMODE DETAIL
// ═══════════════════════════════════════════════════════
function showDetail(m) {
  document.getElementById('gm-list-wrap').style.display   = 'none';
  document.getElementById('gm-detail-wrap').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'instant' });

  document.getElementById('d-bg').style.background = m.bg;

  const iconBox = document.getElementById('d-icon');
  iconBox.textContent = m.emoji;
  iconBox.style.cssText = `width:110px;height:110px;border-radius:20px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:60px;background:${m.bg};border:1px solid ${m.color}44;box-shadow:0 8px 40px ${m.color}30;`;

  document.getElementById('d-tag').textContent     = `⬤ ${m.tag}`;
  document.getElementById('d-tag').style.color     = m.color;
  document.getElementById('d-name').textContent    = m.name;
  document.getElementById('d-tagline').textContent = m.overviewTitle;
  document.getElementById('d-pills').innerHTML     = m.pills.map((p) => `<span class="detail-pill">${p}</span>`).join('');

  document.getElementById('d-main').innerHTML = `
    <div class="ds-section">
      <div class="ds-label">Overview</div>
      <div class="ds-title">What It Is</div>
      <p class="ds-text">${m.overviewText}</p>
    </div>
    <div class="ds-section">
      <div class="ds-label">Features</div>
      <div class="ds-title">What Makes It Unique</div>
      <div class="features-list">
        ${m.features.map((f) => `
          <div class="feature-row">
            <div class="feature-ico" style="background:${m.color}18;">${f.icon}</div>
            <div class="feature-text"><h4>${f.title}</h4><p>${f.desc}</p></div>
          </div>`).join('')}
      </div>
    </div>
    <div class="ds-section">
      <div class="ds-label">Why GlimzoMC</div>
      <div class="ds-title">Why Play This Here</div>
      <div class="why-list">
        ${m.why.map((w) => `
          <div class="why-row">
            <span class="why-check" style="color:${m.color}">✓</span>
            <span>${w}</span>
          </div>`).join('')}
      </div>
    </div>`;

  document.getElementById('d-sidebar').innerHTML = `
    <div class="sidebar-card">
      <h3>Mode Info</h3>
      ${m.stats.map((s, i) => `
        <div class="stat-row" style="${i === m.stats.length - 1 ? 'border-bottom:none;padding-bottom:0;' : ''}">
          <span class="stat-label">${s.label}</span>
          <span style="font-weight:700;color:${m.color};">${s.val}</span>
        </div>`).join('')}
    </div>
    <div class="sidebar-card">
      <h3>Screenshots</h3>
      <div class="ss-placeholder"><span style="font-size:24px;">🖼</span><span>Screenshot coming soon</span></div>
      <div class="ss-placeholder"><span style="font-size:24px;">🖼</span><span>Screenshot coming soon</span></div>
    </div>`;
}

function showGmList() {
  document.getElementById('gm-list-wrap').style.display   = 'block';
  document.getElementById('gm-detail-wrap').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'instant' });
}

document.getElementById('back-btn').addEventListener('click', showGmList);

// ═══════════════════════════════════════════════════════
//  COPY IP
// ═══════════════════════════════════════════════════════
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

// ═══════════════════════════════════════════════════════
//  SEARCH
// ═══════════════════════════════════════════════════════
function openSearch() {
  document.getElementById('search-overlay').classList.add('active');
  setTimeout(() => document.getElementById('searchOverlayInput').focus(), 50);
}
function closeSearch() {
  document.getElementById('search-overlay').classList.remove('active');
}

document.getElementById('navSearchInput').addEventListener('click', openSearch);
document.getElementById('searchClose').addEventListener('click', closeSearch);
document.getElementById('search-overlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('search-overlay')) closeSearch();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSearch(); });

// ═══════════════════════════════════════════════════════
//  SCROLL REVEAL
// ═══════════════════════════════════════════════════════
function observeFadeIn(els) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  els.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease, border-color .25s, background .25s, box-shadow .25s';
    obs.observe(el);
  });
}

observeFadeIn(document.querySelectorAll('.why-item, .feat-item'));

// ═══════════════════════════════════════════════════════
//  CONTENT DATA — edit these to update the site
// ═══════════════════════════════════════════════════════
const ANNOUNCEMENTS = [
  {
    badge: 'new',
    title: 'GlimzoMC is now in Early Access!',
    desc: 'The server is officially open. Be one of the first players to join and help shape the competitive meta.',
    date: 'April 2025',
  },
  {
    badge: 'update',
    title: 'BedWars — First Map Released',
    desc: 'Our first custom BedWars map is live. Hand-crafted with balanced resource points and clean mid design.',
    date: 'April 2025',
  },
  {
    badge: 'update',
    title: 'Clashbox Arena Now Open',
    desc: 'The signature close-quarters arena mode is ready. Drop in, chain kills, and climb the match leaderboard.',
    date: 'April 2025',
  },
  {
    badge: 'hotfix',
    title: 'Anti-Cheat Improvements',
    desc: 'Updated detection systems for more accurate flagging. False positives have been significantly reduced.',
    date: 'April 2025',
  },
];

const EVENTS = [
  {
    emoji: '🏆',
    name: 'Launch Weekend Tournament',
    meta: 'BedWars · All skill levels welcome',
    status: 'live',
  },
  {
    emoji: '⚔️',
    name: 'Clashbox Kill Race',
    meta: 'Most kills in 1 hour wins',
    status: 'live',
  },
  {
    emoji: '🌟',
    name: 'Ranked Season 1',
    meta: 'ELO ladders open soon',
    status: 'soon',
  },
];

const CHANGELOG = [
  { ver: 'v0.3', title: 'Anti-cheat pass + performance fixes', date: 'Apr 2025' },
  { ver: 'v0.2', title: 'Clashbox arena released', date: 'Apr 2025' },
  { ver: 'v0.1', title: 'Server launch — BedWars live', date: 'Apr 2025' },
];

// ═══════════════════════════════════════════════════════
//  RENDER CONTENT
// ═══════════════════════════════════════════════════════
function buildAnnouncements() {
  const list = document.getElementById('announce-list');
  if (!list) return;
  list.innerHTML = ANNOUNCEMENTS.map((a) => `
    <div class="announce-card">
      <span class="ann-badge ${a.badge}">${a.badge}</span>
      <div class="ann-content">
        <div class="ann-title">${a.title}</div>
        <div class="ann-desc">${a.desc}</div>
        <div class="ann-date">${a.date}</div>
      </div>
    </div>`).join('');
}

function buildEvents() {
  const list = document.getElementById('events-list');
  if (!list) return;
  list.innerHTML = EVENTS.map((e) => `
    <div class="event-card">
      <span class="event-emoji">${e.emoji}</span>
      <div class="event-info">
        <div class="event-name">${e.name}</div>
        <div class="event-meta">${e.meta}</div>
      </div>
      <span class="event-status ${e.status}">${e.status === 'live' ? '● Live' : '◌ Soon'}</span>
    </div>`).join('');
}

function buildChangelog() {
  const list = document.getElementById('changelog-list');
  if (!list) return;
  list.innerHTML = CHANGELOG.map((c) => `
    <div class="changelog-item">
      <span class="cl-ver">${c.ver}</span>
      <div class="cl-text">
        <div class="cl-title">${c.title}</div>
        <div class="cl-date">${c.date}</div>
      </div>
    </div>`).join('');
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
buildHomeCards();
buildGmCards();
buildAnnouncements();
buildEvents();
buildChangelog();


// ═══════════════════════════════════════════════════════
//  FORUM — SUPABASE (Hypixel-style)
// ═══════════════════════════════════════════════════════
const SUPABASE_URL = 'https://bglgsikoblveeofpdyuv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnbGdzaWtvYmx2ZWVvZnBkeXV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxNzAyNDEsImV4cCI6MjA5Mjc0NjI0MX0.9WdcO6cvrbQ93TIGcgDOR6MU5VKD6zovEkYd-aNWYAA';

let sb = null;
let fUser = null;
let fProfile = null;
let fAllPosts = [];
let fCats = [];
let fActiveCat = null;
let fCurrentPost = null;

const ADMIN_EMOJIS = ['🛡️','⚔️','🏆','💥','🔥','🌟','📢'];

function initSupabase() {
  if (typeof supabase === 'undefined') return;
  sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  injectForumDOM();
  initForumAuth();
  // Only load forum data if community portal is the active page
  if (document.getElementById('page-community')?.classList.contains('active')) {
    loadForumData();
  }
}

// ── DOM INJECTION ──────────────────────────────────────
function injectForumDOM() {
  // Post detail overlay
  if (!document.getElementById('post-overlay-home')) {
    const o = document.createElement('div');
    o.id = 'post-overlay-home';
    o.className = 'post-overlay';
    o.innerHTML = `<div class="post-overlay-inner">
      <button class="back-btn-home" onclick="closePostOverlay()">← Back to Forum</button>
      <div id="pod-content"></div>
      <div id="pod-replies-title" class="replies-hd">Replies</div>
      <div id="pod-replies"></div>
      <div id="pod-reply-form"></div>
    </div>`;
    document.body.appendChild(o);
  }
  // New post modal
  if (!document.getElementById('fmodal-post')) {
    const m = document.createElement('div');
    m.id = 'fmodal-post';
    m.className = 'fmodal-overlay';
    m.innerHTML = `<div class="fmodal">
      <div class="fmodal-hd"><div class="fmodal-title">New Post</div><button class="fmodal-close" onclick="closeFModal('fmodal-post')">✕</button></div>
      <div class="fform-group"><label class="fform-label">Title</label><input type="text" class="fform-input" id="f-post-title" placeholder="What's your post about?" /></div>
      <div class="fform-group"><label class="fform-label">Category</label><select class="fform-select" id="f-post-cat"></select></div>
      <div class="fform-group"><label class="fform-label">Content</label><textarea class="fform-textarea" id="f-post-content" placeholder="Write your post..."></textarea></div>
      <button class="fform-submit" onclick="submitForumPost()">Publish Post</button>
    </div>`;
    m.addEventListener('click', e => { if (e.target===m) closeFModal('fmodal-post'); });
    document.body.appendChild(m);
  }
  // Auth modal
  if (!document.getElementById('fmodal-auth')) {
    const m = document.createElement('div');
    m.id = 'fmodal-auth';
    m.className = 'fmodal-overlay';
    m.innerHTML = `<div class="fmodal">
      <div class="fmodal-hd"><div class="fmodal-title" id="fauth-title">Log In</div><button class="fmodal-close" onclick="closeFModal('fmodal-auth')">✕</button></div>
      <div class="auth-tabs-home">
        <button class="auth-tab-home active" id="ftab-login" onclick="switchFTab('login')">Log In</button>
        <button class="auth-tab-home" id="ftab-signup" onclick="switchFTab('signup')">Sign Up</button>
      </div>
      <div id="fauth-login">
        <div class="fform-group"><label class="fform-label">Username</label><input type="text" class="fform-input" id="f-login-username" placeholder="YourUsername" /></div>
        <div class="fform-group"><label class="fform-label">Password</label><input type="password" class="fform-input" id="f-login-pw" placeholder="••••••••" /></div>
        <button class="fform-submit" onclick="forumLogin()">Log In</button>
      </div>
      <div id="fauth-signup" style="display:none;">
        <div class="fform-group"><label class="fform-label">Username</label><input type="text" class="fform-input" id="f-signup-user" placeholder="YourUsername" /></div>
        <div class="fform-group"><label class="fform-label">Password</label><input type="password" class="fform-input" id="f-signup-pw" placeholder="Min 6 characters" /></div>
        <button class="fform-submit" onclick="forumSignup()">Create Account</button>
      </div>
    </div>`;
    m.addEventListener('click', e => { if (e.target===m) closeFModal('fmodal-auth'); });
    document.body.appendChild(m);
  }
  // Toast
  if (!document.getElementById('ftoast')) {
    const t = document.createElement('div');
    t.id = 'ftoast'; t.className = 'ftoast';
    t.innerHTML = `<span id="ftoast-icon">✓</span><span id="ftoast-msg"></span>`;
    document.body.appendChild(t);
  }
}

// ── AUTH ──────────────────────────────────────────────
async function initForumAuth() {
  const { data: { session } } = await sb.auth.getSession();
  if (session?.user) await setForumUser(session.user);
  sb.auth.onAuthStateChange(async (event, session) => {
    // Skip SIGNED_IN on fresh signUp — doRegisterPage handles it manually
    if (event === 'SIGNED_IN' && session?.user) {
      // Only auto-set if we don't already have the user loaded
      if (!fUser) await setForumUser(session.user);
    } else if (!session) {
      fUser = null; fProfile = null; renderForumNav();
    }
  });
}

async function setForumUser(user) {
  fUser = user;
  const { data } = await sb.from('profiles').select('*').eq('id', user.id).single();
  fProfile = data;
  renderForumNav();
}

function renderForumNav() {
  const navRight = document.getElementById('nav-right');
  if (navRight) {
    if (fUser && fProfile) {
      const init = fProfile.username[0].toUpperCase();
      navRight.innerHTML = `<div class="nav-user-bar">
        <div class="nav-user-av" style="background:${fProfile.avatar_color}22;color:${fProfile.avatar_color};">${init}</div>
        <span class="nav-user-name">${fProfile.username}</span>
        <button class="nav-signout" onclick="forumSignout()">Sign Out</button>
      </div>`;
    } else {
      navRight.innerHTML = `
        <a class="btn-nav-login" data-nav="login" style="cursor:pointer;">Log In</a>
        <a class="btn-nav-register" data-nav="register" style="cursor:pointer;">Register</a>`;
    }
  }
  // Update sidebar auth card
  const authCard = document.getElementById('fhx-auth-card');
  if (!authCard) return;
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
  renderReplyForm();
  if (fCurrentPost) renderSidebarReplies(fCurrentPost);
  rewireNavLinks();
}

async function forumLogin() {
  const username = document.getElementById('f-login-username').value.trim();
  const pw = document.getElementById('f-login-pw').value;
  if (!username) return fToast('❌ Enter your username', true);
  if (!pw) return fToast('❌ Enter your password', true);

  // Look up the email stored for this username
  const { data: profile, error: profileErr } = await sb
    .from('profiles').select('id, username').eq('username', username).single();
  if (profileErr || !profile) return fToast('❌ Username not found', true);

  // Use username-based fake email convention
  const fakeEmail = `${username.toLowerCase()}@glimzomc.local`;
  const { error } = await sb.auth.signInWithPassword({ email: fakeEmail, password: pw });
  if (error) return fToast('❌ Wrong password', true);
  closeFModal('fmodal-auth'); fToast('✓ Logged in!');
}

async function forumSignup() {
  const username = document.getElementById('f-signup-user').value.trim();
  const pw = document.getElementById('f-signup-pw').value;
  if (!username || username.length < 3) return fToast('❌ Username must be 3+ characters', true);
  if (!pw || pw.length < 6) return fToast('❌ Password must be 6+ characters', true);
  if (!/^[a-zA-Z0-9_]+$/.test(username)) return fToast('❌ Username can only contain letters, numbers, underscores', true);

  // Check if username already taken
  const { data: existing } = await sb.from('profiles').select('id').eq('username', username).single();
  if (existing) return fToast('❌ Username already taken', true);

  // Use username-based fake email so no real email needed
  const fakeEmail = `${username.toLowerCase()}@glimzomc.local`;
  const { data, error } = await sb.auth.signUp({ email: fakeEmail, password: pw });
  if (error) return fToast('❌ ' + error.message, true);
  if (data.user) {
    await sb.from('profiles').insert({ id: data.user.id, username, avatar_color: '#4ade80' });
  }
  closeFModal('fmodal-auth');
  fToast('✓ Account created! You can now log in.');
}

async function forumSignout() {
  await sb.auth.signOut(); fToast('✓ Signed out');
}

// ── LOAD ALL DATA ──────────────────────────────────────
async function loadForumData() {
  await loadForumCategories();
  const { data } = await sb.from('posts')
    .select(`*, profiles(username, avatar_color, role), categories(name, icon), replies(count)`)
    .order('created_at', { ascending: false });
  fAllPosts = data || [];
  renderAdminPosts();
  renderCommunityPosts();
  renderLatestFeed();
}

// ── CATEGORIES ────────────────────────────────────────
async function loadForumCategories() {
  const { data } = await sb.from('categories').select('*').order('id');
  fCats = data || [];

  // Category pills
  const pills = document.getElementById('cat-pills-home');
  if (pills) {
    pills.innerHTML = `<span class="cat-pill active" onclick="filterForumCat(null,this)">All</span>`;
    fCats.forEach(c => {
      pills.innerHTML += `<span class="cat-pill" onclick="filterForumCat(${c.id},this)">${c.icon} ${c.name}</span>`;
    });
  }

  // New post select
  const sel = document.getElementById('f-post-cat');
  if (sel) {
    sel.innerHTML = '';
    fCats.forEach(c => sel.innerHTML += `<option value="${c.id}">${c.icon} ${c.name}</option>`);
  }
}

function filterForumCat(id, el) {
  fActiveCat = id;
  document.querySelectorAll('.cat-item-home').forEach(i => i.classList.remove('active'));
  document.querySelectorAll('.cat-pill').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  renderCommunityPosts();
}

// ── ADMIN POSTS (big Hypixel-style cards) ─────────────
function renderAdminPosts() {
  const list = document.getElementById('admin-posts-list');
  if (!list) return;
  const adminPosts = fAllPosts.filter(p => p.profiles?.role === 'admin');
  if (!adminPosts.length) {
    list.innerHTML = '';
    return;
  }
  list.innerHTML = adminPosts.map((p, i) => {
    const emoji = ADMIN_EMOJIS[i % ADMIN_EMOJIS.length];
    const replies = p.replies?.[0]?.count || 0;
    const excerpt = p.content.length > 160 ? p.content.slice(0, 160) + '...' : p.content;
    return `<div class="admin-post-card" onclick="openForumPost(${p.id})">
      <div class="admin-post-banner">${emoji}</div>
      <div class="admin-post-body">
        <div class="admin-post-meta">
          <span class="admin-badge">📢 Admin</span>
          <span class="admin-name">@${p.profiles?.username || 'Staff'}</span>
          <span class="admin-time">${fTimeAgo(p.created_at)}</span>
        </div>
        <div class="admin-post-title">${p.title}</div>
        <div class="admin-post-excerpt">${excerpt}</div>
        <div class="admin-post-footer">
          <span class="admin-reply-count">💬 ${replies} ${replies===1?'reply':'replies'}</span>
          <span class="admin-read-more">Read More →</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── COMMUNITY POSTS (compact list) ────────────────────
function renderCommunityPosts() {
  const list = document.getElementById('posts-list-home');
  if (!list) return;
  const search = (document.getElementById('forum-search-home')?.value || '').toLowerCase();
  let posts = fAllPosts.filter(p => p.profiles?.role !== 'admin');
  if (fActiveCat) posts = posts.filter(p => p.category_id === fActiveCat);
  if (search) posts = posts.filter(p => p.title.toLowerCase().includes(search) || p.content.toLowerCase().includes(search));

  if (!posts.length) {
    list.innerHTML = `<div class="forum-empty"><div class="forum-empty-icon">💬</div><div class="forum-empty-txt">No posts yet. Be the first!</div></div>`;
    return;
  }
  list.innerHTML = posts.map(p => {
    const color = p.profiles?.avatar_color || '#4ade80';
    const init = p.profiles?.username?.[0]?.toUpperCase() || '?';
    const replies = p.replies?.[0]?.count || 0;
    return `<div class="community-post-card" onclick="openForumPost(${p.id})">
      <div class="cpav" style="background:${color}18;color:${color};">${init}</div>
      <div class="cpc">
        <div class="cpt">${p.title}</div>
        <div class="cpm">
          <span class="cpauth">@${p.profiles?.username||'Unknown'}</span>
          <span class="cpcat">${p.categories?.icon||''} ${p.categories?.name||''}</span>
          <span class="cptime">${fTimeAgo(p.created_at)}</span>
        </div>
      </div>
      <div class="cps"><span class="cpr">💬 ${replies}</span></div>
    </div>`;
  }).join('');
}

function filterPostsHome() { renderCommunityPosts(); }

// ── LATEST FEED (sidebar) ──────────────────────────────
function renderLatestFeed() {
  const feed = document.getElementById('latest-posts-feed');
  if (!feed) return;
  const latest = fAllPosts.slice(0, 8);
  if (!latest.length) { feed.innerHTML = `<div style="padding:14px;font-size:12px;color:var(--gr);opacity:.4;">No posts yet.</div>`; return; }
  feed.innerHTML = latest.map(p => {
    const color = p.profiles?.avatar_color || '#4ade80';
    const init = p.profiles?.username?.[0]?.toUpperCase() || '?';
    return `<div class="latest-post-item" onclick="openForumPost(${p.id})">
      <div class="lpi-av" style="background:${color}18;color:${color};">${init}</div>
      <div class="lpi-info">
        <div class="lpi-title">${p.title.length>48?p.title.slice(0,48)+'...':p.title}</div>
        <div class="lpi-meta">@${p.profiles?.username||'Unknown'} · ${fTimeAgo(p.created_at)}</div>
      </div>
    </div>`;
  }).join('');
}

// ── POST DETAIL ────────────────────────────────────────
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

  document.getElementById('pod-content').innerHTML = `
    <div class="post-dh">
      <div class="post-dcat">${p.categories?.icon||''} ${p.categories?.name||''}</div>
      ${isAdmin ? '<div style="display:inline-flex;align-items:center;gap:6px;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.25);padding:3px 10px;border-radius:100px;font-size:10px;font-weight:800;letter-spacing:2px;color:var(--g);margin-bottom:10px;">📢 STAFF ANNOUNCEMENT</div>' : ''}
      <div class="post-dtitle">${p.title}</div>
      <div class="post-dmeta">
        <span style="color:${color};font-weight:700;">@${p.profiles?.username||'Unknown'}</span>
        ${isAdmin ? '<span style="font-size:10px;background:rgba(74,222,128,.1);color:var(--g);padding:2px 8px;border-radius:100px;font-weight:800;">[ADMIN]</span>' : ''}
        <span>•</span><span>${fTimeAgo(p.created_at)}</span>
        <span>•</span><span>${p.views||0} views</span>
      </div>
      <div class="post-dcontent">${p.content}</div>
    </div>`;

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
    return `<div class="reply-c" style="${isAdmin?'border-color:rgba(74,222,128,.2);background:rgba(74,222,128,.04);':''}">
      <div class="rav" style="background:${color}18;color:${color};">${init}</div>
      <div class="rb">
        <div class="rauth">
          @${r.profiles?.username||'Unknown'}
          ${isAdmin?'<span style="font-size:10px;background:rgba(74,222,128,.1);color:var(--g);padding:1px 7px;border-radius:100px;font-weight:800;margin-left:6px;">[ADMIN]</span>':''}
          <span class="rtime">${fTimeAgo(r.created_at)}</span>
        </div>
        <div class="rcontent">${r.content}</div>
      </div>
    </div>`;
  }).join('') : `<div class="forum-empty" style="padding:28px 0;"><div class="forum-empty-txt">No replies yet. Start the conversation!</div></div>`;
}

async function renderSidebarReplies(postId) {
  const sidebar = document.getElementById('sidebar-replies');
  const replyForm = document.getElementById('sidebar-reply-form');
  const replyPrompt = document.getElementById('sidebar-reply-prompt');
  if (!sidebar) return;

  const { data } = await sb.from('replies')
    .select(`*, profiles(username, avatar_color, role)`)
    .eq('post_id', postId)
    .order('created_at', { ascending: false })
    .limit(10);

  if (!data || !data.length) {
    sidebar.innerHTML = `<div style="padding:14px;font-size:12px;color:var(--gr);opacity:.4;">No replies yet. Be the first!</div>`;
  } else {
    sidebar.innerHTML = data.map(r => {
      const color = r.profiles?.avatar_color || '#4ade80';
      const init = r.profiles?.username?.[0]?.toUpperCase() || '?';
      const isAdmin = r.profiles?.role === 'admin';
      return `<div class="latest-post-item" style="flex-direction:column;align-items:flex-start;gap:6px;">
        <div style="display:flex;align-items:center;gap:8px;width:100%;">
          <div class="lpi-av" style="background:${color}18;color:${color};">${init}</div>
          <span style="font-size:12px;font-weight:700;color:${color};">@${r.profiles?.username||'Unknown'}${isAdmin?' <span style="font-size:9px;background:rgba(74,222,128,.1);color:var(--g);padding:1px 6px;border-radius:100px;font-weight:800;">[ADMIN]</span>':''}</span>
          <span style="font-size:10px;color:var(--gr);opacity:.35;margin-left:auto;">${fTimeAgo(r.created_at)}</span>
        </div>
        <div style="font-size:12px;color:var(--gr);opacity:.75;line-height:1.5;padding-left:36px;">${r.content.length>120?r.content.slice(0,120)+'...':r.content}</div>
      </div>`;
    }).join('');
  }

  // Show reply form or login prompt
  if (replyForm && replyPrompt) {
    if (fUser) {
      replyForm.style.display = 'block';
      replyPrompt.style.display = 'none';
    } else {
      replyForm.style.display = 'none';
      replyPrompt.style.display = 'block';
    }
  }
}

function renderReplyForm() {
  const el = document.getElementById('pod-reply-form');
  if (!el) return;
  if (fUser) {
    el.innerHTML = `<div class="reply-form-home"><h3>Leave a Reply</h3>
      <textarea class="reply-ta" id="pod-reply-ta" placeholder="Write your reply..."></textarea>
      <button class="reply-sub" onclick="submitForumReply()">Post Reply</button>
    </div>`;
  } else {
    el.innerHTML = `<div class="login-prompt-home"><a onclick="openFAuth('login')">Log in</a> to leave a reply.</div>`;
  }
}

async function submitForumReply() {
  if (!fUser) return openFAuth('login');
  // Try sidebar textarea first, then overlay textarea
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

// ── SIDEBAR REPLY ─────────────────────────────────────
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

// ── NEW POST ───────────────────────────────────────────
function openNewPostHome() {
  if (!fUser) return openFAuth('login');
  document.getElementById('fmodal-post').classList.add('active');
}

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

// ── AUTH MODAL ─────────────────────────────────────────
function openFAuth(tab) {
  document.getElementById('fmodal-auth').classList.add('active');
  switchFTab(tab);
}
function switchFTab(tab) {
  document.getElementById('fauth-login').style.display = tab==='login'?'block':'none';
  document.getElementById('fauth-signup').style.display = tab==='signup'?'block':'none';
  document.getElementById('ftab-login').classList.toggle('active', tab==='login');
  document.getElementById('ftab-signup').classList.toggle('active', tab==='signup');
  document.getElementById('fauth-title').textContent = tab==='login'?'Log In':'Sign Up';
}
function closeFModal(id) { document.getElementById(id).classList.remove('active'); }

// ── UTILS ──────────────────────────────────────────────
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

// ── PAGE AUTH HELPERS ─────────────────────────────────
function toggleAuthPw(id, btn) {
  const inp = document.getElementById(id);
  if (!inp) return;
  if (inp.type === 'password') { inp.type = 'text'; btn.textContent = 'Hide'; }
  else { inp.type = 'password'; btn.textContent = 'Show'; }
}

function showAuthError(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg; el.classList.add('show');
}
function hideAuthError(id) {
  const el = document.getElementById(id);
  if (el) { el.textContent = ''; el.classList.remove('show'); }
}

// ── LOGIN PAGE ────────────────────────────────────────
async function doLoginPage() {
  if (!sb) return showAuthError('login-error', 'Still connecting, please wait a moment.');
  const username = document.getElementById('login-username')?.value.trim();
  const pw = document.getElementById('login-pw')?.value;
  hideAuthError('login-error');
  if (!username) return showAuthError('login-error', 'Please enter your username.');
  if (!pw) return showAuthError('login-error', 'Please enter your password.');

  const { data: profile } = await sb.from('profiles').select('id, email').eq('username', username).single();
  if (!profile) return showAuthError('login-error', 'Username not found. Check your spelling or register a new account.');
  if (!profile.email) return showAuthError('login-error', 'No email on file for this account. Please contact support.');

  const { data, error } = await sb.auth.signInWithPassword({ email: profile.email, password: pw });
  if (error) return showAuthError('login-error', 'Incorrect password. Please try again.');

  if (data.user) await setForumUser(data.user);
  navigate('home');
}

// ── REGISTER PAGE ──────────────────────────────────────
let regUsernameOk = false;

async function checkRegUsername() {
  if (!sb) return;
  const val = document.getElementById('reg-username')?.value.trim();
  const hint = document.getElementById('reg-username-hint');
  const inp = document.getElementById('reg-username');
  if (!val) {
    hint.textContent = 'Letters, numbers and underscores only.';
    hint.className = 'auth-hint'; hint.style.color = '';
    inp.classList.remove('error'); regUsernameOk = false; return;
  }
  if (!/^[a-zA-Z0-9_]{3,20}$/.test(val)) {
    hint.textContent = 'Username must be 3-20 characters, letters/numbers/underscores only.';
    hint.className = 'auth-hint err'; hint.style.color = '';
    inp.classList.add('error'); regUsernameOk = false; return;
  }
  const { data } = await sb.from('profiles').select('id').eq('username', val).single();
  if (data) {
    hint.textContent = 'This username is already taken.';
    hint.className = 'auth-hint err'; hint.style.color = '';
    inp.classList.add('error'); regUsernameOk = false;
  } else {
    hint.textContent = '✓ Username is available!';
    hint.className = 'auth-hint'; hint.style.color = '#4ade80';
    inp.classList.remove('error'); regUsernameOk = true;
  }
}

function checkRegPwStrength() {
  const pw = document.getElementById('reg-pw')?.value || '';
  const fill = document.getElementById('reg-pw-strength-fill');
  const hint = document.getElementById('reg-pw-hint');
  if (!fill || !hint) return;
  let s = 0;
  if (pw.length >= 6) s++;
  if (pw.length >= 10) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^a-zA-Z0-9]/.test(pw)) s++;
  const colors = ['#f87171','#fb923c','#fbbf24','#86efac','#4ade80'];
  const labels = ['Too short','Weak','Fair','Good','Strong'];
  fill.style.width = ((s / 5) * 100) + '%';
  fill.style.background = colors[s - 1] || '#f87171';
  hint.textContent = pw.length < 6 ? 'Minimum 6 characters.' : (labels[s - 1] || 'Too short');
}

async function doRegisterPage() {
  if (!sb) return showAuthError('reg-error', 'Still connecting, please wait a moment and try again.');
  const username = document.getElementById('reg-username')?.value.trim();
  const email = document.getElementById('reg-email')?.value.trim();
  const pw = document.getElementById('reg-pw')?.value;
  const pw2 = document.getElementById('reg-pw2')?.value;
  const terms = document.getElementById('reg-terms')?.checked;

  hideAuthError('reg-error');
  document.getElementById('reg-success')?.classList.remove('show');

  if (!username) return showAuthError('reg-error', 'Please enter a username.');
  if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) return showAuthError('reg-error', 'Username must be 3-20 characters, letters/numbers/underscores only.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showAuthError('reg-error', 'Please enter a valid email address.');
  if (!pw || pw.length < 6) return showAuthError('reg-error', 'Password must be at least 6 characters.');
  if (pw !== pw2) return showAuthError('reg-error', 'Passwords do not match.');
  if (!terms) return showAuthError('reg-error', 'You must agree to the terms and privacy policy.');

  const btn = document.getElementById('reg-btn');
  btn.disabled = true; btn.textContent = 'Checking username...';

  // Verify username is not taken
  const { data: existing } = await sb.from('profiles').select('id').eq('username', username).single();
  if (existing) {
    btn.disabled = false; btn.textContent = 'Register';
    return showAuthError('reg-error', 'That username is already taken. Please choose another.');
  }

  btn.textContent = 'Creating account...';
  const { data, error } = await sb.auth.signUp({ email, password: pw });
  if (error) { btn.disabled = false; btn.textContent = 'Register'; return showAuthError('reg-error', error.message); }

  if (data.user) {
    // Insert profile first, then set the user so nav renders correctly
    await sb.from('profiles').insert({ id: data.user.id, username, email, avatar_color: '#4ade80' });
    await setForumUser(data.user);
  }

  // Go straight to home with username showing in nav
  navigate('home');
}

// Re-wire dynamically rendered nav links (called after renderForumNav injects new elements)
function rewireNavLinks() {
  document.querySelectorAll('[data-nav]').forEach((el) => {
    if (!el._navWired) {
      el._navWired = true;
      el.addEventListener('click', () => navigate(el.dataset.nav));
    }
  });
}

// ── INIT ───────────────────────────────────────────────
// Handle browser back/forward buttons
window.addEventListener('popstate', (e) => {
  const page = e.state?.page || SLUG_TO_PAGE[location.pathname] || 'home';
  navigate(page, false);
});

// On first load, route to the correct page based on the current URL
(function routeOnLoad() {
  const page = SLUG_TO_PAGE[location.pathname] || 'home';
  if (page !== 'home') navigate(page, false);
})();

// Enter key on login page
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.getElementById('page-login')?.classList.contains('active')) {
    doLoginPage();
  }
});

// Supabase is loaded via <script> in index.html head — init directly
initSupabase();
