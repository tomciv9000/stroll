Rails.application.routes.draw do
    post 'user_token' => 'user_token#create'
    post 'find_user' => 'users#find'
    get "profile" => 'users#profile'
    resources :users
    resources :places
    resources :spots

    ## LIMIT AVAILABLE ROUTES

  

  
  #resources :memories
  #resources :spots
  #resources :places
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
