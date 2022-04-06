Rails.application.routes.draw do
  

namespace :api do
  resources :comments, except: [:show]
  resources :recipes, except: [:update]
  resources :users, except: [:update]
  
  post "/login", to: 'sessions#create' 
  delete '/logout', to: 'sessions#destroy'

  get "/auth", to: 'users#show'
  get '/chefs/:id', to: 'users#showChef'
  
end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
