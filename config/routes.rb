Rails.application.routes.draw do
  get "matchingpage" => 'main#matchingpage'
  devise_for :users
  root to: 'pages#home'

  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
    post 'login', to: 'devise/sessions#create'
    delete 'signout', to: 'devise/sessions#destroy'
  end

end
