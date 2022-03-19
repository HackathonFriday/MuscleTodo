class MypageController < ApplicationController
  def show
    # マッチョモーダル用の変数取得
    is_creation_flg = false; # テスト用にタスク作成時と完了時のフラグをここで設定

    characters = Character.pluck(:image_path)
    phrases = Phrase.where(is_creation: is_creation_flg).pluck(:content)

    character = characters.sample
    phrase = phrases.sample

    @macho_modal = {'path' => character, 'phrase' => phrase, 'is_creation_flg' => is_creation_flg}
    # ここまで

    # タスク作成追加画面（モーダル表示）用の変数
    @task_modal = Task.new
    # ここまで

    #カテゴリーモーダル用
    @category_modal = Category.new
  end
end
