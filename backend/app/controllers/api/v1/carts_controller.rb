module Api
  module V1
    class CartsController < ApplicationController
      def update
        p "session in cart controller before", session
        session[:cart] = params[:cart]
        p "session in cart controller after", session
      end
    end
  end
end
