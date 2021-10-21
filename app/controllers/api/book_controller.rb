# frozen_string_literal: true

require 'json'

module Api
  class BookController < ActionController::API
		def index
      @book_response = Book.order('created_at ASC');
      render json: {status: :success, message: 'Loaded Books', data: @book_response }
    end
  end
end 