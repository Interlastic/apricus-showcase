
# Apricus — all-in-one Discord bot

![Apricus showcase card](og-image.png)

Apricus is a zero-config, all-in-one Discord bot: moderation, leveling, economy,
starboard, trivia, scheduled events, one-tap setup and utilities — live from a
single install. 80+ slash commands, no dashboard, no config files.

**➕ [Add Apricus to your server](https://apricus.mingalabs.com/install.html)** — one click, pick your server, done.

**Live showcase:** https://apricus.mingalabs.com/

**Community server:** https://discord.gg/FZzsqF5DC5

## What it does

| Domain | Highlights |
| --- | --- |
| Moderation | warnings, mutes, timeouts, case log, audit-friendly mod commands |
| Leveling | XP, ranks, role rewards, `/rank` leaderboard |
| Economy | currency, shop, `/daily` rewards |
| Starboard | star-pinned highlights per server |
| Trivia & events | `/dailytrivia`, scheduled events, polls |
| Quick setup | `/setup` and `/tour` one-tap configuration for a new server |
| Utilities | reminders, feedback, changelog, autorole, referrals, server analytics |
| Referrals | `/installref` mints your own install link — 250 Apricots when someone adds Apricus to a new server from it. They can run `/installclaim <code>` there to credit you instead of the default attribution |

## MEE6 alternative (and why not Carl-bot either)

One install instead of three bots: moderation, leveling, economy, starboard and
trivia together, configured in about 30 seconds with `/quicksetup` - no dashboard,
no config file, no premium paywall for the basics.
Side-by-side comparison: https://apricus.mingalabs.com/mee6-alternative.html

### The comparison, in short

| | Apricus | A typical freemium leveling bot |
| --- | --- | --- |
| `/rank`, `/leaderboard`, `/xpstats`, `/levelup` | Included, no tier to unlock | Often the paid feature |
| Level/XP roles | Included | Commonly premium-gated |
| Moderation, autorole, welcome, starboard, trivia, economy | Included in the same install | Separate bots or add-ons |
| Setup | `/quicksetup`, about 30 seconds, no dashboard | Web dashboard + config steps |
| Billing | No billing code exists in the project | Free tier plus paid tiers |

Two honest caveats, because a comparison that hides them is advertising:

- **XP history does not transfer.** Levels start from zero; Apricus keeps its own XP database and cannot read another bot's storage. Use `/addxp` to credit long-time members.
- **It is not a MEE6 clone.** No stream alerts, no plugin marketplace, no hosted web dashboard. If you need those specifically, this is not that product.

Verify the paywall claim yourself in five minutes: invite Apricus, run `/quicksetup`, and check that every leveling command works before you decide. Compare the incumbent's current pricing page too - tiers change and I would rather point you at the source than quote a number that goes stale.

## Quick start

1. **[Add Apricus](https://apricus.mingalabs.com/install.html)** and pick your server.
2. Run `/quicksetup` — it creates its own channels and flips itself on. About 30 seconds.
3. Run `/tour` to see what is available, or `/daily` to try something immediately.

No dashboard. No config file. Nothing to paste into a web form.

## FAQ

**Is it free?** Yes. Every feature listed above is available without a premium tier.
**Is it open source?** No. Apricus is a closed-source hosted service; this repo holds only the landing pages.
**What data do you collect?** Per-server settings and the minimum needed to run the features you use. The public site uses one privacy-minimal page counter (Abacus) — no cross-site tracking, fingerprinting or profiling.
**Do I need administrator to set it up?** The one-tap and `/quicksetup` flows need "Manage Server", the same bar every setup command advertises.

## Pages in this repository

- [`index.html`](https://apricus.mingalabs.com/index.html) — main showcase
- [`mee6-alternative.html`](https://apricus.mingalabs.com/mee6-alternative.html) — MEE6 alternative comparison
- [`discord-moderation-bot.html`](https://apricus.mingalabs.com/discord-moderation-bot.html) — moderation bot feature breakdown
- [`index_new_design.html`](https://apricus.mingalabs.com/index_new_design.html) — alternate layout
- [`discord-permissions-calculator.html`](https://apricus.mingalabs.com/discord-permissions-calculator.html) — interactive permissions calculator

## Why this repo

This repository serves the public landing pages for the bot via GitHub Pages.
If you are evaluating Apricus, start at the showcase above, or install the bot and
run `/tour`.

Apricus is a hosted service. This repository contains only the public landing pages listed above -- not the bot's source code. Apricus is not open-source, and there is no source repository to read or fork.

Everything is configured per-server with slash commands.
