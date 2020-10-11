import React, {Component} from "react";
import "../App.css";

class Product extends Component {

    // When I tried to get the data coming from "products.product" aka each individual product
    // it doesn't worked and I have tried 4 different ways to do it and given up.

    render() {

    const product = {
          name: "Cool Jacket",
          description: "is a cool jacket",
      };   

      return (
        <div>
          <ProductComp product={product} />
        </div>
      );
    }
  }
   
  const ProductComp = props => (
    <div>
        <h1>{props.product.name}</h1><br/>
        <h1>{props.product.description}</h1>
    </div>
  )
   
  export default Product;