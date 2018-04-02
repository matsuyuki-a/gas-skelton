gas-skelton
============

[Google Apps Script](https://script.google.com/home) を TypeScript で書くためのスケルトンコードです. [clasp](https://github.com/google/clasp) 使用.

## 使用方法
1. スプレッドシートやドキュメントなどからスクリプトエディタを開く. あるいは, スタンドアロンのプロジェクトを作る.
2. https://script.google.com/home/usersettings からAPIからのApps Scriptの使用を許可しておく.
3. `$ npm install`.
4. `.clasp.default.json` を `.clasp.json` にコピー. (※1)
5. `.clasp.json` の `scriptId` を 自分のスクリプトのスクリプトID（※2)に書き換える. 
6. `src` 以下でTypeScriptソースを編集.
7. `npm start` するとTypeScriptソースのコンパイルとコンパイル後のソースのアップロードをやってくれる.

- (※1): `.clasp.json` は `.gitignore` の対象です. git リポジトリからは無視されます.
- (※2): スクリプトエディタで開いた時のURIの `https://script.google.com/d/【スクリプトID】/edit` の `【スクリプトID】` の部分(長い英数文字列)が書くべきスクリプトIDです.


## ディレクトリ構成
```
.
├── .clasp.default.json - .clasp.json の設定例です. .clasp.json にコピーしてご利用ください.
├── .clasp.json - 【初期状態では無い】プロジェクトのアップロード先や, どのディレクトリをアップロードするか(初期状態でlib)を指定できます.
├── .gitignore - git が無視するファイル群が指定されています. 基本触らなくてOK. 
├── README.md - このファイルです.
├── appsscript.json - マニフェストファイル. アップロード時に lib 下にコピーされます.
├── lib - 【初期状態では無い】アップロードされるファイル群が入る(予定)のディレクトリ. TypeScript からコンパイルされたJavaScriptソースと appsscript.json が入ります. npm start で生成されます.
├── node_modules  - 【初期状態では無い】 node が利用するライブラリ群です. npm install で生成されます.
├── package-lock.json - node の依存ライブラリの細かいバージョンなどが指定されています. npm install などを新たに行うと自動的に書き換えられます. 基本触らなくてOK.
├── package.json - node のパッケージファイルです. 使用するライブラリのバージョンなどが記述されています.
├── src - TypeScriptソースを置くディレクトリです.
└── tsconfig.json - TypeScriptのコンパイル設定です.

```

## ライセンス
[CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.ja)