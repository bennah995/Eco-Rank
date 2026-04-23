import { useNavigate } from "react-router"
import TaskCard from "../components/TaskCard"
import ReportCard from "../components/ReportCard"
import PointsToast from "../components/PointsToast"
import tasks from "../data/tasks"
import reports from "../data/reports"
import { useState } from "react"
import '../styles/Dashboard.css'

export default function Dashboard() {
  const navigate = useNavigate()

  const storedUser = JSON.parse(localStorage.getItem("registeredUser"))
  const { userName, points } = storedUser

  const [showToast, setShowToast] = useState(false)
  const [toastPoints, setToastPoints] = useState(0)



  function handleTaskComplete(taskPoints) {
    setToastPoints((prev) => prev + taskPoints)
    setShowToast(true)

    localStorage.setItem("DashPoints", JSON.stringify(toastPoints + taskPoints))
  }

  return (
    <div className="dashboard">

      {/* header */}
      <header className="dashboard-header">
        <div className="user-info">
          <p className="welcome">Welcome back,</p>
          <h2 className="username">{userName}</h2>
        </div>
        <div className="points-badge">
          <p className="points-label">Weekly pts</p>
          <p className="points-value">{toastPoints}</p>
        </div>
      </header>

      {/* daily tasks */}
      <section className="dashboard-section">
        <div className="section-header">
          <h3>Daily Tasks</h3>
          <span onClick={() => navigate('/tasks')} className="see-all">See all</span>
        </div>
        {tasks.slice(0, 3).map((task) => (
          <TaskCard
            key={task.id}
            taskName={task.taskName}
            points={task.points}
            onComplete={() => handleTaskComplete(task.points)}
          />
        ))}
      </section>

      {/* report button */}
      <button className="report-btn" onClick={() => navigate('/report')}>
        + Report a Problem
      </button>

      {/* recent activity */}
      <section className="dashboard-section">
        <div className="section-header">
          <h3>Recent Activity</h3>
        </div>
        {reports.map((report) => (
          <ReportCard
            key={report.id}
            problemType={report.problemType}
            location={report.location}
            points={report.points}
            timeStamp={report.timeStamp}
            status={report.status}
          />
        ))}
      </section>

      {/* points toast */}
      <PointsToast
        points={toastPoints}
        show={showToast}
        onHide={() => setShowToast(false)}
      />

    </div>
  )
}
