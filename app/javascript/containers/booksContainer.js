import { connect } from 'react-redux';
import Home from '../views/Home';
import { bookActions, deleteBook, clearBooks } from '../actions/bookActions';
import { clearAddBook } from '../actions/addBookActions'
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return {
    bookList: state.bookReducer.booksList,
    response: state.bookDetail.response,
    addNewBookResponse: state.addBooksReducer.addNewBookResponse
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    bookActions,
    deleteBook,
    clearBooks,
    clearAddBook
  };
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);