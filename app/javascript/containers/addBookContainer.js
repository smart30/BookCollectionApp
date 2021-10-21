import { connect } from 'react-redux';
import AddBooks from '../views/AddBooks/AddBooks';
import { addBookActions, handleInputChangeAction } from '../actions/addBookActions';
import { bindActionCreators } from 'redux';
import { bookActions } from '../actions/bookActions';

function mapStateToProps(state) {
  return {
    addNewBookResponse: state.addBookReducer,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    addBookActions,
    handleInputChangeAction,
    bookActions
  };
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);