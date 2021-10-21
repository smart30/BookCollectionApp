Rails.application.routes.draw do
  root 'books#index'
  namespace :api, defaults: { format: 'json' } do
    resources :book do
    end
    resources :book_detail, only: [:show, :destroy, :update] do
    end
    post 'add_book', to: 'add_book#create'
  end 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '*path', to: 'books#index', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
