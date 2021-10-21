import ApiService from '../api'

class BookService {
  static fetch() {
    return ApiService.get(`/book`).then(response => response.data).catch(error => {
      if(error.response){
        throw error.response.data
      }
    })
  }

  static fetchBookDetail(id) {
    return ApiService.get(`/book_detail/${id}`)
    .then(response => response.data)
    .catch(error => {
      if(error.response){
        throw error.response.data
      }
    })
  }

  static saveBookDetails(id, updatedDetails) {
    return ApiService.patch(`/book_detail/${id}`, updatedDetails)
      .then(response => response.data)
      .catch(error => {
        if (error.response) {
          throw error.response.data
        }
      })
  }

  static addBook(newBook) {
    return ApiService.post('/add_book', newBook)
      .then(response => response.data)
      .catch(error => {
        if (error.response) {
          throw error.response.data
        }
      })
  }

  static delete_book(id) {
    return ApiService.delete(`/book_detail/${id}`).then(response => response.data).catch(error => {
      if(error.response){
        throw error.response.data
      }
    })
  }
}


export default BookService
