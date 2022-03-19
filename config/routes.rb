Rails.application.routes.draw do
  post 'categories/create'

  get 'api/fetch_task'

  get 'mypage/show'
  post'mypage/show', to: 'mypage#create'
  update 'mypage/show', to: 'mypage#update'

  root 'home#index'
  post 'home/index', to: 'home#create'

end
