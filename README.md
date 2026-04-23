# EcoRank 🌿

A gamified environmental action app built for the **Build for Earth: Nairobi Hackathon 2026** under the theme *"Our Power, Our Planet"*.

## The Problem

Nairobi faces a serious and visible environmental crisis — litter, illegal dumping, poor e-waste disposal, and low community accountability. The biggest barrier isn't lack of care, it's lack of motivation and a system that rewards responsible behaviour.

## The Solution

EcoRank turns everyday eco-friendly actions into a rewarding, competitive experience. Users earn points for reporting and resolving environmental problems, completing daily challenges, and disposing of e-waste responsibly — then compete on leaderboards with the public and their friend groups.

### The Core Loop
**Spot a problem → Take a before photo → Resolve it → Take an after photo → Earn points → Climb the leaderboard**

---

## Features

- **Report & Resolve** — Two-step report flow with before and after photo upload as proof of action
- **Points System** — Earn points for every eco action, with bonus points based on severity
- **Daily Tasks** — 35 daily eco challenges that keep users engaged every day
- **Weekly Leaderboard** — Public rankings that reset weekly so competition stays fresh
- **Friend Groups** — Private leaderboards to compete with friends (UI ready)
- **E-Waste Tracking** — Points for dropping off electronics at certified centres
- **Badges & Achievements** — Milestone rewards including First Cleanup, Streak Master, and Neighbourhood Hero
- **Profile Page** — Weekly points, lifetime points, and badge collection

---

## Tech Stack

- **React** — Component based frontend
- **React Router** — Client side navigation
- **Lucide React** — Icon library
- **CSS** — Custom styling per component
- **localStorage** — Data persistence (no backend yet)

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── BottomNav.jsx
│   ├── TaskCard.jsx
│   ├── LeaderboardRow.jsx
│   ├── ReportCard.jsx
│   ├── BadgeCard.jsx
│   └── PointsToast.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── Leaderboard.jsx
│   ├── Profile.jsx
│   ├── TaskList.jsx
│   └── ReportPage.jsx
├── data/
│   ├── tasks.js
│   ├── reports.js
│   ├── leaderboard.js
│   └── badges.js
└── styles/
    ├── Navbar.css
    ├── BottomNav.css
    ├── TaskCard.css
    ├── LeaderboardRow.css
    ├── ReportCard.css
    ├── BadgeCard.css
    ├── Dashboard.css
    ├── Leaderboard.css
    ├── Profile.css
    ├── TaskList.css
    └── ReportPage.css
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/ecorank.git

# Navigate into the project
cd ecorank

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Demo Flow

1. Register an account on the Home page
2. Log in and land on the Dashboard
3. Complete a daily task and watch the points toast fire
4. Use the Report flow to submit a before and after photo
5. Check the Leaderboard to see your rank
6. Visit your Profile to track badges earned

---

## Built By

**Benard** ([@Bennah.dev](https://github.com/bennah995)) — Full frontend build

Ideated with teammates Jacory and the team at the Build for Earth: Nairobi Hackathon 2026.

---

## What's Next

- Backend integration (Node.js + MongoDB)
- Real-time leaderboard updates
- Map integration for e-waste drop-off points
- Push notifications for daily task reminders
- Friend groups fully functional
- M-Pesa integration for prize redemption

---

*Built for Nairobi. Powered by community action.* 🌍