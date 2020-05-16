Rails.application.routes.draw do
  namespace '/api' do
    resources :users
    post 'user_token' => 'user_token#create'
    post "/login", to: "auth#login"
    get "/auto_login", to: "auth#auto_login"
    get "/user_is_authed", to: "auth#user_is_authed"
  end

  
  #resources :memories
  #resources :spots
  #resources :places
  #resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
