import "./App.css";

function App() {
  const features = [
    {
      icon: "⌘",
      title: "Repository Analysis",
      description:
        "Automatically inspect repositories, detect frameworks, analyze project structure, and identify application entry points.",
    },
    {
      icon: "✦",
      title: "RepoMind AI",
      description:
        "Ask questions about your codebase and receive contextual answers using intelligent code retrieval.",
    },
    {
      icon: "⌁",
      title: "Code Intelligence",
      description:
        "Analyze code quality, identify potential issues, explore dependencies, and understand your project.",
    },
    {
      icon: "◈",
      title: "Deployment Studio",
      description:
        "Build and run supported applications locally with deployment logs and troubleshooting assistance.",
    },
    {
      icon: "⌘",
      title: "Dependency Explorer",
      description:
        "Visualize relationships between files and discover how different parts of your codebase connect.",
    },
    {
      icon: "✧",
      title: "AI Doctor",
      description:
        "Understand deployment errors, analyze logs, and receive intelligent troubleshooting suggestions.",
    },
  ];

  const technologies = [
    "React",
    "Vite",
    "FastAPI",
    "Python",
    "GitPython",
    "ChromaDB",
    "Sentence Transformers",
    "Groq",
    "NetworkX",
  ];

  return (
    <div className="website">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="brand">
          <div className="brand-icon">
            <span>N</span>
          </div>

          <span className="brand-name">
            Neuro<span>Deploy</span>
          </span>
        </a>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#architecture">Architecture</a>
          <a href="#technology">Technology</a>
        </div>

        <a href="#studio" className="nav-button">
          <span>Launch Studio</span>
          <span className="nav-arrow">↗</span>
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            AI-POWERED DEVELOPER PLATFORM
          </div>

          <h1>
            From code to
            <br />
            <span className="gradient-text">
              deployment, intelligently.
            </span>
          </h1>

          <p className="hero-description">
            Analyze repositories, understand your codebase with AI,
            identify issues, and deploy applications — all from
            one intelligent developer workspace.
          </p>

          <div className="hero-actions">
            <a href="#features" className="primary-button">
              Explore NeuroDeploy
              <span>↗</span>
            </a>

            <a href="#architecture" className="secondary-button">
              View Architecture
            </a>
          </div>

          <div className="hero-caption">
            <span>✦</span>
            Built for smarter development workflows
          </div>
        </div>

        {/* PRODUCT PREVIEW */}
        <div className="product-preview">
          <div className="preview-window">

            <div className="preview-header">
              <div className="window-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>

              <div className="preview-window-title">
                NeuroDeploy Studio
              </div>

              <div className="preview-online">
                <span></span>
                System Ready
              </div>
            </div>

            <div className="preview-layout">

              <aside className="preview-sidebar">
                <div className="preview-logo">N</div>

                <div className="preview-nav-item active">⌂</div>
                <div className="preview-nav-item">⌘</div>
                <div className="preview-nav-item">✦</div>
                <div className="preview-nav-item">⌁</div>
                <div className="preview-nav-item">◈</div>
              </aside>

              <main className="preview-content">

                <div className="preview-page-heading">
                  <div>
                    <span className="eyebrow">WORKSPACE</span>
                    <h3>Project Overview</h3>
                  </div>

                  <div className="project-chip">
                    <span></span>
                    NeuroDeploy
                  </div>
                </div>

                <div className="preview-stat-grid">
                  <div className="preview-stat">
                    <div className="stat-icon purple">⌘</div>
                    <h4>01</h4>
                    <p>Repository</p>
                  </div>

                  <div className="preview-stat">
                    <div className="stat-icon pink">✦</div>
                    <h4>AI</h4>
                    <p>Intelligence</p>
                  </div>

                  <div className="preview-stat">
                    <div className="stat-icon blue">⌁</div>
                    <h4>Ready</h4>
                    <p>Deployment</p>
                  </div>
                </div>

                <div className="preview-panels">

                  <div className="preview-panel">
                    <div className="panel-heading">
                      <h4>Repository Analysis</h4>
                      <span>···</span>
                    </div>

                    <div className="analysis-item">
                      <div className="analysis-symbol">⚛</div>
                      <div className="analysis-info">
                        <strong>Frontend</strong>
                        <span>React application detected</span>
                      </div>
                      <span className="analysis-check">✓</span>
                    </div>

                    <div className="analysis-item">
                      <div className="analysis-symbol">⚙</div>
                      <div className="analysis-info">
                        <strong>Backend</strong>
                        <span>API structure detected</span>
                      </div>
                      <span className="analysis-check">✓</span>
                    </div>

                    <div className="analysis-item">
                      <div className="analysis-symbol">⌘</div>
                      <div className="analysis-info">
                        <strong>Dependencies</strong>
                        <span>Project scanned</span>
                      </div>
                      <span className="analysis-check">✓</span>
                    </div>
                  </div>

                  <div className="preview-panel ai-preview">
                    <div className="ai-icon">✦</div>

                    <span className="ai-label">RepoMind AI</span>

                    <h4>
                      Your codebase,
                      <br />
                      understood.
                    </h4>

                    <p>Ask questions. Explore code. Get insights.</p>

                    <div className="ai-input">
                      Ask about your repository...
                      <span>↗</span>
                    </div>
                  </div>

                </div>

                <div className="preview-footer">
                  <span className="success-status">
                    <span></span>
                    Analysis complete
                  </span>

                  <span>Workspace connected</span>
                </div>

              </main>
            </div>
          </div>

          <div className="floating-info floating-left">
            <div className="floating-symbol">✦</div>
            <div>
              <strong>AI Code Insights</strong>
              <span>Intelligent analysis</span>
            </div>
          </div>

          <div className="floating-info floating-right">
            <div className="floating-symbol success-symbol">✓</div>
            <div>
              <strong>Deployment Ready</strong>
              <span>Local environment</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section features-section" id="features">
        <div className="section-heading">
          <span className="section-label">PLATFORM CAPABILITIES</span>

          <h2>
            Everything your code needs.
            <br />
            <span className="gradient-text">
              One intelligent workspace.
            </span>
          </h2>

          <p>
            Powerful developer tools designed to help you
            understand, analyze, and deploy projects efficiently.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={index}>
              <div className="feature-card-top">
                <div className="feature-icon">{feature.icon}</div>
                <span className="feature-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <a href="#studio" className="feature-link">
                Explore feature <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="section architecture-section" id="architecture">
        <div className="section-heading">
          <span className="section-label">SYSTEM ARCHITECTURE</span>

          <h2>
            Intelligence at
            <span className="gradient-text"> every layer.</span>
          </h2>

          <p>
            A unified architecture combining repository analysis,
            AI-powered knowledge retrieval, code intelligence,
            and local deployment.
          </p>
        </div>

        <div className="architecture-card">
          <div className="architecture-flow">

            <div className="architecture-node user-node">
              <div className="node-icon">⌘</div>
              <div>
                <strong>Developer</strong>
                <span>Repositories & Queries</span>
              </div>
            </div>

            <div className="architecture-arrow">↓</div>

            <div className="architecture-node frontend-node">
              <div className="node-icon">⚛</div>
              <div>
                <strong>React Frontend</strong>
                <span>Interactive Developer Studio</span>
              </div>
            </div>

            <div className="architecture-arrow">↓</div>

            <div className="architecture-node backend-node">
              <div className="node-icon">⚙</div>
              <div>
                <strong>FastAPI Backend</strong>
                <span>Core Orchestration Layer</span>
              </div>
            </div>

            <div className="architecture-branches">

              <div className="architecture-branch">
                <div className="branch-connector"></div>
                <div className="branch-node">
                  <div className="node-icon">⌘</div>
                  <strong>Repository Analysis</strong>
                  <span>Git & Code Inspection</span>
                </div>
              </div>

              <div className="architecture-branch">
                <div className="branch-connector"></div>
                <div className="branch-node">
                  <div className="node-icon">✦</div>
                  <strong>RepoMind AI</strong>
                  <span>RAG & Code Q&A</span>
                </div>
              </div>

              <div className="architecture-branch">
                <div className="branch-connector"></div>
                <div className="branch-node">
                  <div className="node-icon">⌁</div>
                  <strong>Code Intelligence</strong>
                  <span>Analysis & Dependencies</span>
                </div>
              </div>

              <div className="architecture-branch">
                <div className="branch-connector"></div>
                <div className="branch-node">
                  <div className="node-icon">◈</div>
                  <strong>Deployment Engine</strong>
                  <span>Local Build & Runtime</span>
                </div>
              </div>

            </div>

            <div className="architecture-arrow">↓</div>

            <div className="architecture-node data-node">
              <div className="node-icon">◉</div>
              <div>
                <strong>AI & Data Layer</strong>
                <span>ChromaDB · Embeddings · Groq LLM</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="section technology-section" id="technology">
        <div className="section-heading">
          <span className="section-label">TECHNOLOGY STACK</span>

          <h2>
            Built with
            <span className="gradient-text">
              {" "}powerful technologies.
            </span>
          </h2>

          <p>
            Modern technologies connecting intelligent code
            understanding with practical developer tools.
          </p>
        </div>

        <div className="technology-grid">
          {technologies.map((technology, index) => (
            <div className="technology-card" key={index}>
              <div className="technology-icon">
                {["⚛", "⚡", "◈", "🐍", "⌘", "◉", "✦", "AI", "⌁"][index]}
              </div>

              <span>{technology}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="studio">
        <div className="cta-glow"></div>

        <div className="cta-content">
          <span className="section-label">EXPLORE THE PLATFORM</span>

          <h2>
            Your development workflow,
            <br />
            <span className="gradient-text">
              reimagined.
            </span>
          </h2>

          <p>
            Bring code understanding, intelligent analysis,
            and deployment into one connected workspace.
          </p>

          <a href="#home" className="primary-button">
            Explore NeuroDeploy <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <a href="#home" className="brand footer-brand">
            <div className="brand-icon">N</div>
            <span className="brand-name">
              Neuro<span>Deploy</span>
            </span>
          </a>

          <p>
            Intelligent development.
            <br />
            Simplified deployment.
          </p>

          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#architecture">Architecture</a>
            <a href="#technology">Technology</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 NeuroDeploy</span>
          <span>Built for intelligent development workflows.</span>
        </div>
      </footer>

    </div>
  );
}

export default App;