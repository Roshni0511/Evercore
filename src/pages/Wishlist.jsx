import React, { useEffect } from "react";
import $ from "jquery";
import Navbar from './Navbar'
import Footer from './Footer'

const Wishlist = () => {
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
     {/* <!-- Breadcrumb Section Start --> */}
    <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-contain">
                        <h2>Wishlist</h2>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item active">Wishlist</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Wishlist Section Start --> */}
    <section className="wishlist-section section-b-space">
        <div className="container-fluid-lg">
            <div className="row g-sm-3 g-2">
                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                    <div className="product-box-3 h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="/Productdetails">
                                    <img src="/assets/images/product1.webp" className="img-fluid blur-up lazyload"
                                        alt="img" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-footer">
                            <div className="product-detail">
                                {/* <span className="span-name">Vegetable</span> */}
                                <a href="/Productdetails">
                                    <h5 className="name">Evercore Yeast Protein - Double Chocolate</h5>
                                </a>
                                <h6 className="unit mt-1">250 ml</h6>
                                <h5 className="price">
                                    <span className="theme-color">₹08.02</span>
                                    <del>₹15.15</del>
                                </h5>

                                <div className="add-to-cart-box bg-white mt-2">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray" data-type="minus"
                                                data-field="">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray" data-type="plus"
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

                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                    <div className="product-box-3 h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="/Productdetails">
                                    <img src="/assets/images/product2.webp" className="img-fluid blur-up lazyload"
                                        alt="img" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                {/* <span className="span-name">Vegetable</span> */}
                                <a href="/Productdetails">
                                    <h5 className="name">Evercore Yeast Protein - Vanilla Essential</h5>
                                </a>
                                <h6 className="unit mt-1">350 G</h6>
                                <h5 className="price">
                                    <span className="theme-color">₹104.33</span>
                                    <del>₹120.36</del>
                                </h5>

                                <div className="add-to-cart-box bg-white mt-2">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray" data-type="minus"
                                                data-field="">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray" data-type="plus"
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

                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                    <div className="product-box-3 h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="/Productdetails">
                                    <img src="/assets/images/product3.webp" className="img-fluid blur-up lazyload"
                                        alt="img" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                
                                <a href="/Productdetails">
                                    <h5 className="name">Evercore Yeast Protein - Mixed Berry</h5>
                                </a>
                                <h6 className="unit mt-1">570 G</h6>
                                <h5 className="price">
                                    <span className="theme-color">₹12.52</span>
                                    <del>₹13.62</del>
                                </h5>

                                <div className="add-to-cart-box bg-white mt-2">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray" data-type="minus"
                                                data-field="">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray" data-type="plus"
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

                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                    <div className="product-box-3 h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="/Productdetails">
                                    <img src="/assets/images/product4.webp" className="img-fluid blur-up lazyload"
                                        alt="img" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                
                                <a href="/Productdetails">
                                    <h5 className="name">Protein Bar - Chocolate Peanut Butter</h5>
                                </a>
                                <h6 className="unit mt-1">100 G</h6>
                                <h5 className="price">
                                    <span className="theme-color">₹10.25</span>
                                    <del>₹12.36</del>
                                </h5>

                                <div className="add-to-cart-box bg-white mt-2">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray" data-type="minus"
                                                data-field="">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray" data-type="plus"
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

                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                    <div className="product-box-3 h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="/Productdetails">
                                    <img src="/assets/images/product5.webp" className="img-fluid blur-up lazyload"
                                        alt="img" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                {/* <span className="span-name">Vegetable</span> */}
                                <a href="/Productdetails">
                                    <h5 className="name">Evercore Yeast Protein - Vanilla Essential</h5>
                                </a>
                                <h6 className="unit mt-1">550 G</h6>
                                <h5 className="price">
                                    <span className="theme-color">₹14.25</span>
                                    <del>₹16.57</del>
                                </h5>

                                <div className="add-to-cart-box bg-white mt-2">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray" data-type="minus"
                                                data-field="">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray" data-type="plus"
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
{/*  */}
             <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                    <div className="product-box-3 h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="/Productdetails">
                                    <img src="/assets/images/product1.webp" className="img-fluid blur-up lazyload"
                                        alt="img" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-footer">
                            <div className="product-detail">
                                {/* <span className="span-name">Vegetable</span> */}
                                <a href="/Productdetails">
                                    <h5 className="name">Evercore Yeast Protein - Double Chocolate</h5>
                                </a>
                                <h6 className="unit mt-1">250 ml</h6>
                                <h5 className="price">
                                    <span className="theme-color">₹08.02</span>
                                    <del>₹15.15</del>
                                </h5>

                                <div className="add-to-cart-box bg-white mt-2">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray" data-type="minus"
                                                data-field="">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray" data-type="plus"
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

                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                    <div className="product-box-3 h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="/Productdetails">
                                    <img src="/assets/images/product2.webp" className="img-fluid blur-up lazyload"
                                        alt="img" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                {/* <span className="span-name">Vegetable</span> */}
                                <a href="/Productdetails">
                                    <h5 className="name">Evercore Yeast Protein - Vanilla Essential</h5>
                                </a>
                                <h6 className="unit mt-1">350 G</h6>
                                <h5 className="price">
                                    <span className="theme-color">₹104.33</span>
                                    <del>₹120.36</del>
                                </h5>

                                <div className="add-to-cart-box bg-white mt-2">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray" data-type="minus"
                                                data-field="">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray" data-type="plus"
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

                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                    <div className="product-box-3 h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="/Productdetails">
                                    <img src="/assets/images/product3.webp" className="img-fluid blur-up lazyload"
                                        alt="img" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                
                                <a href="/Productdetails">
                                    <h5 className="name">Evercore Yeast Protein - Mixed Berry</h5>
                                </a>
                                <h6 className="unit mt-1">570 G</h6>
                                <h5 className="price">
                                    <span className="theme-color">₹12.52</span>
                                    <del>₹13.62</del>
                                </h5>

                                <div className="add-to-cart-box bg-white mt-2">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray" data-type="minus"
                                                data-field="">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray" data-type="plus"
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

                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                    <div className="product-box-3 h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="/Productdetails">
                                    <img src="/assets/images/product4.webp" className="img-fluid blur-up lazyload"
                                        alt="img" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                
                                <a href="/Productdetails">
                                    <h5 className="name">Protein Bar - Chocolate Peanut Butter</h5>
                                </a>
                                <h6 className="unit mt-1">100 G</h6>
                                <h5 className="price">
                                    <span className="theme-color">₹10.25</span>
                                    <del>₹12.36</del>
                                </h5>

                                <div className="add-to-cart-box bg-white mt-2">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray" data-type="minus"
                                                data-field="">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray" data-type="plus"
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

                <div className="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">
                    <div className="product-box-3 h-100">
                        <div className="product-header">
                            <div className="product-image">
                                <a href="/Productdetails">
                                    <img src="/assets/images/product5.webp" className="img-fluid blur-up lazyload"
                                        alt="img" />
                                </a>

                                <div className="product-header-top">
                                    <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-footer">
                            <div className="product-detail">
                                {/* <span className="span-name">Vegetable</span> */}
                                <a href="/Productdetails">
                                    <h5 className="name">Evercore Yeast Protein - Vanilla Essential</h5>
                                </a>
                                <h6 className="unit mt-1">550 G</h6>
                                <h5 className="price">
                                    <span className="theme-color">₹14.25</span>
                                    <del>₹16.57</del>
                                </h5>

                                <div className="add-to-cart-box bg-white mt-2">
                                    <button className="btn btn-add-cart addcart-button">Add
                                        <span className="add-icon bg-light-gray">
                                            <i className="fa-solid fa-plus"></i>
                                        </span>
                                    </button>
                                    <div className="cart_qty qty-box">
                                        <div className="input-group bg-white">
                                            <button type="button" className="qty-left-minus bg-gray" data-type="minus"
                                                data-field="">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                            <input className="form-control input-number qty-input" type="text"
                                                name="quantity" value="0" />
                                            <button type="button" className="qty-right-plus bg-gray" data-type="plus"
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
    </section>
    {/* <!-- Wishlist Section End --> */}

  <Footer />
    </>
  )
}

export default Wishlist