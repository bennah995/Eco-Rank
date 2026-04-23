import { useEffect } from 'react'
import '../styles/PointsToast.css'

export default function PointsToast({ points, show, onHide }) {

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide()
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [show])

  if (!show) return null

  return (
    <div className="points-toast">
      +{points} pts
    </div>
  )
}