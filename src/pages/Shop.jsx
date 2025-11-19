import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Shop = () => {
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
                                                <span className="name">Fruits & Vegetables</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="cake" />
                                            <label className="form-check-label" for="cake">
                                                <span className="name">Bakery, Cake & Dairy</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="behe" />
                                            <label className="form-check-label" for="behe">
                                                <span className="name">Beverages</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="snacks" />
                                            <label className="form-check-label" for="snacks">
                                                <span className="name">Snacks & Branded Foods</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="beauty" />
                                            <label className="form-check-label" for="beauty">
                                                <span className="name">Beauty & Household</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="pets" />
                                            <label className="form-check-label" for="pets">
                                                <span className="name">Kitchen, Garden & Pets</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="egg" />
                                            <label className="form-check-label" for="egg">
                                                <span className="name">Eggs, Meat & Fish</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="food" />
                                            <label className="form-check-label" for="food">
                                                <span className="name">Gourment & World Food</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="care" />
                                            <label className="form-check-label" for="care">
                                                <span className="name">Baby Care</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="fish" />
                                            <label className="form-check-label" for="fish">
                                                <span className="name">Fish & Seafood</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="marinades" />
                                            <label className="form-check-label" for="marinades">
                                                <span className="name">Marinades</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="lamb" />
                                            <label className="form-check-label" for="lamb">
                                                <span className="name">Mutton & Lamb</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="other" />
                                            <label className="form-check-label" for="other">
                                                <span className="name">Port & other Meats</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="pour" />
                                            <label className="form-check-label" for="pour">
                                                <span className="name">Pourltry</span>
                                                <span className="number">(15)</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                            <input className="checkbox_animated" type="checkbox" id="salami" />
                                            <label className="form-check-label" for="salami">
                                                <span className="name">Sausages, bacon & Salami</span>
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
                                            <img src="../assets/images/cake/product/2.png"
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
                                            <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">Cheesy feet cheesy grin brie.
                                            Mascarpone cheese and wine hard cheese the big cheese everyone loves smelly
                                            cheese macaroni cheese croque monsieur.</p>
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
                                            <img src="../assets/images/cake/product/3.png"
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
                                            <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">Feta taleggio croque monsieur
                                            swiss manchego cheesecake dolcelatte jarlsberg. Hard cheese danish fontina
                                            boursin melted cheese fondue.</p>
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
                                            <img src="../assets/images/cake/product/4.png"
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
                                        <span className="span-name">Snacks</span>
                                        <a href="/Productdetails">
                                            <h5 className="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">Lancashire hard cheese
                                            parmesan. Danish fontina mozzarella cream cheese smelly cheese cheese and
                                            wine cheesecake dolcelatte stilton. Cream cheese parmesan who moved my
                                            cheese when the cheese comes out everybody's happy cream cheese red
                                            leicester ricotta edam.</p>
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
                                            <img src="../assets/images/cake/product/5.png"
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
                                        <span className="span-name">Snacks</span>
                                        <a href="/Productdetails">
                                            <h5 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g</h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">Cheddar cheddar pecorino hard
                                            cheese hard cheese cheese and biscuits bocconcini babybel. Cow goat paneer
                                            cream cheese fromage cottage cheese cauliflower cheese jarlsberg.</p>
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
                                            <img src="../assets/images/cake/product/6.png"
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
                                            <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">Bavarian bergkase smelly
                                            cheese swiss cut the cheese lancashire who moved my cheese manchego melted
                                            cheese. Red leicester paneer cow when the cheese comes out everybody's happy
                                            croque monsieur goat melted cheese port-salut.</p>
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.25s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="../assets/images/cake/product/7.png"
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
                                            <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">Melted cheese babybel chalk
                                            and cheese. Port-salut port-salut cream cheese when the cheese comes out
                                            everybody's happy cream cheese hard cheese cream cheese red leicester.</p>
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

                                        <h6 className="unit">1 Kg</h6>

                                        <h5 className="price"><span className="theme-color">₹12.68</span> <del>₹14.69</del>
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.3s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="../assets/images/cake/product/2.png"
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
                                        {/* <span className="span-name">Vegetable</span> */}
                                        <a href="/Productdetails">
                                            <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">Squirty cheese cottage cheese
                                            cheese strings. Red leicester paneer danish fontina queso lancashire when
                                            the cheese comes out everybody's happy cottage cheese paneer.</p>
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.35s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="../assets/images/cake/product/3.png"
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
                                            <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">Swiss ricotta cauliflower
                                            cheese squirty cheese cheesy grin camembert de normandie airedale edam.
                                            Squirty cheese babybel cheesecake the big cheese cauliflower cheese hard
                                            cheese cheese and biscuits cheese and wine.</p>
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.4s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="../assets/images/cake/product/4.png"
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
                                        <span className="span-name">Snacks</span>
                                        <a href="/Productdetails">
                                            <h5 className="name">SnackAmor Combo Pack of Jowar Stick and Jowar Chips</h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">Boursin the big cheese
                                            cheeseburger. Jarlsberg smelly cheese chalk and cheese gouda blue castello
                                            monterey jack swiss boursin. Halloumi cheesy feet mozzarella red leicester
                                            paneer boursin who moved my cheese croque monsieur.</p>
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.45s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="../assets/images/cake/product/5.png"
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
                                        <span className="span-name">Snacks</span>
                                        <a href="/Productdetails">
                                            <h5 className="name">Yumitos Chilli Sprinkled Potato Chips 100 g</h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">Halloumi mozzarella monterey
                                            jack smelly cheese emmental bocconcini when the cheese comes out everybody's
                                            happy pecorino. Cut the cheese stilton danish fontina cheesy grin rubber
                                            cheese smelly cheese roquefort paneer.</p>
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.5s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="../assets/images/cake/product/6.png"
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
                                            <h5 className="name">Fantasy Crunchy Choco Chip Cookies</h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">Manchego cow cheddar.
                                            Port-salut roquefort hard cheese babybel when the cheese comes out
                                            everybody's happy brie dolcelatte croque monsieur.</p>
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.55s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="../assets/images/cake/product/7.png"
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
                                        {/* <span className="span-name">Vegetable</span> */}
                                        <a href="/Productdetails">
                                            <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">Roquefort say cheese the big
                                            cheese ricotta chalk and cheese when the cheese comes out everybody's happy
                                            brie lancashire.</p>
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

                                        <h6 className="unit">1 Kg</h6>

                                        <h5 className="price"><span className="theme-color">₹12.68</span> <del>₹14.69</del>
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.6s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="../assets/images/cake/product/2.png"
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
                                            <h5 className="name">Fresh Bread and Pastry Flour 200 g</h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">Lancashire when the cheese
                                            comes out everybody's happy blue castello halloumi boursin stinking bishop
                                            pecorino fromage frais.</p>
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
                            <div className="product-box-3 h-100 wow fadeInUp" data-wow-daley="0.65s">
                                <div className="product-header">
                                    <div className="product-image">
                                        <a href="/Productdetails">
                                            <img src="../assets/images/cake/product/3.png"
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
                                            <h5 className="name">Peanut Butter Bite Premium Butter Cookies 600 g</h5>
                                        </a>
                                        <p className="text-content mt-1 mb-2 product-content">Say cheese cheese and biscuits
                                            feta. Queso bocconcini danish fontina camembert de normandie brie airedale
                                            ricotta feta. Pecorino edam gouda caerphilly croque monsieur red leicester
                                            cheese triangles caerphilly.</p>
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
    </>
  )
}

export default Shop