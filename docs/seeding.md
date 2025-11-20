# Admin seeding

Use the seed script to create or update an administrator account without going through the HTTP API.

## 1. Configure environment

Create `.env.local` (or `.env`) with at least:

```
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-32-char-secret
```

Optional seed defaults:

```
SEED_ADMIN_NAME=Site Administrator
SEED_ADMIN_EMAIL=admin@example.com
SEED_ADMIN_PASSWORD=ChangeMe123!
SEED_ADMIN_ROLE=admin
SEED_ADMIN_OVERWRITE=false
```

## 2. Run the script

```
pnpm seed -- --email admin@example.com --password "ChangeMe123!" --name "Site Admin" --role admin
```

Flags:

- `--email`, `--password` are required unless the matching `SEED_ADMIN_*` env vars are set.
- `--name` and `--role` default to the env vars or `Site Administrator` / `admin`.
- `--overwrite` updates the existing user (email match) instead of skipping it.

When the command finishes you should see either `Created user ...` or `Updated existing user ...`. After that you can log in through `/login` with the provided credentials.
