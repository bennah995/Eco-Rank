import { Link } from "react-router"
import '../styles/Navbar.css'

export default function Navbar(){
  return(
    <nav className="navbar">

      {/* logo */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '36px', height: '36px', borderRadius: '10px',
          backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex',
          alignItems: 'center', justifyContent: 'center'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C7 2 3 7 3 12c0 3 1.5 5.5 4 7l1-3c-1.5-1-2.5-2.5-2.5-4C5.5 8 8.5 5 12 5c4.5 0 8 3.5 8 7.5S16.5 20 12 20v-3l-4 4 4 3v-3c5.5 0 10-4.5 10-10S17.5 2 12 2z"
              fill="white"
            />
          </svg>
        </div>
        <span style={{ fontSize: '20px', fontWeight: '600', letterSpacing: '-0.5px', color: '#fff' }}>
          Eco<span style={{ opacity: 0.75 }}>Rank</span>
        </span>
      </div>

      {/* links */}
      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>

    </nav>
  )
}