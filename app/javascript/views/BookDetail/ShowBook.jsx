import React,  { Fragment }from 'react'
import { Card, CardBody, CardText, Button, Col } from 'reactstrap';


const ShowBook = ({book, onEdit, onDelete, onClickBack}) => (
      <Fragment>
      <Col sm="12" md={{ size: 6, offset: 3 }}> 
          <Card style={{ marginTop: '10px', width:"80%", height:"90%", backgroundColor: "#F3D4C7"}}>
            <CardBody>
              <CardText><b>Title: </b> {book.title}</CardText>
              <CardText><b>ISBN: </b>{book.isbn}</CardText>
              <CardText><b>Notes: </b>{book.description}</CardText>
              <CardText><b>Author: </b>{book.author}</CardText>
              <CardText><b>Notes: </b>{book.rating}</CardText>
              <Button color="primary" onClick={onEdit}>Edit</Button>&nbsp;&nbsp;&nbsp;
              <Button color="danger"  onClick={onDelete}>Delete</Button>&nbsp;&nbsp;&nbsp;
              <Button color="info" onClick={onClickBack}>Back</Button>
            </CardBody>
          </Card>
        </Col>
      </Fragment>

  )

export default ShowBook;