# ouchi texts

GitHub Pages でそのまま公開できる、静的な文章サイトです。

## サイトの目的

- Google Sites からリンクする無料の本文サイトとして使う
- 文章をカテゴリごとに置き、後から増やしやすくする
- スマホで読みやすい白背景のページを保つ

## カテゴリ構成

- `模糊コラム`
- `AI評論`
- `社会分析`
- `メモ・記録`

## ファイル構成

- `index.html`
- `columns.html`
- `ai-criticism.html`
- `social-analysis.html`
- `memo.html`
- `tools.html`
- `apps.html`
- `visuals.html`
- `about.html`
- `style.css`
- `articles/`
- `apps/{slug}/index.html`
- `apps/_template/index.html`
- `assets/apps/{slug}/screenshots/`

旧URL互換のため、`articles.html` / `ai.html` / `society.html` / `life.html` は誘導ページとして残せます。

## 記事追加方法

1. `articles/` に新しい HTML ファイルを 1 つ追加する。
2. 記事ページの標準形式は、タイトル、公開日、カテゴリ、本文、関連リンク、カテゴリ置き場への戻りリンク。
3. 追加した記事を該当カテゴリページの「最新3件」に載せる。
4. 必要ならトップページの「新しい記事から3件」を更新する。

## 画像ページ

- `visuals.html` は画像構の入口ページ。
- `visuals/{slug}.html` は画像束ページ。
- 画像資産は `assets/images/visuals/{slug}/` に置く。
- 文章ページとは `related_text_slug` でつなぐ。

## 変換対応表

- `column-bundle` -> `columns.html` と `articles/` 以下の個別記事
- `essay` / `AI評論` -> `ai-criticism.html` と `articles/` 以下の個別記事
- `essay` / `社会分析` -> `social-analysis.html` と `articles/` 以下の個別記事
- `memo` -> `memo.html` と `articles/` 以下の個別記事
- `tool-page` -> `tools.html` と `tools/` または `articles/` 以下の個別ページ

## 公開運用メモ

- `status: ready` の原稿だけを HTML 化して公開サイトへ反映する
- `status: draft` は未公開
- `status: published` は公開済みの記録
- 反映先は `category` と `type` の組み合わせで決める
- GitHub Web 画面での手作業アップロードは行わない
- 公開反映はローカル生成後に `publish.bat` から実行する
- `publish.bat` は失敗時に止まり、変更なしなら何もしない

## 制作アプリ

- `apps.html` に8アプリの紹介一覧を縦並びで掲載する。
- 個別紹介ページは `apps/{slug}/index.html` に置く。
- 個別ページの状態表示は、確認できる範囲に限定して記載する。未確認の機能や公開状態を補わない。
- スクリーンショットは `assets/apps/{slug}/screenshots/` に置く。画像未配置時はHTML/CSSの準備中枠を表示する。
- 実画像を追加した後、個別ページのHTMLコメントを参考に `figure`、`a`、`img`、`figcaption` へ差し替える。
- 推奨ファイル名は `01-main-window.png`、`02-operation-screen.png`、`03-result-screen.png` のような半角英数字・小文字・ハイフン区切りとする。
- `apps/_template/index.html` は追加アプリ用の非公開テンプレートで、一覧やナビゲーションには掲載しない。

## トップページの最新3件リンクを更新する手順

1. 各カテゴリの最新記事を 3 件ずつ確認する。
2. `index.html` の各カード内の 3 つのリンクを差し替える。
3. 同じ記事をカテゴリページの「最新3件」にも反映する。
4. 公開前に相対リンクがすべて `./` または `../` でつながるか確認する。
