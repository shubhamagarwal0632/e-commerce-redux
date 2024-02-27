import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { selectcartitem ,selectcarttotaprice } from '../redux/cartslice';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  const cartitem = useSelector(selectcartitem);
  const carttotalprice = useSelector(selectcarttotaprice);
  return (
    <>
    <nav>

    <div className="navbar navpt bg-dark px-4 py-2 text-white">
        <Link to={'/'} style={{textDecoration:'none' ,color:'white'}} className="left"><h4>E-Com</h4></Link>
        <div className="mid">
            <button className='btn btn-warning'>Total Price = {carttotalprice} ₹</button>
        </div>
        <Link to={'/cart'} className="right">
        <button type="button" className="btn btn-primary position-relative">
        <FaShoppingCart />

  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cartitem.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
        </Link>
    </div>
    </nav>
    </>
  )
}
