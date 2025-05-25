import React from 'react'; // Reactをインポート
import './App.css'; // App.cssをインポートしてスタイルを適用

// Appコンポーネントを定義
function App() {
  return (
    <div className="container">
      {/* ヘッダー部分 */}
      <header className="app-header">
        <button className="icon-button left-icon">
          <span className="material-icons-outlined">book</span>
        </button>
        <h1 className="header-title">Weekly Report</h1>
        <button className="icon-button right-icon">
          <span className="material-icons-outlined">close</span>
        </button>
      </header>

      {/* 日付表示部分 */}
      <section className="date-display">
        <p className="current-week">5/21 - 5/27</p>
      </section>

      {/* フィルタリングタブ部分 */}
      <nav className="filter-tabs">
        <button className="tab-button active">All</button>
        <button className="tab-button">気候帯</button>
        <button className="tab-button">時間帯</button>
      </nav>

      {/* 画像グリッド部分 */}
      <main className="image-grid">
        <div className="image-card">
          <img src="https://via.placeholder.com/150" alt="Image 1" /> {/* 仮の画像URL */}
        </div>
        <div className="image-card">
          <img src="https://via.placeholder.com/150" alt="Image 2" />
        </div>
        <div className="image-card">
          <img src="https://via.placeholder.com/150" alt="Image 3" />
        </div>
        <div className="image-card">
          <img src="https://via.placeholder.com/150" alt="Image 4" />
        </div>
        <div className="image-card">
          <img src="https://via.placeholder.com/150" alt="Image 5" />
        </div>
        <div className="image-card">
          <img src="https://via.placeholder.com/150" alt="Image 6" />
        </div>
        <div className="image-card">
          <img src="https://via.placeholder.com/150" alt="Image 7" />
        </div>
      </main>
    </div>
  );
}

export default App; // Appコンポーネントをエクスポート
