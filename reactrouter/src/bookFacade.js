import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useLocation,
    useParams,
} from "react-router-dom";

const Header = () => {
    return (
        <>
            <ul className="header">
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
                <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
                <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
            </ul>

            <hr />
        </>
    )
}

const Content = () => {
    return (
        <div className="content">
            <Switch>
                <Route exact path="/">
                    <findBook />
                </Route>
                <Route path="/products">
                    <deleteBook />
                </Route>
                <Route path="/company">
                    <Company />
                </Route>
                <Route path="/paramsexample/:id" children={<Child />}/>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
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

function Products() {
    return (
        <h2>Dummy products</h2>
    )
}

function Company() {
    return(
        <h2>Dummy company</h2>
    )
}

function Home() {
    return(
        <h2>Dummy Home</h2>
    )
}

const Child = () => {
    let {id} = useParams();

    return(
        <div>
            <h3>ID: {id}</h3>
        </div>
    )
}


function bookFacade() {
    let books = [
        { id: 100, title: "How to Learn JavaScript - Vol 1", info: "Study hard" },
        { id: 101, title: "How to Learn ES6", info: "Complete all exercises :-)" },
        { id: 102, title: "How to Learn React", info: "Complete all your CA's" },
        {
            id: 103, title: "Learn React", info: "Don't drink beer(s), until Friday (after four)"
        }
    ]
    let nextId = 104;
    const getBooks = () => { return books }
    const findBook = (id) => {
        const bookId = isNaN(id) ? id : Number(id);
        return books.find(book => book.id === bookId)
    }
    const deleteBook = (id) => {
        const bookId = isNaN(id) ? Number(id) : id;
        books = books.filter(book => book.id !== bookId)
    }
    const addBook = (book) => {
        book.id = nextId
        books.push(book)
        nextId++;
    }

    return {
        // Remember all statements below are a shortcut for this version: getBooks: getBooks
        getBooks,
        findBook,
        deleteBook,
        addBook,
    }
}

let returnVal = bookFacade()
export default returnVal;
export { Header, Content, Home, Products, Company };