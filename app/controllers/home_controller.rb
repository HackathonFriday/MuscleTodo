class HomeController < ApplicationController
	def index
		@user = User.new()

		token = cookies[:token]
		if (token)
			exist_user = User.find_by(token: token)

			if (exist_user) 
				redirect_to mypage_show_path
			end
		end
	end

	def create
		require 'securerandom'
		token = SecureRandom.hex(4)

		user = User.new(user_params)
		user.token = token
		user.save

		cookies[:token] = token

		redirect_to mypage_show_path
	end

	private
		def user_params
			params.require(:user).permit(:name, :gender, :token)
		end
end
