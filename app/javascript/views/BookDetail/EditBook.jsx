import React,  { Fragment }from 'react'
import { Card, CardHeader, Form, CardBody, FormGroup, Label, Input,Button, Col } from 'reactstrap';


const EditBook = ({
  book,
  onCancel,
  onSave,
  onInputChange,
}) => (
      <Fragment>
        <Col sm="12" md={{ size: 6, offset: 3 }}> 
        <Card style={{ marginTop: '5px', backgroundColor: "#F3D4C7"}}>
					<CardBody>
          <Form>
					<div className="row">
            <div className="col-md-6">
              <FormGroup>
                <Label for="ISBN">*ISBN</Label>
                <Input type="text" name="isbn" id="isbn" value={book.isbn} maxLength={20} onChange={event=> onInputChange('isbn', event.target.value)} />
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup>
                <Label for="Title">*Title</Label>
                <Input type="text" name="title" id="title" value={book.title} maxLength={40} onChange={event=> onInputChange('title', event.target.value)} />
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup>
                <Label for="Author">Author</Label>
                <Input type="text" name="author" id="author" value={book.author} maxLength={40} onChange={event=> onInputChange('author', event.target.value)} />
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup>
                <Label for="Rating">Rating</Label>
                <Input type="text" name="rating" id="rating" value={book.rating} maxLength={3} onChange={event=> onInputChange('rating', event.target.value)} />
              </FormGroup>
            </div>
            <div className="col-md-12">
              <FormGroup>
                <Label for="Description">Notes</Label>
                <Input type="textarea" name="description" id="description" maxLength={250} value={book.description}  onChange={event=> onInputChange('description', event.target.value)} />
              </FormGroup>
            </div>
          </div>
          <Button color="primary" onClick={onSave}>Save</Button>&nbsp;&nbsp;&nbsp;
          <Button color="primary" onClick={onCancel}>Cancel</Button>
          </Form>
					</CardBody>
				</Card>
        </Col>
      </Fragment>
  )

export default EditBook;