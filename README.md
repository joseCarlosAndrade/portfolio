# Portfolio

Personal portfolio — Go software engineer, microservices, event-driven architecture, Kubernetes & scalable solutions.

## Contents

- **About** — Intro and background (placeholder text to replace)
- **Stack** — Technologies (Golang, C++, Python, Linux, Kubernetes, Docker, Git, Databases, Kafka, Redis, DevOps; add more in `index.html` or via data)
- **Experience** — Projects loaded from `data/projects.json`

## Adding projects

Edit **`data/projects.json`**. Each project has:

- `title` — Project name
- `description` — Short description, your role, outcomes
- `tech` — Array of technologies (e.g. `["Go", "Kubernetes", "Kafka"]`)
- `link` — URL (repo, blog, etc.) or `null`

Example:

```json
{
  "title": "Order Service",
  "description": "Go microservice for order processing with Kafka and Redis.",
  "tech": ["Go", "Kubernetes", "Kafka", "Redis"],
  "link": "https://github.com/you/repo"
}
```

Add new objects to the array to show more projects.

## Adding to your stack

Edit **`index.html`** and add more `<li class="stack-item">…</li>` inside the `<ul class="stack-list">` (or wire a `data/stack.json` and small JS if you prefer).

## Running locally

Open `index.html` in a browser. For correct loading of `data/projects.json`, use a local server, e.g.:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Branch: **main** (or your default), folder: **/ (root)**.
5. Save. The site will be at `https://<username>.github.io/<repo-name>/`.

If the repo is named `portfolio`, the URL is `https://<username>.github.io/portfolio/`.

## Customization

- Replace `[Your Name]` and all `[…]` placeholders in `index.html`.
- Update the footer with your email/LinkedIn/GitHub.
- Tweak colors and fonts in `css/styles.css` (`:root` variables).
