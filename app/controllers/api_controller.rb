class ApiController < ApplicationController
  def fetch_task
    tasks = Task.left_joins(:category, :user)
      .where(user_id: params[:user_id])
      .select(
        'tasks.*',
        'categories.name as category_name',
        'users.name as user_name'
      )

    render json:{ tasks: tasks }
  end
end
