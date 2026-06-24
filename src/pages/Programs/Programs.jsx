import "./Programs.css"

function Programs() {
  return (
    <main className="programs-page" aria-label="Programs">
      <div className="programs-header">
        <h1>Programs</h1>
        <p>Choose a program to begin</p>
      </div>

      <div className="programs-grid">
        <a
          className="program-card card-match-program-card"
          href="/programs/card-match"
        >
          <div className="program-card-icon">🔢</div>
          <h2>Card Match</h2>
          <p>Play a quick color and number card match.</p>
          <span>Start</span>
        </a>
      </div>
    </main>
  )
}

export default Programs
