// This is the individual Product Page - users can view details of each product and take actions here.

import React, {Component} from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import Axios from "axios";
import ProductComp from "../components/product";

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
        }).then(function (res) {
          console.log(res);
          alert(res.data);
        });
      };

      const addToWishlist = (cartProduct) => {
        Axios({
          method: "POST",
          data: {
            productId: cartProduct,
          },
          withCredentials: true,
          url: "http://localhost:5000/addtowishlist",
        }).then(function (res) {
          console.log(res);
          alert(res.data);
        });
      };

      return (

      <div style={{paddingBottom: "5%"}}>
        <div className="product-container">
          <div className="item-a">
            <Container id="content">
              <ProductComp products={this.state.products} />
            </Container>
          </div>

          <div className="item-b">
            <Container id="content">
            {this.state.products.map((product) =>(
              <div>
                <div className="product-name" style={{fontSize: "4rem"}}>{product.name}</div><br />
                <div className="product-price" style={{fontSize: "3rem"}}><p>${product.price} </p></div><br />
                <div className="product-rating" style={{fontSize: "1.75rem",textAlign: "left"}}><p><p style={{fontWeight: "600"}}>Product Description:</p>
                  {product.description}</p></div><br />
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