Rails.application.routes.draw do
  
  

namespace :api do
  post "/login", to: 'sessions#create' 
  delete '/logout', to: 'sessions#destroy'

 
  get '/login', to: 'sessions#new'

  get "/auth", to: 'users#show'
  get '/chefs/:id', to: 'users#showChef'

  resources :comments, except: [:show]
  resources :recipes, except: [:update]
  resources :users, except: [:update]
  
  get '/auth/:provider/callback', to: 'sessions#omniauth'
  get '/button', to: 'sessions#button' 
  
end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
