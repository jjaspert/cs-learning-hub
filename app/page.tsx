export default function Home() {
  return (
    <div className="hub">
      {/* Top Bar */}
      <div className="topbar">
        <div className="logo">
          <div className="logo-icon">⬡</div>
          <span className="logo-name">CS<span className="blue">Learning</span>Hub</span>
        </div>
        <nav className="nav-pills">
          <button className="nav-pill active">Dashboard</button>
          <button className="nav-pill">Topics</button>
          <button className="nav-pill">Quizzes</button>
          <button className="nav-pill">Projects</button>
        </nav>
        <div className="user-chip">
          <span className="xp-badge">1,240 XP</span>
          <div className="avatar">YO</div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="main">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-section">Learning Path</div>
          <div className="sidebar-item active">● Beginner <span className="badge">In progress</span></div>
          <div className="sidebar-item">○ Intermediate <span className="badge gray">Locked</span></div>
          <div className="sidebar-item">○ Advanced <span className="badge gray">Locked</span></div>

          <div className="sidebar-section">Topics</div>
          <div className="sidebar-item done">✓ IDE & First Program</div>
          <div className="sidebar-item done">✓ Output & Comments</div>
          <div className="sidebar-item active">● Variables & Types</div>
          <div className="sidebar-item">○ Conditionals</div>
          <div className="sidebar-item">○ Loops</div>
          <div className="sidebar-item">○ Functions</div>

          <div className="progress-card">
            <div className="progress-label">Beginner Level — 6/17 topics</div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill"></div>
            </div>
            <div className="progress-nums"><span>34% complete</span><span>11 remaining</span></div>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          {/* Hero */}
          <div className="hero-banner">
            <div>
              <div className="hero-eyebrow">Beginner Level · Topic 3 of 17</div>
              <div className="hero-title">Variables & Data Types</div>
              <div className="hero-sub">Same concept — 6 different languages. Pick any and start.</div>
              <button className="hero-cta">Continue Learning →</button>
            </div>
            <div className="hero-code">
              <div className="code-comment">// Python</div>
              <div><span className="code-var">name</span> = <span className="code-str">"Alice"</span></div>
              <div><span className="code-var">age</span> = <span className="code-num">21</span></div>
              <div><span className="code-var">gpa</span> = <span className="code-num">3.8</span></div>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-row">
            <div className="stat-card"><div className="stat-label">Topics Done</div><div className="stat-value blue">6</div></div>
            <div className="stat-card"><div className="stat-label">Total XP</div><div className="stat-value">1,240</div></div>
            <div className="stat-card"><div className="stat-label">Quizzes Passed</div><div className="stat-value green">4</div></div>
            <div className="stat-card"><div className="stat-label">Day Streak</div><div className="stat-value amber">7</div></div>
          </div>

          {/* Topics Grid */}
          <div className="section-header">
            <div className="section-title">Beginner Topics</div>
            <button className="see-all">See all 17 →</button>
          </div>
          <div className="topics-grid">
            {["IDE & First Program", "Output & Comments", "Variables & Types", "Conditionals", "Loops", "Functions"].map((topic, i) => (
              <div key={i} className={`topic-card ${i < 2 ? "done" : i === 2 ? "active" : "locked"}`}>
                <div className="topic-num">Topic {String(i + 1).padStart(2, "0")}</div>
                <div className="topic-name">{topic}</div>
                <div className="topic-langs">
                  <span className="lang-chip py">Py</span>
                  <span className="lang-chip js">JS</span>
                  <span className="lang-chip c">C</span>
                  <span className="lang-chip java">Java</span>
                </div>
                <div className="topic-status">{i < 2 ? "✓ Completed" : i === 2 ? "● In progress" : "○ Locked"}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}