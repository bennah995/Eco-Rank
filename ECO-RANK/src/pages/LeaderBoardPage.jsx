import LeaderBoardRow from "../components/LeaderBoardRow"
import leaderboard from "../data/Leaderboard"
import { useState } from "react"
import '../styles/Leaderboard.css'

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("weekly")

  return (
    <div className="leaderboard-page">
      <h2 className="leaderboard-title">Leaderboard</h2>

      {/* tabs */}
      <div className="leaderboard-tabs">
        <button
          className={activeTab === "weekly" ? "tab active-tab" : "tab"}
          onClick={() => setActiveTab("weekly")}
        >
          Weekly
        </button>

        <button
          className={activeTab === "all-time" ? "tab active-tab" : "tab"}
          onClick={() => setActiveTab("all-time")}
        >
          All-Time
        </button>

        <button
          className={activeTab === "friends" ? "tab active-tab" : "tab"}
          onClick={() => setActiveTab("friends")}
        >
          Friends
        </button>
      </div>

      {/* list */}
      <div className="leaderboard-list">
        {leaderboard.map((user, index) => (
          <LeaderBoardRow
            key={user.id}
            rank={index + 1}
            userName={user.userName}
            points={user.points}
          />
        ))}
      </div>
    </div>
  )
}