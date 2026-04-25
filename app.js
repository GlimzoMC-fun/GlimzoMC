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
function navigate(page) {
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  document.querySelectorAll('.nav-links a[data-nav]').forEach((a) => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'instant' });

  if (page === 'gamemodes') {
    showGmList();
    setTimeout(() => {
      document.querySelectorAll('.gmode-card:not(.coming-card)').forEach((c) => {
        c.style.opacity = '1';
        c.style.transform = 'translateY(0)';
      });
    }, 50);
  }
}

// Wire nav clicks
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
    card.style.cssText = `opacity:0;transform:translateY(20px);transition:opacity .5s ease ${i * 0.07}s,transform .5s ease ${i * 0.07}s,border-color .25s,box-shadow .25s;`;
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
document.getElementById('playNowBtn')?.addEventListener('click', () => copyIP('playBtn'));
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
