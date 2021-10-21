import React,  { Fragment }from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import Home from './containers/booksContainer'
import AddBooks from './containers/addBookContainer';
import BookDetail from './containers/bookDetailContainer';
import {CardHeader} from 'reactstrap';
import image from '../assets/images/image.jpg'

const App = () => (
    <Provider store={store}>
      <Fragment>
        <div style={{ backgroundImage: `url(${image})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      width: '100%',
                      height: '2000px'
                      }}> 
      <CardHeader style={{fontFamily: 'Arial Black', fontSize: '1.75rem', fontWeight: 400, backgroundColor: '#FBB06E' }}><div className="text-center">BOOKS COLLECTION</div></CardHeader>
        <Router >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add_book" component={AddBooks} />
            <Route path="/book_detail/:id" component={BookDetail} />
            <Route render={() => <h3>404</h3>} />
          </Switch>
        </Router>
        </div>
      </Fragment>
    </Provider>
  )

export default App;
