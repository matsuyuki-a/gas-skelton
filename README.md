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


## ライセンス
[CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.ja)