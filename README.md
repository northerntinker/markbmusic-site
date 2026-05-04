# markbmusic.co.uk — Static Site for GitHub Pages

This is a static HTML/CSS rebuild of markbmusic.co.uk, ready to deploy on GitHub Pages.

---

## Files

```
index.html                    ← Home (Begin Again)
projects.html                 ← Projects overview
fragments-of-experience.html  ← Fragments of Experience
little-england.html           ← Little England
music-for-prototype-vol-1.html← Music for Prototype Vol 1
listen.html                   ← Listen
watch.html                    ← Watch
about.html                    ← About
audiobubble.html              ← Audiobubble
contact.html                  ← Contact
works-list.html               ← Works List
css/style.css                 ← All styles
shared.js                     ← Injects nav + footer into every page
README.md                     ← This file
```

---

## Deploying to GitHub Pages

1. **Create a GitHub account** at https://github.com if you don't have one.

2. **Create a new repository.**
   - Go to https://github.com/new
   - Name it anything (e.g. `markbmusic-site`)
   - Set it to **Public**
   - Click **Create repository**

3. **Upload files.**
   - On the new repo page, click **Add file → Upload files**
   - Drag all the files from this folder into the upload area
   - Commit the changes

4. **Enable GitHub Pages.**
   - Go to **Settings → Pages**
   - Under *Source*, select **Deploy from a branch**
   - Choose **main** branch, **/ (root)** folder
   - Click **Save**
   - GitHub will give you a URL like `https://yourusername.github.io/markbmusic-site`

5. **Connect your custom domain.**
   - In **Settings → Pages → Custom domain**, enter `markbmusic.co.uk`
   - At your domain registrar, add these DNS records:
     ```
     A     @    185.199.108.153
     A     @    185.199.109.153
     A     @    185.199.110.153
     A     @    185.199.111.153
     CNAME www  yourusername.github.io
     ```
   - Back in GitHub Pages settings, tick **Enforce HTTPS** once the certificate is issued (may take up to 24h).

---

## Things you need to fill in

Search the files for these placeholders and replace them:

### Mailchimp mailing list
In every page, find:
```
action="YOUR_MAILCHIMP_URL"
```
Replace with your Mailchimp embedded form action URL.
To find it: Mailchimp → Audience → Signup forms → Embedded forms → copy the `action` attribute from the `<form>` tag.

Also replace:
```
name="b_XXXXX"
```
With the bot-prevention field name from your Mailchimp embed code.

### Contact form (Formspree)
In `contact.html`, find:
```
action="https://formspree.io/f/YOUR_FORMSPREE_ID"
```
1. Go to https://formspree.io → create a free account
2. Create a new form — you'll get a URL like `https://formspree.io/f/xabcdefg`
3. Replace `YOUR_FORMSPREE_ID` with your actual ID (e.g. `xabcdefg`)

### Watch page videos
In `watch.html`, find:
```
YOUTUBE_ID_1, YOUTUBE_ID_2 ...
```
Replace each with the actual YouTube video ID for that video.
(The ID is the part after `watch?v=` in a YouTube URL.)

### Fragments of Experience videos
In `fragments-of-experience.html`, replace:
- `VIDEO_ID_FULL_FILM` — the full film YouTube ID
- `TRAILER_ID_1`, `TRAILER_ID_2`, `TRAILER_ID_3` — trailer YouTube IDs

### Listen page Bandcamp embeds
In `listen.html`, the Bandcamp iframes have placeholder `src` values.
To get the real embed codes:
1. Go to each album on Bandcamp
2. Click **Share / Embed**
3. Choose **Embedded Player** and copy the `src` URL
4. Paste it into the relevant `<iframe src="...">` in `listen.html`

### Audiobubble page link
In `audiobubble.html`, once your separate Audiobubble GitHub Pages site is live,
update the link from the Bandcamp URL to your new site URL.

---

## Images

All images currently load directly from your existing Weebly CDN
(`www.markbmusic.co.uk/uploads/...`). This will work for now, but once
you shut down Weebly, those URLs will stop working.

**To future-proof the site:**
1. Download your images from your Weebly media library (or right-click → Save image)
2. Put them in an `images/` folder in this repo
3. Update the `src` attributes in the HTML to point to `images/filename.jpg`

---

## Audiobubble — separate site

When you're ready to build a standalone Audiobubble site:
1. Create a second GitHub repository (e.g. `audiobubble-site`)
2. Enable GitHub Pages on it, and connect a domain (e.g. `audiobubble.co.uk`)
3. Update the link in `audiobubble.html` to point to that new domain
