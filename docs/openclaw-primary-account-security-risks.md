---
sidebar_position: 7
title: "Running OpenClaw on Your Primary Account Is a Security Disaster"
---

### Read This

I am going to keep this short.

If you run OpenClaw on your primary account and it gets compromised, you have not lost one thing.

You have lost everything.

Not "potentially." Not "maybe someday."

Immediately. Permanently.

___

<div style={{
  background: '#ffffff',
  border: '1px solid #e1e4e8',
  borderRadius: '12px',
  padding: '1.5rem',
  margin: '2rem 0',
  overflowX: 'auto',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  WebkitOverflowScrolling: 'touch'
}}>
  <img
    src="/img/openclaw_primary_account_risks.svg"
    alt="OpenClaw on primary account — blast radius and attack paths"
    style={{
      display: 'block',
      width: '100%',
      minWidth: '1000px',
      height: 'auto'
    }}
  />
</div>

___

### What OpenClaw actually runs with

OpenClaw runs as you.

Not root. Not a sandbox.

Your user.

That means the moment something inside it goes wrong — a malicious skill, a prompt injection, an unpatched CVE — whatever broke in has your permissions.

And your permissions include:

* `~/.ssh` — all your private keys
* `~/.openclaw/openclaw.json` — every API credential you ever added
* `~/Library/Safari` or Chrome — every logged-in session you have open
* Your keychain — if it is unlocked, it is readable

That is not a theoretical threat model.

That is how filesystems work.

___

### What happens when it is compromised

One compromised process. One account. And the attacker has a path to everything connected to your identity.

Let me break it down by timeline.

**Seconds after compromise**

A security researcher documented this in a real test. They sent an email to a user with a prompt injection embedded in the body. The bot processed it, read `~/.ssh/`, and handed the private key out to a Discord channel. No prompts. No confirmations.

Another test: asking the bot to run `find ~` caused it to dump the entire home directory into a group chat. Exposing API keys, config files, everything.

These are not theoretical. These are documented incidents.

**Hours after compromise**

Once they have your SSH keys, they have every server you can reach.

Once they have your browser cookies, they have permanent sessions. Which gives them your email. Which gives them password reset access to every account you own.

Once they have your GitHub API key, they can commit backdoors into your repos. Now every developer who clones your code is at risk too.

___

### The CVE situation is not getting better

In April 2026, OpenClaw patched 13 CVEs.

The worst one was CVE-2026-35639 (CVSS 8.7): unauthenticated callers could escalate to full operator access on instances without auth enabled. Remotely exploitable. Zero credentials required.

CVE-2026-32922 is worse. One API call converts a pairing token to full admin with remote code execution. With 135,000+ exposed instances, 63% running with no authentication layer.

CVE-2026-41329 is a sandbox bypass at CVSS 9.9. Attackers can escape the sandbox entirely and execute arbitrary operations.

These are not bugs in obscure edge cases.

They are in the main execution path.

On a primary account, missing even one patch is unforgivable.

___

### The credential problem is structural

OpenClaw stores all your API keys in one plaintext file.

Every skill can read it.

There is no scoping. There is no "this skill only gets access to X." Every skill on the ring has access to every key on the ring.

In early 2026, the ClawHavoc campaign exploited exactly this. 341 malicious skills were discovered in ClawHub — over 12% of the registry — all targeting one thing: `~/.openclaw/`.

This is not a configuration problem you can fix.

It is an architectural one.

___

### Why the dedicated account matters

Here is the comparison.

**On a dedicated `openclaw-agent` account:**

* Attacker gets that user's files only
* Cannot reach your SSH keys
* Cannot reach your browser cookies
* Cannot reach your API credentials
* Cannot reach your keychain

Recovery is simple: delete the account, create a new one.

**On your primary account:**

* Attacker gets everything
* Full identity compromise
* Recovery means changing every password, rotating every key, scanning for backdoors, and hoping you caught all of them

| Scenario | Risk | Recovery Time |
|---|---|---|
| Dedicated account | Limited to agent data | Minutes |
| Primary account | Total identity compromise | Weeks |
| Primary + no isolation | Permanent backdoor access | Months (if ever) |

___

### What I would apply

Practical version:

1. create a dedicated OS user for OpenClaw — `openclaw-agent` or similar
2. do not put production credentials in that account's keychain
3. store only what the agent strictly needs
4. use Tailscale Serve if you need remote access, not raw exposure
5. treat the agent account like a contractor with limited office access — not a co-owner

___

### Why security people are loud about this

Because the tool went viral before the defaults were safe.

Developers are running it on primary machines with production credentials and default configuration.

The tool is powerful. The architecture is risky. That combination is why isolation is not optional.

___

### Final thought

This is not a judgment call about whether OpenClaw is good or bad.

It is a risk management call.

The blast radius on your primary account is total. The blast radius on a dedicated account is contained.

Use the separate account.

Or use Tailscale Serve to manage it remotely.

Or do not use it at all if you cannot isolate it.

But running it with full access to your SSH keys, browser sessions, and credentials is not convenience.

It is leaving the door unlocked.
