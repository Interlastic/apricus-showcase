# SUPERSEDED - use public/SUBMIT-NOW.md

This file is kept only so old links still work. The authoritative submission doc is public/SUBMIT-NOW.md.

Community server invite (not the install link): https://discord.gg/FZzsqF5DC5

--- archived below ---

SUPERSEDED, use SUBMIT-NOW.md

# top.gg Submission Packet — Apricus

> Field-by-field copy-paste packet. Every value below is VERIFIED against live
> ground truth from orchestrator telemetry (live app id, live command tree,
> live invite). `NEEDS HUMAN` = we cannot satisfy this field programmatically;
> reason given.

---

## 1. Identity

| Field | Value to paste |
|---|---|
| **Bot ID (Application ID)** | `1565375148717121616` |
| **Bot Username** | Apricus |
| **Author / Discord user** | NEEDS HUMAN — top.gg requires the submitting Discord account to be the bot's owner; only a human can log in and submit. |

---

## 2. Prefix policy

| Field | Value to paste |
|---|---|
| **Prefix** | Slash-first — leave blank. If top.gg rejects a blank prefix, paste `/` and tick the "slash commands" option if offered. |

**Command tree fact:** 75 live application (slash) commands, 0 legacy prefix
commands. Guilds: 2. Loaded cogs: 25.

**Prefix policy text (if a free-text field asks):**

```
Apricus is slash-command-first: 80+ commands are registered as Discord
application (slash) commands and are discovered through Discord's native
command picker. There is no text prefix to memorize and no prefix fallback.
```

---

## 3. OAuth INSTALL URL

| Field | Value to paste |
|---|---|
| **OAuth INSTALL URL — MINIMAL** | `https://discord.com/oauth2/authorize?client_id=1565375148717121616&scope=bot%20applications.commands&permissions=564496410471639` | Use this if you only need read/reply + slash commands. |
| **OAuth INSTALL URL — RECOMMENDED** | `https://discord.com/oauth2/authorize?client_id=1565375148717121616&scope=bot%20applications.commands&permissions=564496410471639` | Use this for normal servers (files, external emoji, message/event mgmt). |
| **OAuth INSTALL URL — FULL** | `https://discord.com/oauth2/authorize?client_id=1565375148717121616&scope=bot%20applications.commands&permissions=564496410471639` | Use this to have every advertised feature (incl. moderation) working day one. |

**Honesty note:** moderation commands use `@app_commands.checks.bot_has_permissions` (`moderation.py:216,322,378,407,452,505`), so they fail **LOUDLY** when perms are absent; `autorole.py` swallows `discord.Forbidden` (lines 174,272,286,310), so auto-role fails **SILENTLY**. Do not claim the bot always reports what is missing.
| **`client_id`** | `1565375148717121616` |
| **`scope`** | `bot` |
| **`permissions`** | `564496410471639` (integer) |
| **Permissions decoded to names** | `view_channel`, `send_messages`, `embed_links`, `attach_files`, `read_message_history`, `add_reactions`, `use_external_emojis`, `manage_messages`, `manage_roles`, `manage_channels`, `kick_members`, `ban_members`, `moderate_members`, `manage_events`, `use_application_commands`, `connect`, `speak` |
| **`disable_guild_select`** | `false` (let admins choose the guild) |
| **Source of format** | Discord OAuth2 `authorize` endpoint format (`scope=bot%20applications.commands&permissions=564496410471639`), integer computed locally with the installed `discord.Permissions` bitfield — see §10 |

> Note: the decoded bitfield also reports the legacy aliases `read_messages`,
> `external_emojis` and `manage_permissions`; these are the same bits as
> `view_channel`, `use_external_emojis` and `manage_roles`/`manage_channels`,
> not additional grants.

---

## 4. Server / support links

| Field | Value to paste |
|---|---|
| **Discord Server (invite URL)** | `https://discord.gg/FZzsqF5DC5` |
| **Support Server** | `https://discord.gg/FZzsqF5DC5` (same community guild, id `1565373687425671268`) |
| **Website** | `https://apricus.mingalabs.com/` |
| **Vanity URL** | Same invite above — no separate vanity. |

---

## 5. Short description (top.gg: 120 char cap)

```
Apricus is a slash-first Discord bot for moderation, leveling, economy, starboard and trivia that sets up in one tap.
```

Character count (explicit `len()`): **117** (<= 120 cap, verified).

---

## 6. Long description (markdown)

