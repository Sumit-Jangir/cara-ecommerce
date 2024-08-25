import React from 'react'
import f1image from '../../assets/features/f1.png'
import f2image from '../../assets/features/f2.png'
import f3image from '../../assets/features/f3.png'
import f4image from '../../assets/features/f4.png'
import f5image from '../../assets/features/f5.png'
import f6image from '../../assets/features/f6.png'

const Feature = () => {
  return (
    <>
    <section id="feature" className="section-p1">
        <div className="fe-box">
            <img src={f1image} alt="" />
            <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
            <img src={f2image} alt="" />
            <h6>Online Order</h6>
        </div>
        <div className="fe-box">
            <img src={f3image} alt="" />
            <h6>Save Money</h6>
        </div>
        <div className="fe-box">
            <img src={f4image} alt="" />
            <h6>Promotions</h6>
        </div>
        <div className="fe-box">
            <img src={f5image} alt="" />
            <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
            <img src={f6image} alt="" />
            <h6>F24/7 Support</h6>
        </div>
    </section>
    </>
  )
}

export default Feature