class HomeController < ApplicationController
  def index
    @user = User.new()
  end

	def create
		@new_user = User.create(user_params)
		redirect_to mypage_show_path
	end

	private
		def user_params
			params.require(:user).permit(:name, :gender, :token)
		end
end
