class MypageController < ApplicationController
  def show
    @character = Character.find(5);
  end
end
