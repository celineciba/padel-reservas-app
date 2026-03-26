# Padel Reservas App

A mobile-first paddle court booking app scaffold built with Expo + React Native + TypeScript.

## What this includes

- Dark UI theme with neon green accents inspired by the brand direction.
- Booking list and booking creation flow.
- Placeholder branding hooks so image assets can be dropped in manually later.
- No binary files in the repository.

## Quick start

```bash
npm install
npm run start
```

## Available scripts

- `npm run start` — Start Expo dev server.
- `npm run android` — Run on Android emulator/device.
- `npm run ios` — Run on iOS simulator/device.
- `npm run web` — Run in web mode.
- `npm run typecheck` — Run TypeScript checks.

## Manual asset workflow

Binary files are intentionally excluded from this repository.

When branding assets are ready, add them manually under `assets/branding/` and update:

- `src/theme/branding.ts`
- `src/components/BrandHeader.tsx`

For now, the app uses text-based placeholders and comments where logos/graphics would appear.
