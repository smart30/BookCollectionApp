import React from 'react'
import { Card, CardText, CardBody, Alert,Button } from 'reactstrap';
import AddBooks from './AddBooks/AddBooks'
import 'react-table/react-table.css'
import { Link, Redirect } from 'react-router-dom'

class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			addBook: false,
			detail: false

		}
	}

	componentDidMount() {
		this.props.actions.bookActions()
	}

	componentWillUnmount() {
		this.props.actions.clearBooks()
		this.props.actions.clearAddBook()
	}

	onAddBook = () => this.setState({ addBook: true })
	
	showBook = () => this.setState({showBook: true })

	onDelete = (id) => {
		this.setState({detail: true})
		this.props.actions.deleteBook(id)
	}

	onDetailsBook = (id) => {
		this.setState({detail: true})
		this.props.history.push(`/book_detail/${id}`)
	}

	displayAlert = () => {
		return (
			<div>
			{this.props.response === 'SUCCESS' && this.state.detail ? (
				<Alert color="success">
					Successfully deleted the book!
				</Alert>
			 ) : 	this.props.response === 'FAILURE' && !this.state.detail	? 
			 (
				<Alert color="danger">
				  oops! Something went wrong in deleting the book
		 		</Alert>
			 )	: this.props.addNewBookResponse ? (
				<Alert color="success">
				  Successfully Added Book!
		 		</Alert>
			 ): ''}
			</div>
		)
	}
	
	
	addBook(){
		if(this.state.addBook){
			return (
				<AddBooks
				/>
			)
		}
	}	
render() {
	return (
			<div>
				<div className="text-center"  style={{marginTop: '10px'}}>
					<Button  color="primary" size="sm" type="submit" id="addBook" onClick={this.onAddBook}>
							+ ADD A BOOK
					</Button>
				</div>
				{this.displayAlert()}
				{this.state.addBook ? (
					<Redirect push to="/add_book" />
						) : ( 
							<div className="row col-md-12" style={{display: 'flex', flexDirection: 'row'}}>
							{this.props.bookList.map(book => {
									return (
										<div className="col-md-4" key={book.id}>
												<Card  style={{ marginTop: '20px', backgroundColor: "#F3D4C7"}}>
													<CardBody>
														<CardText><b>Title: </b><Link to={`/book_detail/${book.id}`}>{book.title}</Link> </CardText>
														<CardText><b>ISBN: </b> {book.isbn}</CardText>
														<CardText ><b>Author: </b> {book.author}</CardText>
														<Button color='primary' onClick ={() => this.onDetailsBook(book.id)}>Details</Button>
														&nbsp;&nbsp;&nbsp;
														<Button color='danger' onClick ={() => this.onDelete(book.id)}>Delete</Button>
													</CardBody>
												</Card>
										</div>
									)
								}
							)}

						</div>
						)}
					</div>
				)
		}
}

export default Home;

