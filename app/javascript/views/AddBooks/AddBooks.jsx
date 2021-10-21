import React, { Fragment } from 'react'
import { Card, CardBody,FormGroup, Label, Input,Button, Alert, Col } from 'reactstrap';

class AddBooks extends React.Component {
	state = {
		isbn: '',
		title: '',
		description: '',
		author: '',
		rating: '',
		titleMissing: false,
		isbnMissing: false,
	}

	onAddBook = () => {
		const { isbn, title, description, author, rating } = this.state
		if(title){
			if(isbn){
				this.props.actions.addBookActions({ isbn: isbn, title: title, author: author, rating: rating, description: description})
				this.props.history.push('/')
		  }else {
					this.setState({isbnMissing: true})
				}
		} else {
			this.setState({titleMissing: true})
		}
	}

	handleIsbnInput = event => {
		this.setState({isbn: event.target.value})
	}

	handleTitleInput = event => {
		this.setState({title: event.target.value})
	}

	handleNotesInput = event => {
		this.setState({description: event.target.value})
	}

	handleAuthorInput = event => {
		this.setState({author: event.target.value})
	}

	handleRatingInput = event => {
		this.setState({rating: event.target.value})
	}

displayAlerts = () => {
		return (
			<div>
				{this.state.titleMissing ? (
				<Alert color="danger">
					Missing Value: Title, Please enter Title of the book
				</Alert>
			 ) :  this.state.isbnMissing ? (
					<Alert color="danger">
						Missing Value: ISBN, Please enter ISBN Value of the book
					</Alert>
					) :  ''}
			</div>
		)
	}

render() {
		return (
				<Fragment>
						{this.displayAlerts()}	
					<Col sm="12" md={{ size: 6, offset: 3 }}> 
					<Card style={{ marginTop: '5px', backgroundColor: "#F3D4C7"}}>
						<CardBody>
							<FormGroup>
								<Label for="ISBN">*ISBN</Label>
								<Input type="text" name="isbn" id="isbn" maxLength={20} onChange={event => this.handleIsbnInput(event)}/>
							</FormGroup>
							<FormGroup>
								<Label for="Title">*Title</Label>
								<Input type="text" name="Title" id="title" placeholder="Book Title"maxLength={40} onChange={event => this.handleTitleInput(event)}/>
							</FormGroup>
							<FormGroup>
								<Label for="Author">Author</Label>
								<Input type="text" name="Author" id="author" placeholder="Author"maxLength={40} onChange={event => this.handleAuthorInput(event)}/>
							</FormGroup>
							<FormGroup>
								<Label for="Rating">Rating</Label>
								<Input type="text" name="Rating" id="rating" placeholder="Ratings" maxLength={3} onChange={event => this.handleRatingInput(event)}/>
							</FormGroup>
							<FormGroup>
								<Label for="Description">Notes</Label>
								<Input type="textarea" name="description" id="description" maxLength={250} onChange={event => this.handleNotesInput(event)}/>
							</FormGroup>
							<Button color="primary" size="sm" type="submit" onClick={this.onAddBook}>Add a Book</Button>&nbsp;&nbsp;&nbsp;
							<Button color="primary" size="sm" id="cancel" onClick={() => this.props.history.push('/') }>Cancel</Button>
						</CardBody>
					</Card>
					</Col>
					</Fragment>
		)

	}
}

export default AddBooks;