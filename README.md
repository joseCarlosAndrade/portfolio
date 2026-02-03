# Portfolio

Personal portfolio — Go software engineer, microservices, event-driven architecture, Kubernetes & scalable solutions.

## Contents

- **About** — Intro and background (placeholder text to replace)
- **Stack** — Technologies (Golang, C++, Python, Linux, Kubernetes, Docker, Git, Databases, Kafka, Redis, DevOps; add more in `index.html` or via data)
- **Experience** — Projects loaded from `data/projects.json`

## Adding projects

Stored in **`data/projects.json`**. Each project has:

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

## Adding to stack

Edit **`index.html`** and add more `<li class="stack-item">…</li>` inside the `<ul class="stack-list">`
