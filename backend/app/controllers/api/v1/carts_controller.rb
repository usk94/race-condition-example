module Api
  module V1
    class CartsController < ApplicationController
      def update
        session[:cart] = params[:cart]
      end
    end
  end
end
