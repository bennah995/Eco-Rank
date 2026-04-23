import '../styles/ReportCard.css'

export default function ReportCard({problemType, location, points, timeStamp, status}){
  
  function getBadgeStyle(status) {
    if (status === "Resolved") return { backgroundColor: "#1D9E75", color: "#fff" }
    if (status === "Reported") return { backgroundColor: "#F59E0B", color: "#fff" }
  }

  return(
    <div className="report-card">

      {/* header */}
      <div className='report-header'>
        <h5 className="problem-type">{problemType}</h5>
        <span style={getBadgeStyle(status)}>{status}</span>
      </div>

      {/* location */}
      <h5 className='report-location'>📍 {location}</h5>

      {/* footer */}
      <div className="report-footer">
        <p className="report-pointer">+{points} pts</p>
        <p className="report-timestamp">{timeStamp}</p>
      </div>
    </div>
  )
}