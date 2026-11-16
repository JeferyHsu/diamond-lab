# ◇ Diamond Lab｜棒球知識與數據實驗室

以深色科技風格建立的棒球教學網站，提供規則介紹、守備位置、打擊與投手數據、術語解說，以及可互動的打擊數據計算器。

## ✨ 網站功能

- 8 篇繁體中文教學文章（基礎規則、數據指標、觀賽指南、棒球術語）
- 資料驅動的文章卡片，**新增文章不需複製 HTML**
- 分類篩選、即時搜尋、文章詳情與可分享的 `#article/<id>` 連結
- 打擊數據計算器：AVG、OBP、SLG、OPS，含輸入驗證
- 手機／平板／桌面響應式版型
- 原生 HTML、CSS、JavaScript，無框架、無後端、無額外建置步驟

## ▶️ 如何開啟

**最簡單**：直接雙擊 `index.html`；文章已透過一般 JavaScript 載入，不需要 `fetch`，所以在本機通常也能使用。

**建議**：在專案目錄開啟命令列：

```bash
python -m http.server 8000
```

瀏覽器開啟：`http://localhost:8000/`

## 📂 專案結構

```text
AGENTS.md             AI 開發規範與持續擴充流程
CONTENT_TEMPLATE.md   新文章可複製範本
DEPLOY.md             GitHub Pages 部署說明
index.html            主頁與內容容器
css/style.css         深色科技風樣式
js/main.js            搜尋、文章渲染、計算器互動
data/articles.js      文章資料（擴充網站主要修改這裡）
assets/favicon.svg    圖示
```

## 🧠 課堂作業重點：AGENTS.md

本專案的核心不是單一靜態頁面，而是 `AGENTS.md` 所規定的**標準化內容生產流程**：

1. AI 先閱讀 `AGENTS.md`。
2. 依照固定 schema 在 `data/articles.js` 新增文章。
3. 網站自動產生卡片、分類與搜尋結果。
4. 不需修改首頁結構，不需另建頁面。

範例指令：

> 請先閱讀 AGENTS.md 和 CONTENT_TEMPLATE.md，依規範新增一篇「什麼是盜壘？」的教學文章，並檢查現有功能沒有損壞。

## 🧮 打擊數據公式

| 指標 | 公式 |
|---|---|
| AVG | H / AB |
| OBP | (H + BB + HBP) / (AB + BB + HBP + SF) |
| SLG | TB / AB |
| OPS | OBP + SLG |

其中 H=1B+2B+3B+HR，TB=1B+2×2B+3×3B+4×HR。分母為 0 時顯示 `—`。

## 🌐 發佈

查看 [DEPLOY.md](DEPLOY.md)；部署完成後網址通常是 `https://你的GitHub帳號.github.io/diamond-lab/`。

## 📝 備註

目前內建文章為一般棒球基礎教學，非特定聯盟官方規則文件；不同聯盟、層級與年度可能有細節差異。網站示範數值不代表真實球員成績。

授課作業示範專案，請自行確認新增圖片、內容與資料的授權來源。
