
import { Bounce, ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Products } from './data'
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/cartslice';
import { Product } from './Product';

function MoreProduct() {
  const [product, setProduct] = useState({});
  const [reletedproduct, setReletedProduct] = useState([]);
  const { id } = useParams();
  // const { category } = useParams();
  const dispatch = useDispatch()

  function handleclickforaddtocart(itemid) {
    dispatch(addtocart(itemid));
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

  useEffect(() => {
    const filteritem = Products.filter((kuchbh) => kuchbh.id == id);
    console.log(filteritem);
    setProduct(filteritem[0]);

    const reletedproductfindfromproducts = Products.filter((kuchbh) => kuchbh.category === product.category);
    setReletedProduct(reletedproductfindfromproducts)
    console.log(reletedproduct)
  }, [id, product.category])
  return (

    <>
            <ToastContainer />

      {/* <div className="container conformoreproduct">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div>
          <div>
            <h5 className="card-title align-items-center">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <div className="btn">

              <button className="btn btn-primary" style={{ marginRight: '10px' }}>{product.price} ₹</button>
              <button onClick={() => handleaddtocart((product.id))} className="btn btn-primary overflow-hidden d-md-inline`">Add To Cart</button>
            </div>
          </div>
        </div>
      </div> */}
      <div className='mainofmoreproductcomponents'>
        <div key={product.id} className="conformoreproduct my-2">
          <div class="card mb-3 text-center d-flex align-items-center bg-dark text-white p-4" style={{ width: "650px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={product.imgSrc} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text">{product.title}</p>
                  <button className='btn btn-primary mx-2'>{product.price} ₹</button>
                  <button className='btn btn-warning' onClick={() => handleclickforaddtocart(product)}>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {<hr />}
        <h2 className='text-white'>Releted Product</h2>
        <Product items={reletedproduct} />
      </div>
    </>
  )
}

export default MoreProduct