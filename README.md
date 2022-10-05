# ポートフォリオサイト
* IT KINGDOMでの学習の一環で作成しました。

## 使用している技術、サービスおよびライブラリ
### [classnames](https://github.com/JedWatson/classnames#readme)
* クラス名を結合するユーティリティ
* 本プロジェクトでは、CSSモジュールでハイフン付きの複数のクラス名を指定するのに使用しています。
* [関連記事](https://software.pitang1965.com/2022/08/12/how-to-specify-multiple-classes-in-css-modules/)

### [CSS Modules](https://github.com/css-modules/css-modules)
* CSSモジュールは、一意のクラス名を自動的に作成することで、クラス名の衝突を気にすることなく、異なるファイルで同じCSSクラス名を使用することができます。
* Next.jsでは、[name].module.cssというファイル名名規則でCSSモジュールをサポートしています。

### [dayjs](https://day.js.org/en/)
* 日付と時刻をパース・検証・操作・表示するJavaScriptライブラリ

### [env-cmd](https://github.com/toddbluhm/env-cmd#readme)
* envファイルの環境変数を用いてコマンドを実行するNodeプログラム。
* [関連記事](https://zenn.dev/pitang1965/articles/358bc0504062bf)

### [eslint](https://eslint.org/)
* JavaScriptの問題を静的解析してみつけるツール。
* eslint
* eslint-config-next: Babelパーサーを使用したESLintの設定により、Next.jsの最先端機能をサポート
* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme): 不要なルールやPrettierと衝突する可能性のあるルールをすべてオフにします。
* [Next.js公式の説明](https://nextjs.org/docs/basic-features/eslint)

### [graphql](https://github.com/graphql/graphql-js)
* Facebookが作成したAPI用のクエリ言語であるGraphQLのJavaScriptリファレンス実装。
### [@graphql-codegen](https://www.npmjs.com/package/graphql-codegen)
* GraphQLのスキーマとクエリ文書を元に、クライアントコードを生成するツール。

### [graphql-request](https://github.com/prisma-labs/graphql-request)
* スクリプトやシンプルなアプリのためにNodeやブラウザをサポートする最小限のGraphQLクライアント

### [jotai](https://jotai.org/)
* Reactのためのプリミティブで柔軟な状態管理ライブラリ
* 本プロジェクトでは、Mantaine等の仕組みを使わず、現在モバイル用のUIとすべきかをアプリ全体で知るために使っています。

### [Mantine](https://mantine.dev/)
* コンポーネントライブラリ
* @mantine/core: コアコンポーネントライブラリ：インプット、ボタン、オーバーレイなど。
* @mantine/form: フォーム管理のライブラリ
* @mantine/hooks: 状態やUIを管理するためのフック
* @mantine/next: Next.jsでMantineのサーバーサイドレンダリングを設定するためのユーティリティ
* @mantine/notifications: 通知システム

### [microCMS](https://microcms.io/)
* APIベースの日本製ヘッドレスCMS
### [microcms-js-sdk](https://github.com/microcmsio/microcms-js-sdk)
* JavaScript及びNode.jsアプリケーションからmicroCMSを使うためのライブラリ

### [Next.js](https://nextjs.org/)
* Webアプリケーションを構築するためのReactライブラリ

### [pnpm](https://pnpm.io/)
* 高速でディスク容量効率の良いパッケージマネージャ

### [React](https://ja.reactjs.org/)
* ユーザインターフェース構築のための JavaScript ライブラリ

### [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component#readme)
* 無限スクロールのためのコンポーネント

### [SWR](https://swr.vercel.app/ja)
* データ取得のための React Hooks ライブラリ

### [@tabler/icons](https://tabler-icons.io/)
* フリーでオープンソースのアイコン集

### [twitter-api-sdk](https://developer.twitter.com/en/docs/twitter-api)
* Twitterにプログラム的にアクセスすることを可能にするAPI
* Twitter API v2を使用
### [TypeScript](https://www.typescriptlang.org/)
* JavaScriptに静的型システムを付け加えたプログラミング言語

## 環境変数
* NEXT_PUBLIC_BASE_URL: http://localhost:3000 or https://***.vercel.app
* MICROCMS_API_KEY
* TWITTER_BEARER_TOKEN
* GITHUB_BEARER_TOKEN

## 詳細
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
