Rails.application.routes.draw do
  

namespace :api do
  resources :comments
  resources :recipe_ingredients
  resources :ingredients
  resources :recipes
  resources :users
  resources :sessions, only: [:create, :destroy]
  
 #post "/login", to: 'sessions#create' #should i make a resouces sessions
  get "/auth", to: 'users#show'
  get '/chefs/:id', to: 'users#showChef'
  delete '/logout', to: 'sessions#destroy'
  

end

 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
