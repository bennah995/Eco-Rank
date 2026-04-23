import BadgeCard from "../components/BadgeCard"
import badges from "../data/badges"

import '../styles/Profile.css'

export default function Profile() {
  const storedUser = JSON.parse(localStorage.getItem("registeredUser"))
  const { userName, name, points } = storedUser;
  const initials = userName.slice(0, 2).toUpperCase()

  const storedPoints = JSON.parse(localStorage.getItem("Points"))
  const dashPoints = JSON.parse(localStorage.getItem("DashPoints"))

  return (
    <div className="profile-page">

      {/* avatar */}
      <div className="profile-header">
        <div className="profile-avatar">{initials}</div>
        <h3 className="profile-username">{userName}</h3>
        <p className="profile-name">{name}</p>
      </div>

      {/* stats */}
      <div className="profile-stats">
        <div className="stat-card">
          <p className="stat-value">{storedPoints}</p>
          <p className="stat-label">Weekly pts</p>
        </div>
        <div className="stat-card">
          <p className="stat-value">{storedPoints + dashPoints}</p>
          <p className="stat-label">Lifetime pts</p>
        </div>
        <div className="stat-card">
          <p className="stat-value">3</p>
          <p className="stat-label">Reports</p>
        </div>
      </div>

      {/* badges */}
      <div className="profile-section">
        <h4 className="section-title">Badges</h4>
        <div className="badges-grid">
          {badges.map((badge) => (
            <BadgeCard
              key={badge.id}
              icon={badge.icon}
              name={badge.name}
              description={badge.description}
              earned={badge.earned}
            />
          ))}
        </div>
      </div>

    </div>
  )
}