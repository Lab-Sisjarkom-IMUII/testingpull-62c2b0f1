import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <div className="app-content">
          {/* IM-UII Header */}
          <div className="app-header">
            <h1 className="app-title">IM-UII</h1>
            <p className="app-subtitle">Welcome to Your Project</p>
          </div>

          {/* Feature Cards */}
          <div className="app-features">
            <div className="app-card">
              <div className="app-icon">🚀</div>
              <h3 className="app-card-title">Fast Development</h3>
              <p className="app-card-text">
                Built with Vite for lightning-fast hot module replacement and instant feedback
              </p>
            </div>
            
            <div className="app-card">
              <div className="app-icon">🔧</div>
              <h3 className="app-card-title">Easy Deployment</h3>
              <p className="app-card-text">
                Configured with IM-UII for seamless deployment workflow and automation
              </p>
            </div>
            
            <div className="app-card">
              <div className="app-icon">⚡</div>
              <h3 className="app-card-title">Modern Stack</h3>
              <p className="app-card-text">
                Powered by the latest React and cutting-edge tooling
              </p>
            </div>
          </div>

          {/* Quick Start */}
          <div className="app-quick-start">
            <h3 className="app-quick-start-title">Quick Start</h3>
            <div className="app-commands">
              <div className="app-command-row">
                <span className="app-command-label">Install</span>
                <code className="app-command-code">npm install</code>
              </div>
              <div className="app-command-row">
                <span className="app-command-label">Dev server</span>
                <code className="app-command-code">npm run dev</code>
              </div>
              <div className="app-command-row">
                <span className="app-command-label">Build</span>
                <code className="app-command-code">npm run build</code>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="app-footer">
            <p className="app-footer-text">
              Powered by <span className="app-footer-brand">IM-UII</span>
            </p>
            <p className="app-footer-text">Deploy with confidence ✨</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;