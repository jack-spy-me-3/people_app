Rails.application.routes.draw do
  root to: "people#index"

  namespace :api do
    namespace :v1 do
      resources :people, except: [:new, :edit]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
