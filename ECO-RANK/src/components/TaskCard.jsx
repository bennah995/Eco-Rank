import { useState } from "react";
import '../styles/TaskCard.css'

export default function TaskCard({taskName, points, onComplete}){
  const [isCompleted, setisComplete] = useState(false);

  function handleComplete(){
    setisComplete(true)
    onComplete()
  }

  return(
    <div className={isCompleted ? "task-card completed" : "task-card"}>
      <p><strong>{taskName}</strong></p>
      <p><i>{points} pts</i></p>

      <button onClick={handleComplete} disabled={isCompleted}>{isCompleted ? "Done" : "Complete"}</button>
    </div>
  )
}