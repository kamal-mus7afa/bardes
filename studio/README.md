# BARDES Sanity Studio

Panel admin konten website BARDES.

## Setup

1. Buat project di [sanity.io/manage](https://www.sanity.io/manage)
2. Salin `projectId` ke `studio/.env` (lihat `.env.example`)
3. `npm install`
4. `npm run dev` — Studio lokal di http://localhost:3333
5. `npm run deploy` — publish ke `*.sanity.studio`

## CORS

Di Sanity manage → API → CORS origins, tambahkan:

- `http://localhost:3000`
- `http://localhost:3001`
- URL Vercel production
