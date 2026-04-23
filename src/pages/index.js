import React, { useEffect } from 'react';
import recentPosts from '../data/recentPosts.json';

export default function Home() {
  // We use a raw HTML string to ensure 100% fidelity with your original design
  // and prevent any Docusaurus theme-bleeding.
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Arpit Sharma — Engineering Executive & Fintech Leader</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@300;400;500&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
<style>
  /* ── TOKENS ───────────────────────────────────────────────────── */
  :root {
    --bg:        #07080d;
    --bg2:       #0d0f18;
    --bg3:       #12141f;
    --border:    rgba(255,255,255,0.07);
    --gold:      #c9a84c;
    --gold-dim:  rgba(201,168,76,0.15);
    --gold-glow: rgba(201,168,76,0.08);
    --white:     #f0ede6;
    --muted:     rgba(240,237,230,0.45);
    --muted2:    rgba(240,237,230,0.22);
    --red:       #e05252;
    --teal:      #4ec9b0;
  }

  /* ── RESET ────────────────────────────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: var(--bg);
    color: var(--white);
    font-family: 'Outfit', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    overflow-x: hidden;
  }
  a { color: inherit; text-decoration: none; }

  /* ── NOISE OVERLAY ────────────────────────────────────────────── */
  body::before {
    content: '';
    position: fixed; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
    opacity: 0.4;
  }

  /* ── NAV ──────────────────────────────────────────────────────── */
  nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.25rem 3rem;
    background: rgba(7,8,13,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }
  .nav-logo {
    font-family: 'DM Mono', monospace;
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    color: var(--gold);
    text-transform: uppercase;
  }
  .nav-links {
    display: flex; gap: 2.5rem;
    list-style: none;
  }
  .nav-links a {
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--white); }
  .nav-cta {
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
    border: 1px solid var(--gold);
    padding: 0.5rem 1.25rem;
    transition: background 0.2s, color 0.2s;
  }
  .nav-cta:hover { background: var(--gold); color: var(--bg); }

  /* ── HERO ─────────────────────────────────────────────────────── */
  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0 3rem;
    padding-top: 5rem;
    gap: 4rem;
    position: relative;
    overflow: hidden;
  }
  .hero::after {
    content: '';
    position: absolute;
    top: 0; right: 38%;
    width: 1px; height: 100%;
    background: linear-gradient(to bottom, transparent, var(--border) 20%, var(--border) 80%, transparent);
  }
  .hero-left { position: relative; z-index: 2; }
  .hero-glow {
    position: absolute;
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%);
    top: 50%; left: 30%; transform: translate(-50%, -50%);
    pointer-events: none;
  }
  .hero-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 0.8s 0.2s forwards;
  }
  .hero-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3.5rem, 7vw, 6rem);
    font-weight: 300;
    line-height: 0.95;
    letter-spacing: -0.02em;
    color: var(--white);
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 0.8s 0.35s forwards;
  }
  .hero-name em { font-style: italic; color: var(--gold); }
  .hero-tagline {
    font-size: 1.15rem;
    font-weight: 300;
    color: var(--muted);
    max-width: 44ch;
    line-height: 1.75;
    margin-bottom: 2.5rem;
    opacity: 0;
    animation: fadeUp 0.8s 0.5s forwards;
  }
  .hero-tagline strong { color: var(--white); font-weight: 500; }
  .hero-actions {
    display: flex; gap: 1rem; flex-wrap: wrap;
    opacity: 0;
    animation: fadeUp 0.8s 0.65s forwards;
  }
  .btn-primary {
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    background: var(--gold);
    color: var(--bg);
    padding: 0.85rem 2rem;
    transition: opacity 0.2s;
  }
  .btn-primary:hover { opacity: 0.85; }
  .btn-secondary {
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    border: 1px solid var(--border);
    padding: 0.85rem 2rem;
    transition: color 0.2s, border-color 0.2s;
  }
  .btn-secondary:hover { color: var(--white); border-color: rgba(255,255,255,0.2); }

  .hero-right {
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    opacity: 0;
    animation: fadeIn 1s 0.8s forwards;
  }
  .stat-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--border);
  }
  .stat-cell {
    background: var(--bg2);
    padding: 1.75rem 2rem;
    transition: background 0.25s;
    cursor: default;
  }
  .stat-cell:hover { background: var(--bg3); }
  .stat-number {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem;
    font-weight: 300;
    color: var(--gold);
    line-height: 1;
    margin-bottom: 0.4rem;
  }
  .stat-label {
    font-family: 'DM Mono', monospace;
    font-size: 0.78rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .stat-sub {
    font-size: 0.75rem;
    color: var(--muted2);
    margin-top: 0.2rem;
  }
  .company-strip {
    background: var(--bg2);
    padding: 1.25rem 2rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  .company-label {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--muted2);
    margin-right: 0.5rem;
  }
  .company-name {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--muted);
    letter-spacing: 0.05em;
    padding: 0.25rem 0.75rem;
    border: 1px solid var(--border);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    background: transparent;
  }
  .company-name:hover { color: var(--white); border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.02); }
  .company-name.current { 
    color: var(--gold); 
    border-color: var(--gold); 
    background: var(--gold-glow);
    box-shadow: 0 0 15px rgba(201,168,76,0.1);
  }

  section {
    padding: 6rem 3rem;
    border-top: 1px solid var(--border);
    background: var(--bg);
  }
  .section-label {
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 3rem;
    display: flex; align-items: center; gap: 1rem;
  }
  .section-label::after {
    content: '';
    flex: 1; max-width: 60px;
    height: 1px;
    background: var(--gold-dim);
  }
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 300;
    line-height: 1.15;
    color: var(--white);
    margin-bottom: 1rem;
  }
  .section-title em { font-style: italic; color: var(--gold); }

  .rare-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--border);
    margin-top: 3rem;
    border: 1px solid var(--border);
  }
  .rare-card {
    background: var(--bg2);
    padding: 2.5rem 2rem;
    position: relative;
    overflow: hidden;
    transition: background 0.3s;
  }
  .rare-card:hover { background: var(--bg3); }
  .rare-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: var(--gold);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s;
  }
  .rare-card:hover::before { transform: scaleX(1); }
  .rare-icon { font-size: 1.5rem; margin-bottom: 1rem; display: block; }
  .rare-card-title {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
  }
  .rare-card p { font-size: 1.05rem; color: var(--muted); line-height: 1.8; }
  .rare-card p strong { color: var(--white); font-weight: 500; }

  .moments-list {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
  }
  .moment {
    background: var(--bg2);
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 0;
    transition: background 0.25s;
    cursor: default;
  }
  .moment:hover { background: var(--bg3); }
  .moment-num {
    padding: 2.5rem 1.5rem;
    border-right: 1px solid var(--border);
    display: flex; align-items: flex-start; justify-content: center;
    padding-top: 2.8rem;
  }
  .moment-num span {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    font-weight: 300;
    color: var(--border);
    line-height: 1;
  }
  .moment:hover .moment-num span { color: var(--gold-dim); }
  .moment-content { padding: 2.5rem 2.5rem; }
  .moment-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--white);
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }
  .moment-body { font-size: 1.05rem; color: var(--muted); line-height: 1.8; max-width: 72ch; }
  .moment-body strong { color: var(--white); font-weight: 500; }
  .moment-tag {
    display: inline-flex;
    margin-top: 1rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    border: 1px solid rgba(201,168,76,0.2);
    padding: 0.25rem 0.75rem;
  }

  .arc-timeline { margin-top: 3rem; position: relative; }
  .arc-line {
    position: absolute;
    left: 119px; top: 0; bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, var(--gold-dim), var(--border));
  }
  .arc-item {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 2rem;
    margin-bottom: 2.5rem;
    position: relative;
    opacity: 0;
    transform: translateX(-10px);
    animation: slideIn 0.6s forwards;
  }
  .arc-item:nth-child(2) { animation-delay: 0.1s; }
  .arc-item:nth-child(3) { animation-delay: 0.2s; }
  .arc-item:nth-child(4) { animation-delay: 0.3s; }
  .arc-item:nth-child(5) { animation-delay: 0.4s; }
  .arc-years {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    color: var(--muted2);
    text-align: right;
    padding-top: 0.2rem;
    padding-right: 2rem;
  }
  .arc-dot {
    position: absolute;
    left: 112px; top: 6px;
    width: 15px; height: 15px;
    border-radius: 50%;
    border: 1px solid var(--border);
    background: var(--bg);
    z-index: 2;
    transition: border-color 0.2s, background 0.2s;
  }
  .arc-item.current .arc-dot {
    border-color: var(--gold);
    background: var(--gold);
    box-shadow: 0 0 12px rgba(201,168,76,0.4);
  }
  .arc-company { font-size: 1rem; font-weight: 500; color: var(--white); margin-bottom: 0.2rem; }
  .arc-item.current .arc-company { color: var(--gold); }
  .arc-role {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    color: var(--muted);
    margin-bottom: 0.5rem;
  }
  .arc-location { font-size: 0.78rem; color: var(--muted2); }
  .arc-award {
    display: inline-flex;
    margin-top: 0.5rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
    background: var(--gold-glow);
    border: 1px solid rgba(201,168,76,0.15);
    padding: 0.2rem 0.6rem;
  }

  .thought-grid {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
  }
  .thought-card { background: var(--bg2); padding: 2.5rem; transition: background 0.25s; }
  .thought-card:hover { background: var(--bg3); }
  .thought-card.featured {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    align-items: center;
  }
  .thought-type {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
  }
  .thought-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    font-weight: 400;
    font-style: italic;
    color: var(--white);
    line-height: 1.2;
    margin-bottom: 0.75rem;
  }
  .thought-body { font-size: 1.05rem; color: var(--muted); line-height: 1.8; }
  .thought-book-cover {
    background: linear-gradient(135deg, #1a1410 0%, #0d0b08 100%);
    border: 1px solid rgba(201,168,76,0.2);
    aspect-ratio: 3/4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
  }
  .book-cover-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 300;
    color: var(--gold);
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  .book-cover-rule { width: 40px; height: 1px; background: var(--gold-dim); margin: 0.75rem auto; }
  .book-cover-author {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted2);
  }
  .book-cover-tag {
    margin-top: 1.5rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted2);
    border: 1px solid var(--border);
    padding: 0.2rem 0.6rem;
  }
  .cert-list { list-style: none; display: flex; flex-direction: column; gap: 1rem; }
  .cert-list li { display: flex; align-items: flex-start; gap: 1rem; font-size: 1rem; color: var(--muted); }
  .cert-list li::before { content: '—'; color: var(--gold); font-family: 'DM Mono', monospace; flex-shrink: 0; }
  .cert-list strong { color: var(--white); font-weight: 500; display: block; margin-bottom: 0.1rem; }

  .awards-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    margin-top: 3rem;
  }
  .award-card { background: var(--bg2); padding: 2rem 1.75rem; transition: background 0.25s; }
  .award-card:hover { background: var(--bg3); }
  .award-org {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.75rem;
  }
  .award-name { font-size: 0.9rem; font-weight: 500; color: var(--white); line-height: 1.4; margin-bottom: 0.5rem; }
  .award-year { font-family: 'DM Mono', monospace; font-size: 0.7rem; color: var(--muted2); }

  .connect-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    background: var(--border);
    border: 1px solid var(--border);
    margin-top: 3rem;
  }
  .connect-left { background: var(--bg2); padding: 3rem; }
  .connect-right {
    background: var(--gold);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .connect-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    font-weight: 300;
    color: var(--white);
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  .connect-sub { font-size: 1.05rem; color: var(--muted); line-height: 1.8; margin-bottom: 2rem; }
  .connect-links { display: flex; flex-direction: column; gap: 0.75rem; }
  .connect-link {
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    display: flex; align-items: center; gap: 0.75rem;
    transition: color 0.2s;
  }
  .connect-link:hover { color: var(--white); }
  .connect-link::before { content: ''; width: 20px; height: 1px; background: currentColor; }
  .connect-right-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 300;
    font-style: italic;
    color: var(--bg);
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }
  .connect-email {
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    color: rgba(7,8,13,0.6);
    border-bottom: 1px solid rgba(7,8,13,0.2);
    padding-bottom: 0.25rem;
    display: inline-block;
    transition: color 0.2s;
  }
  .connect-email:hover { color: var(--bg); }

  footer {
    border-top: 1px solid var(--border);
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--bg);
  }
  .footer-copy { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.15em; color: var(--muted2); }
  .footer-handle { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.15em; color: var(--muted2); }
  .footer-handle a { color: var(--gold); transition: opacity 0.2s; }
  .footer-handle a:hover { opacity: 0.7; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }

  .reg-badges { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; }
  .reg-badge {
    font-family: 'DM Mono', monospace;
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted2);
    border: 1px solid var(--border);
    padding: 0.2rem 0.5rem;
  }

  @media (max-width: 900px) {
    nav { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
    .hero { grid-template-columns: 1fr; padding: 6rem 1.5rem 3rem; gap: 3rem; }
    .hero::after { display: none; }
    section { padding: 4rem 1.5rem; }
    .rare-grid { grid-template-columns: 1fr; }
    .awards-row { grid-template-columns: 1fr 1fr; }
    .thought-grid { grid-template-columns: 1fr; }
    .thought-card.featured { grid-template-columns: 1fr; }
    .connect-section { grid-template-columns: 1fr; }
    footer { flex-direction: column; gap: 1rem; text-align: center; }
    .footer-blog-link:hover .footer-blog-title { transform: translateX(5px); color: #000 !important; }
    .footer-blog-link { position: relative; }
  }
  
  /* OVERRIDE FOR FOOTER BLOG LINKS */
  .footer-blog-link:hover .footer-blog-title {
    color: #000 !important;
    text-decoration: underline !important;
    text-decoration-thickness: 1px !important;
    text-underline-offset: 3px !important;
  }
  .footer-blog-link:hover {
    opacity: 0.8;
  }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-logo">Arpit Sharma</div>
  <ul class="nav-links">
    <li><a href="#career">Career</a></li>
    <li><a href="#moments">Work</a></li>
    <li><a href="#thinking">Thinking</a></li>
    <li><a href="#connect">Connect</a></li>
  </ul>
  <div style="display: flex; gap: 1rem;">
    <a href="/blog?ref=nav" class="nav-cta">Blog ↗</a>
    <a href="http://www.linkedin.com/in/yesarpit" target="_blank" class="nav-cta">LinkedIn ↗</a>
  </div>
</nav>

<!-- HERO -->
<section class="hero" style="border-top: none; padding-top: 5rem;">
  <div class="hero-glow"></div>

  <div class="hero-left">
    <p class="hero-eyebrow">Engineering Executive · Fintech · AI Infrastructure</p>
    <h1 class="hero-name">Arpit<br><em>Sharma</em></h1>
    <p class="hero-tagline">
      17 years building financial systems and the teams behind them —
      across <strong>payments, FX trading, and AI infrastructure</strong>.
      The work tends to be complex, the standards high,
      and the margin for error thin.
    </p>
    <div class="hero-actions">
      <a href="#moments" class="btn-primary">See My Work</a>
      <a href="#connect" class="btn-secondary">Let's Connect</a>
    </div>
  </div>

  <div class="hero-right">
    <div class="stat-row">
      <div class="stat-cell" id="stat-0">
        <div class="stat-number">17</div>
        <div class="stat-label">Years</div>
        <div class="stat-sub">PayPal · Citi · Lloyds · BT · Samsung</div>
      </div>
      <div class="stat-cell" id="stat-1">
        <div class="stat-number">200+</div>
        <div class="stat-label">Countries</div>
        <div class="stat-sub">PayPal Consumer platform reach</div>
      </div>
    </div>
    <div class="stat-row">
      <div class="stat-cell" id="stat-2">
        <div class="stat-number">99.999%</div>
        <div class="stat-label">Availability</div>
        <div class="stat-sub">Five nines · ≈5 min/year downtime</div>
      </div>
      <div class="stat-cell" id="stat-3">
        <div class="stat-number">$6M</div>
        <div class="stat-label">Revenue Recovered</div>
        <div class="stat-sub">Via CDN edge-logic redesign</div>
      </div>
    </div>
    <div class="stat-row">
      <div class="stat-cell" id="stat-4">
        <div class="stat-number">70%</div>
        <div class="stat-label">Dev Productivity ↑</div>
        <div class="stat-sub">Via GenAI tooling · agentic workflows</div>
      </div>
      <div class="stat-cell" id="stat-5">
        <div class="stat-number">30+</div>
        <div class="stat-label">Engineers Scaled</div>
        <div class="stat-sub">Across managers & senior ICs</div>
      </div>
    </div>
    <div class="company-strip">
      <span class="company-label">Built at</span>
      <span class="company-name current" data-company="PayPal">PayPal</span>
      <span class="company-name" data-company="Citi">Citi</span>
      <span class="company-name" data-company="Lloyds">Lloyds</span>
      <span class="company-name" data-company="BT">BT</span>
      <span class="company-name" data-company="Samsung">Samsung</span>
    </div>
  </div>
</section>

<!-- RARE COMBINATION -->
<section>
  <div class="section-label">How I Tend to Work</div>
  <h2 class="section-title">The work I find most interesting sits at the <em>intersection</em> of three things:</h2>

  <div class="rare-grid">
    <div class="rare-card">
      <span class="rare-icon">⬡</span>
      <div class="rare-card-title">Systems</div>
      <p>
        Designed PayPal's <strong>autonomous AI Agent platform</strong> powering consumer experiences across 200+ countries.
        Built Citi's algorithmic trading PWA with sub-120ms P99 latency.
        Delivered Lloyds' FX streaming solution at <strong>sub-10ms execution</strong> under live market conditions.
      </p>
      <div class="reg-badges">
        <span class="reg-badge">Kafka</span>
        <span class="reg-badge">AWS</span>
        <span class="reg-badge">Microservices</span>
        <span class="reg-badge">LangGraph</span>
        <span class="reg-badge">RAG</span>
      </div>
    </div>
    <div class="rare-card">
      <span class="rare-icon">◈</span>
      <div class="rare-card-title">Reliability</div>
      <p>
        Sustained <strong>99.999% platform availability</strong> across PayPal's consumer payment infrastructure.
        Incident command procedures with <strong>RTO under 10 minutes</strong>, RPO under 2 minutes.
        Quarterly disaster recovery rehearsals across AWS multi-region deployments.
      </p>
      <div class="reg-badges">
        <span class="reg-badge">SOX</span>
        <span class="reg-badge">PCI-DSS L1</span>
        <span class="reg-badge">FCA</span>
        <span class="reg-badge">MiFID II</span>
        <span class="reg-badge">GDPR</span>
        <span class="reg-badge">RBI</span>
      </div>
    </div>
    <div class="rare-card">
      <span class="rare-icon">◎</span>
      <div class="rare-card-title">Teams</div>
      <p>
        Scaled engineering organisations from <strong>12 → 30+ engineers</strong>. Wrote hiring rubrics and competency levelling frameworks adopted across PayPal India's Consumer org.
        Reduced time-to-hire by <strong>35%</strong>. Established succession plans and leadership standards at scale.
      </p>
      <div class="reg-badges">
        <span class="reg-badge">Org Design</span>
        <span class="reg-badge">Levelling</span>
        <span class="reg-badge">Succession</span>
        <span class="reg-badge">P&L</span>
      </div>
    </div>
  </div>
</section>

<!-- CAREER-DEFINING MOMENTS -->
<section id="moments">
  <div class="section-label">Career-Defining Moments</div>
  <h2 class="section-title">What I've <em>actually</em> done</h2>

  <div class="moments-list">
    <div class="moment">
      <div class="moment-num"><span>01</span></div>
      <div class="moment-content">
        <h3 class="moment-title">The $6M Gap Nobody Saw</h3>
        <p class="moment-body">
          A data visibility gap across <strong>100M yearly consumer requests</strong> was silently costing PayPal revenue.
          I designed a segment-specific CDN edge-logic solution that closed it —
          recovering <strong>$6M in annualised revenue</strong> while cutting time-to-market by 96% through
          platform modernisation and accelerated delivery practices.
          Nobody had connected the dots. We did.
        </p>
        <span class="moment-tag">PayPal · 2023–Present</span>
      </div>
    </div>
    <div class="moment">
      <div class="moment-num"><span>02</span></div>
      <div class="moment-content">
        <h3 class="moment-title">Five Nines. Not Four.</h3>
        <p class="moment-body">
          Consumer payment infrastructure. 200+ countries. <strong>99.999% availability</strong> —
          roughly 5 minutes of unplanned downtime per year, the highest reliability benchmark
          in PayPal's Consumer organisation.
          This isn't luck. It's incident command architecture, quarterly DR rehearsals,
          AWS multi-region design, and <strong>P99 API latency below 200ms</strong> across systems
          processing over 1 million daily requests.
        </p>
        <span class="moment-tag">🏆 PayPal Highest Availability Award 2024-25</span>
      </div>
    </div>
    <div class="moment">
      <div class="moment-num"><span>03</span></div>
      <div class="moment-content">
        <h3 class="moment-title">GenAI in Production — When It Was Still Messy</h3>
        <p class="moment-body">
          Built production-grade <strong>agentic workflow orchestration, LLM evaluations,
          prompt engineering guardrails, and real-time observability pipelines</strong> across
          PayPal's consumer platform — lifting developer productivity by 70% through
          GenAI-powered code generation, automated test authoring, intelligent PR reviews,
          and automated code merges. This wasn't a pilot. It was live, at scale.
        </p>
        <span class="moment-tag">AI Agents · LangGraph · LLM Ops</span>
      </div>
    </div>
    <div class="moment">
      <div class="moment-num"><span>04</span></div>
      <div class="moment-content">
        <h3 class="moment-title">Monolith to Microservices at Citi — While Staying Regulated</h3>
        <p class="moment-body">
          Executing a cloud migration at a global bank means doing it inside
          <strong>SOX technology controls, PCI-DSS Level 1, and CCAR data integrity requirements</strong>
          simultaneously. Migrated Citi's monolith onto OpenShift and AWS with
          a full SRE observability stack — achieving <strong>99.95% availability SLA</strong>
          and P99 latency below 120ms for payment-critical services.
        </p>
        <span class="moment-tag">🏆 Cloud Migration Award — Citi 2022</span>
      </div>
    </div>
    <div class="moment">
      <div class="moment-num"><span>05</span></div>
      <div class="moment-content">
        <h3 class="moment-title">Sub-10ms FX Execution at Lloyds, Under MiFID II</h3>
        <p class="moment-body">
          Delivered a <strong>real-time cross-currency conversion streaming solution</strong>
          for Lloyds' front-office FX trading desks — achieving sub-10ms P99 execution latency
          under live market conditions, within MiFID II pre and post-trade reporting obligations
          and FCA conduct rules. Built the firm-wide contract-driven API standards that were
          adopted across Lloyds' engineering division.
        </p>
        <span class="moment-tag">Lloyds Bank · London · 2016–17</span>
      </div>
    </div>
  </div>
</section>

<!-- CAREER ARC -->
<section id="career">
  <div class="section-label">Career Arc</div>
  <h2 class="section-title">17 years. Fintech, banking, <em>and consumer platforms.</em></h2>

  <div class="arc-timeline">
    <div class="arc-line"></div>

    <div class="arc-item current">
      <div class="arc-years">2023<br>Present</div>
      <div class="arc-dot"></div>
      <div class="arc-body">
        <div class="arc-company">PayPal</div>
        <div class="arc-role">Engineering Head · Consumer & Marketing Technology Platforms</div>
        <div class="arc-location">Pune, India</div>
        <div><span class="arc-award">🏆 Highest Availability Award 2024-25</span></div>
      </div>
    </div>

    <div class="arc-item">
      <div class="arc-years">2017<br>2023</div>
      <div class="arc-dot"></div>
      <div class="arc-body">
        <div class="arc-company">Citibank (Citi)</div>
        <div class="arc-role">VP of Engineering · Payments & Analytics</div>
        <div class="arc-location">Pune, India</div>
        <div>
          <span class="arc-award">🏆 Cloud Migration Award 2022</span>&nbsp;
          <span class="arc-award">🥈 Silver Award UI Innovation 2020</span>
        </div>
      </div>
    </div>

    <div class="arc-item">
      <div class="arc-years">2016<br>2017</div>
      <div class="arc-dot"></div>
      <div class="arc-body">
        <div class="arc-company">Lloyds Bank</div>
        <div class="arc-role">Senior Engineer / Engineering Consultant · FX Trading</div>
        <div class="arc-location">London, UK</div>
      </div>
    </div>

    <div class="arc-item">
      <div class="arc-years">2009<br>2016</div>
      <div class="arc-dot"></div>
      <div class="arc-body">
        <div class="arc-company">BT (British Telecom) & Samsung</div>
        <div class="arc-role">Full Stack Developer → Engineering Lead</div>
        <div class="arc-location">Pune, India</div>
        <div><span class="arc-award">🥇 Gold Award Global Coding Standards 2016</span></div>
      </div>
    </div>
  </div>
</section>

<!-- THOUGHT LEADERSHIP -->
<section id="thinking">
  <div class="section-label">Thought Leadership</div>
  <h2 class="section-title">Beyond the <em>day job</em></h2>

  <div class="thought-grid">
    <div class="thought-card featured">
      <div class="thought-book-cover">
        <div class="book-cover-title">"Take Wrong<br>Decisions"</div>
        <div class="book-cover-rule"></div>
        <div class="book-cover-author">Arpit Sharma</div>
        <div class="book-cover-tag">Forthcoming</div>
      </div>
      <div>
        <div class="thought-type">📘 Book · Forthcoming</div>
        <h3 class="thought-title">"Take Wrong Decisions"</h3>
        <p class="thought-body">
          A leadership framework on counterintuitive decision-making for engineering executives —
          drawn from 17 years of high-stakes delivery across global financial institutions.
          The premise: the decisions that feel wrong in the moment are often the ones that build
          the most durable systems, teams, and organisations.
        </p>
      </div>
    </div>

    <div class="thought-card">
      <div class="thought-type">🎓 Currently Learning</div>
      <ul class="cert-list" style="margin-top: 0.5rem;">
        <li><strong>MIT — Advanced Program in Technology Leadership</strong> 2026</li>
        <li><strong>IIT Madras — AI & Machine Learning Program</strong> 2025</li>
        <li><strong>DeepLearning.AI — Generative AI with LLMs</strong> AWS · Coursera · 2025</li>
        <li><strong>DeepLearning.AI — AI Agents in LangGraph</strong> LangChain · 2025</li>
        <li><strong>Sun Certified Java Programmer v6</strong> Oracle · 2010</li>
      </ul>
    </div>

    <div class="thought-card">
      <div class="thought-type">💡 Philosophy</div>
      <div class="connect-right-text" style="font-size: 1.6rem; color: var(--white); font-style: italic; font-family: 'Cormorant Garamond', serif; line-height: 1.3;">
        "The decisions that feel wrong<br>are often the ones worth taking."
      </div>
      <p class="thought-body" style="margin-top: 1rem; opacity: 0.7;">
        A core tenet of my leadership approach: the most durable systems and teams are built through counterintuitive choices.
      </p>
    </div>
  </div>
</section>

<!-- AWARDS -->
<section>
  <div class="section-label">Recognition</div>
  <h2 class="section-title">Work that got <em>noticed</em></h2>

  <div class="awards-row">
    <div class="award-card">
      <div class="award-org">🏆 PayPal</div>
      <div class="award-name">Highest Availability Award</div>
      <div class="award-year">2024 – 25 · 99.999% Uptime Consumer Platforms</div>
    </div>
    <div class="award-card">
      <div class="award-org">🏆 Citi</div>
      <div class="award-name">Cloud Migration Award</div>
      <div class="award-year">2022 · Monolith → Microservices on AWS & OpenShift</div>
    </div>
    <div class="award-card">
      <div class="award-org">🥈 Citi</div>
      <div class="award-name">Silver Award for Innovation in User Interfaces</div>
      <div class="award-year">2020 · Mobile & PWA Delivery</div>
    </div>
    <div class="award-card">
      <div class="award-org">🥇 Samsung</div>
      <div class="award-name">Gold Award — Setting Global Coding Standards</div>
      <div class="award-year">2016 · Adopted across Engineering Division</div>
    </div>
  </div>
</section>

<!-- CONNECT -->
<section id="connect">
  <div class="section-label">Connect</div>
  <h2 class="section-title">Working on something <em>hard?</em></h2>

  <div class="connect-section">
    <div class="connect-left">
      <p class="connect-sub">
        I'm interested in conversations around AI infrastructure at scale,
        engineering org design, high-reliability fintech systems,
        and counterintuitive leadership. If any of that resonates — let's talk.
      </p>
      <div class="connect-links">
        <a href="http://www.linkedin.com/in/yesarpit" target="_blank" class="connect-link">LinkedIn</a>
        <a href="https://github.com/yesarpit" target="_blank" class="connect-link">GitHub</a>
        <a href="https://www.arpitsharma.me/blog?ref=connect_section" target="_blank" class="connect-link">Blog</a>
        <a href="https://www.credly.com/badges/f49d873f-2763-4bc2-b28b-4dbfd2875180/public_url" target="_blank" class="connect-link">Certifications</a>
      </div>
    </div>
    <div class="connect-right" style="justify-content: flex-start; gap: 1.5rem; background: var(--gold); padding: 2.5rem 2rem;">
      <div style="background: rgba(7,8,13,0.1); padding: 0.4rem 0.8rem; display: inline-block; width: fit-content; border-radius: 2px;">
        <div class="thought-type" style="color: #07080d; margin-bottom: 0; font-weight: 600; font-size: 0.75rem; letter-spacing: 0.1em;">✍️ RECENT WRITING</div>
      </div>
      
      <div class="recent-posts-list" style="display: flex; flex-direction: column; gap: 1.25rem;">
        ${recentPosts.map(post => `
          <div class="recent-post-item" style="position: relative;">
            <a href="/blog/${post.slug}?ref=footer_item" class="footer-blog-link" style="display: block; text-decoration: none !important; color: inherit !important;">
              <div style="font-family: 'DM Mono', monospace; font-size: 0.68rem; color: rgba(7,8,13,0.6); margin-bottom: 0.2rem;">${post.date}</div>
              <div class="footer-blog-title" style="font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-style: italic; color: #07080d; line-height: 1.2; font-weight: 600; display: inline-block;">${post.title}</div>
            </a>
          </div>
        `).join('')}
      </div>
      
      <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid rgba(7,8,13,0.1);">
        <a href="/blog?ref=footer_writing" class="connect-link" style="color: #07080d; font-weight: 600; text-decoration: underline; margin-bottom: 1rem; display: inline-block;">View All Posts ↗</a>
        <br>
        <a href="mailto:arpitsharma.em@gmail.com" class="connect-email" style="color: #07080d; border-color: rgba(7,8,13,0.4); font-weight: 500; font-size: 0.8rem;">arpitsharma.em@gmail.com</a>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-copy">© 2026 Arpit Sharma</div>
  <div class="footer-handle">
    <a href="https://github.com/yesarpit" target="_blank">@yesarpit</a>
    &nbsp;·&nbsp; Pune, India
  </div>
</footer>

</body>
</html>
  `;

  useEffect(() => {
    // This is the trick: we overwrite the entire document content
    // after the initial React render to ensure NO Docusaurus interference.
    const newDoc = new DOMParser().parseFromString(htmlContent, 'text/html');
    
    // 1. Update Title and Meta
    document.title = newDoc.title;
    
    // 2. Clone Head elements (styles, fonts)
    // We filter out common Docusaurus injected styles to keep it pure
    const heads = Array.from(newDoc.head.childNodes);
    heads.forEach(node => {
      if (node.outerHTML) {
        document.head.insertAdjacentHTML('beforeend', node.outerHTML);
      }
    });

    // 3. Update Body content
    document.body.innerHTML = newDoc.body.innerHTML;
    
    // 4. Reset Body styles to match original HTML
    document.body.style.background = "#07080d";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";

    // 5. Company Stats Switcher Logic
    const statsData = {
      PayPal: [
        { n: "17", l: "Years", s: "PayPal · Citi · Lloyds · BT · Samsung" },
        { n: "200+", l: "Countries", s: "PayPal Consumer platform reach" },
        { n: "99.999%", l: "Availability", s: "Five nines · ≈5 min/year downtime" },
        { n: "$6M", l: "Revenue Recovered", s: "Via CDN edge-logic redesign" },
        { n: "70%", l: "Dev Productivity ↑", s: "Via GenAI tooling · agentic workflows" },
        { n: "30+", l: "Engineers Scaled", s: "Across managers & senior ICs" }
      ],
      Citi: [
        { n: "$4T+", l: "Daily Flow", s: "Processing volume across Citi Treasury" },
        { n: "99.95%", l: "Availability", s: "For payment-critical services" },
        { n: "<120ms", l: "P99 Latency", s: "Sub-120ms execution on AWS" },
        { n: "100M+", l: "Requests", s: "Annual consumer request volume" },
        { n: "AWS", l: "Cloud Migration", s: "Monolith to Microservices" },
        { n: "20+", l: "Engineers Managed", s: "High-performance banking teams" }
      ],
      Lloyds: [
        { n: "Top 10", l: "FX House", s: "Global market standing in FX trading" },
        { n: "<10ms", l: "Execution", s: "P99 Real-time FX streaming" },
        { n: "MiFID II", l: "Compliance", s: "Regulated London front-office" },
        { n: "Kafka", l: "Streaming", s: "Event-driven FX standards" },
        { n: "API", l: "Standards", s: "Adopted firm-wide across engineering" },
        { n: "London", l: "Base", s: "Gresham Street · Front Office" }
      ],
      BT: [
        { n: "30M+", l: "UK Customers", s: "Reach of BT's consumer network" },
        { n: "Global", l: "Standards", s: "Set coding patterns for BT/Samsung" },
        { n: "Java", l: "Core", s: "Sun Certified Professional v6" },
        { n: "Full", l: "Stack", s: "Delivering end-to-end telecom apps" },
        { n: "Lead", l: "Role", s: "Mentoring junior & mid-level ICs" },
        { n: "Pune", l: "Base", s: "India Development Center" }
      ],
      Samsung: [
        { n: "1.2B+", l: "Devices Shipped", s: "Global scale of Samsung's ecosystem" },
        { n: "Gold", l: "Award", s: "For Global Coding Standards 2016" },
        { n: "Android", l: "Kernel", s: "Low-level system optimizations" },
        { n: "Mobile", l: "Scale", s: "Shipped on millions of devices" },
        { n: "C++", l: "Perf", s: "High-performance mobile runtimes" },
        { n: "Innovation", l: "Lab", s: "Research & Development focus" }
      ]
    };

    const companyButtons = document.querySelectorAll('.company-name');
    companyButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const company = btn.getAttribute('data-company');
        const data = statsData[company];
        
        // Update Buttons
        companyButtons.forEach(b => b.classList.remove('current'));
        btn.classList.add('current');

        // Update Stats with a small fade animation
        data.forEach((stat, i) => {
          const cell = document.getElementById(`stat-${i}`);
          if (cell) {
            cell.style.opacity = '0';
            setTimeout(() => {
              cell.querySelector('.stat-number').textContent = stat.n;
              cell.querySelector('.stat-label').textContent = stat.l;
              cell.querySelector('.stat-sub').textContent = stat.s;
              cell.style.opacity = '1';
            }, 150);
          }
        });
      });
    });

    // Add CSS for fade transition if not present
    const style = document.createElement('style');
    style.textContent = '.stat-cell { transition: opacity 0.2s ease-in-out; }';
    document.head.appendChild(style);
    
    // Cleanup function if needed
    return () => {
      // Restore defaults if navigating away
      document.body.style.background = "";
    };
  }, []);

  // Return a minimal div during the initial micro-second load
  return (
    <div style={{ background: '#07080d', minHeight: '100vh', color: '#f0ede6' }}>
      {/* Fallback content for SEO if JS is disabled */}
      <h1 style={{ opacity: 0 }}>Arpit Sharma</h1>
    </div>
  );
}
