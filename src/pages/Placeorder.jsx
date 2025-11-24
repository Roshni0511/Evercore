import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Placeorder = () => {
  return (
    <>
      <Navbar />
          {/* <!-- Breadcrumb Section Start --> */}
    <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-contain breadcrumb-order">
                        <div className="order-box">
                            <div className="order-image">
                                <div className="checkmark">
                                    <svg className="star" height="19" viewBox="0 0 19 19" width="19"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z">
                                        </path>
                                    </svg>
                                    <svg className="star" height="19" viewBox="0 0 19 19" width="19"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z">
                                        </path>
                                    </svg>
                                    <svg className="star" height="19" viewBox="0 0 19 19" width="19"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z">
                                        </path>
                                    </svg>
                                    <svg className="star" height="19" viewBox="0 0 19 19" width="19"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z">
                                        </path>
                                    </svg>
                                    <svg className="star" height="19" viewBox="0 0 19 19" width="19"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z">
                                        </path>
                                    </svg>
                                    <svg className="star" height="19" viewBox="0 0 19 19" width="19"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z">
                                        </path>
                                    </svg>
                                    <svg className="checkmark__check" height="36" viewBox="0 0 48 36" width="48"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M47.248 3.9L43.906.667a2.428 2.428 0 0 0-3.344 0l-23.63 23.09-9.554-9.338a2.432 2.432 0 0 0-3.345 0L.692 17.654a2.236 2.236 0 0 0 .002 3.233l14.567 14.175c.926.894 2.42.894 3.342.01L47.248 7.128c.922-.89.922-2.34 0-3.23">
                                        </path>
                                    </svg>
                                    <svg className="checkmark__background" height="115" viewBox="0 0 120 115" width="120"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M107.332 72.938c-1.798 5.557 4.564 15.334 1.21 19.96-3.387 4.674-14.646 1.605-19.298 5.003-4.61 3.368-5.163 15.074-10.695 16.878-5.344 1.743-12.628-7.35-18.545-7.35-5.922 0-13.206 9.088-18.543 7.345-5.538-1.804-6.09-13.515-10.696-16.877-4.657-3.398-15.91-.334-19.297-5.002-3.356-4.627 3.006-14.404 1.208-19.962C10.93 67.576 0 63.442 0 57.5c0-5.943 10.93-10.076 12.668-15.438 1.798-5.557-4.564-15.334-1.21-19.96 3.387-4.674 14.646-1.605 19.298-5.003C35.366 13.73 35.92 2.025 41.45.22c5.344-1.743 12.628 7.35 18.545 7.35 5.922 0 13.206-9.088 18.543-7.345 5.538 1.804 6.09 13.515 10.696 16.877 4.657 3.398 15.91.334 19.297 5.002 3.356 4.627-3.006 14.404-1.208 19.962C109.07 47.424 120 51.562 120 57.5c0 5.943-10.93 10.076-12.668 15.438z">
                                        </path>
                                    </svg>
                                </div>
                            </div>

                            <div className="order-contain">
                                <h3 className="theme-color">Order Success</h3>
                                <h5 className="text-content">Payment Is Successfully And Your Order Is On The Way</h5>
                                <h6>Transaction ID: 1708031724431131</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Cart Section Start --> */}
    <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
            <div className="row g-sm-4 g-3">
                <div className="col-xxl-9 col-lg-8">
                    <div className="cart-table order-table order-table-2">
                        <div className="table-responsive">
                            <table className="table mb-0">
                                <tbody>
                                    <tr>
                                        <td className="product-detail">
                                            <div className="product border-0">
                                                <a href="/Productdetails" className="product-image">
                                                    <img src="/assets/images/product1.webp"
                                                        className="img-fluid blur-up lazyload" alt="" />
                                                </a>
                                                <div className="product-detail">
                                                    <ul>
                                                        <li className="name">
                                                            <a href="/Productdetails">Double Chocolate</a>
                                                        </li>

                                                        <li className="text-content">Sold By: Fresho</li>

                                                        <li className="text-content">Quantity - 500 g</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="price">
                                            <h4 className="table-title text-content">Price</h4>
                                            <h6 className="theme-color">₹20.68</h6>
                                        </td>

                                        <td className="quantity">
                                            <h4 className="table-title text-content">Qty</h4>
                                            <h4 className="text-title">01</h4>
                                        </td>

                                        <td className="subtotal">
                                            <h4 className="table-title text-content">Total</h4>
                                            <h5>₹35.10</h5>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="product-detail">
                                            <div className="product border-0">
                                                <a href="/Productdetails" className="product-image">
                                                    <img src="/assets/images/product2.webp"
                                                        className="img-fluid blur-up lazyload" alt="" />
                                                </a>
                                                <div className="product-detail">
                                                    <ul>
                                                        <li className="name">
                                                            <a href="/Productdetails">Vanilla</a>
                                                        </li>

                                                        <li className="text-content">Sold By: Nesto</li>

                                                        <li className="text-content">Quantity - 250 g</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="price">
                                            <h4 className="table-title text-content">Price</h4>
                                            <h6 className="theme-color">₹15.14</h6>
                                        </td>

                                        <td className="quantity">
                                            <h4 className="table-title text-content">Qty</h4>
                                            <h4 className="text-title">01</h4>
                                        </td>

                                        <td className="subtotal">
                                            <h4 className="table-title text-content">Total</h4>
                                            <h5>₹52.95</h5>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="product-detail">
                                            <div className="product border-0">
                                                <a href="/Productdetails" className="product-image">
                                                    <img src="/assets/images/product3.webp"
                                                        className="img-fluid blur-up lazyload" alt="" />
                                                </a>
                                                <div className="product-detail">
                                                    <ul>
                                                        <li className="name">
                                                            <a href="/Productdetails">Mixed Berry</a>
                                                        </li>

                                                        <li className="text-content">Sold By: Basket</li>

                                                        <li className="text-content">Quantity - 750 g</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="price">
                                            <h4 className="table-title text-content">Price</h4>
                                            <h6 className="theme-color">₹29.22</h6>
                                        </td>

                                        <td className="quantity">
                                            <h4 className="table-title text-content">Qty</h4>
                                            <h4 className="text-title">01</h4>
                                        </td>

                                        <td className="subtotal">
                                            <h4 className="table-title text-content">Total</h4>
                                            <h5>₹67.36</h5>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-xxl-3 col-lg-4">
                    <div className="row g-4">
                        <div className="col-lg-12 col-sm-6">
                            <div className="summery-box">
                                <div className="summery-header">
                                    <h3>Price Details</h3>
                                    <h5 className="ms-auto theme-color">(3 Items)</h5>
                                </div>

                                <ul className="summery-contain">
                                    <li>
                                        <h4>Protein Total</h4>
                                        <h4 className="price">₹32.34</h4>
                                    </li>

                                    <li>
                                        <h4>Protein Saving</h4>
                                        <h4 className="price theme-color">₹12.23</h4>
                                    </li>

                                    <li>
                                        <h4>Coupon Discount</h4>
                                        <h4 className="price text-danger">₹6.27</h4>
                                    </li>
                                </ul>

                                <ul className="summery-total">
                                    <li className="list-total">
                                        <h4>Total (USD)</h4>
                                        <h4 className="price">₹19.28</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12 col-sm-6">
                            <div className="summery-box">
                                <div className="summery-header d-block">
                                    <h3>Shipping Address</h3>
                                </div>

                                <ul className="summery-contain pb-0 border-bottom-0">
                                    <li className="d-block">
                                        <h4>8424 James Lane South</h4>
                                        <h4 className="mt-2">San Francisco, CA 94080</h4>
                                    </li>

                                    <li className="pb-0">
                                        <h4>Expected Date Of Delivery:</h4>
                                        <h4 className="price theme-color">
                                            <a href="/Trackorder" className="text-danger">Track Order</a>
                                        </h4>
                                    </li>
                                </ul>

                                <ul className="summery-total">
                                    <li className="list-total border-top-0 pt-2">
                                        <h4 className="fw-bold">Oct 21, 2021</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="summery-box">
                                <div className="summery-header d-block">
                                    <h3>Payment Method</h3>
                                </div>

                                <ul className="summery-contain pb-0 border-bottom-0">
                                    <li className="d-block pt-0">
                                        <p className="text-content">Pay on Delivery (Cash/Card). Cash on delivery (COD)
                                            available. Card/Net banking acceptance subject to device availability.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Cart Section End --> */}

      <Footer />
    </>
  )
}

export default Placeorder