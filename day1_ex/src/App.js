import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  Prompt,
  useRouteMatch,
  Link,
} from "react-router-dom";
import './bookFacade';
import NestingExample from './components/nestingEx'
import React, { useState } from 'react';

function App({ bookFacade }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let history = useHistory();

  const setLoginStatus = status => {
    setIsLoggedIn(status);
    history.push("/");
  }
  return (
    <div>
      <Header 
      loginMSG={isLoggedIn ? "Logout" : "Login"} 
      isLoggedIn={isLoggedIn} 
      />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products bookFacade={bookFacade} />
            <Details bookFacade={bookFacade} />
          </Route>
          <Route path="/add-book">
            <AddBook bookFacade={bookFacade} />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/find-book">
            <FindBook bookFacade={bookFacade} />
          </Route>
          <Route path="/login-out">
            <Login 
            loginMSG={isLoggedIn ? "Logout" : "Login"}
            isLoggedIn={isLoggedIn}
            setLoginStatus={setLoginStatus}
            />
          </Route>
          <Route path="/paramsexample/:id" children={<Child />} />
          <Route path="/components/:id" children={<Details />} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </div>

  );
}

const Header = ({ isLoggedIn, loginMSG }) => {
  return (
    <>
      <ul className="header">
        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
        {isLoggedIn && (
          <React.Fragment>
            <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
            <li><NavLink activeClassName="active" to="/find-book">Find Book</NavLink></li>
          </React.Fragment>
        )

        }
        <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
        <li><NavLink activeClassName="active" to="/login-out">{loginMSG}</NavLink></li>
      </ul>

      <hr />
    </>
  )
}

function Login({ isLoggedIn, loginMSG, setLoginStatus }) {
  const handleBtnClick = () => {
    setLoginStatus(!isLoggedIn);
  };
  return (
    <div>
      <h2>{loginMSG}</h2>
      <p>This simulates a real login page.</p>
      <br />
      <button onClick={handleBtnClick}>{loginMSG}</button>
    </div>
  )
}

const NoMatch = () => {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )

}

const Child = () => {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  )
}

function Home() {
  return (
    <h2>Dummy Home</h2>
  )
}

function AddBook(props, event) {
  let [book, setBook] = useState("");
  let [isBlocking, setIsBlocking] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setBook({ ...book, [id]: value });
    setIsBlocking(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    //let book = { title: event.target.title.value, info: event.target.info.value}
    props.bookFacade.addBook(book);
    setIsBlocking(false);

  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <Prompt when={isBlocking} message={location => `Are you sure you want to go to ${location.pathname}`} />
        <input
          size="50;"
          id="title"
          type="text"
          placeholder="Add title"
          onChange={handleChange}
        />
        <br />
        <input
          id="info"
          type="text"
          placeholder="Add info"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Save" />
      </form>
    </div>
  )
}

function Products({ bookFacade }) {
  const books = bookFacade.getBooks();
  let { path, url } = useRouteMatch();

  const bookList = books.map(book => {
    return (
      <li key={book.id}>
        {book.title}
        <Link to={`${url}/${book.id}`}> Details</Link>
      </li>
    );
  });
  return (
    <div>
      <h2>Product</h2>
      <ul>
        {bookList}
      </ul>
      <Switch>
        <Route exact path={path}>
          <h2>Select a book</h2>
        </Route>
        <Route path={`${path}/:bookId`}>
          <Details bookFacade={bookFacade} />
        </Route>
      </Switch>
    </div>
  )
}

function Details({ bookFacade }) {
  const { bookId } = useParams();
  const book = bookFacade.findBook(bookId);

  const showBook = book ? (
    <div>
      <p>Title: {book.title}</p>
      <p>ID: {book.id}</p>
      <p>Info: {book.info}</p>
    </div>
  ) : (
      <p />
    );
  return <div>{showBook}</div>;
}

function FindBook(props) {
  const [book, setBook] = useState(0);

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    setBook({ id: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    setBook(props.bookFacade.findBook(book.id));
  };

  const handleDelete = (event) => {
    props.bookFacade.deleteBook(book.id);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="id"
          type="number"
          placeholder="Enter book Id"
          onChange={handleChange}
        />
        <input type="submit" value="Find book" />
      </form>
      <p>Enter id for book to see</p>
      <p>ID: {book.id}</p>
      <p>Title: {book.title}</p>
      <p>Info: {book.info}</p>
      <button onClick={handleDelete}>Delete book</button>
    </div>
  )
}

function Company() {
  return (
    <h2>Dummy company</h2>
  )
}

export default App;
