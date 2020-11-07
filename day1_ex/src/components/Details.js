import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function Details(props) {
    let { id } = useParams();
    return(
      <div>
    <p>
      Book details for selected book will go here
    </p>
    <p>Title: {id}</p>
    </div>
    )
  }