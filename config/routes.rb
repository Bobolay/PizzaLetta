Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root to: "pages#index"
  controller :pages do

    get "structure_parts", action: "structure_parts"
    get "constructor", action: "constructor"

    get "drinks", action: "drinks"
    get "salads", action: "salads"
    get "promotions", action: "promotions"
    get "promotion", action: "promotion"

    get "checkout", action: "checkout"

    get "about", action: "about"
    get "shipping", action: "shipping"
    get "policy", action: "policy"

    get "stub", action: "stub"
    post "order", action: "create"
    post "call", action: "call"
    post "email", action: "email"

  end

  namespace :api do
      namespace :v1 do
        resources :ingredients, only: [:index]
        resources :drinks, only: [:index]
        resources :pizzas, only: [:index]
        resources :constructor, only: [:index]
        resources :salats, only: [:index]
      end
    end
  match "*url", to: "application#render_not_found", via: [:get, :post, :path, :put, :update, :delete]

end
