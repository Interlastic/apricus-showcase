# Accounts I can operate automatically — ranked, with the exact 2-minute setup

I probed each API from this host rather than guessing. "Verified here" means I sent a real
request and read the real response. Everything below assumes I only ever post with a
disclosure line, at a human cadence, into places where posting is allowed. I will not use
auto-joiners, DM blasters, or mass-invite tools at any price — those get accounts banned and
the blame lands on whoever made them.

---

## 1. DEV Community (dev.to) — best value, genuinely ~2 minutes

**What I verified from this host:** `GET https://dev.to/api/articles?tag=discord` returns HTTP 200
with real articles, and `POST https://dev.to/api/articles` returns `401 {"error":"unauthorized"}`
— the write endpoint is live and simply wants a key. No app approval, no verification queue.

**Setup:** sign in at dev.to → Settings → **API Keys** → copy the key.

**Paste into `bot/.env` as:**
```
DEVTO_API_KEY=<the key>
```

**What I can then do:** publish articles under your account with `POST /api/dev.to/v1/articles`
(one request, `api-key` header). Good uses: a real write-up of a tool I shipped, a
"how to build a Discord bot that sets itself up" guide, the permissions-calculator page
written up as an article. Each article carries a canonical link to the install page.

**Limits / honesty:** dev.to is a developer audience, so content has to be genuinely useful —
a "please add my bot" post would be removed and would hurt. Rate limits are generous for one
post a day. This is a slow-burn channel, not a firehose.

---

## 2. Bluesky — ~3 minutes, self-service, no approval

**What I verified:** `POST https://bsky.social/xrpc/com.atproto.server.createSession` responds
`400 Wrong request encoding (Content-Type)` — the endpoint is live and speaking AT Protocol;
it just wants a JSON body and credentials.

**Setup:** bsky.app → Settings → **Privacy and moderation → App passwords** → create one
(label it `apricus-bot`). App passwords exist precisely for this and do not need approval.

**Paste into `bot/.env` as:**
```
BLUESKY_HANDLE=yourhandle.bsky.social
BLUESKY_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx
```

**What I can then do:** `com.atproto.repo.createRecord` to post, read my own notifications, and
reply to people actually asking for a Discord bot. Posting is 1 record per request; the firehose
is public and unauthenticated for *reading*, so I can find relevant threads without a token.

**Limits / honesty:** a fresh account with zero history that starts posting links looks like
spam to humans even when the rules allow it. This needs your existing account or a few weeks of
genuine use first. I would post answers, not ads.

---

## 3. Mastodon — ~3 minutes, self-service token

**What I verified:** `POST https://mastodon.social/api/v1/statuses` returns
`401 {"error":"The access token is invalid"}` — live endpoint, wants a bearer token.

**Setup:** your instance → Preferences → **Development → Create application** → copy the
**access token** (the app form is instant; no review).

**Paste into `bot/.env` as:**
```
MASTODON_BASE=https://mastodon.social
MASTODON_TOKEN=<access token>
```

**What I can then do:** `POST /api/v1/statuses` to post, and `GET /api/v1/timelines/public` to
find people discussing bot development. Instances have their own rules; several ban
self-promotion outright, so I would read each instance's rules before its first post.

---

## 4. Reddit — highest ceiling, but more friction than the last note assumed

**What I verified:** the free tier is documented at 100 queries/minute per OAuth client, but
multiple 2026 sources report **approval is now required** for API access and commercial use is
priced (~$0.24 per 1,000 calls). I could not verify Reddit's own console from this host.

**Setup if it still works for you:** reddit.com/prefs/apps → "create another app" → *script*
type → copy client id + secret; then a normal login for the OAuth token.

**Paste into `bot/.env` as:**
```
REDDIT_CLIENT_ID=...
REDDIT_CLIENT_SECRET=...
REDDIT_USERNAME=...
REDDIT_PASSWORD=...
```

**Why the ceiling is highest:** subreddits like r/discordapp and r/discord_bots are where
people literally ask "is there a bot that does X". A genuine answer is worth more than any
landing page I can write. **But** Reddit's 9:1 self-promotion rule and per-subreddit rules mean
one wrong post burns your account, not mine. If you give me Reddit, I will only answer questions
and never post to a subreddit whose rules I have not read.

---

## 5. Already built, still waiting on you: a Discord webhook

`reach_webhook` is live and inert until `REACH_WEBHOOK_URL` is in `bot/.env`. Create a webhook
in a server you genuinely belong to, paste the URL, done. Consent stays yours because you chose
the room.

---

## If you only do one

**dev.to.** One settings page, one key, one env line, no approval, no new account, and the
content stays useful instead of promotional. Then Bluesky if you already have an account.

Whatever you hand me, I will: disclose that I am a bot, keep a human cadence, never DM anyone,
never join anywhere I was not invited, and stop the moment a moderator or you say stop.
