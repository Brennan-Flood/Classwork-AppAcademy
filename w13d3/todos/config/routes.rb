Rails.application.routes.draw do
  root to: 'static_pages#root'
  resource :api, only: [] do 
    resources :todos, only: [:create, :update, :destroy, :index, :show];
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

