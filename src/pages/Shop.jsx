import React, { useEffect } from "react";
import $ from "jquery";
import Navbar from './Navbar'
import Footer from './Footer'

const Shop = () => {
    
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
             {/* <!-- Shop Section Start --> */}
    <section className="section-b-space shop-section">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="show-button">
                        <div className="top-filter-menu-2">
                            <div className="sidebar-filter-menu" data-bs-toggle="collapse"
                                data-bs-target="#collapseExample">
                                <a href="javascript:void(0)"><i className="fa-solid fa-filter"></i> Filter Menu</a>
                            </div>

                        
                        </div>
                    </div>

                    <div className="top-filter-category" id="collapseExample">
                        <div className="row g-sm-4 g-3">
                            <div className="col-xl-3 col-md-6">
                                <div className="category-title">
                                    <h3>Pack Size</h3>
                                </div>
                                <ul className="category-list custom-padding custom-height">
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="fruit" />
                                            <label className="form-check-label" for="fruit">
                                                <span className="name">Biozyme Performance Whey</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="cake" />
                                            <label className="form-check-label" for="cake">
                                                <span className="name">Biozyme Whey PR</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="behe" />
                                            <label className="form-check-label" for="behe">
                                                <span className="name">Raw Whey Protein</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="snacks" />
                                            <label className="form-check-label" for="snacks">
                                                <span className="name">Double Chocolate</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="beauty" />
                                            <label className="form-check-label" for="beauty">
                                                <span className="name">Yeast Protein - Mixed Berry</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                   
                                </ul>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="category-title">
                                    <h3>Price</h3>
                                </div>
                                <div className="range-slider">
                                    <input type="text" className="js-range-slider" value="" />
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="category-title">
                                    <h3>Discount</h3>
                                </div>
                                <ul className="category-list">
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                <span className="name">upto 5%</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault1" />
                                            <label className="form-check-label" for="flexCheckDefault1">
                                                <span className="name">5% - 10%</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault2" />
                                            <label className="form-check-label" for="flexCheckDefault2">
                                                <span className="name">10% - 15%</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault3" />
                                            <label className="form-check-label" for="flexCheckDefault3">
                                                <span className="name">15% - 25%</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault4" />
                                            <label className="form-check-label" for="flexCheckDefault4">
                                                <span className="name">More than 25%</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="category-title">
                                    <h3>Category</h3>
                                </div>
                                <ul className="category-list custom-padding custom-height">
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault5" />
                                            <label className="form-check-label" for="flexCheckDefault5">
                                                <span className="name">400 to 500 g</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault6" />
                                            <label className="form-check-label" for="flexCheckDefault6">
                                                <span className="name">500 to 700 g</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault7" />
                                            <label className="form-check-label" for="flexCheckDefault7">
                                                <span className="name">700 to 1 kg</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault8" />
                                            <label className="form-check-label" for="flexCheckDefault8">
                                                <span className="name">120 - 150 g each Vacuum 2 pcs</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault9" />
                                            <label className="form-check-label" for="flexCheckDefault9">
                                                <span className="name">1 pc</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault10" />
                                            <label className="form-check-label" for="flexCheckDefault10">
                                                <span className="name">1 to 1.2 kg</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault11" />
                                            <label className="form-check-label" for="flexCheckDefault11">
                                                <span className="name">2 x 24 pcs Multipack</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault12" />
                                            <label className="form-check-label" for="flexCheckDefault12">
                                                <span className="name">2x6 pcs Multipack</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault13" />
                                            <label className="form-check-label" for="flexCheckDefault13">
                                                <span className="name">4x6 pcs Multipack</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault14" />
                                            <label className="form-check-label" for="flexCheckDefault14">
                                                <span className="name">5x6 pcs Multipack</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault15" />
                                            <label className="form-check-label" for="flexCheckDefault15">
                                                <span className="name">Combo 2 Items</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault16" />
                                            <label className="form-check-label" for="flexCheckDefault16">
                                                <span className="name">Combo 3 Items</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault17" /> 
                                            <label className="form-check-label" for="flexCheckDefault17">
                                                <span className="name">2 pcs</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault18" />
                                            <label className="form-check-label" for="flexCheckDefault18">
                                                <span className="name">3 pcs</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault19" />
                                            <label className="form-check-label" for="flexCheckDefault19">
                                                <span className="name">2 pcs Vacuum (140 g to 180 g each
                                                    )</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault20" />
                                            <label className="form-check-label" for="flexCheckDefault20">
                                                <span className="name">4 pcs</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault21" />
                                            <label className="form-check-label" for="flexCheckDefault21">
                                                <span className="name">4 pcs Vacuum (140 g to 180 g each
                                                    )</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault22" />
                                            <label className="form-check-label" for="flexCheckDefault22">
                                                <span className="name">6 pcs</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault23" />
                                            <label className="form-check-label" for="flexCheckDefault23">
                                                <span className="name">6 pcs carton</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="flexCheckDefault24" />
                                            <label className="form-check-label" for="flexCheckDefault24">
                                                <span className="name">6 pcs Pouch</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="row g-sm-4 g-3 row-cols-xxl-5 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                        <div>
                            <div className="product-box-3 h-100 wow fadeInUp">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product1.webp"
                                                className="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                            {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i data-feather="refresh-cw"></i>
                                                </a>
                                            </li> */}

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
                                        {/* <span className="span-name">Vegetable</span> */}
                                        <a href="/Productdetails">
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
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span>(4.0)</span>
                                        </div>
                                        <h6 className="unit">250 ml</h6>
                                        <h5 className="price"><span className="theme-color">₹08.02</span> <del>₹15.15</del>
                                        </h5>
                                        <div className="add-to-cart-box bg-white">
                                            <button className="btn btn-add-cart addcart-button">Add
                                                <span className="add-icon bg-light-gray">
                                                    <i className="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div className="cart_qty qty-box">
                                                <div className="input-group bg-white">
                                                    <button type="button" className="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                    <input className="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" className="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.05s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product2.webp"
                                                className="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                            {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i data-feather="refresh-cw"></i>
                                                </a>
                                            </li> */}

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
                                        {/* <span className="span-name">Vegetable</span> */}
                                        <a href="/Productdetails">
                                            <h5 className="name">Evercore Yeast Protein - Vanilla
