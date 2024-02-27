
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectcartitem, clearitem } from '../redux/cartslice'
import { Link } from 'react-router-dom';

// import { clearitem } from '../redux/cartslice'
{ console.log(clearitem) }

export const Cart = (items) => {
  const dispatch = useDispatch();
  const cartitem = useSelector(selectcartitem);
  return (

    <>

      <ToastContainer/> 
      <div className="container cartcontainer text-center" 
      // style={{ width: "700px" }}
      >
        <div className="emptyportion">

        {
          cartitem.length == 0 && (
            <>
              <h2 className='text-white'>Your Cart is Empty</h2>
              <Link to={'/'} className='btn btn-primary'><h2 className=''>Continue Shopping.....</h2></Link>
            </>
          )
        }
        </div>
        {
          cartitem.map((item) => (
            <div key={item.id} className="container my-2">
              <div className="card mb-3 text-center d-flex align-items-center bg-dark text-white p-4">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={item.imgSrc} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.title}</p>
                      <button className='btn btn-primary mx-2'>{item.price} ₹</button>
                      <button className='btn btn-warning'>Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        {
          cartitem.length != 0 && (
            <>
              <button 
              onClick={() => {
                 dispatch(clearitem()) 
                 toast.success('🦄 cart cleared', {
                  position: "top-right",
                  autoClose: 150,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                  });
                 }} className='btn clearbtn btn-warning'>Clear Cart</button>
            </>
          )
        }
      </div>
    </>
  )
}
