# SUPERSEDED - use public/SUBMIT-NOW.md

This file is kept only so old links still work. The authoritative submission doc is public/SUBMIT-NOW.md.

Canonical invite: https://discord.gg/FZzsqF5DC5

--- archived below ---

# Apricus — Directory Submission Packet

**Goal:** a human pastes this into a bot directory in under 60 seconds, with zero thinking.

## Verification header

**VERIFIED against ground truth (paste as-is):**
- **Bot name, command list, intents, library + version** — read from the live command tree in `data/runtime_diagnostics.json` on this machine (80+ commands; discord.py 2.6.4; Python 3.10.12). Every command name in this packet appears in that live list.
- **Invite link and support invite** — read from `bot/cogs/invite.py` (`FALLBACK_INVITE`) and `public/directory-copy.md`.
- **Bot client ID** — `1565375148717121616`, taken from the live OAuth2 authorize URL in `public/directory-copy.md`.
- **Prefix behaviour** — `command_prefix=commands.when_mentioned_or("!")` in `bot/bot_runner.py:57`. Slash commands are the primary interface; `!` / @mention exist only as a legacy fallback.

**NEEDS HUMAN (cannot be verified from this machine):**
- Directory **account login** for each site (must be a human's Discord OAuth login).
- **Bot avatar / banner images** (no hosted asset exists; upload from your Discord developer portal).
- **Exact submit-form field labels** for discordbotlist.com and dlist.space — their *public homepages* were fetched (categories/tags confirmed), but the logged-in submit form itself was not. Field names below marked `(verify label)` are best-guess labels for real concepts.
- **discord.bots.gg** — not fetched this session. Do not fill from this packet; see its own section.

---

## Universal values (identical on every directory)

**Bot name**
```
Apricus
```

**Bot client ID / application ID**
```
1565375148717121616
```

**Invite / OAuth2 link**
```
https://discord.com/api/oauth2/authorize?client_id=1565375148717121616&permissions=564496410471639&scope=bot%20applications.commands
```

**Website**

https://apricus.mingalabs.com/

**Support server invite**
```
https://discord.gg/FZzsqF5DC5
```

**Prefix**
```
Slash commands only (no text prefix needed). Legacy fallback: ! or @mention
```

**Library**
```
discord.py
```

**Library version**
```
discord.py 2.6.4 on Python 3.10.12
```

**Privileged intents (if asked)**
```
Message Content, Server Members, Server Presences (also enabled: Guilds, Guild Messages, Invites, Voice States, Guild Scheduled Events)
```

**Is the bot free?**
```
Yes — all features free
```

---

## top.gg

**Bot name**
```
Apricus
```

**Short description** *(top.gg limit is 200 characters; this is 138)*
```
Apricus: slash-command setup, moderation, XP and levels, economy, welcome and autorole, polls, reminders and starboard in one Discord bot.
```

**Long description / page** — paste the READY TO PASTE block at the bottom.

**Prefix**
```
Slash commands only (no text prefix needed)
```

**Library**
```
discord.py
```

**Tags** *(pick from top.gg's tag list; these match Apricus' real features)*
```
Moderation, Utility, Leveling, Economy, Fun, Autorole, Welcome, Polls, Starboard
```

**Category**
```
Utility
```

**Support server**
```
https://discord.gg/FZzsqF5DC5
```

**Website** — see DO NOT FILL.

---

## discordbotlist.com

**Bot name**
```
Apricus
```

**Short description** *(their list cards show roughly one line; the 138-char string above fits)*
```
Apricus: slash-command setup, moderation, XP and levels, economy, welcome and autorole, polls, reminders and starboard in one Discord bot.
```

**Description / long** — paste the READY TO PASTE block at the bottom.

**Prefix**
```
Slash commands only (no text prefix needed)
```

**Library (verify label)**
```
discord.py
```

**Categories** *(these category names are live on discordbotlist.com's homepage)*
```
Moderation, Utility, Economy, Fun, Multipurpose
```

**Support server invite**
```
https://discord.gg/FZzsqF5DC5
```

**Website** — see DO NOT FILL.

---

## dlist.space

**Bot name**
```
Apricus
```

**Short description**
```
Apricus: slash-command setup, moderation, XP and levels, economy, welcome and autorole, polls, reminders and starboard in one Discord bot.
```

**Long description** — paste the READY TO PASTE block at the bottom.

**Tags** *(all of these are real tags currently shown on dlist.space's homepage)*
```
Moderation, Utility, Automod, Economy, Rewards, Useful
```

**Prefix (verify label)**
```
Slash commands only (no text prefix needed)
```

**Library (verify label)**
```
discord.py
```

**Support server invite**
```
https://discord.gg/FZzsqF5DC5
```

**Website** — see DO NOT FILL.

---

## discord.bots.gg

**NOT VERIFIED THIS SESSION.** The site was not fetched, so its real field names are unknown. Do not fill this directory from this packet — open the submit form, then reuse the Universal values above. Flag: **NEEDS HUMAN**.

---

## DO NOT FILL

- **Website / bot URL / dashboard URL** — **NEEDS HUMAN.** We have no hosted site; `public/index.html` is a local file and no public domain resolves for Apricus. Leave the field blank rather than pointing reviewers at a 404.
- **Server count / guild count** — **NEEDS HUMAN.** Apricus is at 1 server; do not inflate and do not guess.
- **Shard count** — **NEEDS HUMAN.** Not present in `data/runtime_diagnostics.json`; do not invent.
- **Member/user count, vote count, uptime** — **NEEDS HUMAN.** No verified source exists for any of these.
- **Premium / store / Patreon links** — **NEEDS HUMAN.** There is no paid tier; Apricus is entirely free.
- **Vanity URL / custom slug** — **NEEDS HUMAN.** Requires a paid listing on most directories.
- **API token / webhook URL / webhooks secret** — **NEEDS HUMAN.** Voting webhooks are not implemented in the bot; do not paste any token here.
- **Bot avatar / banner / promo images** — **NEEDS HUMAN.** No hosted image asset exists in this repo; upload the avatar from the Discord developer portal.
- **NSFW** — leave **unchecked**; nothing in the command list is age-gated.

---

## READY TO PASTE — long description (3 sentences, 507 characters)

```
Apricus is a slash-command Discord bot that bundles server setup, moderation (warn, mute, kick, ban, purge), welcome and goodbye messages, autorole, XP and level-ups, a balance and shop economy, polls, reminders, starboard and feedback boards into a single app. Run /quicksetup or /setup to configure the essentials in about 30 seconds, then browse the 80+ available commands with /help. Everything runs through Discord slash commands, so there is no text prefix to memorize and no web dashboard to log into.
```

**Short variant (one sentence, for 140-char fields)**
```
Slash-command Discord bot: setup, moderation, XP and levels, economy, welcome, autorole, polls, reminders and starboard. ~30-second setup.
```

**Setup-steps blurb (for "How to use" fields)**
```
1. Invite Apricus with the OAuth2 link above.
2. Run /quicksetup (or /setup) and follow the prompts — about 30 seconds.
3. Run /help to browse 80+ commands.
4. Moderation: /warn, /warnings, /clearwarnings, /mute, /unmute, /kick, /ban, /purge.
5. Leveling: /rank, /xpstats, /leaderboard, /levelup.
6. Economy: /balance, /daily, /beg, /shop, /buy, /pay, /bet, /duel.
7. Server: /welcome, /goodbye, /autorole, /starboard, /newpoll, /remind, /feedback.
```