</h5>
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
                                        <h5 className="price"><span className="theme-color">₹04.33</span> <del>₹10.36</del>
                                        </h5>
                                        <div className="add-to-cart-box bg-white">
                                            <button className="btn btn-add-cart addcart-button">Add
                                                <span className="add-icon bg-light-gray">
                                                    <i className="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div className="cart_qty qty-box">
                                                <div className="input-group bg-white">
                                                    <button type="button" className="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                    <input className="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" className="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.1s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product3.webp"
                                                className="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                            {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i data-feather="refresh-cw"></i>
                                                </a>
                                            </li> */}

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
                                        
                                        <a href="/Productdetails">
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
                                        <h5 className="price"><span className="theme-color">₹12.52</span> <del>₹13.62</del>
                                        </h5>
                                        <div className="add-to-cart-box bg-white">
                                            <button className="btn btn-add-cart addcart-button">Add
                                                <span className="add-icon bg-light-gray">
                                                    <i className="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div className="cart_qty qty-box">
                                                <div className="input-group bg-white">
                                                    <button type="button" className="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                    <input className="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" className="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.15s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product4.webp"
                                                className="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>
{/* 
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i data-feather="refresh-cw"></i>
                                                </a>
                                            </li> */}

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
                                       
                                        <a href="/Productdetails">
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
                                                    <i data-feather="star"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span>(3.8)</span>
                                        </div>
                                        <h6 className="unit">100 G</h6>
                                        <h5 className="price"><span className="theme-color">₹10.25</span> <del>₹12.36</del>
                                        </h5>
                                        <div className="add-to-cart-box bg-white">
                                            <button className="btn btn-add-cart addcart-button">Add
                                                <span className="add-icon bg-light-gray">
                                                    <i className="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div className="cart_qty qty-box">
                                                <div className="input-group bg-white">
                                                    <button type="button" className="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                    <input className="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" className="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.2s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product5.webp"
                                                className="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                            {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i data-feather="refresh-cw"></i>
                                                </a>
                                            </li> */}

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
                                        {/* <span className="span-name">Vegetable</span> */}
                                        <a href="/Productdetails">
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

                                        <h6 className="unit">550 G</h6>

                                        <h5 className="price"><span className="theme-color">₹14.25</span> <del>₹16.57</del>
                                        </h5>
                                        <div className="add-to-cart-box bg-white">
                                            <button className="btn btn-add-cart addcart-button">Add
                                                <span className="add-icon bg-light-gray">
                                                    <i className="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div className="cart_qty qty-box">
                                                <div className="input-group bg-white">
                                                    <button type="button" className="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                    <input className="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" className="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
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
                            <div className="product-box-3 h-100 wow fadeInUp">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product1.webp"
                                                className="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                            {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i data-feather="refresh-cw"></i>
                                                </a>
                                            </li> */}

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
                                        {/* <span className="span-name">Vegetable</span> */}
                                        <a href="/Productdetails">
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
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span>(4.0)</span>
                                        </div>
                                        <h6 className="unit">250 ml</h6>
                                        <h5 className="price"><span className="theme-color">₹08.02</span> <del>₹15.15</del>
                                        </h5>
                                        <div className="add-to-cart-box bg-white">
                                            <button className="btn btn-add-cart addcart-button">Add
                                                <span className="add-icon bg-light-gray">
                                                    <i className="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div className="cart_qty qty-box">
                                                <div className="input-group bg-white">
                                                    <button type="button" className="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                    <input className="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" className="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.05s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product2.webp"
                                                className="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                            {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i data-feather="refresh-cw"></i>
                                                </a>
                                            </li> */}

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
                                        {/* <span className="span-name">Vegetable</span> */}
                                        <a href="/Productdetails">
                                            <h5 className="name">Evercore Yeast Protein - Vanilla
