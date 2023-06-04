import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useSelector,useDispatch } from 'react-redux'
import { remove } from "../store/CartSlice";
const Cart = () => {
    const cartSelectedItem =useSelector(state=>state.cart)
    const removeitem =useDispatch()
    const RemoveToCart=(id)=>{
       removeitem(remove(id))
    }
  return (
    // <div>{JSON.stringify(cartSelectedItem)}</div>
    <div className="row m-4">
      {cartSelectedItem.map((product) => (
        <Card style={{ width: "18rem", margin: "10px" }}>
          <div className="text-center">
            {" "}
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title> {product.title}</Card.Title>
            <Card.Text>INR : {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            {" "}
            <Button variant="danger" onClick={() => RemoveToCart(product.id)}>
           Remove to cart
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default Cart