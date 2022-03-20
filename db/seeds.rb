# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create([
    { name: '出藻 戻夫', gender: 1, token: 'z9sAhRvH'},
    { name: 'かーしー', gender: 1, token: 'uEnKRSX5'},
    { name: 'しょーき', gender: 1, token: 'ksTXZ9WM'},
    { name: 'りょーた', gender: 1, token: 'akfd9RvH'},
])

Category.create([
    { name: 'HTML'},
    { name: 'CSS'},
    { name: 'JavaScript'},
    { name: 'Ruby/Rails'},
    { name: 'PHP', user_id: 1},
    { name: 'Python', user_id: 2},
    { name: 'SQL', user_id: 1},
    { name: 'AWS', user_id: 1},
])

Task.create([
    { title: 'htmlやるぞ', note: 'progateの道場コース', category_id: 1, user_id: 1, is_done: 1 },
    { title: 'cssやるぞ', note: 'progateやります', category_id: 2, user_id: 1, is_done: 1 },
    { title: 'jsやるぞ', note: 'MDN読む', category_id: 3, user_id: 1, is_done: 1 },
    { title: 'paddingとmargin', note: '違いわからないので、理解するまでやる', category_id: 2, user_id: 1 },
    { title: 'css ドットインストール', note: 'やるぞ', category_id: 2, user_id: 1, is_done: 1 },
    { title: 'jsのインベト', note: 'addEventListener使いこなす', category_id: 3, user_id: 1 },
    { title: 'domとは', note: '要素の取得方法調べる', category_id: 3, user_id: 1, is_done: 1 },
    { title: '例外処理', note: '独習PHPで勉強', category_id: 5, user_id: 1, is_done: 1 },
    { title: 'オブジェクト指向って？', note: 'カプセル化の学習', category_id: 5, user_id: 1 },
    { title: 'css復習', note: '〇〇のp100〜できるところまで', category_id: 2, user_id: 2 },
    { title: 'ポリモーフィズム', note: 'abstructむずい', category_id: 4, user_id: 1 },
    { title: 'htmlやるぞ2日目', note: 'progateの道場コース', category_id: 1, user_id: 1 },
    { title: 'cssやるぞ2日目', note: 'progateやります', category_id: 2, user_id: 1 },
    { title: 'jsやるぞ2日目', note: 'MDN読む', category_id: 3, user_id: 1 },
    { title: 'marginの相殺', note: '違いわからないので、理解するまでやる', category_id: 2, user_id: 1 },
    { title: 'css ドットインストールまだまだ', note: 'やるぞ', category_id: 2, user_id: 1 },
    { title: 'jsのインベトプロpageーしょん', note: 'addEventListener使いこなす', category_id: 3, user_id: 1 },
    { title: 'domインターフェース', note: '要素の取得方法調べる', category_id: 3, user_id: 1, is_done: 1 },
    { title: 'try catch', note: 'rubyの書き方わからん', category_id: 4, user_id: 1 },
    { title: 'オブジェクト指向学習', note: 'traitの学習', category_id: 4, user_id: 1 },
    { title: 'scss復習', note: 'できるところまで', category_id: 2, user_id: 2 },
    { title: '継承とは', note: '単一継承制約', category_id: 4, user_id: 1 },
    { title: 'AI', note: '機械学習初挑戦', category_id: 6, user_id: 1 },
    { title: 'truncate tableについて', note: 'drop tableと何が違うの？', category_id: 7, user_id: 1 },
    { title: 'indexを張る', note: '主キーにはデフォルトで張られているらしい（mysqlの場合）', category_id: 7, user_id: 1 },
    { title: 'EC2を学ぶ', note: 'インスタンスって何？rubyのインスタンス変数とは違うっぽい', category_id: 8, user_id: 1 },
    { title: 's3やる', note: '東京リージョンにバケットを作る', category_id: 8, user_id: 1 },
    { title: 'デプロイ', note: 'quiitaの記事見ながらデプロイしてみる', category_id: 8, user_id: 1 },
])
