# API

- Base path: `/api`, JSON over HTTPS.
- Interactive docs: Swagger UI (to be added with the Public API module).
- Errors: `{ "statusCode": number, "message": string }`.

| Method | Path | Description | Status |
|---|---|---|---|
| GET | /api/health | Liveness check | done |

The Public API module needs: secured API key, rate limiting, documentation, and at least 5 endpoints covering GET, POST, PUT and DELETE.
