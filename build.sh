#!/bin/bash

# リポジトリからクローン
git clone git@github.com:HackathonFriday/MuscleTodo.git

cd MuscleTodo

docker compose up -d

# gemfileに記載したgemをインストール
docker compose exec web bundle install

# DBを新規生成
docker compose exec web rails db:create

# マイグレーションファイルを実行
docker compose exec web rails db:migrate

# デモモード用シードデータをDBへ流し込み
docker compose exec web rails db:seed