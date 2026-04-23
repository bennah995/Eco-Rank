import { useState } from "react"
import PointsToast from "../components/PointsToast"
import { useNavigate } from "react-router"
import '../styles/ReportPage.css'

export default function ReportPage() {
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    problemType: "",
    location: "",
    description: ""
  })

  const [beforePhoto, setBeforePhoto] = useState(null)
  const [afterPhoto, setAfterPhoto] = useState(null)
  const [showToast, setShowToast] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit() {
    setShowToast(true)
    setTimeout(() => {
      navigate('/dashboard')
    }, 2000)
  }

  return (
    <div className="report-page">

      {/* progress indicator */}
      <div className="report-progress">
        <div className={step === 1 ? "progress-step active" : "progress-step done"}>1</div>
        <div className="progress-line" />
        <div className={step === 2 ? "progress-step active" : "progress-step"}>2</div>
      </div>

      <h2 className="report-title">
        {step === 1 ? "Report a Problem" : "Confirm Resolution"}
      </h2>

      {/* step 1 */}
      {step === 1 && (
        <div className="step">

          {/* problem type */}
          <div className="form-group">
            <label>Problem type</label>
            <select
              name="problemType"
              value={form.problemType}
              onChange={handleChange}
            >
              <option value="">Select a problem</option>
              <option value="litter">Litter</option>
              <option value="illegal-dump">Illegal Dumpsite</option>
              <option value="e-waste">E-Waste</option>
              <option value="drainage">Drainage</option>
            </select>
          </div>

          {/* location */}
          <div className="form-group">
            <label>Location</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="e.g. Upperhill, Nairobi"
            />
          </div>

          {/* description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder="Describe what you found..."
            />
          </div>

          {/* before photo */}
          <div className="form-group">
            <label>Before photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setBeforePhoto(e.target.files[0])}
            />
            {beforePhoto && (
              <img
                src={URL.createObjectURL(beforePhoto)}
                className="photo-preview"
                alt="before"
              />
            )}
          </div>

          <button
            className="report-btn"
            onClick={() => setStep(2)}
          >
            I've dealt with it →
          </button>

        </div>
      )}

      {/* step 2 */}
      {step === 2 && (
        <div className="step">

          <p className="step-desc">
            Great work! Now upload an after photo to confirm you resolved it and earn your points.
          </p>

          {/* after photo */}
          <div className="form-group">
            <label>After photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setAfterPhoto(e.target.files[0])}
            />
            {afterPhoto && (
              <img
                src={URL.createObjectURL(afterPhoto)}
                className="photo-preview"
                alt="after"
              />
            )}
          </div>

          {/* summary */}
          <div className="report-summary">
            <p><span>Problem</span>{form.problemType}</p>
            <p><span>Location</span>{form.location}</p>
            <p><span>Points</span>+80 pts</p>
          </div>

          <div className="step-btns">
            <button className="back-btn" onClick={() => setStep(1)}>← Back</button>
            <button className="submit-btn" onClick={handleSubmit}>Submit & Earn</button>
          </div>

        </div>
      )}

      <PointsToast
        points={80}
        show={showToast}
        onHide={() => setShowToast(false)}
      />

    </div>
  )
}