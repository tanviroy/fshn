import React, {Component} from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import ProductsComp from "../components/products";
import Axios from "axios";

class Product extends Component {

    state = {
      products: [],
    };

    componentDidMount() {
      let url = window.location.pathname
      let prod_id = url.split("/")[2]
      fetch("http://localhost:5000/getproductbyid/" + prod_id)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ products: data });
          console.log(data);
        })
        .catch(console.log);
    }

    render() {

      const addToCart = (cartProduct) => {
        Axios({
          method: "POST",
          data: {
            productId: cartProduct,
          },
          withCredentials: true,
          url: "http://localhost:5000/addtocart",
        }).then((res) => console.log(res));
      };

      const addToWishlist = (cartProduct) => {
        Axios({
          method: "POST",
          data: {
            productId: cartProduct,
          },
          withCredentials: true,
          url: "http://localhost:5000/addtowishlist",
        }).then((res) => console.log(res));
      };

      return (
        <div>
          <div className="product-container">
          <div className="item-a">
          <Container id="content">
            <ProductsComp products={this.state.products} />
          </Container>
        </div>
        <div className="item-b">
          <Container id="content">
          {this.state.products.map((product) =>(
            <div>
              <div className="product-name">{product.name}</div>
              <div className="product-rating"><p>{product.description}</p></div>
              <button onClick={() => addToCart(product._id)}>Add to Cart</button>
              <button onClick={() => addToWishlist(product._id)}>Save for Later</button>
            </div>
            
          ))}
          </Container>
        </div>
        </div>
        </div>
      );
    }
  }
   

   
  export default Product;