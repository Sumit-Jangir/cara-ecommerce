import React from 'react'
import logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <>
     <section id="header">
        <a href="#"><img src={logo} alt="Logo" /></a>

        <div>
            <ul id="navbar">
                <li><a className="active" href="index.html">Home</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li className="lg-bag"><a href="cart.html"><i className="fa-solid fa-bag-shopping"></i></a></li>
                <a href="#" id="close"><i className="fa-solid fa-xmark"></i></a>
            </ul>
        </div>
        
        <div id="mobile">
            <a href="cart.html"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a>
            <i id="bar" className="fas fa-outdent"></i>
            </div>

    </section>
    </>
  )
}

export default Header