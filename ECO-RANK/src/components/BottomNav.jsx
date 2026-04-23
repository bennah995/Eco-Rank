import {Home, Camera, Trophy, User} from 'lucide-react'
import { NavLink } from 'react-router'
import '../styles/BottomNav.css'

export default function BottomNav(){
  return(
    <div className="bottom-nav">
      <NavLink to="/dashboard" className={({isActive}) => isActive ? "active-tab" : ""}>
        <div className="home-Icon">
          <Home size={24} />
          <span>Home</span>
        </div>
      </NavLink>

      <NavLink to="/report" className={({ isActive }) => isActive ? "active-tab" : ""}>
        <div className="camera-Icon">
          <Camera size={24} />
          <span>Report</span>
        </div>
      </NavLink>

      <NavLink to="/leaderboard" className={({ isActive }) => isActive ? "active-tab" : ""}>
        <div className="trophy-Icon">
          <Trophy size={24} />
          <span>Leaderboard</span>
        </div>
      </NavLink>

      <NavLink to="/profile" className={({ isActive }) => isActive ? "active-tab" : ""}>
        <div className="user-Icon">
          <User size={24} />
          <span>Profile</span>
        </div>
      </NavLink>
    </div>
  )
}