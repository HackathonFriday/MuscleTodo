class MypageController < ApplicationController
  def show
    character = Character.find(1);
    phrase = Phrase.find(2);

    @modal_data = {'path' => character.image_path, 'phrase' => phrase.content}
  end
end
