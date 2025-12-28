# Todo App

## What This Is

A simple React todo application built with Vite and React Router. Features a shell/page architecture where a navigation shell wraps page content, with a welcome screen at the root and a functional todo list at `/todo`.

## Core Value

A clean, working example of React Router with shell-based layout and basic CRUD state management — small and focused.

## Requirements

### Validated

- ✓ Vite + React + TypeScript project setup — v1.0
- ✓ React Router with two routes: `/` (welcome) and `/todo` (todo list) — v1.0
- ✓ Shell component with navigation menu bar — v1.0
- ✓ Page content component rendering inside the shell — v1.0
- ✓ Welcome page with link to todo app — v1.0
- ✓ Todo list with add, toggle complete (checkbox), and delete functionality — v1.0
- ✓ Todo state managed in React state — v1.0

### Active

(None — milestone complete)

### Out of Scope

- Persistence (localStorage, backend, database) — state lives in memory only for v1
- Advanced styling or CSS frameworks — functional is sufficient
- Categories, priorities, due dates — just text items with done/not-done

## Context

Greenfield project starting fresh. The architecture pattern of shell + page content is the structural foundation — navigation lives in the shell, route-specific content renders inside.

## Constraints

- **Tech stack**: React, Vite, React Router, TypeScript — no plain JavaScript

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Shell/page architecture | Separates navigation concerns from page content | ✓ Clean separation achieved |
| In-memory state only | Keeps v1 simple, persistence can be added later | ✓ Works as expected |
| TypeScript | Type safety from the start | ✓ Full type coverage |
| createBrowserRouter | React Router v6 recommended pattern | ✓ Standard approach |
| Date.now() for IDs | Simple unique ID generation for in-memory state | ✓ Sufficient for scope |

---
*Last updated: 2025-12-28 after v1.0 milestone completion*
