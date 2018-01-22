Rails.application.routes.draw do
  root to: "pages#index"

  controller :pages do
    get "structure-parts", action: "structure_parts"

    get "drinks", action: "drinks"
    get "promotions", action: "promotions"

    get "checkout", action: "checkout"
    get "shipping", action: "shipping"
    get "policy", action: "policy"

  end

  match "*url", to: "application#render_not_found", via: [:get, :post, :path, :put, :update, :delete]
end