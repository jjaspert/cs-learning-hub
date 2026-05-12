// We import our topics data and type from the file we just created
// "import" means "bring this in from another file so we can use it here"
import { beginnerTopics, Topic } from "./data/topics";

// This is our main page component — the thing Next.js shows at localhost:3000
export default function Home() {
  return (
    <div className="hub">

      {/* ── TOP BAR ── */}
      <div className="topbar">
        <div className="logo">
          <div className="logo-icon">⬡</div>
          {/* The span lets us color just the word "Learning" blue */}
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

      {/* ── MAIN LAYOUT (sidebar + content side by side) ── */}
      <div className="main">

        {/* ── SIDEBAR ── */}
        <div className="sidebar">
          <div className="sidebar-section">Learning Path</div>
          <div className="sidebar-item active">● Beginner <span className="badge">In progress</span></div>
          <div className="sidebar-item">○ Intermediate <span className="badge gray">Locked</span></div>
          <div className="sidebar-item">○ Advanced <span className="badge gray">Locked</span></div>

          <div className="sidebar-section">Topics</div>

          {/* 
            .filter() keeps only topics that are "done" or "active"
            .map() loops through each topic and creates a sidebar item for it
            This means the sidebar always matches the real data automatically
          */}
          {beginnerTopics
            .filter((t: Topic) => t.status !== "locked")
            .map((t: Topic) => (
              <div
                key={t.id}
                className={`sidebar-item ${t.status === "active" ? "active" : "done"}`}
              >
                {t.status === "done" ? "✓" : "●"} {t.title}
              </div>
            ))}

          {/* ── PROGRESS CARD ── */}
          <div className="progress-card">
            <div className="progress-label">
              {/* 
                .filter() counts only completed topics
                .length gives us the count
              */}
              Beginner Level — {beginnerTopics.filter((t: Topic) => t.status === "done").length}/{beginnerTopics.length} topics
            </div>
            <div className="progress-bar-bg">
              {/* Calculate percentage dynamically from real data */}
              <div
                className="progress-bar-fill"
                style={{
                  width: `${Math.round(
                    (beginnerTopics.filter((t: Topic) => t.status === "done").length / beginnerTopics.length) * 100
                  )}%`
                }}
              ></div>
            </div>
            <div className="progress-nums">
              <span>
                {Math.round(
                  (beginnerTopics.filter((t: Topic) => t.status === "done").length / beginnerTopics.length) * 100
                )}% complete
              </span>
              <span>
                {beginnerTopics.filter((t: Topic) => t.status === "locked").length} remaining
              </span>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="content">

          {/* ── HERO BANNER ── */}
          {/* Find the one topic that is currently "active" */}
          {(() => {
            const activeTopic = beginnerTopics.find((t: Topic) => t.status === "active");
            // If there's no active topic, show nothing
            if (!activeTopic) return null;
            return (
              <div className="hero-banner">
                <div>
                  <div className="hero-eyebrow">
                    Beginner Level · Topic {activeTopic.id} of {beginnerTopics.length}
                  </div>
                  <div className="hero-title">{activeTopic.title}</div>
                  <div className="hero-sub">{activeTopic.description}</div>
                  <button className="hero-cta">Continue Learning →</button>
                </div>
                <div className="hero-code">
                  <div className="code-comment">// Python</div>
                  <div><span className="code-var">name</span> = <span className="code-str">"Alice"</span></div>
                  <div><span className="code-var">age</span> = <span className="code-num">21</span></div>
                  <div><span className="code-var">gpa</span> = <span className="code-num">3.8</span></div>
                </div>
              </div>
            );
          })()}

          {/* ── STATS ROW ── */}
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-label">Topics Done</div>
              <div className="stat-value blue">
                {/* Count topics with status "done" */}
                {beginnerTopics.filter((t: Topic) => t.status === "done").length}
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Total XP</div>
              <div className="stat-value">1,240</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Quizzes Passed</div>
              <div className="stat-value green">4</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Day Streak</div>
              <div className="stat-value amber">7</div>
            </div>
          </div>

          {/* ── TOPICS GRID ── */}
          <div className="section-header">
            <div className="section-title">Beginner Topics</div>
            <button className="see-all">See all {beginnerTopics.length} →</button>
          </div>

          <div className="topics-grid">
            {/* 
              Loop through ALL topics and create a card for each one
              Each card shows the topic number, name, languages, and status
            */}
            {beginnerTopics.map((t: Topic) => (
              <div key={t.id} className={`topic-card ${t.status}`}>
                {/* Topic number padded to 2 digits: 1 becomes "01" */}
                <div className="topic-num">Topic {String(t.id).padStart(2, "0")}</div>
                <div className="topic-name">{t.title}</div>

                {/* Language chips — one for each language in the array */}
                <div className="topic-langs">
                  {t.languages.map((lang: string) => (
                    <span
                      key={lang}
                      className={`lang-chip ${lang.toLowerCase().replace("#", "sharp").replace("script", "")}`}
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <div className="topic-status">
                  {t.status === "done" && "✓ Completed"}
                  {t.status === "active" && "● In progress"}
                  {t.status === "locked" && "○ Locked"}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}