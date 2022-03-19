class MypageController < ApplicationController
  def show

    is_creation_flg = true; # テスト用にタスク作成時と完了時のフラグをここで設定

    characters = Character.pluck(:image_path)
    phrases = Phrase.where(is_creation: is_creation_flg).pluck(:content)

    character = characters.sample
    phrase = phrases.sample

    @modal_data = {'path' => character, 'phrase' => phrase}
  end
end
