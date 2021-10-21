import { connect } from 'react-redux';
import BookDetail from '../views/BookDetail/BookDetail';
import { bookDetail, saveBookDetails, clearUpdateResponse } from '../actions/bookDetailActions';
import { bindActionCreators } from 'redux';
import { deleteBook } from '../actions/bookActions';
import { handleInputChangeAction } from '../actions/addBookActions';
import { bookDetails} from '../selectors/bookDetailSelector'

function mapStateToProps(state) {
  return {
    bookDetail: state.bookDetail,
    response: state.bookDetail.response,
    editedDetails: bookDetails(state),
    saveResponse: state.bookDetail.saveResponse
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    bookDetail,
    deleteBook,
    handleInputChangeAction, 
    saveBookDetails,
    clearUpdateResponse,
  };
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);