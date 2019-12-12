import React, { Component } from "react";
import { Query } from "react-apollo";
import { FETCH_PRODUCTS } from "../../graphql/queries";
import { Link } from "react-router-dom";
import CreateProduct from "./CreateProduct";

const ProductIndex = () => {
  return (
    <Query query={FETCH_PRODUCTS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <ul>
            {data.products.map(product => (
              <li key={product._id}>
                <Link to={`/${product._id}`}><div>{product.name}</div></Link>
                <div>{product.description}</div>
              </li>
            ))}
            <CreateProduct />

          </ul>
        );
      }}
    </Query>
  );
};

export default ProductIndex;