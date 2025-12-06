import React, { useEffect } from "react";
import $ from "jquery";
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
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
                                <img src="/assets/images/asasa.png"
                                    className="img-fluid bg-img blur-up lazyload home-img sizing" alt="img" sizes='1920*637' />
                                <div className="home-detail home-big-space p-center-left home-overlay ">
                                    <div className="container-fluid-lg">
                                        <div>
                                            <h6 className="ls-expanded theme-color text-uppercase">New Generation Protein
                                            </h6>
                                            <h1 className="heding-2 text-width-h1">unlock Your Full Potential With Yeast.</h1>
                                            {/* <h2 className="content-2">Dryfruits shopping made Easy</h2> */}
                                            <h5 className="text-content text-width-p">Experience the sustainable, gut-friendly power of Evercore yeast Protein. Compele amino acid profile, zero bloating, and incredible taste in every scoop. 
                                            </h5>
                                           <a href = '/Shop'>  <button
                                                className="pro-acc-logout-btn btn-md text-white fw-bold mt-md-4 mt-2 mend-auto"
                                               >Shop Now <i
                                                    className="fa-solid fa-arrow-right icon"></i></button></a>
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
    {/* <!-- Home Section End --> */}
<div className="container">
    <div className="section-t-space ">
<div className="title d-block ">
                        <h2> Authenticity That You Can Trust</h2>
                        <span className="title-leaf">
                            <svg className="icon-width">
                                <use href="../assets/svg/leaf.svg#leaf"></use>
                            </svg>
                        </span>
                        <p> We ensure every Evercore product passes strict quality checks, QR
    verification, and certified lab tests so you always receive true
    authenticity — no compromises.</p>
                    </div>
                    
           <div className="row g-3 row-cols-xxl-3 row-cols-lg-3 row-cols-md-2">

      <div>
        <a href="/Authenticity">
        <div className="service-contain-2">
       <svg
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="#C46334"
        style={{ marginBottom: "12px" }}
      >
        <path d="M12 2L3 7v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V7l-9-5zm0 2.2l7 3.9v4.9c0 4-2.9 7.9-7 9-4.1-1.1-7-5-7-9V8.1l7-3.9zM11 14h2v2h-2v-2zm0-6h2v4h-2V8z" />
      </svg>
          <div className="service-detail">
            <h3 className="heree">Check Authenticity</h3>
            <h6 className="text-content">Scan your product QR code and instantly verify real-time authenticity.</h6>
          </div>
        </div>
        </a>
      </div>

      <div>
        <a href="/ProteinCerti">
            <div className="service-contain-2">
           <svg
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="#C46334"
        style={{ marginBottom: "12px" }}
      >
        <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 7V3.5L18.5 9H14zM8 13h8v2H8v-2zm0-4h4v2H8V9zm0 8h8v2H8v-2z" />
      </svg>
          <div className="service-detail">
            <h3 className="heree">Protein Lab Certificate</h3>
            <h6 className="text-content">Access detailed lab reports for purity, accuracy, and protein safety.</h6>
          </div>
        </div>
        </a>
      </div>

      <div>
        <a href="/Labdoor">
        <div className="service-contain-2">
          <svg
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="#C46334"
        style={{ marginBottom: "12px" }}
      >
        <path d="M7 2h10l1 2h2v2h-2l-3 12h-6L7 6H5V4h2l1-2zm5 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
      </svg>
          <div className="service-detail">
            <h3 className="heree">Labdoor Verified</h3>
            <h6 className="text-content">Verified through international third-party lab testing for purity.</h6>
          </div>
        </div>
        </a>
      </div>

     

    </div>
