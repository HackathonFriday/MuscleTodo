# README

## Muscle To Doとは
---
**筋肉 × プログラミング**

「筋肉とプログラミングは殆ど同じものである」という理念のもと、マッチョとともに自己研鑽に励むアプリである。

- プログラミング学習の進捗管理として使用することを想定しています
- 君のプログラミング学習を、アツいマッチョたちが応援してくれるぞ！！
- タスクの完了度合いをグラフで確認可能
- タスクを達成するたびに経験値を獲得！目指せカンスト

### 使用技術
---
バックエンド
- Docker / Docker Compose
- Ruby 2.7.5
- Ruby On Rails 5.1.7
- MySQL 5.7

フロントエンド
- JavaScript / jQuery
- Webpack
- Chart.js
- Progressbar.js
- SCSS

### 設計書類
---
- [ER図](https://drive.google.com/file/d/1KZ0z1STvZVHaS234eb9D2w8n7cDSvLtL/view)

- [テーブル定義書](https://docs.google.com/spreadsheets/d/1PQIBU3lrxBEtX3CYuwRXoBzJoOL3mj-WVWbawt2RYsQ/edit#gid=111740538)

- [ワイヤーフレーム](https://docs.google.com/presentation/d/157rpgiPZm-jt3S2-fXJxvZg00XsP_HGr/edit?usp=sharing&ouid=112553005759907251005&rtpof=true&sd=true)

### 環境構築手順
---
1. githubからmuscletodoをcloneする
2. docker-compose up -d
3. docker-compose exec web bundle install
4. docker-compose exec web rails db:create
5. docker-compose exec web rails db:migrate