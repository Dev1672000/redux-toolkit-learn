import Button from "react-bootstrap/Button";
import { useEffect } from "react";//,useState
import Card from "react-bootstrap/Card";
import { useDispatch ,useSelector} from "react-redux";
import {add} from "../store/CartSlice"
import { getProducts } from "../store/productSlice";
const Products = () => {
    const dispatch=useDispatch()
    
    const { data: products } = useSelector(state => state.products);
    // console.log(data);
  // const [products, setProduct] = useState([]);
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setProduct(result);
    //     // console.log(result);
    //   });
   dispatch(getProducts);
  }, [dispatch]);
  const addToCart=(product)=>{
dispatch(add(product))
  }
 
  return (
    <div className="row m-4">
      {products.map((product) => (
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
            <Button variant="primary" onClick={()=>addToCart(product)}>Add to cart</Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default Products;
