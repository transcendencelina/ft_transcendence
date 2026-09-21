# Contributing

## Branches
`main` is protected: no direct pushes. Work in branches:
`feat/<card-name>`, `fix/<card-name>`, `docs/<name>`, `chore/<name>`.

## Commits
Conventional commits, one logical change per commit:
`feat: add post creation endpoint`, `fix: handle websocket reconnect`, `docs: update schema`.

## Pull requests
1. One PR per Trello card, linked in the description.
2. At least 1 approval from a teammate; CI must pass.
3. Nobody merges their own PR without review.
4. Only commit code you can explain line by line.

## Definition of Done
Acceptance criteria met, reviewed and merged, tests added, no console errors, docs updated, no secrets committed.

## Secrets
Never commit `.env`. Add new variables to `.env.example` with a safe placeholder.
