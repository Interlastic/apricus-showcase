# Submission Packets

For **top.gg** use this file. For **discord.bots.gg, discordbotlist.com and discordservers.com** use [DIRECTORY-PACKET.md](DIRECTORY-PACKET.md) - this file only covers top.gg.

## TOP.GG - paste these exactly

**Short Description**
Apricus: slash-first Discord bot for moderation, leveling, economy, starboard, trivia — one-tap setup, no Admin.

**Long Description**
Apricus is a free, slash-first Discord bot that turns a server on in about 30 seconds.

Run /quicksetup and pick what you want: leveling with rank cards, a starboard for good messages, an economy with /daily, trivia with /dailytrivia, and a moderation toolkit with warnings and audit-friendly actions. Nothing needs a config file and nothing needs Administrator.

What owners notice first:
- /quicksetup — interactive setup, buttons only, no forms
- /tour — guided walkthrough of what is enabled in your server
- /rank and /daily — zero-config reasons for members to come back
- /dailytrivia — a daily group game that runs itself
- /starboard — surface your best messages automatically
- /config — per-server settings, admin-only

Moderation: /ban /kick /mute /warn /warnings /purge — per-member warning history and a full audit trail.

Economy: /daily /balance /pay /shop /buy /inventory /bet /duel.

Engagement: /poll /newpoll /welcome /goodbye /autorole /events.

Privacy: Apricus does not chat with your members, does not run an AI chatbot, and does not post in channels you did not enable. Commands are ephemeral by default when they return personal data.

Permissions: the install link asks for the standard set needed for channels, roles, messages and moderation. It never asks for Administrator.

Support server: https://discord.gg/FZzsqF5DC5
Website: https://apricus.mingalabs.com/

**Prefix**
None — slash commands only

**Category**
Utility  (pick from the top.gg dropdown; if Utility is absent choose the closest multi-purpose option)

**Tags**
moderation, leveling, economy, starboard, trivia, utility, slash-commands

**Invite URL** (the ADD-BOT link - NOT the community server invite)
https://discord.com/api/oauth2/authorize?client_id=1565375148717121616&permissions=564496410471639&scope=bot%20applications.commands

*Do not paste the community invite here: top.gg shows this button as "Add", so a guild invite sends visitors into our support server instead of installing the bot.*

**Community server invite**
https://discord.gg/FZzsqF5DC5

**Support Server**
https://discord.gg/FZzsqF5DC5

## 2-minute order of operations

1. Create a new listing on top.gg for Apricus.
2. Paste the Short Description, Long Description, Prefix, Category, Tags, Invite URL, and Support Server fields above into the corresponding form fields.
3. Save the listing.
4. If you ever obtain a TOPGG_PROJECT_TOKEN, paste it into bot/.env as `TOPGG_PROJECT_TOKEN=paste your top.gg API token here`.

## What happens automatically

directory_stats.py re-reads bot/.env each tick, so adding a TOPGG_PROJECT_TOKEN starts server-count sync with no restart.

## Fields only YOU can set in the dashboard

Top.gg API can only update the headline and long description later. Category, Tags, Invite URL, Support Server and Prefix cannot be set by API - set them once in the form.

Recommended Tags: Moderation, Leveling, Economy, Fun.

Note: we have not been able to confirm top.gg has a minimum server requirement (their support page blocks automated reads). Submit anyway - a rejection costs nothing.
