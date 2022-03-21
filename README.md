# README

WEBCAMP ENGINEER COMMUNITY HACKATHONで作成した作品です。

[紹介ページ](https://wec-hackathon.studio.site/#awards)

![image](https://user-images.githubusercontent.com/66816003/159145148-4e53927f-d3be-4e79-8bb0-f29505796575.png)

## Muscle To Doとは
---
**筋肉 × プログラミング**

「筋肉とプログラミングは殆ど同じものである」という理念のもと、マッチョとともに自己研鑽に励むアプリである。

- プログラミング学習の進捗管理として使用することを想定しています
- 君のプログラミング学習を、アツいマッチョたちが応援してくれるぞ！！
- タスクの完了度合いをグラフで確認可能
- タスクを達成するたびに経験値を獲得！目指せカンスト

![ muscle_level_up](https://user-images.githubusercontent.com/66816003/159145081-a60c7f57-2e33-4eb2-b7f0-caedcf87af79.gif)

### 使用技術
---
バックエンド
- Docker / Docker Compose
- Ruby 2.7.5
- Ruby On Rails 5.1.7
- MySQL 5.7

フロントエンド
- JavaScript (ES6) / jQuery
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
方法1. このページにあるbuild.shを実行する

方法2. 下記を順に実行する

1. 任意のディレクトリで git clone git@github.com:HackathonFriday/MuscleTodo.git
2. cd MuscleTodo
3. docker compose up -d
4. docker compose exec web bundle install
5. docker compose exec web rails db:create
6. docker compose exec web rails db:migrate
7. docker compose exec web rails db:seed（デモモードを使用する場合）

SQLにログインする際のusernameとpasswordはdatabase.ymlに記載してあります。