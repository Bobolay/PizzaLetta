Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root to: "pages#index"
  post "/order", to: "orders#new"
  controller :pages do

    get "structure_parts", action: "structure_parts"
    get "constructor", action: "constructor"

    get "drinks", action: "drinks"
    get "promotions", action: "promotions"
    get "promotion", action: "promotion"

    get "checkout", action: "checkout"

    get "about", action: "about"
    get "shipping", action: "shipping"
    get "policy", action: "policy"

    get "stub", action: "stub"

  end
  match "*url", to: "application#render_not_found", via: [:get, :post, :path, :put, :update, :delete]
end
