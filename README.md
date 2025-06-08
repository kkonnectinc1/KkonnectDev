# ☁️ KkonnectDev - Cloud Dev & Monitoring Environment

## Purpose
A clean starter repo for multi-cloud development and monitoring using GitHub Codespaces.

## Structure
- `/scripts/setup` — Initialization scripts
- `/scripts/monitoring` — Health and metrics checks
- `/scripts/dev-tools` — Developer tooling

## Usage

### Open in GitHub Codespaces
Click **Code** → **Codespaces** → **Create codespace**.

### Setup environment (runs automatically)
```bash
./scripts/setup/init.sh
```

### Run health check
```bash
./scripts/monitoring/health-check.sh
```

### Run lint (if applicable)
```bash
./scripts/dev-tools/lint.sh
```

## Customize
- Add your cloud monitoring or dev scripts under `/scripts`.
- Update `.devcontainer/devcontainer.json` for tools and extensions.
