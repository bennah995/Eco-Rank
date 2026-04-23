import "../styles/LeaderBoard.css"

export default function LeaderBoardRow({userName, points, rank}){
  const initials = userName.slice(0, 2).toUpperCase();
  
  function getRankColor(rank){
    if(rank === 1) return "gold"
    if(rank === 2) return "silver"
    if(rank === 3) return "#cd7f32"
    return "#888"
  }

  return(
    <div className="leaderboard-row">
      <div className="avatar">{initials}</div>
      <span className="rank-number" style={{ color: getRankColor(rank) }}>{rank}</span>
      <p className="leader-username"><strong>{userName}</strong></p>
      <p className="leader-points"><i>{points} pts</i></p>
    </div>
  )
}