</div>
</div>
        {/* <!-- Service Section Start --> */}
    {/* <section className="service-section  d-none d-md-block">
  <div className="container-fluid-lg">
    <div className="row g-3 row-cols-xxl-4 row-cols-lg-3 row-cols-md-2">

      <div>
        <div className="service-contain-2">
          <svg className="icon-width">
            <use href="../assets/svg/svg/service-icon-4.svg#shipping"></use>
          </svg>
          <div className="service-detail">
            <h3>100% Vegan</h3>
            <h6 className="text-content">Plant-based nutrition, no animal ingredients</h6>
          </div>
        </div>
      </div>

      <div>
        <div className="service-contain-2">
          <svg className="icon-width">
            <use href="../assets/svg/svg/service-icon-4.svg#service"></use>
          </svg>
          <div className="service-detail">
            <h3>Complete Amino</h3>
            <h6 className="text-content">Full essential amino acid profile</h6>
          </div>
        </div>
      </div>

      <div>
        <div className="service-contain-2">
          <svg className="icon-width">
            <use href="../assets/svg/svg/service-icon-4.svg#pay"></use>
          </svg>
          <div className="service-detail">
            <h3>Eco-Friendly</h3>
            <h6 className="text-content">Sustainable packaging & clean ingredients</h6>
          </div>
        </div>
      </div>

      <div>
        <div className="service-contain-2">
          <svg className="icon-width">
            <use href="../assets/svg/svg/service-icon-4.svg#offer"></use>
          </svg>
          <div className="service-detail">
            <h3>Gut Health</h3>
            <h6 className="text-content">Supports digestion & overall wellness</h6>
          </div>
        </div>
      </div>

    </div>
  </div>
</section> */}

    {/* <!-- Service Section End --> */}

     {/* <!-- Product Section Start --> */}
    <section className="product-section">
        <div className="container-fluid-lg">
            <div className="row g-sm-4 g-3">
                <div className="col-xxl-12">
                    <div className="title title-flex">
                        <div>
                            <h2>Top Save Today</h2>
                            <span className="title-leaf">
                                <svg className="icon-width">
                                    <use href="../assets/svg/leaf.svg#leaf"></use>
                                </svg>
                            </span>
                            <p>Don't miss this opportunity at a special discount just for this week.</p>
                        </div>
                      
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
  <span
 className="gradintback"
  >
    <span >₹10.25</span>
    <del style={{color:'#f6efdb'}}>₹12.57</del>
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
                                            <h5 className="name">Evercore Yeast Protein - Vanilla Essential</h5>
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

                                            <span >₹04.33</span> <del style={{color:'#f6efdb'}}>₹10.36</del>
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

                                            <span >₹12.52</span> <del style={{color:'#f6efdb'}}>₹13.62</del>
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
                                            <h5 className="name">Evercore Yeast Protein - Vanilla Essential</h5>
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

                                            <span>₹10.25</span> <del style={{color:'#f6efdb'}}>₹12.36</del>
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

                                            <span>₹14.25</span> <del style={{color:'#f6efdb'}}>₹16.57</del>
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

                                            <span >₹12.52</span> <del style={{color:'#f6efdb'}}>₹13.62</del>
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
                <section className="banner-section mb-3">
                     <div className="row ">
                <div className="col-12">
                    <div className="row banner-contain-3  hover-effect overflow-visible" style={{boxShadow:'0 0 8px rgba(34, 34, 34, .08)',padding:'30px'}}>
                     
                        <div className="col-md-6 p-0">
                           <div>
                            <img
                                src="/assets/images/protein-gym.avif"
                                alt="protein"
                                className="img-fluid "
                                style={{ width: "100%", borderRadius: "10px" }}
                              />

                           </div>
                        </div>
                        <div className="col-md-6">
                          <div
                            className="banner-detail banner-detail1 p-center-left position-relative d-block py-0 banner-furniture mend-auto">
                            <div className="">
                                <div className="">
                                    <h4 className="text-uppercase text-yellow text-kaushan furniture-title">We add the good!
                                    <img src="../assets/images/furniture/arrow.svg" alt="img" /></h4>
                                    <h3 className="mt-sm-3 mt-1 mb-2 text-content text-justify">
    Protein nutrition doesn’t have to be confusing. At  
    <span className="theme-color fw-bold" style={{marginLeft:'10px'}}> EverCore</span>, we make it simple, clean, and effective.
</h3>

<p className="text-content text-justify">
    Your fitness journey deserves fuel you can trust. That’s why, at EverCore, we craft high-quality protein blends 
    made from pure, real ingredients—no unnecessary additives, no complicated labels. 
    Just clean, powerful protein designed to support strength, energy, and everyday performance.
