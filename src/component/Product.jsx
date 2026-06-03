
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({items, cart, setCart}) => {
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

      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div  key={product.id} className="col-lg-3 my-3 text-center">
                  <div className="card" style={{ width: "18rem" }}>
                    <Link to={`/product/${product.id}`}
                     style={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                       
                    }}>
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt="..."
                    />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-primary mx-3">
                        {product.price} ₹
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() =>
                          addToCart(
                            product.id,
                            product.price,
                            product.description,
                            product.imgSrc
                          )
                        }
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Product;