</h5>
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
                                        <h5 className="price"><span className="theme-color">₹04.33</span> <del>₹10.36</del>
                                        </h5>
                                        <div className="add-to-cart-box bg-white">
                                            <button className="btn btn-add-cart addcart-button">Add
                                                <span className="add-icon bg-light-gray">
                                                    <i className="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div className="cart_qty qty-box">
                                                <div className="input-group bg-white">
                                                    <button type="button" className="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                    <input className="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" className="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.1s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product3.webp"
                                                className="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                            {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i data-feather="refresh-cw"></i>
                                                </a>
                                            </li> */}

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
                                        
                                        <a href="/Productdetails">
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
                                        <h5 className="price"><span className="theme-color">₹12.52</span> <del>₹13.62</del>
                                        </h5>
                                        <div className="add-to-cart-box bg-white">
                                            <button className="btn btn-add-cart addcart-button">Add
                                                <span className="add-icon bg-light-gray">
                                                    <i className="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div className="cart_qty qty-box">
                                                <div className="input-group bg-white">
                                                    <button type="button" className="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                    <input className="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" className="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.15s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product4.webp"
                                                className="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>
{/* 
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i data-feather="refresh-cw"></i>
                                                </a>
                                            </li> */}

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
                                       
                                        <a href="/Productdetails">
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
                                                    <i data-feather="star"></i>
                                                </li>
                                                <li>
                                                    <i data-feather="star"></i>
                                                </li>
                                            </ul>
                                            <span>(3.8)</span>
                                        </div>
                                        <h6 className="unit">100 G</h6>
                                        <h5 className="price"><span className="theme-color">₹10.25</span> <del>₹12.36</del>
                                        </h5>
                                        <div className="add-to-cart-box bg-white">
                                            <button className="btn btn-add-cart addcart-button">Add
                                                <span className="add-icon bg-light-gray">
                                                    <i className="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div className="cart_qty qty-box">
                                                <div className="input-group bg-white">
                                                    <button type="button" className="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                    <input className="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" className="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.2s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="/assets/images/product5.webp"
                                                className="img-fluid blur-up lazyload" alt="" />
                                        </a>

                                        <ul className="product-option">
                                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                                <a href="javascript:void(0)" data-bs-toggle="modal"
                                                    data-bs-target="#view">
                                                    <i data-feather="eye"></i>
                                                </a>
                                            </li>

                                            {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                                                <a href="compare.html">
                                                    <i data-feather="refresh-cw"></i>
                                                </a>
                                            </li> */}

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
                                        {/* <span className="span-name">Vegetable</span> */}
                                        <a href="/Productdetails">
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

                                        <h6 className="unit">550 G</h6>

                                        <h5 className="price"><span className="theme-color">₹14.25</span> <del>₹16.57</del>
                                        </h5>
                                        <div className="add-to-cart-box bg-white">
                                            <button className="btn btn-add-cart addcart-button">Add
                                                <span className="add-icon bg-light-gray">
                                                    <i className="fa-solid fa-plus"></i>
                                                </span>
                                            </button>
                                            <div className="cart_qty qty-box">
                                                <div className="input-group bg-white">
                                                    <button type="button" className="qty-left-minus bg-gray"
                                                        data-type="minus" data-field="">
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                    <input className="form-control input-number qty-input" type="text"
                                                        name="quantity" value="0" />
                                                    <button type="button" className="qty-right-plus bg-gray"
                                                        data-type="plus" data-field="">
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

                    <nav className="custom-pagination">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="javascript:void(0)" tabindex="-1">
                                    <i className="fa-solid fa-angles-left"></i>
                                </a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="javascript:void(0)">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">
                                    <i className="fa-solid fa-angles-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Shop Section End --> */}

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
                                    alt="" />
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
                                        className="btn btn-md add-cart-button icon">Add
                                        To Cart</a>
                                    <a href = ''
                                        className="btn theme-bg-color view-button icon text-white fw-bold btn-md">
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

export default Shop