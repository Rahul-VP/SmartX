# SmartX

A simple full‑stack marketplace app.

## Features
- User auth (OTP flow)
- Browse categories + products
- Product upload (Cloudinary)
- Wishlist
- AI endpoints (chat + product description enhancer)

## Tech
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB

## Project structure
- `SmartX/client/smartxclient` → React app
- `SmartX/server` → Express API

## Prerequisites
- Node.js (LTS) + npm
- MongoDB (local or Atlas)

## Scripts
Backend (in `SmartX/server`):
- `npm start` → start API server

Frontend (in `SmartX/client/smartxclient`):
- `npm run dev` → start Vite dev server
- `npm run build` → build for production
- `npm run preview` → preview production build
- `npm run lint` → run ESLint

## Setup
### 1) Install dependencies
Backend:
```bash
cd SmartX/server
npm install
```

Frontend:
```bash
cd SmartX/client/smartxclient
npm install
```

### 2) Environment variables
Create a file: `SmartX/server/.env`

Minimal example:
```env
PORT=3000
DATABASE_URL=mongodb://127.0.0.1:27017/smartx
```

Optional (only if you use these features):
- Email OTP: `MAIL_HOST`, `MAIL_USER`, `MAIL_PASS`
- Cloudinary uploads: `API_KEY`, `CLOUD_NAME`, `API_SECRET`
- AI features: `openAi_key1`

Example (with placeholders):
```env
PORT=3000
DATABASE_URL=mongodb+srv://<user>:<pass>@<cluster>/<db>

MAIL_HOST=smtp.gmail.com
MAIL_USER=you@gmail.com
MAIL_PASS=your_app_password

API_KEY=cloudinary_api_key
CLOUD_NAME=cloudinary_cloud_name
API_SECRET=cloudinary_api_secret

openAi_key1=openai_api_key
```

Frontend env (optional): `SmartX/client/smartxclient/.env`
```env
VITE_BACKEND_URL=http://localhost:3000/api/v1
```

## API
Base URL:
- `http://localhost:3000/api/v1`

Common endpoints used by the UI:
- `GET /getAllCategories`
- `GET /get-products?page=1`

## Run
### Start backend
```bash
cd SmartX/server
npm start
```

### Start frontend
```bash
cd SmartX/client/smartxclient
npm run dev
```

Open the Vite URL printed in the terminal (usually `http://localhost:5173`).

## Common issue
If the UI shows `ERR_CONNECTION_REFUSED` for `localhost:3000`, the backend is not running or the port in `VITE_BACKEND_URL` does not match the backend port.

Other common issues:
- `npm start` fails immediately: check your `SmartX/server/.env` values (especially `DATABASE_URL`) and that MongoDB is reachable.
- CORS / blocked requests: confirm the backend is running and the base URL is correct.
- Font Awesome CDN warnings in the browser console: usually safe to ignore.

## Build (production)
Frontend build:
```bash
cd SmartX/client/smartxclient
npm run build
npm run preview
```
