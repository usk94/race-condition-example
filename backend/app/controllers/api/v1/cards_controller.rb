module Api
  module V1
    class CardsController < ApplicationController
      def index
        p "session in card controller", session
      end

      def create
        sleep 5
        render json: { message: "response is back!" }
      end
    end
  end
end
