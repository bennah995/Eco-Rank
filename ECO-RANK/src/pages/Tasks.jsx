import TaskCard from "../components/TaskCard"
import tasks from "../data/tasks"
import { useState } from "react"
import '../styles/TaskList.css'

export default function TaskList() {
  const [earnedToday, setEarnedToday] = useState(0);

  function handleComplete(taskPoints) {
    setEarnedToday((prev) => prev + taskPoints)

    localStorage.setItem("Points", JSON.stringify(earnedToday + taskPoints));

  }


  return (
    <div className="tasks-page">

      {/* header */}
      <h2 className="tasks-title">Daily Tasks</h2>

      {/* points earned today */}
      <div className="earned-card">
        <p className="earned-label">Points earned today</p>
        <p className="earned-value">+{earnedToday} pts</p>
      </div>

      {/* task list */}
      <div className="tasks-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            taskName={task.taskName}
            points={task.points}
            onComplete={() => handleComplete(task.points)}
          />
        ))}
      </div>

    </div>
  )
}