```markdown
## Apricus — slash-first utility for a real community

Apricus is a single, self-configuring Discord bot built entirely around slash
commands: 75 of them, all discoverable from Discord's native command picker,
with no prefix to memorize and no web dashboard to register with. Run the
onboarding/quicksetup command once and the moderation, leveling, economy,
starboard and trivia systems go live with sane defaults; every subsystem can
then be tuned per-server from its own command group.

**Moderation.** Slash-driven warnings, mutes/timeouts, kicks, bans and
message purges, with a mod-log trail so staff always have an audit trail to
read. Timeout uses Discord's native `moderate_members` timeout rather than a
role hack, and the bot's permission set is deliberately narrow: it can manage
messages, roles and channels for setup, but nothing outside the server you
install it in.

**Leveling.** XP and level progression for active members, with configurable
XP rates, rank cards and level-up announcements. Ranks are per-guild, so your
community's leaderboard is yours alone.

**Economy.** A lightweight server economy: balances, daily rewards, transfers
and simple shop-style purchases, all persisted to local JSON so nothing depends
on an external database service.

**Starboard.** Members star messages with reactions; messages that cross your
star threshold are auto-copied to a designated starboard channel, so the best
of your server stops getting buried in scrollback.

**Trivia.** Built-in trivia with categories and scoring — good for game nights
and for keeping a lobby busy between events. No third-party API keys required.

**Events.** Scheduled-event helpers and event-time activities, so community
events get announced, tracked and actually attended.

**Onboarding / quicksetup.** One command wires up the channels, roles and
settings the other systems expect. New server owners get a working bot in one
tap instead of a fifteen-minute permissions scavenger hunt.

**Utilities.** Info, server and user lookups, avatar and banner commands,
ping/help, and small quality-of-life tools that round out the day-to-day
experience.

Apricus reports its own state honestly: it is a moderation, leveling, economy,
starboard and trivia bot. It does not pretend to be an AI chatbot, and it has
website: https://apricus.mingalabs.com/ — the support server remains the source of truth for help.

**Invite:** https://discord.com/oauth2/authorize?client_id=1565375148717121616&scope=bot%20applications.commands&permissions=564496410471639
**Support:** https://discord.gg/FZzsqF5DC5
```

Long-description word count: **356** words (top.gg long description range 250–600, verified).

---

## 7. Categories

| Field | Value to paste |
|---|---|
| **Category** | Primary: **Moderation**. Secondary: **Economy**, **Leveling**, **Fun**, **Utility**. |

---

## 8. Tags

| Field | Value to paste |
|---|---|
| **Tags** | `moderation`, `leveling`, `economy`, `starboard`, `trivia`, `slash-commands`, `utility`, `events`, `onboarding`, `fun` |

---

## 9. External links

| Field | Value to paste |
|---|---|
| **Website** | `https://apricus.mingalabs.com/` (live public showcase) |
| **GitHub / source URL** | NEEDS HUMAN — no public repository URL has been confirmed. Leave blank until the owner supplies one. |
| **Donate / Patreon** | leave blank (none configured). |

---

## 10. Verification notes (how each value was produced)

- Command tree source: live telemetry from the running bot — **75** live
  application commands, **25** loaded cogs, **2** guilds (not a grep of decorators).
- Install URL format: Discord OAuth2 `authorize` endpoint with
  `scope=bot%20applications.commands&permissions=564496410471639`.
- Permissions integer built with: the locally installed `discord.Permissions()`
  bitfield — the 17 named permissions were set to `True` and `.value` read out
  as `564496410471639`.
- Short description length: `len()` on the exact string in §5 → **117**.
- No server/member/uptime statistics are included anywhere in this packet, by
  design (they would be unverifiable and go stale).

---

## 11. NEEDS HUMAN

1. **top.gg login + submit** — must be done under the bot owner's Discord-
   authenticated top.gg account; the agent cannot log in or click Submit.
2. **Logo / banner upload** — top.gg requires an image upload (logo min 512x512,
   banner 1920x640). No approved artwork exists in the repo; owner must supply
   or approve the images.
3. **GitHub / source URL** — confirm whether the repository is public and
   provide the URL, or leave the field blank.
4. **Invite health check** — confirm `https://discord.gg/FZzsqF5DC5` is a
   non-expiring invite to guild `1565373687425671268` before submitting.
5. **Permission-scope sign-off** — the integer grants `manage_roles` /
   `manage_channels`; if the owner prefers a lower-privilege install, drop those
   bits and regenerate the URL.
