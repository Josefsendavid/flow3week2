import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import './style2.css'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const Header = () => {
  return( 
    <>
    <ul className="header">
          <header>
          <li>
            <NavLink exact activeClassName="selected" to="/">Exercise1</NavLink>
          </li>
          </header>
          <header>
          <li>
            <NavLink exact activeClassName="selected" to="/exercise2">Exercise2</NavLink>
          </li>
          </header>
          <header>
          <li>
            <NavLink exact activeClassName="selected" to="/exercise3">Exercise3</NavLink>
          </li>
          </header>
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
              <Exercise1 />
            </Route>
            <Route path="/exercise2">
              <Exercise2 />
            </Route>
            <Route path="/exercise3">
              <Exercise3 />
            </Route>
          </Switch>
        </div>
  )
}

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Header/>
        <Content/>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Exercise1(props) {
  const names = [{ 'fname': 'Anders', 'lname': 'Henriksen' }, { 'fname': 'Britta', 'lname': 'Albertsen' }, { 'fname': 'Kalle', 'lname': 'Fredborg' }]
  const listItems = names.map((name) =>
    <li key={name.fname}>
      {name.fname} {name.lname}
    </li>
  );
  return (
    <div>
      <h2>Exercise 1</h2>
    <ul>{listItems}</ul>
    </div>
  );
}

function Exercise2() {
  return (
    <div>
      <h2>Exercise 2</h2>
    </div>
  );
}

function Exercise3() {
  return (
    <div>
      <h2>Exercise 3</h2>
    </div>
  );
}
