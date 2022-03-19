class CategoriesController < ApplicationController
  def create
    Category.create(category_params)
    redirect_to mypage_show_path
  end

  private
  def category_params
    params.require(:category).permit(:name, :user_id)
  end
end
