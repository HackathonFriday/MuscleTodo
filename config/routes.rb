Rails.application.routes.draw do
  post 'categories/create'

  get 'api/fetch_task'

  get 'mypage/show'
  post'mypage/show', to: 'mypage#create'

  root 'home#index'
  post 'home/index', to: 'home#create'

end
