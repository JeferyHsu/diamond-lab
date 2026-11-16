# GitHub Pages 上傳與部署教學

> 以下以 GitHub 帳號 `YOUR_USERNAME`、Repository 名稱 `diamond-lab` 為例。實際請替換成你的名稱。

## 方法 A：透過 GitHub 網站上傳（無需 Git 指令）

1. 登入 https://github.com/。
2. 右上角 `+` → `New repository`。
3. Repository name 輸入 `diamond-lab`，Visibility 選 `Public`，按 `Create repository`。
4. 進入 Repository 的 `Add file` → `Upload files`。
5. 將解壓縮後**專案資料夾內的所有檔案與資料夾**一起上傳（注意保留 `css/`、`js/`、`data/`、`assets/` 的目錄結構）。若瀏覽器上傳時隱藏 `.nojekyll` 沒關係，本站不使用 Jekyll 特殊路由，但建議保留。
6. 按 `Commit changes` 提交。
7. 進入 `Settings` → 左側 `Pages`。
8. 在 `Build and deployment` 的 `Source` 選 `Deploy from a branch`。
9. 在 `Branch` 選 `main`，Folder 選 `/(root)`，按 `Save`。
10. 部署完成後，回到 Pages 設定頁點 `Visit site`，或前往：

```text
https://YOUR_USERNAME.github.io/diamond-lab/
```

## 方法 B：用 Git 指令

在 `diamond-lab` 專案目錄執行（需要先安裝 Git，並先在 GitHub 建立空白 repository）：

```bash
git init
git add .
git commit -m "Initial Diamond Lab website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/diamond-lab.git
git push -u origin main
```

接著依照方法 A 的步驟 7–10 設定 Pages。

## 更新網站

- 修改 `data/articles.js` 後提交新 commit，GitHub Pages 會依照選定來源重新發佈。
- 不用手動更新首頁卡片數量或導覽。

## 常見問題

**頁面顯示 404？**
- 確認 Repository 已公開（一般免費個人帳號的 Pages 公開部署常用方式）。
- 確認 Pages 的 branch 是 `main`、folder 是 `/(root)`。
- 確認 `index.html` 在儲存庫根目錄，而不是多包了一層 `diamond-lab/diamond-lab/`。
- 確認網址含有 `/diamond-lab/`（專案型 Pages）。
- 查看 repository 的 `Actions` 分頁是否有部署錯誤。

**樣式或文章資料沒載入？**
- 檢查 `css/style.css`、`js/main.js`、`data/articles.js` 是否存在，檔名大小寫正確。
- 網站使用相對路徑，不要把它改成 `/css/style.css`。
- 試著強制重新整理以排除快取。

**如何提供老師作業成果？**
- 交 `https://github.com/YOUR_USERNAME/diamond-lab` （GitHub 程式碼）
- 交 `https://YOUR_USERNAME.github.io/diamond-lab/` （實際網站網址）
- 說明 `AGENTS.md` 的規範以及新增文章示範。

官方文件：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
