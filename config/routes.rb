Rails.application.routes.draw do
    post 'user_token' => 'user_token#create'
    post "/login", to: "auth#login"
    get "/auto_login", to: "auth#auto_login"
    get "/user_is_authed", to: "auth#user_is_authed"
    resources :users

  

  
  #resources :memories
  #resources :spots
  #resources :places
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
