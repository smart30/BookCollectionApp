# frozen_string_literal: true

module Api
    class BookDetailController < ActionController::API

      def show
        @book_detail = Book.find(params[:id])
        render json: @book_detail
      end
      
      def update
        @book_detail = Book.find(params[:id])
        if @book_detail.update(allowed_params_for_update)
          render json: {status: 'SUCCESS', message: 'Updated Book', data: @book_detail }, status: :ok
        else
          render json: {status: 'FAILURE', message: 'Could not update book!', data: @book_detail.errors }, status: :unprocessable_entity
        end
      end

      def destroy
        @delete_book = Book.find(params[:id])
        
       if @delete_book.destroy
        render json: {status: 'SUCCESS', message: 'Deleted Book', data: @delete_book }, status: :ok
       else 
       render json: {status: 'FAILURE', message: 'Could not delete book!', data: @delete_book.errors }, status: :unprocessable_entity
      end
    end 

      private

      def allowed_params_for_update
        params.permit(:isbn,
                      :title,
                      :author,
                      :rating,
                      :description,
                      ).to_h
      end
    end 
end 