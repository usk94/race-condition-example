Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :carts do
        collection do
          post "update"
        end
      end
      resources :cards
    end
  end
end
