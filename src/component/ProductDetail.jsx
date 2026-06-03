import { useParams } from "react-router-dom";
import { items } from "./Data";
import { useEffect, useState } from "react";
import Product from "./Product";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);
    const relatedProducts = items.filter(
      (p) => p.category === product.category,
    );
    setRelatedProduct(relatedProducts);
  }, [id, product.category]);

 
      const addToCart = (id,price,description,imgSrc) => {
  const obj={id,price,description,imgSrc}
  setCart([...cart, obj])
  console.log("cart element=",cart);
 toast.success(' your item is added', {
position: "top-right",
autoClose: 15000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
  
   
  }

  

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={15000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="container con">
        <div className="img">
          <img
            src={product.imgSrc}
            alt={product.title}
            style={{ width: "350px", height: "350px" }}
          />
        </div>

        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button
            className="btn btn-warning"
            onClick={() =>
              addToCart(
                product.id,
                product.price,
                product.description,
                product.imgSrc,
              )
            }
          >
            Add to cart
          </button>
        </div>
      </div>
      <Product cart={cart} setCart={setCart} items={relatedProduct} />
    </>
  );
};

export default ProductDetail;
