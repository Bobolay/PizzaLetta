Rails.application.routes.draw do
  root to: "pages#index"

  controller :pages do
    get "structure-parts", action: "structure_parts"
  end

  match "*url", to: "application#render_not_found", via: [:get, :post, :path, :put, :update, :delete]
end