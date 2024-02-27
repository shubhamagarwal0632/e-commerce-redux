
import { Bounce, ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart, selectcartitem } from '../redux/cartslice';
import { Link } from 'react-router-dom';
export const Product = ({items}) => {
  const dispatch = useDispatch();
  // const cartitem = useSelector(selectcartitem);
  // console.log(cartitem);

  function handleaddtocart(itemid) {
    dispatch(addtocart(itemid))
    toast.success('🦄 Item Added', {
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
  }
  return (
    <>
      <div className="container1 container ">
        <ToastContainer />
        <div className="row justify-content-center">
          {items.map((item) => (<>

            <div className="card bg-dark text-white rounded col-md-6 align-items-center m-4.5" style={{ width: ['18rem'] }}>
              <div className="p-4 rounded">
                <Link to={`/product/${item.id}`}>
                  <img src={item.imgSrc} className="card-img-top" alt="..." />
                </Link>

              </div>
              <div className="card-body text-center">
                <h5 className="card-title align-items-center">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <div className="btn">

                  <button className="btn btn-primary" style={{ marginRight: '10px' }}>{item.price} ₹</button>
                  <button onClick={() => handleaddtocart((item))} className="btn btn-primary overflow-hidden d-md-inline`">Add To Cart</button>
                </div>
              </div>
            </div>
          </>))}
        </div>
      </div>
    </>
  )
}
