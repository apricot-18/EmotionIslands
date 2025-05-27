import React, { useState } from 'react';
import './App.css'; // Appコンポーネント固有のカスタムCSSを読み込む

function App() {
    const [activeTab, setActiveTab] = useState('All');

    // 画像データの定義 (カテゴリや時間帯のダミー情報を含む)
    const imagesData = [
        { id: 1, name: 'image1.jpg', alt: '風景画 1', category: '森林', timeZone: '昼' },
        { id: 2, name: 'image2.jpg', alt: '風景画 2', category: '砂漠', timeZone: '夜' },
        { id: 3, name: 'image3.jpg', alt: '風景画 3', category: '雪山', timeZone: '昼' },
        { id: 4, name: 'image4.jpg', alt: '風景画 4', category: '森林', timeZone: '夜' },
        { id: 5, name: 'image5.jpg', alt: '風景画 5', category: '砂漠', timeZone: '昼' },
        { id: 6, name: 'image6.jpg', alt: '風景画 6', category: '雪山', timeZone: '夜' },
        { id: 7, name: 'image7.jpg', alt: '風景画 7', category: '森林', timeZone: '昼' },
    ];

    // タブクリック時のハンドラ
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    // アクティブなタブに基づいて画像をフィルタリングするロジック
    const filteredImages = imagesData.filter(img => {
        if (activeTab === 'All') {
            return true; // 'All'タブの場合はすべての画像を表示
        } else if (activeTab === '気候帯') {
            // 例: 特定の気候帯でフィルタリングする場合のロジック
            // ここではダミーとして '森林' または '砂漠' の画像をフィルター
            return img.category === '森林' || img.category === '砂漠';
        } else if (activeTab === '時間帯') {
            // 例: 特定の時間帯でフィルタリングする場合のロジック
            // ここではダミーとして '昼' の画像をフィルター
            return img.timeZone === '昼';
        }
        return false;
    });

    // 「本」アイコンクリック時のハンドラ
    const handleBookIconClick = () => {
        alert('レポート詳細画面へ移動 (この機能は未実装です)');
    };

    // 「X」アイコンクリック時のハンドラ
    const handleCloseIconClick = () => {
        alert('アプリを閉じます (この機能は未実装です)');
    };

    return (
        // メインのコンテナ: 背景色、角丸、影、幅と中央寄せ、レスポンシブなパディング
        <div className="bg-[#2a2a4a] rounded-lg shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto p-4 sm:p-6 md:p-8">

            {/* ヘッダー部分: フレックスボックスで左右の要素を配置、中央にタイトル、レスポンシブなマージン */}
            <header className="flex justify-between items-center mb-6 sm:mb-8 md:mb-10">
                {/* アイコンボタン: サイズをレスポンシブに調整 */}
                <button className="icon-button text-xl sm:text-2xl" onClick={handleBookIconClick}>
                    📖
                </button>
                {/* タイトル: フォントサイズをレスポンシブに調整 */}
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Weekly Report</h1>
                {/* アイコンボタン: サイズをレスポンシブに調整 */}
                <button className="icon-button text-xl sm:text-2xl" onClick={handleCloseIconClick}>
                    ❌
                </button>
            </header>

            {/* 日付表示部分: 中央揃え、フォントサイズとマージンをレスポンシブに調整 */}
            <section className="text-center mb-6 sm:mb-8 md:mb-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold">5/21 - 5/27</p>
            </section>

            {/* フィルタリングタブ部分: フレックスボックスで均等配置、レスポンシブなギャップとパディング */}
            <nav className="flex justify-around gap-2 sm:gap-4 bg-[#3a3a5a] rounded-full p-1 sm:p-2 mb-6 sm:mb-8 md:mb-10">
                {/* 各タブボタン: flex-1で幅を均等に、activeクラスでスタイル変更 */}
                <button className={`tab-button flex-1 ${activeTab === 'All' ? 'active' : ''}`} onClick={() => handleTabClick('All')}>All</button>
                <button className={`tab-button flex-1 ${activeTab === '気候帯' ? 'active' : ''}`} onClick={() => handleTabClick('気候帯')}>気候帯</button>
                <button className={`tab-button flex-1 ${activeTab === '時間帯' ? 'active' : ''}`} onClick={() => handleTabClick('時間帯')}>時間帯</button>
            </nav>

            {/* 画像グリッド部分: レスポンシブなグリッドレイアウト（モバイル2列 -> mdで3列 -> lgで4列）、ギャップもレスポンシブに */}
            <main className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredImages.map(img => (
                    <div className="image-card" key={img.id}>
                        {/* 画像パス: Vite環境変数を使用して適切に解決 */}
                        <img src={`${import.meta.env.BASE_URL}images/${img.name}`} alt={img.alt} />
                    </div>
                ))}
            </main>
        </div>
    );
}

export default App;
