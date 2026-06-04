# Kingo Website GitHub Workflow

## Purpose

This repository is the source of truth for the Kingo Services Heating and Cooling website.

## Branch Rules

- main is the stable production branch.
- Feature branches are used for changes.
- Work should start from a GitHub Issue.
- Each Issue should connect to a branch.
- Pull Requests are used before merging back into main.

## Standard Workflow

Issue -> Branch -> Work -> Build/Test -> Commit -> Push -> Pull Request -> Review -> Merge -> Deploy

## Build Command

npm run build

## Safety Rules

- Do not commit secrets.
- Do not commit tokens.
- Do not commit API keys.
- Do not commit passwords.
- Do not commit export ZIP files.
- KINGO_SECRETS.dmg is only for secrets.

## Current First Workflow Issue

Issue #1: Set up branch workflow for Kingo website