</p>

                                 
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                    </div>
            </section>
                    <div className="title mt-3">
                        <h2>Shop by Goal</h2>
                        <span className="title-leaf">
                            <svg className="icon-width">
                                <use href="../assets/svg/leaf.svg#leaf"></use>
                            </svg>
                        </span>
                        <p>Top Categories Of The Week</p>
                    </div>

                    <div className="category-slider-2 product-wrapper no-arrow">
                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="/assets/images/magnesium (1).png" className="blur-up lazyload"
                                        alt="img" />
                                    <h5>Magnesium</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="/assets/images/molecule (1).png" className="blur-up lazyload"
                                        alt="img" />
                                    <h5>Collagen</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="/assets/images/health.png" className="blur-up lazyload"
                                        alt="img" />
                                    <h5>Protein</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="/assets/images/omega (1).png" className="blur-up lazyload"
                                        alt="img" />
                                    <h5>Omega</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="/assets/images/protein.png" className="blur-up lazyload" alt="img" />
                                    <h5>Sleep</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="/assets/images/multivitamin (1).png" className="blur-up lazyload"
                                        alt="img" />
                                    <h5>Multivitamins</h5>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="/Shop" className="category-box category-dark">
                                <div>
                                    <img src="/assets/images/immune-booster (2).png" className="blur-up lazyload"
                                        alt="img" />
                                    <h5>Immunity Boosters</h5>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="section-t-space section-b-space">
                          <div className="title mt-3">
                        <h2>Crazy Deals</h2>
                        <span className="title-leaf">
                            <svg className="icon-width">
                                <use href="../assets/svg/leaf.svg#leaf"></use>
                            </svg>
                        </span>
                    </div>
                        <div className="row g-md-4 g-3">
                            <div className="col-md-6">
                                <div className="banner-contain hover-effect" style={{backgroundImage:'url(/assets/images/chocolate-1646843503.jpg)'}}>
                                {/* 583*157  */}
                                    {/* <img src="../assets/images/furniture/banner/4.jpg" className="bg-img blur-up lazyload"
                                        alt="img" /> */}
                                    <div className="banner-details p-center-left p-4" style={{height:'200px'}} >
                                        <div>
                                            <h3 className="text-kaushan text-yellow">50% offer</h3>
                                            <h4 className="text-white mb-2 fw-normal"><span
                                                    className="text-white fw-bold">Restyling</span> your Home</h4>
                                           <a href="/Shop">
                                             <button 
                                                className="btn btn-furniture btn-sm mend-auto">Shop Now <i
                                                    className="fa-solid fa-arrow-right icon"></i></button>
                                           </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="banner-contain hover-effect" style={{backgroundImage:'url(/assets/images/ba11.webp)'}}>
                                    {/* <img src="../assets/images/furniture/banner/5.jpg" className="bg-img blur-up lazyload"
                                        alt="img" /> */}
                                    <div className="banner-details p-center-left p-4" style={{height:'200px'}}>
                                        <div>
                                            <h3 className="text-kaushan text-yellow">50% offer</h3>
                                            <h4 className="text-white mb-2 fw-normal"><span className="text-white fw-bold">New
                                                    Elite</span> Collections</h4>
                                            <button onclick="location.href = '/Shop';"
                                                className="btn btn-furniture btn-sm mend-auto">Shop Now <i
                                                    className="fa-solid fa-arrow-right icon"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div className="title d-block">
                        <h2>Best Selling Proteins</h2>
                        <span className="title-leaf">
                            <svg className="icon-width">
                                <use href="../assets/svg/leaf.svg#leaf"></use>
                            </svg>
                        </span>
                        <p>A virtual assistant collects the products from your list</p>
                    </div>

                        <div className="row">
                <div className="col-12" style={{background:'url(https://www.muscletech.in/wp-content/uploads/2024/11/how-is-protein-powder-made.webp)',borderRadius:'10px',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
                    <div className="slider-6_1 product-wrapper pt-3">
                        <div>
                            <div className="product-box-3 wow fadeInUp">
                                <div className="product-header">
                                    <div className="product-image" style={{background:'#e9e9e9',borderRadius:'10px 10px 0px 0px'}}>
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

                                <div className="product-footer" style={{background:'#e9e9e9',borderRadius:'0px 0px 10px 10px'}}>
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
  <span
 className="gradintback"
  >
    <span >₹10.25</span>
    <del style={{color:'#f6efdb'}}>₹12.57</del>
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
                                    <div className="product-image" style={{background:'#e9e9e9',borderRadius:'10px 10px 0px 0px'}}>
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
                                <div className="product-footer" style={{background:'#e9e9e9',borderRadius:'0px 0px 10px 10px'}}>
                                    <div className="product-detail">
                                       
                                        <a href="/Shop">
                                            <h5 className="name">Evercore Yeast Protein - Vanilla Essential</h5>
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
                                    <div className="product-image" style={{background:'#e9e9e9',borderRadius:'10px 10px 0px 0px'}}>
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

                                <div className="product-footer" style={{background:'#e9e9e9',borderRadius:'0px 0px 10px 10px'}}>
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

                                            <span >₹04.33</span> <del style={{color:'#f6efdb'}}>₹10.36</del>
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


 {/* <div className="section-t-space ">
<div className="title d-block ">
                        <h2> Authenticity That You Can Trust</h2>
                        <span className="title-leaf">
                            <svg className="icon-width">
                                <use href="../assets/svg/leaf.svg#leaf"></use>
                            </svg>
                        </span>
                        <p> We ensure every Evercore product passes strict quality checks, QR
    verification, and certified lab tests so you always receive true
    authenticity — no compromises.</p>
                    </div>
                    
           <div className="row g-3 row-cols-xxl-3 row-cols-lg-3 row-cols-md-2">

      <div>
        <a href="/Authenticity">
        <div className="service-contain-2">
       <svg
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="#C46334"
        style={{ marginBottom: "12px" }}
      >
        <path d="M12 2L3 7v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V7l-9-5zm0 2.2l7 3.9v4.9c0 4-2.9 7.9-7 9-4.1-1.1-7-5-7-9V8.1l7-3.9zM11 14h2v2h-2v-2zm0-6h2v4h-2V8z" />
      </svg>
          <div className="service-detail">
            <h3 className="heree">Check Authenticity</h3>
            <h6 className="text-content">Scan your product QR code and instantly verify real-time authenticity.</h6>
          </div>
        </div>
        </a>
      </div>

      <div>
        <a href="/ProteinCerti">
            <div className="service-contain-2">
           <svg
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="#C46334"
        style={{ marginBottom: "12px" }}
      >
        <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 7V3.5L18.5 9H14zM8 13h8v2H8v-2zm0-4h4v2H8V9zm0 8h8v2H8v-2z" />
      </svg>
          <div className="service-detail">
            <h3 className="heree">Protein Lab Certificate</h3>
            <h6 className="text-content">Access detailed lab reports for purity, accuracy, and protein safety.</h6>
          </div>
        </div>
        </a>
      </div>

      <div>
        <a href="/Labdoor">
        <div className="service-contain-2">
          <svg
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="#C46334"
        style={{ marginBottom: "12px" }}
      >
        <path d="M7 2h10l1 2h2v2h-2l-3 12h-6L7 6H5V4h2l1-2zm5 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
      </svg>
          <div className="service-detail">
            <h3 className="heree">Labdoor Verified</h3>
            <h6 className="text-content">Verified through international third-party lab testing for purity.</h6>
          </div>
        </div>
        </a>
      </div>

     

    </div>
</div> */}

                </div>

                
            </div>
        </div>
    </section>
    {/* <!-- Product Section End --> */}



    {/* <!-- Banner Section Start --> */}
    <section className="banner-section">
        <div className="container-fluid-lg">
            <div className="row ">
                <div className="col-12">
                    <div className="banner-contain-3 section-b-space section-t-space hover-effect overflow-visible" style={{backgroundImage:'url(/assets/images/top.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                        {/* <img src="https://themes.pixelstrap.com/fastkart/assets/images/furniture/banner/6.jpg" className="bg-img" alt="img" width={"100%"}/> */}
                        <img src="/assets/images/Natural_Protein_PB.png" className="flower-pot img-fluid" alt="img" style={{height:'276px'}}/>
                        <div
                            className="banner-detail p-center-left position-relative d-block py-0 banner-furniture mend-auto">
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-6 offset-xxl-2 offset-xl-1 col-md-8 col-sm-9">
                                    <h4 className="text-uppercase text-yellow text-kaushan furniture-title">Best of
                                        Collections <img src="../assets/images/furniture/arrow.svg" alt="img" /></h4>
                                    <h2 className="mt-sm-3 mt-1 mb-2 text-content"> Premium Protein <span
                                            className="theme-color fw-bold">LookBook</span> 2025</h2>
                                    <p className="text-content">Explore our latest collection of clean, science-backed protein blends made to 
                                    support muscle growth, performance, and everyday wellness.</p>
                                    <a href="/Shop">
                                    <button className="pro-acc-logout-btn mt-sm-4 mt-2 btn-md text-white fw-bold">Shop Now</button>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Banner Section End --> */}
  {/* <!-- Blog Section Start --> */}
    <section className="blog-section">
        <div className="container-fluid-lg">
            <div className="title d-block">
                        <h2>Blog </h2>
                        <span className="title-leaf">
                            <svg className="icon-width">
                                <use href="../assets/svg/leaf.svg#leaf"></use>
                            </svg>
                        </span>
                        
                    </div>

            <div className="slider-3 arrow-slider">
                <div>
                    <div className="blog-box ratio_50">
                        <div className="blog-box-image">
                            <a href="/Blogdetails">
                                <img src="/assets/images/blog1.jpg" className="img-fluid bg-img" alt="Image Size : 510 X 232" />
                            </a>
                        </div>

                        <div className="blog-detail">
                            <label>Peanut Butter</label>
                            <a href="/Blogdetails">
                                <h2>High-Protein Peanut Butter: Meeting the Demand for Fitness and Wellness</h2>
                            </a>
                            <div className="blog-list">
                                <span>March 9, 2025</span>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="blog-box ratio_50">
                        <div className="blog-box-image">
                            <a href="/Blogdetails">
                                <img src="/assets/images/blog2.webp" className="img-fluid bg-img" alt="Image Size : 510 X 232" />
                            </a>
                        </div>

                        <div className="blog-detail">
                            <label>Biozyme Performance Whey</label>
                            <a href="/Blogdetails">
                                <h2>MuscleBlaze Biozyme Performance Whey, 4.4 lb Rich Chocolate </h2>
                            </a>
                            <div className="blog-list">
                                <span>March 9, 2025</span>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="blog-box ratio_50">
                        <div className="blog-box-image">
                            <a href="/Blogdetails">
                                <img src="/assets/images/blog3.jpg" className="img-fluid bg-img" alt="Image Size : 510 X 232" />
                            </a>
                        </div>

                        <div className="blog-detail">
                            <label>Atom Whey Protein</label>
                            <a href="/Blogdetails">
                                <h2>Atom Whey Protein 1kg With Digestive Enzymes</h2>
                            </a>
                            <div className="blog-list">
                                <span>March 9, 2025</span>
                              
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="blog-box ratio_50">
                        <div className="blog-box-image">
                            <a href="/Blogdetails">
                                <img src="/assets/images/blog4.jpg" className="img-fluid bg-img" alt="Image Size : 510 X 232" />
                            </a>
                        </div>

                        <div className="blog-detail">
                            <label>High Protein Oats</label>
                            <a href="/Blogdetails">
                                <h2>Dark Chocolate: The Ultimate Breakfast Fue</h2>
                            </a>
                            <div className="blog-list">
                                <span>March 9, 2025</span>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Section End --> */}

    {/* <!-- Newsletter Section Start --> */}
    <section className="newsletter-section section-b-space">
        <div className="container-fluid-lg">
            <div className="newsletter-box newsletter-box-2">
                <div className="newsletter-contain py-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                                <div className="newsletter-detail">
                                    <h2>Join our newsletter and get...</h2>
                                    <h5>₹20 discount for your first order</h5>
                                    <div className="input-box">
                                        <input type="email" className="form-control" id="exampleFormControlInput1"
                                            placeholder="Enter Your Email" />
                                        <i className="fa-solid fa-envelope arrow"></i>
                                        <button className="sub-btn  btn-animation">
                                            <span className="d-sm-block d-none">Subscribe</span>
                                            <i className="fa-solid fa-arrow-right icon"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Newsletter Section End --> */}

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

export default Home