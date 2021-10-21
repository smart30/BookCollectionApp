# frozen_string_literal: true

module Api
    class AddBookController < ActionController::API
      def create
        @book_response = Book.new(allowed_params_to_add)

        if @book_response.save
          render json: {status: 'SUCCESS', message: 'Added Book', data: @book_response }, status: :ok
        else 
          render json: {status: 'FAILURE', message: 'Could not add your book!', data: @book_response.errors }, status: :unprocessable_entity
        end 
      end

      private 

      def allowed_params_to_add
        params.permit(:isbn,
                      :title,
                      :author,
                      :rating,
                      :description)
      end
    end 
end 