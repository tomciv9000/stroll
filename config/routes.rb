Rails.application.routes.draw do
  scope '/api' do
    resources :bananas
  end

  
  #resources :memories
  #resources :spots
  #resources :places
  #resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
