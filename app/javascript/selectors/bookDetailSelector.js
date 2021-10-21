import safeGet from 'lodash.get'

export const isbn = state => {
  return safeGet(state, 'bookDetail.bookDetail.records.isbn') || ''
  }

export const title = state => {
  return safeGet(state, 'bookDetail.bookDetail.records.title') || ''
}

export const description = state => {
  return safeGet(state, 'bookDetail.bookDetail.records.description') || ''
}

export const author = state => {
  return safeGet(state, 'bookDetail.bookDetail.records.author') || ''
}

export const rating = state => {
  return safeGet(state, 'bookDetail.bookDetail.records.rating') || ''
}

export const bookDetails = state => {
	const bookDetails = {
		isbn: isbn(state),
		title: title(state),
		description: description(state),
		author: author(state),
		rating: rating(state)
	}
	return bookDetails
}