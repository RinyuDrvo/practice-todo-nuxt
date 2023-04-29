# practice-todo-nuxt

Nuxt3 を使用した学習用デモアプリ

# 要件

## 機能

- タスクの追加
- タスクの一覧表示
- タスクの完了チェック
- タスクの削除

## 技術スタック

- Nuxt.js
- TypeScript

このリポジトリではフロントエンドのソースコードのみ管理する

## 基本設計

### タスク入力フォーム

ユーザーが新しいタスクを追加できるようにする。

### タスク一覧表示

サーバーから取得したタスクの一覧を表示する。

### タスク完了チェック

ユーザーがタスクを完了済みとしてチェックできるようにする。これにより、タスクの状態が更新される。

### タスク削除ボタン

ユーザーがタスクを削除できるようにする。これにより、タスクがデータベースから削除される。

### エラーメッセージ表示

API からのエラーメッセージを適切に表示する。

# TODO

- [x] linter 導入
- [x] Prettier 導入
- [x] tailwind 導入
- [x] ヘッダ作成
- [x] フッター作成
- [x] 一覧画面実装
- [x] 新規作成画面実装
- [x] 詳細・編集画面実装
- [x] モック API 実装
- [ ] ユニットテスト導入
      (https://github.com/danielroe/nuxt-vitest)
      ※props を含むコンポーネントをマウントする対応がまだ実装されていない

# Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
