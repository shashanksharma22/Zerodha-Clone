# Application Package: MLH Fellowship

## 1. Repository README.md

# Zerodha Clone - Full Stack Trading Dashboard

### Live Deployments
* **Trading Dashboard:** https://zerodha-dashboard-jb24.onrender.com
* **Marketing Frontend:** https://zerodha-frontend-ahcq.onrender.com
* **Backend API:** https://zerodha-clone-d748.onrender.com

---

### Overview
A full-stack web application replicating the core functionalities of a stock trading platform. Built with a multi-service architecture, it features a decoupled landing page, an authenticated user dashboard, and a robust REST API backend.

### Technologies Used
* **MongoDB** (with Mongoose for schema modeling)
* **Express.js** (REST API framework)
* **React.js** (Frontend & Dashboard SPA with React Router)
* **Node.js** (Runtime environment)

### Local Setup
1. Clone the repository to your local machine.
2. Install dependencies for all three services by running `npm install` inside the `/backend`, `/frontend`, and `/dashboard` directories.
3. Configure environment variables in a `/backend/.env` file:
   MONGO_URL=<your_mongodb_connection_string>
   PORT=3002
   NODE_ENV=development
4. Start the backend: `cd backend && node index.js`
5. Start the frontend: `cd frontend && npm start`
6. Start the dashboard: `cd dashboard && npm start`

---

## 2. Essay 1: The Code Sample Analysis

My code sample is a full-stack stock trading platform based on Zerodha, built entirely with MongoDB, Express, React, and Node.js. It features a multi-service architecture encompassing a decoupled marketing frontend, an authenticated user dashboard, and a REST API. Users can register, log in, view dynamic portfolio data, and simulate executing trade orders that update the database.

The most significant technical challenges I faced arose during production deployment. Because the frontend and backend were hosted on separate domains, I encountered strict Cross-Origin Resource Sharing (CORS) blocks and cross-domain authentication failures. The browser aggressively blocked the login session cookies. To solve this, I had to deeply research backend security and session management. I configured dynamic CORS whitelists and secured the cross-site session cookies by implementing Express `trust proxy` settings along with `sameSite: "none"` and `secure: true` attributes. Overcoming these deployment hurdles taught me how to effectively debug complex multi-service architectures and manage secure routing in a live production environment.

---

## 3. Essay 2: Why MLH?

I want to join the MLH Fellowship because I am eager to transition from building solo full-stack projects to actively participating as an open-source contributor. While I have solidified my technical foundation through building applications like this trading platform, I know that engineering at scale requires a different skill set. I want to gain hands-on experience collaborating in a remote, asynchronous environment with other developers. 

Specifically, I am looking to improve my technical workflow within a team setting—learning the industry standards for code review, issue triage, and version control. Contributing to real-world open-source software under the guidance of experienced maintainers is exactly the environment I need to grow from an independent learner into a reliable production engineer.