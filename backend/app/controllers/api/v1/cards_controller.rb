module Api
  module V1
    class CardsController < ApplicationController
      def index
      end

      def create
        sleep 5
        render json: { card_seq: 0 }
      end
    end
  end
end
