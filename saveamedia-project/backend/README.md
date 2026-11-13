# SaveAMedia Extraction Backend (Render.com Deployment)

This is the standalone backend extraction gateway designed to run for free on **[Render.com](https://render.com)** and power your **Cloudflare Pages** frontend.

---

## 🚀 How to Deploy on Render in 3 Minutes (100% Free)

### Step 1: Push this `backend/` folder to a GitHub Repository
1. Create a new repository on your GitHub (e.g., `saveamedia-backend`).
2. Upload the contents of this `backend/` folder (`server.js`, `package.json`, `render.yaml`, `Dockerfile`).

### Step 2: Create a Free Web Service on Render
1. Go to **[dashboard.render.com](https://dashboard.render.com/)** and sign in (free).
2. Click **New +** → **Web Service**.
3. Select your `saveamedia-backend` repository.
4. Render will auto-fill:
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: `Free`
5. Click **Create Web Service**.
6. Within 60 seconds, Render will deploy your service and give you a public HTTPS URL:
   ```
   https://saveamedia-backend.onrender.com
   ```

---

### Step 3: Connect to Your Cloudflare Pages Frontend
In your **Cloudflare Pages** project dashboard:
1. Go to **Settings** → **Environment Variables**.
2. Add:
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://saveamedia-backend.onrender.com
   ```
3. Redeploy your Cloudflare Pages site.

That's it! Your Cloudflare Pages frontend will now route all Reel extraction queries to your private Render backend gateway.

---

## 📡 API Endpoints

- `GET /`: Health check and uptime.
- `GET /health`: Health ping for Render monitoring.
- `POST /api/v1/extract`:
  - Request Body: `{ "url": "https://www.instagram.com/reel/C29abcdefgh/" }`
  - Response: Formatted 1080p MP4, 720p MP4, and 320kbps MP3 streams with creator metadata.
