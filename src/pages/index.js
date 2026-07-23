import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';

export default function Home() {
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.style.background = "#ffffff";
    document.documentElement.style.backgroundColor = "#ffffff";
    document.body.style.background = "#ffffff";
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";

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

    const companyButtons = document.querySelectorAll('.mp-company-name');
    companyButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const company = btn.getAttribute('data-company');
        const data = statsData[company];
        
        companyButtons.forEach(b => b.classList.remove('mp-current'));
        btn.classList.add('mp-current');

        data.forEach((stat, i) => {
          const cell = document.getElementById('stat-' + i);
          if (cell) {
            cell.querySelector('.mp-stat-number').textContent = stat.n;
            cell.querySelector('.mp-stat-label').textContent = stat.l;
            cell.querySelector('.mp-stat-sub').textContent = stat.s;
          }
        });
      });
    });

    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Arpit Sharma</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: `
<style>
  :root {
    --bg: #ffffff;
    --text: #111111;
    --muted: #555555;
    --border: #e5e5e5;
    --accent: #0056b3;
  }
  .minimal-page * { box-sizing: border-box; }
  .minimal-page {
    background: var(--bg) !important;
    color: var(--text) !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    line-height: 1.6;
    margin: 0 auto;
    max-width: 900px;
    padding: 2rem;
  }
  .minimal-page a { color: var(--accent); text-decoration: none; }
  .minimal-page a:hover { text-decoration: underline; }
  
  .minimal-page nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border);
    padding-bottom: 1rem;
    margin-bottom: 3rem;
  }
  .minimal-page .mp-nav-logo { font-weight: bold; font-size: 1.25rem; }
  .minimal-page .mp-nav-links { display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0; }
  .minimal-page .mp-nav-links a { color: var(--muted); }
  .minimal-page .mp-nav-links a:hover { color: var(--text) !important; }
  
  .minimal-page section { margin-bottom: 4rem; }
  .minimal-page .mp-section-label { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 0.5rem; }
  .minimal-page .mp-section-title { font-size: 2rem; margin-top: 0; margin-bottom: 2rem; font-weight: 600; line-height: 1.2; }
  
  .minimal-page .mp-hero { margin-bottom: 5rem; }
  .minimal-page .mp-hero-eyebrow { font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--muted); }
  .minimal-page .mp-hero-name { font-size: 3rem; margin: 0.5rem 0; font-weight: 700; line-height: 1.1; }
  .minimal-page .mp-hero-tagline { font-size: 1.25rem; color: var(--muted); max-width: 40ch; margin-bottom: 2rem; }
  .minimal-page .mp-hero-actions { display: flex; gap: 1rem; margin-bottom: 3rem; }
  .minimal-page .mp-btn-primary, .minimal-page .mp-btn-secondary {
    padding: 0.75rem 1.5rem; border-radius: 4px; font-weight: 500; font-size: 0.9rem;
    display: inline-block;
  }
  .minimal-page .mp-btn-primary { background: var(--text) !important; color: var(--bg) !important; border: 1px solid var(--text) !important; }
  .minimal-page .mp-btn-primary:hover { background: var(--muted); border-color: var(--muted); text-decoration: none; color: var(--bg) !important; }
  .minimal-page .mp-btn-secondary { background: transparent; color: var(--text) !important; border: 1px solid var(--border); }
  .minimal-page .mp-btn-secondary:hover { border-color: var(--muted); text-decoration: none; }
  
  .minimal-page .mp-stats-container { border: 1px solid var(--border); border-radius: 8px; padding: 2rem; }
  .minimal-page .mp-stat-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem; }
  .minimal-page .mp-stat-number { font-size: 2.5rem; font-weight: 300; line-height: 1; margin-bottom: 0.5rem; color: var(--text) !important; }
  .minimal-page .mp-stat-label { font-size: 0.85rem; font-weight: 600; text-transform: uppercase; color: var(--muted); }
  .minimal-page .mp-stat-sub { font-size: 0.85rem; color: var(--muted); margin-top: 0.25rem; }
  .minimal-page .mp-company-strip { display: flex; gap: 1rem; align-items: center; border-top: 1px solid var(--border); padding-top: 1.5rem; flex-wrap: wrap; }
  .minimal-page .mp-company-label { font-size: 0.85rem; color: var(--muted); text-transform: uppercase; }
  .minimal-page .mp-company-name { background: none; border: 1px solid transparent; padding: 0.25rem 0.5rem; cursor: pointer; font-size: 0.9rem; color: var(--muted); border-radius: 4px; }
  .minimal-page .mp-company-name:hover { background: #f5f5f5; color: var(--text) !important; }
  .minimal-page .mp-company-name.mp-current { background: #f0f0f0; color: var(--text) !important; font-weight: 600; border-color: var(--border); }
  
  .minimal-page .mp-rare-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
  .minimal-page .mp-rare-card { border: 1px solid var(--border); padding: 1.5rem; border-radius: 8px; }
  .minimal-page .mp-rare-card-title { font-weight: 600; margin-bottom: 1rem; font-size: 1.1rem; }
  .minimal-page .mp-reg-badges { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
  .minimal-page .mp-reg-badge { font-size: 0.75rem; background: #f5f5f5; border: 1px solid var(--border); padding: 0.1rem 0.4rem; border-radius: 4px; color: var(--muted); }
  
  .minimal-page .mp-moments-list { display: flex; flex-direction: column; gap: 2rem; }
  .minimal-page .mp-moment { display: flex; gap: 1.5rem; }
  .minimal-page .mp-moment-num { font-size: 1.5rem; font-weight: 300; color: var(--muted); width: 40px; }
  .minimal-page .mp-moment-title { font-size: 1.25rem; font-weight: 600; margin: 0 0 0.5rem 0; }
  .minimal-page .mp-moment-body { color: var(--muted); margin-bottom: 0.5rem; }
  .minimal-page .mp-moment-tag { font-size: 0.8rem; color: var(--muted); background: #f5f5f5; padding: 0.1rem 0.4rem; border-radius: 4px; }
  
  .minimal-page .mp-arc-timeline { display: flex; flex-direction: column; gap: 2rem; border-left: 2px solid var(--border); padding-left: 1.5rem; margin-left: 0.5rem; }
  .minimal-page .mp-arc-item { position: relative; }
  .minimal-page .mp-arc-item::before { content: ''; position: absolute; left: -24px; top: 6px; width: 12px; height: 12px; border-radius: 50%; background: var(--bg) !important; border: 2px solid var(--border); }
  .minimal-page .mp-arc-item.mp-current::before { border-color: var(--text) !important; background: var(--text) !important; }
  .minimal-page .mp-arc-years { font-size: 0.85rem; font-weight: 600; color: var(--muted); margin-bottom: 0.25rem; }
  .minimal-page .mp-arc-company { font-weight: 600; font-size: 1.1rem; }
  .minimal-page .mp-arc-role { color: var(--muted); font-size: 0.95rem; }
  .minimal-page .mp-arc-location { font-size: 0.85rem; color: var(--muted); }
  .minimal-page .mp-arc-award { display: inline-block; font-size: 0.75rem; background: #fff8e1; color: #b38600; padding: 0.1rem 0.4rem; border-radius: 4px; margin-top: 0.25rem; }
  
  .minimal-page .mp-thought-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
  .minimal-page .mp-thought-card { border: 1px solid var(--border); padding: 1.5rem; border-radius: 8px; }
  .minimal-page .mp-thought-type { font-size: 0.8rem; text-transform: uppercase; color: var(--muted); margin-bottom: 1rem; font-weight: 600; }
  .minimal-page .mp-thought-title { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; }
  .minimal-page .mp-thought-body { color: var(--muted); }
  
  .minimal-page .mp-awards-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }
  .minimal-page .mp-award-card { border: 1px solid var(--border); padding: 1.25rem; border-radius: 8px; }
  .minimal-page .mp-award-org { font-size: 0.8rem; text-transform: uppercase; color: var(--muted); margin-bottom: 0.5rem; }
  .minimal-page .mp-award-name { font-weight: 600; margin-bottom: 0.25rem; }
  .minimal-page .mp-award-year { font-size: 0.85rem; color: var(--muted); }
  
  .minimal-page .mp-connect-section { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; }
  .minimal-page .mp-connect-sub { color: var(--muted); margin-bottom: 1.5rem; }
  .minimal-page .mp-connect-links { display: flex; flex-direction: column; gap: 0.75rem; }
  .minimal-page .mp-recent-writing { border: 1px solid var(--border); padding: 1.5rem; border-radius: 8px; background: #fafafa; }
  
  .minimal-page footer { border-top: 1px solid var(--border); padding-top: 2rem; display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--muted); }
  
  @media (max-width: 600px) {
    .minimal-page .mp-nav-links { display: none; }
    .minimal-page .mp-hero-name { font-size: 2.5rem; }
  }
</style>

<div class="minimal-page">
<nav>
  <ul class="mp-nav-links">
    <li><a href="#career">Career</a></li>
    <li><a href="#moments">Work</a></li>
    <li><a href="#thinking">Thinking</a></li>
    <li><a href="#connect">Connect</a></li>
  </ul>
  <div>
    <a href="/blog" style="margin-right: 1rem;">Blog</a>
    <a href="http://www.linkedin.com/in/yesarpit" target="_blank">LinkedIn</a>
  </div>
</nav>

<section class="mp-hero">
  <div class="mp-hero-eyebrow">Engineering Executive · Fintech · AI Infrastructure</div>
  <h1 class="mp-hero-name">Arpit Sharma</h1>
  <p class="mp-hero-tagline">
    17 years directing engineering organizations and shaping technology strategy —
    across <strong>payments, FX trading, and AI infrastructure</strong>.
    My focus is on scaling global platforms, managing risk, and aligning teams to deliver measurable business outcomes.
  </p>
  <div class="mp-hero-actions">
    <a href="#moments" class="mp-btn-primary">See My Work</a>
    <a href="#connect" class="mp-btn-secondary">Let's Connect</a>
  </div>

  <div class="mp-stats-container">
    <div id="stats-content">
      <div class="mp-stat-row">
        <div class="mp-stat-cell" id="stat-0">
          <div class="mp-stat-number">17</div>
          <div class="mp-stat-label">Years</div>
          <div class="mp-stat-sub">PayPal · Citi · Lloyds · BT · Samsung</div>
        </div>
        <div class="mp-stat-cell" id="stat-1">
          <div class="mp-stat-number">200+</div>
          <div class="mp-stat-label">Countries</div>
          <div class="mp-stat-sub">PayPal Consumer platform reach</div>
        </div>
        <div class="mp-stat-cell" id="stat-2">
          <div class="mp-stat-number">99.999%</div>
          <div class="mp-stat-label">Availability</div>
          <div class="mp-stat-sub">Five nines · ≈5 min/year downtime</div>
        </div>
      </div>
      <div class="mp-stat-row">
        <div class="mp-stat-cell" id="stat-3">
          <div class="mp-stat-number">$6M</div>
          <div class="mp-stat-label">Revenue Recovered</div>
          <div class="mp-stat-sub">Via CDN edge-logic redesign</div>
        </div>
        <div class="mp-stat-cell" id="stat-4">
          <div class="mp-stat-number">70%</div>
          <div class="mp-stat-label">Dev Productivity ↑</div>
          <div class="mp-stat-sub">Via GenAI tooling · agentic workflows</div>
        </div>
        <div class="mp-stat-cell" id="stat-5">
          <div class="mp-stat-number">30+</div>
          <div class="mp-stat-label">Engineers Scaled</div>
          <div class="mp-stat-sub">Across managers & senior ICs</div>
        </div>
      </div>
    </div>
    
    <div class="mp-company-strip">
      <span class="mp-company-label">Built at</span>
      <button class="mp-company-name mp-current" data-company="PayPal">PayPal</button>
      <button class="mp-company-name" data-company="Citi">Citi</button>
      <button class="mp-company-name" data-company="Lloyds">Lloyds</button>
      <button class="mp-company-name" data-company="BT">BT</button>
      <button class="mp-company-name" data-company="Samsung">Samsung</button>
    </div>
  </div>
</section>

<section>
  <div class="mp-section-label">How I Tend to Work</div>
  <h2 class="mp-section-title">The intersection of systems, reliability, and teams.</h2>
  <div class="mp-rare-grid">
    <div class="mp-rare-card">
      <div class="mp-rare-card-title">Systems</div>
      <p>Directed the engineering of PayPal's <strong>autonomous AI Agent platform</strong> powering consumer experiences across 200+ countries. Sponsored Citi's algorithmic trading PWA with sub-120ms P99 latency. Guided the architecture for Lloyds' FX streaming solution at <strong>sub-10ms execution</strong> under live market conditions.</p>
      <div class="mp-reg-badges"><span class="mp-reg-badge">Kafka</span><span class="mp-reg-badge">AWS</span><span class="mp-reg-badge">Microservices</span><span class="mp-reg-badge">LangGraph</span><span class="mp-reg-badge">RAG</span></div>
    </div>
    <div class="mp-rare-card">
      <div class="mp-rare-card-title">Reliability</div>
      <p>Sustained <strong>99.999% platform availability</strong> across PayPal's consumer payment infrastructure. Incident command procedures with <strong>RTO under 10 minutes</strong>, RPO under 2 minutes. Quarterly disaster recovery rehearsals across AWS multi-region deployments.</p>
      <div class="mp-reg-badges"><span class="mp-reg-badge">SOX</span><span class="mp-reg-badge">PCI-DSS L1</span><span class="mp-reg-badge">FCA</span><span class="mp-reg-badge">MiFID II</span><span class="mp-reg-badge">GDPR</span><span class="mp-reg-badge">RBI</span></div>
    </div>
    <div class="mp-rare-card">
      <div class="mp-rare-card-title">Teams</div>
      <p>Scaled high-leverage engineering teams and re-architected organizational design. Established competency frameworks adopted across PayPal India's Consumer org. Accelerated delivery velocity and reduced time-to-hire by <strong>35%</strong> while building robust succession plans and leadership standards.</p>
      <div class="mp-reg-badges"><span class="mp-reg-badge">Org Design</span><span class="mp-reg-badge">Levelling</span><span class="mp-reg-badge">Succession</span><span class="mp-reg-badge">P&L</span></div>
    </div>
  </div>
</section>

<section id="moments">
  <div class="mp-section-label">Key Projects</div>
  <h2 class="mp-section-title">Selected Work</h2>
  <div class="mp-moments-list">
    <div class="mp-moment">
      <div class="mp-moment-num">01</div>
      <div>
        <h3 class="mp-moment-title">Recovering Revenue at the Edge</h3>
        <p class="mp-moment-body">Identified a strategic data visibility gap across <strong>100M yearly consumer requests</strong>. Directed the engineering of a segment-specific CDN edge-logic solution that closed the gap, recovering <strong>$6M in annualised revenue</strong> and streamlining time-to-market by 96%.</p>
        <span class="mp-moment-tag">PayPal · 2023–Present</span>
      </div>
    </div>
    <div class="mp-moment">
      <div class="mp-moment-num">02</div>
      <div>
        <h3 class="mp-moment-title">Maintaining 99.999% Availability</h3>
        <p class="mp-moment-body">Governed the reliability architecture for consumer payment infrastructure across 200+ countries to sustain <strong>99.999% availability</strong>. Institutionalized enterprise-grade incident command procedures, regular DR rehearsals, and resilient AWS multi-region designs, keeping <strong>P99 API latency below 200ms</strong>.</p>
        <span class="mp-moment-tag">🏆 PayPal Highest Availability Award 2024-25</span>
      </div>
    </div>
    <div class="mp-moment">
      <div class="mp-moment-num">03</div>
      <div>
        <h3 class="mp-moment-title">Scaling GenAI Workflows</h3>
        <p class="mp-moment-body">Led the enterprise adoption of production-grade <strong>agentic workflow orchestration and LLM evaluation guardrails</strong> into the consumer platform. This strategic initiative lifted developer productivity by 70% through automated testing and intelligent PR reviews.</p>
        <span class="mp-moment-tag">AI Agents · LangGraph · LLM Ops</span>
      </div>
    </div>
    <div class="mp-moment">
      <div class="mp-moment-num">04</div>
      <div>
        <h3 class="mp-moment-title">Monolith to Microservices at Citi — While Staying Regulated</h3>
        <p class="mp-moment-body">Directed a large-scale cloud modernization at a global bank inside <strong>SOX technology controls, PCI-DSS Level 1, and CCAR data integrity requirements</strong> simultaneously. Overseen the migration of Citi's monolith onto OpenShift and AWS with a full SRE observability stack — achieving <strong>99.95% availability SLA</strong> and P99 latency below 120ms for payment-critical services.</p>
        <span class="mp-moment-tag">🏆 Cloud Migration Award — Citi 2022</span>
      </div>
    </div>
    <div class="mp-moment">
      <div class="mp-moment-num">05</div>
      <div>
        <h3 class="mp-moment-title">Sub-10ms FX Execution at Lloyds, Under MiFID II</h3>
        <p class="mp-moment-body">Delivered a <strong>real-time cross-currency conversion streaming solution</strong> for Lloyds' front-office FX trading desks — achieving sub-10ms P99 execution latency under live market conditions, within MiFID II pre and post-trade reporting obligations and FCA conduct rules. Built the firm-wide contract-driven API standards.</p>
        <span class="mp-moment-tag">Lloyds Bank · London · 2016–17</span>
      </div>
    </div>
  </div>
</section>

<section id="career">
  <div class="mp-section-label">Career Arc</div>
  <h2 class="mp-section-title">17 years. Fintech, banking, and consumer platforms.</h2>
  <div class="mp-arc-timeline">
    <div class="mp-arc-item mp-current">
      <div class="mp-arc-years">2023–Present</div>
      <div class="mp-arc-company">PayPal</div>
      <div class="mp-arc-role">Engineering Head · Consumer & Marketing Technology Platforms</div>
      <div class="mp-arc-location">Pune, India</div>
      <div><span class="mp-arc-award">🏆 Highest Availability Award 2024-25</span></div>
    </div>
    <div class="mp-arc-item">
      <div class="mp-arc-years">2017–2023</div>
      <div class="mp-arc-company">Citibank (Citi)</div>
      <div class="mp-arc-role">VP of Engineering · Payments & Analytics</div>
      <div class="mp-arc-location">Pune, India</div>
      <div><span class="mp-arc-award">🏆 Cloud Migration Award 2022</span> <span class="mp-arc-award">🥈 Silver Award UI Innovation 2020</span></div>
    </div>
    <div class="mp-arc-item">
      <div class="mp-arc-years">2016–2017</div>
      <div class="mp-arc-company">Lloyds Bank</div>
      <div class="mp-arc-role">Senior Engineer / Engineering Consultant · FX Trading</div>
      <div class="mp-arc-location">London, UK</div>
    </div>
    <div class="mp-arc-item">
      <div class="mp-arc-years">2009–2016</div>
      <div class="mp-arc-company">BT (British Telecom) & Samsung</div>
      <div class="mp-arc-role">Full Stack Developer → Engineering Lead</div>
      <div class="mp-arc-location">Pune, India</div>
      <div><span class="mp-arc-award">🥇 Gold Award Global Coding Standards 2016</span></div>
    </div>
  </div>
</section>

<section id="thinking">
  <div class="mp-section-label">Thought Leadership</div>
  <h2 class="mp-section-title">Beyond the day job</h2>
  <div class="mp-thought-grid">
    <div class="mp-thought-card">
      <div class="mp-thought-type">📘 Book · Forthcoming</div>
      <h3 class="mp-thought-title">"Take Wrong Decisions"</h3>
      <p class="mp-thought-body">A leadership framework on counterintuitive decision-making for engineering executives — drawn from 17 years of high-stakes delivery across global financial institutions. The premise: the decisions that feel wrong in the moment are often the ones that build the most durable systems, teams, and organisations.</p>
    </div>
    <div class="mp-thought-card">
      <div class="mp-thought-type">🎓 Currently Learning</div>
      <ul style="margin: 0; padding-left: 1rem; color: var(--muted); font-size: 0.95rem;">
        <li style="margin-bottom: 0.5rem;"><strong>MIT</strong> — Advanced Program in Technology Leadership 2026</li>
        <li style="margin-bottom: 0.5rem;"><strong>IIT Madras</strong> — AI & Machine Learning Program 2025</li>
        <li style="margin-bottom: 0.5rem;"><strong>DeepLearning.AI</strong> — Generative AI with LLMs 2025</li>
        <li style="margin-bottom: 0.5rem;"><strong>DeepLearning.AI</strong> — AI Agents in LangGraph 2025</li>
      </ul>
    </div>
  </div>
</section>

<section>
  <div class="mp-section-label">Recognition</div>
  <h2 class="mp-section-title">Work that got noticed</h2>
  <div class="mp-awards-row">
    <div class="mp-award-card">
      <div class="mp-award-org">🚀 Live App</div>
      <div class="mp-award-name"><a href="https://goaltracker.online/" target="_blank">Goal Tracker ↗</a></div>
      <div class="mp-award-year">2026 · Frictionless, high-performance web app for goal tracking</div>
    </div>
    <div class="mp-award-card">
      <div class="mp-award-org">🏆 PayPal</div>
      <div class="mp-award-name">Highest Availability Award</div>
      <div class="mp-award-year">2024 – 25 · 99.999% Uptime Consumer Platforms</div>
    </div>
    <div class="mp-award-card">
      <div class="mp-award-org">🏆 Citi</div>
      <div class="mp-award-name">Cloud Migration Award</div>
      <div class="mp-award-year">2022 · Monolith → Microservices on AWS & OpenShift</div>
    </div>
    <div class="mp-award-card">
      <div class="mp-award-org">🥈 Citi</div>
      <div class="mp-award-name">Silver Award for Innovation in User Interfaces</div>
      <div class="mp-award-year">2020 · Mobile & PWA Delivery</div>
    </div>
    <div class="mp-award-card">
      <div class="mp-award-org">🥇 Samsung</div>
      <div class="mp-award-name">Gold Award</div>
      <div class="mp-award-year">2016 · Setting Global Coding Standards</div>
    </div>
  </div>
</section>

<section id="connect">
  <div class="mp-section-label">Connect</div>
  <h2 class="mp-section-title">Working on something hard?</h2>
  <div class="mp-connect-section">
    <div>
      <p class="mp-connect-sub">
        I'm interested in conversations around AI infrastructure at scale,
        engineering org design, high-reliability fintech systems,
        and counterintuitive leadership. If any of that resonates — let's talk.
      </p>
      <div class="mp-connect-links">
        <a href="mailto:arpitsharma.em@gmail.com">arpitsharma.em@gmail.com</a>
        <a href="http://www.linkedin.com/in/yesarpit" target="_blank">LinkedIn</a>
        <a href="https://github.com/yesarpit" target="_blank">GitHub</a>
        <a href="https://www.credly.com/badges/f49d873f-2763-4bc2-b28b-4dbfd2875180/public_url" target="_blank">Certifications</a>
      </div>
    </div>
    <div class="mp-recent-writing">
      <div class="mp-thought-type">✍️ Recent Writing</div>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        
          <div>
            <div style="font-size: 0.8rem; color: var(--muted);">2026-04-19</div>
            <a href="/blog/safe-media-migration-ai" style="font-weight: 600; color: var(--text) !important; font-size: 1.1rem; line-height: 1.2; display: block; margin-top: 0.2rem;">Reclaiming 50GB+ Mac Storage Safely: A Journey from 'Disk Full' to AI-Powered Deduping</a>
          </div>
        
          <div>
            <div style="font-size: 0.8rem; color: var(--muted);">2026-03-18</div>
            <a href="/blog/lessons-i-am-trying-not-to-forget" style="font-weight: 600; color: var(--text) !important; font-size: 1.1rem; line-height: 1.2; display: block; margin-top: 0.2rem;">Lessons I Am Trying Not to Forget</a>
          </div>
        
          <div>
            <div style="font-size: 0.8rem; color: var(--muted);">2026-02-06</div>
            <a href="/blog/memos-i-wish-more-leaders-wrote" style="font-weight: 600; color: var(--text) !important; font-size: 1.1rem; line-height: 1.2; display: block; margin-top: 0.2rem;">Memos I Wish More Leaders Wrote</a>
          </div>
        
      </div>
      <a href="/blog" style="display: inline-block; margin-top: 1.5rem; font-weight: 600;">View All Posts ↗</a>
    </div>
  </div>
</section>

<footer>
  <div>© 2026 Arpit Sharma</div>
  <div>
    <a href="https://goaltracker.online/" target="_blank">Goal Tracker</a> · 
    <a href="https://github.com/yesarpit" target="_blank">@yesarpit</a> · 
    Pune, India
  </div>
</footer>
</div>
` }} />
    </>
  );
}
