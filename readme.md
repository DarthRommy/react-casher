# お???

やあ。MogiCasherをReactで作り直してみたんだ。なんでそんなことをしてるのかって？とにかくVanillaのJavascriptが大嫌いだからなんだ。

[Mogi_Casher-HTML](https://github.com/DarthRommy/Mogi_Casher-HTML)

# 使い方

こちらは本体のように、いえ、本体よりも使いやすいソフトになっております。

## 商品情報を登録する

まずは最初の商品を登録するんだ。

|  Arg  | Description |   Type   |
| :---: | :---------: | :------: |
| Label |   商品名    | `string` |
| Code  | バーコード  | `string` |
| Price |    単価     | `number` |

## 読み取り

あとは登録したバーコードをバーコードリーダーで読み取るだけ！

**入力欄にフォーカスが合っていることを確認しような。**

## 商品追加

商品はいくらでも追加することができる。`Add New`ボタンをクリックすると追加用のコンポーネントが出てくるぞ。

# 手元で見てみたいだと?

いいだろう。Node.js環境があるならCloneしなはれ。

## 必須環境

- Node.js (v16)
- npm
- yarn

## 使用ライブラリ

- Next.js `12.1.4`
- React `18.0.0`
- Recoil `0.7.0`
- zenn-markdown-html `0.1.108`
- @vanilla-extract/css `1.6.8`

## ライブラリ紹介

それじゃあ俺の仲間を紹介するぜ！

## React

`Vue`と並んで人気のあるUI特化のFacebook謹製Javascriptライブラリ。記法がHTMLや他のライブラリとかけ離れているため、そっちに慣れた人にとっては理解しにくいこともあるらしい。

```tsx
import { FC } from "react";

const IndexPage: FC = () => {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
};

export default IndexPage;
```

## Next.js

Vercelが開発しているReactフレームワーク。ざっくり紹介すると、Reactの機能を拡張して使い勝手を良くしたところにSSRを混ぜ込んだ感じ。Next.jsを使う場合はVercelホスティングに依存してしまうのがデメリットやな。

## Recoil

状態管理ライブラリの一つで、Reactと同じくMetaが開発している。まだベータ版扱いなのでメソッド変更に注意が必要。

## Vanilla Extract

`CSS Modules`ならぬ`CSS in JS`ならぬ`Stylesheets in Typescript`を銘打つスタイリング系ライブラリの新興勢力。TypescriptファイルにCSSのようなコードを書き、ビルド時にCSSを生成する。これ使いやすいで?

```ts
import { style } from "@vailla-extract/css";

export const example = style({
  color: "#fff",
  fontSize: 16,
});
```

## Zenn

自分でパーサーを作るのは非常に面倒くさかったので、Zennが(ひっそり)公開している

- Markdown→HTML変換メソッド `zenn-markdown-html`
- 対応するCSS `zenn-content-css`
- 埋め込み用のよくわからんやつ `zenn-embed-elements`

を使わせてもらった。
