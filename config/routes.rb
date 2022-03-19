Rails.application.routes.draw do
  get 'categories/create'

  get 'api/fetch_task'

  get 'mypage/show'

  get 'home/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
