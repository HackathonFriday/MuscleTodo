Rails.application.routes.draw do
  get 'categories/create'

  get 'api/fetch_task'

  get 'mypage/show'

  get 'home/index'
  post 'home/index', to: 'home#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
