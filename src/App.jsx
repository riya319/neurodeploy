function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">N</div>
          <span>Neuro<span className="purple">Deploy</span></span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#architecture">Architecture</a>
          <a href="#technology">Technology</a>
        </div>

        <button className="nav-button">Launch Studio ↗</button>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="announcement">
              ✦ AI-Powered Developer Platform
            </div>

            <h1>
              From code to <span>deployment,</span>
              <br />
              intelligently.
            </h1>

            <p className="hero-description">
              Analyze repositories, understand your codebase with AI,
              detect issues, and deploy applications — all from one
              intelligent developer workspace.
            </p>

            <div className="hero-buttons">
              <button className="primary-button">
                Explore NeuroDeploy ↗
              </button>

              <button className="secondary-button">
                View Architecture
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <h3>AI</h3>
                <p>Code Intelligence</p>
              </div>

              <div>
                <h3>RAG</h3>
                <p>Repository Knowledge</p>
              </div>

              <div>
                <h3>∞</h3>
                <p>Developer Possibilities</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-window">
              <div className="window-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="window-title">NeuroDeploy Studio</span>
              </div>

              <div className="dashboard-content">
                <div className="dashboard-sidebar">
                  <div className="sidebar-brand">N</div>
                  <div className="sidebar-item active">⌂</div>
                  <div className="sidebar-item">⌘</div>
                  <div className="sidebar-item">⌕</div>
                  <div className="sidebar-item">⌁</div>
                  <div className="sidebar-item">⚙</div>
                </div>

                <div className="dashboard-main">
                  <div className="dashboard-heading">
                    <div>
                      <p>WORKSPACE</p>
                      <h3>Overview</h3>
                    </div>

                    <div className="status-badge">
                      ● System Ready
                    </div>
                  </div>

                  <div className="metric-grid">
                    <div className="metric-card">
                      <p>Repositories</p>
                      <h2>12</h2>
                      <span>Projects analyzed</span>
                    </div>

                    <div className="metric-card">
                      <p>Code Health</p>
                      <h2>94<span>%</span></h2>
                      <span>Excellent condition</span>
                    </div>
                  </div>

                  <div className="analysis-card">
                    <div className="analysis-header">
                      <div>
                        <p>AI ANALYSIS</p>
                        <h3>Repository Intelligence</h3>
                      </div>
                      <span className="ai-tag">✦ AI</span>
                    </div>

                    <div className="analysis-line">
                      <div className="analysis-icon">⌘</div>
                      <div>
                        <strong>Codebase analyzed</strong>
                        <p>Structure and technologies detected</p>
                      </div>
                      <span className="check">✓</span>
                    </div>

                    <div className="analysis-line">
                      <div className="analysis-icon">✦</div>
                      <div>
                        <strong>AI knowledge ready</strong>
                        <p>Repository context indexed</p>
                      </div>
                      <span className="check">✓</span>
                    </div>

                    <div className="analysis-line">
                      <div className="analysis-icon">↗</div>
                      <div>
                        <strong>Deployment status</strong>
                        <p>Ready for preview</p>
                      </div>
                      <span className="check">✓</span>
                    </div>
                  </div>

                  <div className="bottom-card">
                    <div className="purple-orb">✦</div>
                    <div>
                      <strong>RepoMind AI</strong>
                      <p>Ask anything about your codebase</p>
                    </div>
                    <span>↗</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card">
              <div className="floating-icon">✦</div>
              <div>
                <strong>AI Assistant</strong>
                <p>Repository insights ready</p>
              </div>
              <div className="online-dot"></div>
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <div className="section-tag">THE PLATFORM</div>

            <h2>
              Everything your code needs.
              <br />
              <span>One intelligent workspace.</span>
            </h2>

            <p>
              Powerful developer tools connected through a single
              intelligent platform.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon lavender">⌘</div>
              <h3>Repository Analysis</h3>
              <p>
                Automatically inspect repositories, identify frameworks,
                understand project structure and analyze code.
              </p>
              <span className="feature-link">Explore feature ↗</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon purple-bg">✦</div>
              <h3>RepoMind AI</h3>
              <p>
                Ask natural-language questions about your repository
                using context-aware retrieval and AI.
              </p>
              <span className="feature-link">Explore feature ↗</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon blue">⌁</div>
              <h3>Code Intelligence</h3>
              <p>
                Discover code metrics, potential issues, dependencies
                and actionable insights.
              </p>
              <span className="feature-link">Explore feature ↗</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon green">↗</div>
              <h3>Deployment Studio</h3>
              <p>
                Build and run projects locally with deployment
                detection, logs and readiness checks.
              </p>
              <span className="feature-link">Explore feature ↗</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon orange">⌘</div>
              <h3>Environment Inspector</h3>
              <p>
                Understand environment variables and project
                configuration requirements.
              </p>
              <span className="feature-link">Explore feature ↗</span>
            </div>

            <div className="feature-card">
              <div className="feature-icon pink">⚕</div>
              <h3>AI Doctor</h3>
              <p>
                Investigate deployment failures using logs,
                diagnostics and AI-powered explanations.
              </p>
              <span className="feature-link">Explore feature ↗</span>
            </div>
          </div>
        </section>

        <section className="architecture-section" id="architecture">
          <div className="architecture-content">
            <div className="section-tag">INTELLIGENT WORKFLOW</div>

            <h2>
              Your entire development
              <br />
              workflow, <span>connected.</span>
            </h2>

            <p>
              NeuroDeploy brings repository understanding, AI-powered
              assistance, code intelligence and deployment into one
              integrated developer experience.
            </p>

            <div className="workflow">
              <div className="workflow-step">
                <span>01</span>
                <div>
                  <strong>Connect Repository</strong>
                  <p>Import and inspect your project</p>
                </div>
              </div>

              <div className="workflow-step">
                <span>02</span>
                <div>
                  <strong>Analyze with AI</strong>
                  <p>Understand code and project structure</p>
                </div>
              </div>

              <div className="workflow-step">
                <span>03</span>
                <div>
                  <strong>Build & Deploy</strong>
                  <p>Run, inspect and troubleshoot</p>
                </div>
              </div>
            </div>
          </div>

          <div className="architecture-visual">
            <div className="architecture-box main-box">
              <div className="architecture-symbol">N</div>
              <h3>NeuroDeploy</h3>
              <p>Intelligent Developer Platform</p>
            </div>

            <div className="architecture-connector"></div>

            <div className="architecture-components">
              <div className="architecture-box component">
                <span>⌘</span>
                <strong>Repository Engine</strong>
              </div>

              <div className="architecture-box component">
                <span>✦</span>
                <strong>AI Intelligence</strong>
              </div>

              <div className="architecture-box component">
                <span>↗</span>
                <strong>Deployment Engine</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="technology-section" id="technology">
          <div className="section-heading">
            <div className="section-tag">TECHNOLOGY STACK</div>
            <h2>Built with modern technology.</h2>
            <p>
              Designed using powerful tools for AI, development,
              analysis and application orchestration.
            </p>
          </div>

          <div className="technology-grid">
            {["React", "FastAPI", "Python", "ChromaDB", "Groq", "Git", "Sentence Transformers", "NetworkX"].map((tech) => (
              <div className="technology-item" key={tech}>
                <span className="tech-dot"></span>
                {tech}
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <div className="section-tag">READY TO EXPLORE?</div>
            <h2>
              Build smarter.
              <br />
              <span>Deploy confidently.</span>
            </h2>
            <p>
              Experience a new way to understand, analyze and deploy
              your applications.
            </p>
            <button className="primary-button">
              Launch NeuroDeploy Studio ↗
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="logo">
          <div className="logo-icon">N</div>
          <span>Neuro<span className="purple">Deploy</span></span>
        </div>

        <p>Intelligent development. Simplified.</p>

        <span>© 2026 NeuroDeploy</span>
      </footer>
    </div>
  );
}

export default App;