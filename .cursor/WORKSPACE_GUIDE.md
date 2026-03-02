# よりそい患者向けLP — 作業ガイド

## 起動方法

```bash
cd "よりそい患者向けLP作成"
npm install
npm run dev
```

- 開発サーバー: **http://localhost:3000**
- Gemini API を使う機能（デモ要約・AI画像）を使う場合は、ルートに `.env.local` を置き、`GEMINI_API_KEY=你的APIキー` を設定してください。

---

## プロジェクト構成（編集するファイル）

| ファイル | 役割 |
|----------|------|
| `index.html` | ページの土台（Tailwind CDN、Zen Maru Gothic、importmap） |
| `index.tsx` | React のエントリ（root に App をマウント） |
| `App.tsx` | メインのレイアウト・セクション順・スティッキーCTA |
| `index.css` | グローバルスタイル（存在する場合） |
| `vite.config.ts` | Vite 設定（port 3000、env の読み込み、`@` エイリアス） |
| `types.ts` | 型定義（SummaryResult, SectionType） |

### セクションコンポーネント（`components/`）

- `Hero.tsx` — ファーストビュー
- `ProblemSection.tsx` — 課題
- `SolutionSection.tsx` — 解決策
- `BenefitsSection.tsx` — ベネフィット
- `FeaturesSection.tsx` — 機能
- `DemoSection.tsx` — AI要約デモ（Gemini）
- `StepsSection.tsx` — 利用ステップ
- `TrustSection.tsx` — 信頼・実績
- `PricingSection.tsx` — 料金
- `FAQSection.tsx` — よくある質問
- `Navbar.tsx` — ヘッダーナビ
- `Footer.tsx` — フッター
- `Illustrations.tsx` — イラスト
- `AiImage.tsx` — Gemini 画像生成コンポーネント

---

## 技術スタック

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS**（CDN）
- **Google Gemini API**（`@google/genai`）— デモ要約・AI画像

---

## 注意事項

- `process.env.GEMINI_API_KEY` / `process.env.API_KEY` は Vite の `define` で注入されます。`.env.local` に `GEMINI_API_KEY` を書いておけば利用できます。
- フォントは Google Fonts の **Zen Maru Gothic** を使用しています。
