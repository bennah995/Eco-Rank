import '../styles/BadgeCard.css'

export default function BadgeCard({ icon, name, description, earned }) {
  return (
    <div className={earned ? "badge-card" : "badge-card locked"}>
      <div className="badge-icon">{icon}</div>
      <p className="badge-name">{name}</p>
      <p className="badge-description">{description}</p>
    </div>
  )
}