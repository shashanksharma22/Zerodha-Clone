# Zerodha Clone - Full Stack Trading Dashboard

A full-stack web application replicating the core functionalities of a stock trading dashboard. Built using the MERN stack, this project features a multi-service architecture with a separate landing page, user dashboard, and REST API backend.

## Tech Stack
* **Frontend:** React.js, React Router
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Authentication:** Passport.js, Express Session
* **Deployment:** Render (Static Sites for frontends, Web Service for backend)

## Features
* **Multi-Service Architecture:** Decoupled frontend (landing/marketing), dashboard (authenticated app), and backend services.
* **Authentication:** Local strategy user sign-up/log-in with secure, cross-site session cookies for cross-domain auth.
* **Real-time Portfolio Tracking:** Dynamic fetching of holdings, positions, and live P&L data.
* **Order Execution:** Simulated buying and selling of instruments with database state updates.
* **Responsive Routing:** Client-side routing with secure fallbacks for SPA deployment.

## Local Setup

1. Clone the repository
2. Install dependencies for all three directories:
   `npm install` in `/backend`, `/frontend`, and `/dashboard`
3. Set up environment variables in `/backend/.env`:
   `MONGO_URL=<your_mongodb_string>`
   `PORT=3002`
4. Start the backend: `cd backend && node index.js`
5. Start the frontend: `cd frontend && npm start`
6. Start the dashboard: `cd dashboard && npm start`

## Deployment
This application is deployed live on Render. 
* The backend API is configured with strict CORS policies and `trust proxy` settings to allow secure cross-origin authentication from the static frontend sites.