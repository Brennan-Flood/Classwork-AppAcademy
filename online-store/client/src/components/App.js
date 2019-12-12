import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Route, Switch, withRouter, Link } from "react-router-dom";
import ProductIndex from "./products/ProductIndex";
import Login from "./login";
import AuthRoute from "../util/route_util";
import Nav from "./Nav";
import Register from "./Register";
import ProductDetail from "./products/ProductDetail";
import CreateProduct from "./products/CreateProduct";

const App = () => {
  return (
    <div>
      <h1>Online Store</h1>
      <Nav />
      <Switch>
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <AuthRoute exact path="/register" component={Register} routeType="auth" />
        <Route exact path="/" component={ProductIndex} />
        <Route exact path="/:productId" component={ProductDetail} />
      </Switch>
    </div>
  );
};


export default App;
