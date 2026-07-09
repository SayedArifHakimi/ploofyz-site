# Security Policy

## Overview

This repository contains the source code and deployment files for the Ploofyz website.

The purpose of this security policy is to define basic security expectations for contributors, maintainers, and anyone working on the project.

## Supported Branches

| Branch | Purpose | Supported |
| --- | --- | --- |
| `main` | Main source code branch | Yes |
| `gh-pages` | Live GitHub Pages deployment branch | Yes |
| Feature branches | Temporary development work | Limited |
| Old/stale branches | Archived or unused work | No |

## Security Rules

When contributing to this repository, do not commit:

- Passwords
- API keys
- Database credentials
- Private tokens
- `.env` files containing secrets
- Personal user data
- Server access details
- Unnecessary local build/cache files
- `node_modules`
- Temporary files

Sensitive configuration should be kept outside the repository or stored using the correct secret management method.

## Environment Files

The project may use local environment files for development.

Do not commit real secret values.

Allowed:

```txt
.env.example
