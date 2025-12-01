import React, { useEffect, useState } from "react";
import $ from "jquery";
import Navbar from './Navbar'
import Footer from './Footer'

const Bulkorder = () => {
        const [open, setOpen] = useState(false);

         useEffect(() => {
        /**=====================
            Quantity 2 js
        ==========================**/
        $(".addcart-button").click(function () {
          $(this).next().addClass("open");
          $(".add-to-cart-box .qty-input").val("1");
        });
    
        $(".qty-left-minus").on("click", function () {
          var $qty = $(this).siblings(".qty-input");
          var _val = $($qty).val();
          if (_val === "1") {
            var _removeCls = $(this).parents(".cart_qty");
            $(_removeCls).removeClass("open");
          }
          var currentVal = parseInt($qty.val());
          if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
          }
        });
    
        $(".qty-right-plus").click(function () {
          if ($(this).prev().val() < 9) {
            $(this).prev().val(+$(this).prev().val() + 1);
          }
        });
      }, []); 
  return (
    <>
      <Navbar />
         
        {/* <!-- Home Section Start --> */}
    <section className="home-section-2 home-section-bg pt-0 overflow-hidden">
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12">
                    <div className="slider-animate">
                        <div>
                            <div className="home-contain rounded-0 p-0">
                                <img src="/assets/images/gemini.png"
                                    className="img-fluid bg-img blur-up lazyload" alt="img"  style={{width:'100%'}} />
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Home Section End --> */}
        <section className="fresh-vegetable-section section-lg-space">
        <div className="container-fluid-lg">
            <div className="row gx-xl-5 gy-xl-0 g-3 ratio_148_1">
                <div className="col-xl-6 col-12">
                    <div className="row g-sm-4 g-2">
                     <div className="col-12">
                            <div className="fresh-image-2">
                              <div>
                                <img
                                  src="	https://mynutramart.com/cdn/shop/files/AS-IT-ISL-GlutaminePowder250gSlide1_500x.jpg?v=1706529144"
                                  alt="Fresh Image"
                                  className="resimg" style={{maxWidth:'100%'}}
                                />
                              </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-12">
                    <div className="fresh-contain p-center-left">
                        <div>
                            <div className="review-title">
                          
                                <h2>Join Us & Grow Your Business</h2>
                            </div>

                            <div className="delivery-list">
                                <h3>Become a trusted partner and enjoy exclusive benefits.</h3>
                                <ul className="delivery-box">
                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/delivery.svg" className="blur-up lazyload" alt="img" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Buy at Wholesale rates</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/leaf.svg" className="blur-up lazyload" alt="img" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Genuine products directly from Company</h5>
                                            </div>
                                        </div>
                                    </li>
                                            
                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/delivery.svg" className="blur-up lazyload" alt="img" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Start as low as Rs. 56,000</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/leaf.svg" className="blur-up lazyload" alt="img" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Huge savings at Checkout</h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                   <h3 style={{marginTop:'20px'}}>Click the buttons below to fill up the form, and our team will reach out to you soon.</h3>
                                   <div style={{display:'flex',margin:'20px 0px'}}>
                                    {/* <div style={{marginRight:'10px'}}>
                                        <button className="btn btn-furniture btn-sm mend-auto">Trainer <i className="fa-solid fa-arrow-right icon"></i></button>
                                    </div> */}
                                 <button
        className="pro-acc-logout-btn  text-white btn-sm mend-auto"
        onClick={() => setOpen(true)}
      >
        Retailer <i className="fa-solid fa-arrow-right icon"></i>
      </button>

      {/* BACKDROP */}
      {open && (
        <div className="custom-modal-backdrop" onClick={() => setOpen(false)}>
          {/* MODAL */}
          <div
            className="custom-modal"
            onClick={(e) => e.stopPropagation()} // stop bubbling
          >
            <div className="modal-header">
              <h2>Retailer Form</h2>
              <span className="close-btn" onClick={() => setOpen(false)}>
                ×
              </span>
            </div>

            <div className="modal-body">
              <form className="modal-form">

                <label>Email *</label>
                <input type="email" required />

                <label>Full Name *</label>
                <input type="text" required />

                <label>Firm Name *</label>
                <input type="text" required />

                <label>Mobile Number *</label>
                <input type="text" required />

                <label>Monthly Sales *</label>
                <input type="text" required />

                <button type="submit" className="submit-btn">
                  Submit
                </button>

              </form>
            </div>
          </div>
        </div>
      )}
                                   </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




    {/* <!-- Related Product Section Start --> */}
    <section className="product-list-section section-b-space">
        <div className="container-fluid-lg">
            <div className="title">
                <h2>Related Products</h2>
           
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="slider-6_1 product-wrapper">
                        <div>
                            <div className="product-box-3 wow fadeInUp">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product1.webp"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                           

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" className="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="product-detail">
                                       
                                        <a href="/Shop">
                                            <h5 className="name">Evercore Yeast Protein - Double Chocolate</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                            </ul>
                                            <span>(5.0)</span>
                                        </div>
                                        <h6 className="unit">500 G</h6>
                                        <h5 className="price">
                                              <span  className="gradintback">

                                            <span >₹08.02</span> <del style={{color:'#f6efdb'}}>₹15.15</del>
                                            </span>
                                        </h5>
                                         <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                <button className="btn addcart-button btn buy-button"><i
                        className="fa-solid fa-plus"></i></button>
                <div className="cart_qty qty-box-2">
                    <div className="input-group">
                        <button type="button" className="qty-left-minus" data-type="minus"
                            data-field="">
                            <i className="fa fa-minus"></i>
                        </button>
                        <input className="form-control input-number qty-input" type="text"
                            name="quantity" value="1" />
                        <button type="button" className="qty-right-plus" data-type="plus"
                            data-field="">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="product-box-3 wow fadeInUp" data-wow-delay="0.05s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product2.webp"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                           

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" className="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-footer">
                                    <div className="product-detail">
                                       
                                        <a href="/Shop">
                                            <h5 className="name">Evercore Yeast Protein - Vanilla</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span>(4.0)</span>
                                        </div>
                                        <h6 className="unit">250 ml</h6>
                                       <h5 className="price">
                                              <span  className="gradintback">

                                            <span >₹08.02</span> <del style={{color:'#f6efdb'}}>₹15.15</del>
                                            </span>
                                        </h5>
                                         <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                <button className="btn addcart-button btn buy-button"><i
                        className="fa-solid fa-plus"></i></button>
                <div className="cart_qty qty-box-2">
                    <div className="input-group">
                        <button type="button" className="qty-left-minus" data-type="minus"
                            data-field="">
                            <i className="fa fa-minus"></i>
                        </button>
                        <input className="form-control input-number qty-input" type="text"
                            name="quantity" value="1" />
                        <button type="button" className="qty-right-plus" data-type="plus"
                            data-field="">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="product-box-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product3.webp"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                           

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" className="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="product-detail">
                                      
                                        <a href="/Shop">
                                            <h5 className="name">Evercore Yeast Protein - Mixed Berry</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span>(2.4)</span>
                                        </div>
                                        <h6 className="unit">350 G</h6>
                                        <h5 className="price">
                                              <span  className="gradintback">

                                            <span >₹08.02</span> <del style={{color:'#f6efdb'}}>₹15.15</del>
                                            </span>
                                        </h5>
                                         <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                <button className="btn addcart-button btn buy-button"><i
                        className="fa-solid fa-plus"></i></button>
                <div className="cart_qty qty-box-2">
                    <div className="input-group">
                        <button type="button" className="qty-left-minus" data-type="minus"
                            data-field="">
                            <i className="fa fa-minus"></i>
                        </button>
                        <input className="form-control input-number qty-input" type="text"
                            name="quantity" value="1" />
                        <button type="button" className="qty-right-plus" data-type="plus"
                            data-field="">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="product-box-3 wow fadeInUp" data-wow-delay="0.15s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product4.webp"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                          

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" className="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="product-detail">
                                      
                                        <a href="/Shop">
                                            <h5 className="name">Protein Bar - Chocolate Peanut Butter</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                            </ul>
                                            <span>(5.0)</span>
                                        </div>
                                        <h6 className="unit">570 G</h6>
                                       <h5 className="price">
                                              <span  className="gradintback">

                                            <span >₹08.02</span> <del style={{color:'#f6efdb'}}>₹15.15</del>
                                            </span>
                                        </h5>
                                         <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                <button className="btn addcart-button btn buy-button"><i
                        className="fa-solid fa-plus"></i></button>
                <div className="cart_qty qty-box-2">
                    <div className="input-group">
                        <button type="button" className="qty-left-minus" data-type="minus"
                            data-field="">
                            <i className="fa fa-minus"></i>
                        </button>
                        <input className="form-control input-number qty-input" type="text"
                            name="quantity" value="1" />
                        <button type="button" className="qty-right-plus" data-type="plus"
                            data-field="">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="product-box-3 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product5.webp"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>


                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" className="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="product-detail">
                                       
                                        <a href="/Shop">
                                            <h5 className="name">Evercore Yeast Protein - Vanilla</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span>(3.8)</span>
                                        </div>
                                        <h6 className="unit">100 G</h6>
                                        <h5 className="price">
                                              <span  className="gradintback">

                                            <span >₹08.02</span> <del style={{color:'#f6efdb'}}>₹15.15</del>
                                            </span>
                                        </h5>
                                        <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                <button className="btn addcart-button btn buy-button"><i
                        className="fa-solid fa-plus"></i></button>
                <div className="cart_qty qty-box-2">
                    <div className="input-group">
                        <button type="button" className="qty-left-minus" data-type="minus"
                            data-field="">
                            <i className="fa fa-minus"></i>
                        </button>
                        <input className="form-control input-number qty-input" type="text"
                            name="quantity" value="1" />
                        <button type="button" className="qty-right-plus" data-type="plus"
                            data-field="">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="product-box-3 wow fadeInUp" data-wow-delay="0.25s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product3.webp"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>


                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" className="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="product-detail">
                                     
                                        <a href="/Shop">
                                            <h5 className="name">Post-Workout BCAA Powder - Green Apple</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span>(4.0)</span>
                                        </div>

                                        <h6 className="unit">550 G</h6>

                                        <h5 className="price">
                                              <span  className="gradintback">

                                            <span >₹08.02</span> <del style={{color:'#f6efdb'}}>₹15.15</del>
                                            </span>
                                        </h5>
                                        <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                <button className="btn addcart-button btn buy-button"><i
                        className="fa-solid fa-plus"></i></button>
                <div className="cart_qty qty-box-2">
                    <div className="input-group">
                        <button type="button" className="qty-left-minus" data-type="minus"
                            data-field="">
                            <i className="fa fa-minus"></i>
                        </button>
                        <input className="form-control input-number qty-input" type="text"
                            name="quantity" value="1" />
                        <button type="button" className="qty-right-plus" data-type="plus"
                            data-field="">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         <div>
                            <div className="product-box-3 wow fadeInUp" data-wow-delay="0.15s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product4.webp"
                                                className="img-fluid blur-up lazyload" alt="img" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                          

                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                                                <a href="/Wishlist" className="notifi-wishlist">
                                                    <i data-feather="heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="product-detail">
                                      
                                        <a href="/Shop">
                                            <h5 className="name">Protein Bar - Chocolate Peanut Butter</h5>
                                        </a>
                                        <div className="product-rating mt-2">
                                            <ul className="rating">
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star" className="fill"></i>
                                                </li>
                                            </ul>
                                            <span>(5.0)</span>
                                        </div>
                                        <h6 className="unit">570 G</h6>
                                       <h5 className="price">
                                              <span  className="gradintback">

                                            <span >₹08.02</span> <del style={{color:'#f6efdb'}}>₹15.15</del>
                                            </span>
                                        </h5>
                                         <div className="add-to-cart-btn-2 add-to-cart-box addtocart_btn">
                <button className="btn addcart-button btn buy-button"><i
                        className="fa-solid fa-plus"></i></button>
                <div className="cart_qty qty-box-2">
                    <div className="input-group">
                        <button type="button" className="qty-left-minus" data-type="minus"
                            data-field="">
                            <i className="fa fa-minus"></i>
                        </button>
                        <input className="form-control input-number qty-input" type="text"
                            name="quantity" value="1" />
                        <button type="button" className="qty-right-plus" data-type="plus"
                            data-field="">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Related Product Section End --> */}
      <Footer />
        {/* <!-- Quick View Modal Box Start --> */}
    <div className="modal fade theme-modal view-modal" id="view" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
            <div className="modal-content">
                <div className="modal-header p-0">
                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row g-sm-4 g-2">
                        <div className="col-lg-6">
                            <div className="slider-image">
                                <img src="/assets/images/product1.webp" className="img-fluid blur-up lazyload"
                                    alt="img" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="right-sidebar-modal">
                                <h4 className="title-name">Evercore Yeast Protein - Double Chocolate </h4>
                                <h4 className="price">₹ 1250.00</h4>
                                <div className="product-rating">
                                    <ul className="rating">
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star" className="fill"></i>
                                        </li>
                                        <li>
                                            <i data-feather="star"></i>
                                        </li>
                                    </ul>
                                    <span className="ms-2">8 Reviews</span>
                                    <span className="ms-2 text-danger">6 sold in last 16 hours</span>
                                </div>

                                <div className="product-detail">
                                    <h4>Product Details :</h4>
                                    <p>Candy canes sugar plum tart cotton candy chupa chups sugar plum chocolate I love.
                                        Caramels marshmallow icing dessert candy canes I love soufflé I love toffee.
                                        Marshmallow pie sweet sweet roll sesame snaps tiramisu jelly bear claw. Bonbon
                                        muffin I love carrot cake sugar plum dessert bonbon.</p>
                                </div>

                                <ul className="brand-list">
                                    <li>
                                        <div className="brand-box">
                                            <h5>Brand Name:</h5>
                                            <h6>Black Forest</h6>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="brand-box">
                                            <h5>Product Code:</h5>
                                            <h6>W0690034</h6>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="brand-box">
                                            <h5>Product Type:</h5>
                                            <h6>White Cream Cake</h6>
                                        </div>
                                    </li>
                                </ul>

                                <div className="select-size">
                                    <h4> Protein size:</h4>
                                    <select className="form-select select-form-size">
                                        <option selected>Select Size</option>
                                        <option value="1.2">1/2 KG</option>
                                        <option value="0">1 KG</option>
                                        <option value="1.5">1/5 KG</option>
                                    </select>
                                </div>

                                <div className="modal-button">
                                    <a href = '/cart'
                                        className="btn btn-md pro-acc-logout-btn icon">Add
                                        To Cart</a>
                                    <a href = ''
                                        className="btn pro-acc-logout-btn view-button icon text-white fw-bold btn-md">
                                        View More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Quick View Modal Box End --> */}
    </>
  )
}

export default Bulkorder