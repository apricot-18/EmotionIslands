import React from 'react'; // Reactをインポート
import './App.css'; // App.cssをインポートしてスタイルを適用

// Appコンポーネントを定義
function App() {
  const images = [
    { id: 1, name: 'image1.png', alt: '風景画 1' },
    { id: 2, name: 'image2.png', alt: '風景画 2' },
    { id: 3, name: 'image3.png', alt: '風景画 3' },
    { id: 4, name: 'image4.png', alt: '風景画 4' },
    { id: 5, name: 'image5.png', alt: '風景画 5' },
    { id: 6, name: 'image6.png', alt: '風景画 6' },
    { id: 7, name: 'image7.png', alt: '風景画 7' },
  ];
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
        {images.map((img) => (
          <div className="image-card" key={img.id}>
            {/*
              ポイント: public/images/ ディレクトリからの相対パスを指定。
              import.meta.env.BASE_URL は、vite.config.js の base オプションに基づいて
              適切なルートパス（ローカルでは /、GitHub Pagesでは /EmotionIslands/）を自動で付与します。
            */}
            <img src={`${import.meta.env.BASE_URL}images/${img.name}`} alt={img.alt} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App; // Appコンポーネントをエクスポート
