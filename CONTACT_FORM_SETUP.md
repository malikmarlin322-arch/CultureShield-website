# Contact Form Setup

The contact form on the homepage submits inquiries directly to your inbox using **Formspree** (a lightweight, free form-handling service designed for static sites — no backend or serverless function required).

## One-time setup (≈ 3 minutes)

### 1. Create a Formspree account
- Go to <https://formspree.io> and sign up (the free plan covers up to 50 submissions per month, which is plenty for a small business contact form).

### 2. Create a new form
- Click **+ New Form**
- Name it something like `CultureShield Website`
- For the **send-to email**, enter: `hello@cultureshieldlabs.com`
- Click **Create Form**

### 3. Copy your form endpoint
Formspree will give you a URL that looks like:

```
https://formspree.io/f/abcdwxyz
```

### 4. Verify the receiving email
Formspree will send a verification email to `hello@cultureshieldlabs.com`. Open the inbox and click the confirmation link — submissions won't be delivered until this is done.

### 5. Wire the endpoint into the site

You have two options:

**Option A — Vercel environment variable (recommended)**

In your Vercel project settings → **Environment Variables**, add:

| Key | Value |
|---|---|
| `VITE_FORMSPREE_ENDPOINT` | `https://formspree.io/f/abcdwxyz` |

Apply it to **Production**, **Preview**, and **Development**, then redeploy.

**Option B — Hardcode it**

Open `src/components/Contact.jsx` and replace this line:

```js
const FORM_ENDPOINT_FALLBACK = "https://formspree.io/f/REPLACE_WITH_YOUR_ID"
```

…with your real endpoint URL. Commit and push.

## What gets sent

Each submission arrives at `hello@cultureshieldlabs.com` with these fields:

- `name` — Full Name
- `email` — Work Email (Formspree sets the email's reply-to header to this, so you can hit Reply to respond directly)
- `organization` — Organization
- `lab_type` — Lab Type
- `message` — How can we help?
- `_subject` — Auto-generated as `New inquiry from <name>`

Bot protection: a hidden honeypot field (`_gotcha`) is included to discourage spam.

## Local testing

Until the endpoint is set, the form will POST to a placeholder URL and the user will see the error state. Once you set `VITE_FORMSPREE_ENDPOINT` in your local `.env` file (or hardcode the fallback), test by submitting the form and checking your inbox.

```
# .env (local only — do not commit)
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/abcdwxyz
```

## Switching providers later

If you outgrow Formspree, the form will work with any service that accepts a `multipart/form-data` POST and returns JSON — Basin, Web3Forms, Getform, or your own serverless function. Just swap the endpoint URL.
