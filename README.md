# User Agent Windows

このリポジトリは、Chrome/Chromium 系ブラウザ（拡張機能）向けのシンプルな拡張で、リクエストの User-Agent ヘッダを Windows の User-Agent に固定するものです。主にテストや互換性確認のために利用します。

## 概要

- 名前: User Agent Windows
- バージョン: 1.0
- 説明: ブラウザの User-Agent を Windows の User-Agent に変更します。

この拡張は `manifest.json` とサービスワーカー `main.js` で構成されています。`main.js` 内の declarativeNetRequest ルールでリクエストヘッダ `User-Agent` を上書きしています。

## ファイル

- `manifest.json` - マニフェスト。権限（declarativeNetRequest 等）と `main.js` を指定。
- `main.js` - サービスワーカー。declarativeNetRequest のルールを追加して User-Agent を書き換えます。

## インストール（ローカルで動かす）

1. Chrome または Edge を開きます。
2. 拡張機能ページを開きます（例: chrome://extensions/）。
3. 右上の「デベロッパーモード」を ON にします。
4. 「パッケージ化されていない拡張機能を読み込む」または「Load unpacked」をクリックして、このリポジトリのルートフォルダ（この `manifest.json` があるフォルダ）を選択します。

拡張が読み込まれると、`main.js` のルールが有効になり、全てのリクエストの User-Agent が上書きされます（`<all_urls>` のホスト許可を使っています）。

## 使い方とカスタマイズ

`main.js` の中の `rules` 配列に定義されたオブジェクトで User-Agent の値を変更できます。例:

```js
{
 "header": "User-Agent",
 "operation": "set",
 "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) ..."
}
```

必要に応じて `urlFilter` や `resourceTypes` を調整して、特定のサイトやリソース種別のみを対象にすることができます。

## デバッグ

- 拡張機能ページでサービスワーカー（背景スクリプト）のコンソールを確認できます。
- ネットワークタブで送信される User-Agent ヘッダを確認して、上書きが正しく行われているか検証してください。

## 権限

この拡張は以下の権限を使用します:

- `declarativeNetRequest`, `declarativeNetRequestWithHostAccess`
- `host_permissions` で `<all_urls>`（すべての URL）

これらはリクエストヘッダを書き換えるために必要です。
