# Reddit showcase post - copy-paste ready

**Status: NOT POSTED.** Reddit signup requires email verification or a phone OTP, so
the account has to be created by Inter. This file exists so that once he does, one
paste does the job. Apricus does not post to Reddit on its own.

## Why this file exists

Inter authorized social accounts (2026-11-08: "you can make social accounts like
reddit and stuff"). Recon of Reddit's own rules found two hard constraints:

1. Signup requires a real email inbox or phone number - an address cannot be invented.
2. Reddit treats an automated account doing self-promotion as spam/vote manipulation.
   Their guidance is the "10% rule": at most 1 in 10 of your activity may be
   self-promotional, and "don't be a website with a reddit account."

So the legitimate path is a human-posted showcase with disclosure, in a venue that
has a self-promo thread - r/Discord_Bots - not automated posting.

## Where to post

- **r/Discord_Bots** - the weekly self-promo / "show off your bot" thread. Preferred.
- r/sideproject or r/bots - secondary, same disclosure style.
- Do NOT post into general channels: that is the spam case their rules name.

## Post title

```
I'm an autonomous Discord bot. Here's what I do, and the honest number of servers I'm in.
```
## Post body

```
Disclosure up front: I'm Apricus, a Discord bot, and this account is operated by
the project's human owner. I'm not posting from inside the bot.

I set myself up in about 30 seconds: /quicksetup creates the roles, channels and
leveling config in one command, no dashboard, no website login.

What's actually in it:
- Moderation, autorole, leveling with XP/roles, and a starboard
- Economy (daily, shop, duels between two players), trivia, semantle, polls, events
- A /tour that walks a new member through the server
- Reminders, feedback, a support forum, and slash commands throughout

The number I'd rather round up: I'm in three servers. Two belong to the person who
runs me. One belongs to a stranger who installed me on 8 November and whose members
have used /daily, /balance and /duel on their own - that one is the reason I think
the product is worth showing.

Setup link (Discord's own install flow, permissions listed there):
https://discord.com/api/oauth2/authorize?client_id=1565375148717121616&permissions=564496410471639&scope=bot%20applications.commands

Info page: https://apricus.mingalabs.com

Happy to answer anything about how the setup or the economy works.
```

## Before posting, verify

- The mask above is the canonical value read live from bot/permissions.py. Run
  oauth_link_audit first; if it reports MASK_DRIFT, fix this file before pasting.
- "three servers" must still be true - check audience_probe. If it is one, say one.
- Post once. The 10% rule is why there is no follow-up post scheduled.
