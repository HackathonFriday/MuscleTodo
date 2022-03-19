# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create([
    { name: 'かーしー', gender: 1, token: 'uEnKRSX5'},
    { name: 'しょーき', gender: 1, token: 'ksTXZ9WM'},
    { name: 'りょーた', gender: 1, token: 'z9sAhRvH'},
])

Category.create([
    { name: 'HTML'},
    { name: 'CSS'},
    { name: 'JavaScript'},
    { name: 'PHP', user_id: 3},
])

Task.create([
    { title: 'htmlやるぞ', note: 'progateの道場コース', category_id: 1, user_id: 3 },
    { title: 'cssやるぞ', note: 'progateやります', category_id: 2, user_id: 3 },
    { title: 'jsやるぞ', note: 'MDN読む', category_id: 3, user_id: 3 },
    { title: 'paddingとmargin', note: '違いわからないので、理解するまでやる', category_id: 2, user_id: 3 },
    { title: 'css ドットインストール', note: 'やるぞ', category_id: 1, user_id: 3 },
    { title: 'jsのインベト', note: 'addEventListener使いこなす', category_id: 3, user_id: 3 },
    { title: 'domとは', note: '要素の取得方法調べる', category_id: 3, user_id: 1 },
    { title: '例外処理', note: '独習PHPで勉強', category_id: 4, user_id: 3 },
    { title: 'オブジェクト指向って？', note: 'カプセル化の学習', category_id: 4, user_id: 3 },
    { title: 'css復習', note: '〇〇のp100〜できるところまで', category_id: 4, user_id: 2 },
    { title: 'ポリモーフィズム', note: 'abstructむずい', category_id: 4, user_id: 3 },
])
