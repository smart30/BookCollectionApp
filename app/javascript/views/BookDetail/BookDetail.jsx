import React from 'react'
import EditBook from './EditBook';
import ShowBook from './ShowBook';
import { Redirect } from 'react-router-dom'
import { Card, CardBody, Alert } from 'reactstrap';

class BookDetail extends React.Component{
	constructor(props){
			super(props)
			this.state = {
				isEdit: false,
				isbnMissing: false,
				titleMissing: false,
				back: false,
				deletedBook: false,
			}
	}

	componentDidMount() {
		this.props.actions.bookDetail(this.props.match.params.id)
	}

	componentWillMount() {
		this.props.actions.clearUpdateResponse()
	}

	onEditClick = () => this.setState({ isEdit: true })

	onCancel = () => this.setState({ isEdit: false })

	onSave = () => {
		if (this.props.editedDetails.isbn){
			if(this.props.editedDetails.title){
				this.props.actions.saveBookDetails(this.props.match.params.id, this.props.editedDetails)
				this.setState({isEdit: false})
			}else {
				this.setState({titleMissing: true})
			}
		}else {
			this.setState({isbnMissing: true})
		}
	}

	onDeleteBook = () => {
		this.props.actions.deleteBook(this.props.match.params.id)
		this.setState({deletedBook: true})
	}

	onClickBack = () => {
		this.setState({back: true})
	}

	handleInputChange = (name, value) => this.props.actions.handleInputChangeAction(name, value)

	displayAlert = () => {
		return (
			<div>
				<div>
						{this.state.titleMissing ? (
							<Alert color="danger">
								Missing Value: Title, Please enter Title of the book
							</Alert>
						 ) : 
						this.state.isbnMissing ? (
							<Alert color="danger">
								Missing Value: ISBN, Please enter ISBN Value of the book
							</Alert>
							) :  ''}
						</div>
						<div>
						{this.props.saveResponse === 'SUCCESS' ? (
									<Alert color="success">
										Successfully updated the book!
									</Alert>
								) : 	this.props.saveResponse === 'FAILURE'	? 
								(
									<Alert color="danger">
										oops! Something went wrong in updating the book!
									</Alert>
								)	: ''}
						</div>
			</div>
		)
	}
	


	renderCards = () => {
		return this.props.bookDetail.bookDetail.records && this.props.bookDetail.bookDetail.records.id ? (
		this.state.isEdit ? (
				<EditBook
				book={this.props.bookDetail.bookDetail.records}
				onCancel={this.onCancel}
				onSave={this.onSave}
				onInputChange= {this.handleInputChange}
				/>
			) : (
				<ShowBook
				book={this.props.bookDetail.bookDetail.records}
				onEdit={this.onEditClick}
				onDelete ={this.onDeleteBook}
				onClickBack={this.onClickBack}
				/>
		)
		) : (
			<div className="row">
			<div className="col-md-12">
			<Card style={{ width: '20rems'}}>
				<CardBody>
					<h3>Book Not Found</h3>
				</CardBody>
				</Card>
			</div>
		</div>
		)
	}


  render(){
		return (
			<div>
				{this.state.back || this.state.deletedBook? (
					<Redirect push to="/" />
				): ''}
			{this.props.bookDetail.bookDetail.status !== 'ready' ? (
            <Card>
              <span>{'Loading...'}</span>
            </Card>
          ) : (
					<div>
							<div>
								{this.displayAlert()}
								{this.renderCards()}
							</div>
					</div>
					)}
			</div>
		)
	}
}

export default BookDetail;