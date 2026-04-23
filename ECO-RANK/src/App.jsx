import './App.css'
import { Routes, Route, useLocation } from "react-router"
import Navbar from './components/NavBar'
import LoginForm from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import BottomNav from './components/BottomNav'
import Dashboard from './pages/Dashboard'
import Leaderboard from './pages/LeaderBoardPage'
import Profile from './pages/Profile'
import TaskList from './pages/Tasks'
import ReportPage from './pages/Report'

function App() {
  const location = useLocation();
  const hideNav = ['/', '/login', '/register'].includes(location.pathname)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderBoard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/report" element={<ReportPage />} />
      </Routes>
      {!hideNav && <BottomNav />}
    </div>
  )
}

export default App
