
export default function Home() {
  return (
    <main className="nz-screen">
      <div className="nz-frame">
        {/* TOP BAR / CHANNEL HEADER */}
        <header className="nz-topbar">
          <div className="nz-topbar-left">
            <span className="nz-logo">NETZERODEV</span>
            <span className="nz-topbar-label">CLIMATE · DATA · SYSTEMS</span>
          </div>
          <div className="nz-topbar-right">
            <span className="nz-topbar-item">CH 01 · PRELAUNCH</span>
            <span className="nz-topbar-item">STATUS: UNDER CONSTRUCTION</span>
          </div>
        </header>

        {/* MIDDLE BAND */}
        <div className="nz-band">
          {/* LEFT: CHANNEL MENU */}
          <aside className="nz-channel-pane">
            <div className="nz-pane-title">CHANNEL SELECT</div>
            <ul className="nz-channel-list">
              <li className="nz-channel nz-channel--active">
                <span className="nz-channel-code">01</span>
                <span className="nz-channel-label">Env Data Workflows</span>
                <span className="nz-channel-state">NOW TUNED</span>
              </li>
              <li className="nz-channel">
                <span className="nz-channel-code">02</span>
                <span className="nz-channel-label">Grid & Infrastructure</span>
                <span className="nz-channel-state">QUEUED</span>
              </li>
              <li className="nz-channel">
                <span className="nz-channel-code">03</span>
                <span className="nz-channel-label">Open Climate Datasets</span>
                <span className="nz-channel-state">PLANNED</span>
              </li>
              <li className="nz-channel">
                <span className="nz-channel-code">04</span>
                <span className="nz-channel-label">Courses & Labs</span>
                <span className="nz-channel-state">OFFLINE</span>
              </li>
              <li className="nz-channel">
                <span className="nz-channel-code">05</span>
                <span className="nz-channel-label">Field Notes / Blog</span>
                <span className="nz-channel-state">OFFLINE</span>
              </li>
            </ul>
          </aside>

          {/* RIGHT: CONTENT AREA */}
          <section className="nz-main-pane">
            <div className="nz-pane-title">SYSTEM STATUS · PREVIEW ONLY</div>

            <div className="nz-main-block">
              <div className="nz-main-label">CURRENT VIEW</div>
              <h1 className="nz-main-heading">
                Climate systems, open environmental data, and resilient
                infrastructure.
              </h1>
              <p className="nz-main-copy">
                This channel will become a learning and reference space for real
                workflows, tools, and systems used to work with open
                environmental data and climate-tech infrastructure.
              </p>
            </div>

            <div className="nz-main-grid">
              <div className="nz-main-card">
                <div className="nz-main-card-label">COMING ONLINE</div>
                <ul className="nz-main-list">
                  <li>· Workflow breakdowns & pipelines</li>
                  <li>· Open data & access patterns</li>
                  <li>· Grid-aware and infra-aware builds</li>
                  <li>· Hands-on labs and courses</li>
                </ul>
              </div>
              <div className="nz-main-card">
                <div className="nz-main-card-label">BUILD QUEUE</div>
                <ul className="nz-main-list">
                  <li>□ Learning center shell</li>
                  <li>□ Course + module map</li>
                  <li>□ Data + infra stack notes</li>
                  <li>□ Public launch schedule</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* BOTTOM TICKER */}
        <footer className="nz-ticker">
          <div className="nz-ticker-label">SYSTEM FEED</div>
          <div className="nz-ticker-text">
            LEARNING CENTER OFFLINE · BLOG OFFLINE · WORKFLOWS AND COURSES
            QUEUED FOR BUILD · NETZERODEV IS RUNNING IN PRELAUNCH MODE ·
          </div>
        </footer>
      </div>
    </main>
  );
}
