import React, { useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'

const Checkout = () => {
      const [deliveryType, setDeliveryType] = useState("standard");
  return (
    <>
     <Navbar />
       {/* <!-- Breadcrumb Section Start --> */}
    <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-contain">
                        <h2>Checkout</h2>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item active">Checkout</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Checkout section Start --> */}
    <section className="checkout-section-2 section-b-space">
        <div className="container-fluid-lg">
            <div className="row g-sm-4 g-3">
                <div className="col-lg-8">
                    <div className="left-sidebar-checkout">
                        <div className="checkout-detail-box">
                            <ul>
                                <li>
                                    <div className="checkout-icon">
                                       <lord-icon 
    target=".nav-item"
    src="https://cdn.lordicon.com/ggihhudh.json"
    trigger="loop-on-hover"
    colors="primary:#0d6efd,secondary:#0d6efd,tertiary:#0d6efd"
    className="lord-icon">
</lord-icon>

                                    </div>
                                    <div className="checkout-box">
                                        <div className="checkout-title">
                                            <h4>Delivery Address</h4>
                                        </div>
                                        
                                        <div className="checkout-detail">
                                            <div className="row g-4">
                                                <div className="col-xxl-6 col-lg-12 col-md-6">
                                                    
                                                    <div className="delivery-address-box">
                                                        <div className="d-flex justify-content-end">
                                                                 <h4 className="mb-3"> <a href="javascript:void(0)"
                                                                 data-bs-toggle="modal" data-bs-target="#editProfile">Edit</a>
                                                             </h4>
                                                        </div>

                                                        <div>
                                                           
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="jack"
                                                                    id="flexRadioDefault1" />
                                                            </div>

                                                            <div className="label">
                                                                <label>Home</label>
                                                            </div>

                                                            <ul className="delivery-address-detail">
                                                                <li>
                                                                    <h4 className="fw-500">Jack Jennas</h4>
                                                                </li>

                                                                <li>
                                                                    <p className="text-content"><span
                                                                            className="text-title">Address
                                                                            : </span>8424 James Lane South San
                                                                        Francisco, CA 94080</p>
                                                                </li>

                                                                <li>
                                                                    <h6 className="text-content"><span
                                                                            className="text-title">Pin Code
                                                                            :</span> +380</h6>
                                                                </li>

                                                                <li>
                                                                    <h6 className="text-content mb-0"><span
                                                                            className="text-title">Phone
                                                                            :</span> + 380 (0564) 53 - 29 - 68</h6>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xxl-6 col-lg-12 col-md-6">
                                                    <div className="delivery-address-box">
                                                         <div className="d-flex justify-content-end">
                                                                 <h4 className="mb-3"> <a href="javascript:void(0)"
                                                                 data-bs-toggle="modal" data-bs-target="#editProfile">Edit</a>
                                                             </h4>
                                                        </div>
                                                        <div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="jack"
                                                                    id="flexRadioDefault2" checked="checked"/>
                                                            </div>

                                                            <div className="label">
                                                                <label>Office</label>
                                                            </div>

                                                            <ul className="delivery-address-detail">
                                                                <li>
                                                                    <h4 className="fw-500">Jack Jennas</h4>
                                                                </li>

                                                                <li>
                                                                    <p className="text-content"><span
                                                                            className="text-title">Address
                                                                            :</span>Nakhimovskiy R-N / Lastovaya Ul.,
                                                                        bld. 5/A, appt. 12
                                                                    </p>
                                                                </li>

                                                                <li>
                                                                    <h6 className="text-content"><span
                                                                            className="text-title">Pin Code :</span>
                                                                        +380</h6>
                                                                </li>

                                                                <li>
                                                                    <h6 className="text-content mb-0"><span
                                                                            className="text-title">Phone
                                                                            :</span> + 380 (0564) 53 - 29 - 68</h6>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="list-unstyled">
      <div className="checkout-icon mb-3">
        <lord-icon
          target=".nav-item"
          src="https://cdn.lordicon.com/oaflahpk.json"
          trigger="loop-on-hover"
           colors="primary:#0d6efd,secondary:#0d6efd,tertiary:#0d6efd"
          className="lord-icon"
        ></lord-icon>
      </div>

      <div className="checkout-box border p-4 rounded shadow-sm">
        <div className="checkout-title mb-4">
          <h4 className="fw-bold">Delivery Option</h4>
        </div>

        <div className="checkout-detail">
          <div className="row g-4">
            {/* Standard Delivery Option */}
            <div className="col-xxl-6 col-md-6">
              <div className="delivery-option">
                <div className="delivery-category">
                  <div className="shipment-detail">
                    <div className="form-check custom-form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="delivery"
                        id="standard"
                        value="standard"
                        checked={deliveryType === "standard"}
                        onChange={(e) => setDeliveryType(e.target.value)}
                      />
                      <label className="form-check-label ms-2" htmlFor="standard">
                        Standard Delivery Option
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Delivery Option */}
            <div className="col-xxl-6 col-md-6">
              <div className="delivery-option">
                <div className="delivery-category">
                  <div className="shipment-detail">
                    <div className="form-check mb-0 custom-form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="delivery"
                        id="future"
                        value="future"
                        checked={deliveryType === "future"}
                        onChange={(e) => setDeliveryType(e.target.value)}
                      />
                      <label className="form-check-label ms-2" htmlFor="future">
                        Schedule Delivery Option
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </div>
    </li>

                                <li>
                                    <div className="checkout-icon">
                                        <lord-icon target=".nav-item" src="https://cdn.lordicon.com/qmcsqnle.json"
                                            trigger="loop-on-hover"    colors="primary:#0d6efd,secondary:#0d6efd,tertiary:#0d6efd"
                                            className="lord-icon">
                                        </lord-icon>
                                    </div>
                                    <div className="checkout-box">
                                        <div className="checkout-title">
                                            <h4>Payment Option</h4>
                                        </div>

                                        <div className="checkout-detail">
                                            <div className="accordion accordion-flush custom-accordion"
                                                id="accordionFlushExample">
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="flush-headingFour">
                                                        <div className="accordion-button collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseFour">
                                                            <div className="custom-form-check form-check mb-0">
                                                                <label className="form-check-label" for="cash"><input
                                                                        className="form-check-input mt-0" type="radio"
                                                                        name="flexRadioDefault" id="cash" checked /> Cash
                                                                    On Delivery</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="flush-collapseFour"
                                                        className="accordion-collapse collapse show"
                                                        data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">
                                                            <p className="cod-review">Pay digitally with SMS Pay
                                                                Link. Cash may not be accepted in COVID restricted
                                                                areas.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="flush-headingOne">
                                                        <div className="accordion-button collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseOne">
                                                            <div className="custom-form-check form-check mb-0">
                                                                <label className="form-check-label" for="credit"><input
                                                                        className="form-check-input mt-0" type="radio"
                                                                        name="flexRadioDefault" id="credit" />
                                                                    Credit or Debit Card</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">
                                                            <div className="row g-2">
                                                                <div className="col-12">
                                                                    <div className="payment-method">
                                                                        <div
                                                                            className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                                                            <input type="text" className="form-control"
                                                                                id="credit2"
                                                                                placeholder="Enter Credit & Debit Card Number" />
                                                                            <label for="credit2">Enter Credit & Debit
                                                                                Card Number</label>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-xxl-4">
                                                                    <div
                                                                        className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                                                        <input type="text" className="form-control"
                                                                            id="expiry" placeholder="Enter Expiry Date" />
                                                                        <label for="expiry">Expiry Date</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-xxl-4">
                                                                    <div
                                                                        className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                                                        <input type="text" className="form-control" id="cvv"
                                                                            placeholder="Enter CVV Number" />
                                                                        <label for="cvv">CVV Number</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-xxl-4">
                                                                    <div
                                                                        className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                                                        <input type="password" className="form-control"
                                                                            id="password" placeholder="Enter Password" />
                                                                        <label for="password">Password</label>
                                                                    </div>
                                                                </div>

                                                                <div className="button-group mt-0">
                                                                    <ul>
                                                                        <li>
                                                                            <button
                                                                                className="btn btn-light shopping-button">Cancel</button>
                                                                        </li>

                                                                        <li>
                                                                            <button className="btn btn-animation">Use This
                                                                                Card</button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="flush-headingTwo">
                                                        <div className="accordion-button collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseTwo">
                                                            <div className="custom-form-check form-check mb-0">
                                                                <label className="form-check-label" for="banking"><input
                                                                        className="form-check-input mt-0" type="radio"
                                                                        name="flexRadioDefault" id="banking" />Net
                                                                    Banking</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">
                                                            <h5 className="text-uppercase mb-4">Select Your Bank
                                                            </h5>
                                                            <div className="row g-2">
                                                                <div className="col-md-6">
                                                                    <div className="custom-form-check form-check">
                                                                        <input className="form-check-input mt-0"
                                                                            type="radio" name="flexRadioDefault"
                                                                            id="bank1" />
                                                                        <label className="form-check-label"
                                                                            for="bank1">Industrial & Commercial
                                                                            Bank</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="custom-form-check form-check">
                                                                        <input className="form-check-input mt-0"
                                                                            type="radio" name="flexRadioDefault"
                                                                            id="bank2" />
                                                                        <label className="form-check-label"
                                                                            for="bank2">Agricultural Bank</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="custom-form-check form-check">
                                                                        <input className="form-check-input mt-0"
                                                                            type="radio" name="flexRadioDefault"
                                                                            id="bank3"/>
                                                                        <label className="form-check-label" for="bank3">Bank
                                                                            of America</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="custom-form-check form-check">
                                                                        <input className="form-check-input mt-0"
                                                                            type="radio" name="flexRadioDefault"
                                                                            id="bank4" />
                                                                        <label className="form-check-label"
                                                                            for="bank4">Construction Bank Corp.</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="custom-form-check form-check">
                                                                        <input className="form-check-input mt-0"
                                                                            type="radio" name="flexRadioDefault"
                                                                            id="bank5" />
                                                                        <label className="form-check-label" for="bank5">HSBC
                                                                            Holdings</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="custom-form-check form-check">
                                                                        <input className="form-check-input mt-0"
                                                                            type="radio" name="flexRadioDefault"
                                                                            id="bank6" />
                                                                        <label className="form-check-label"
                                                                            for="bank6">JPMorgan Chase & Co.</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-12">
                                                                    <div className="select-option">
                                                                        <div className="form-floating theme-form-floating">
                                                                            <select
                                                                                className="form-select theme-form-select">
                                                                                <option value="hsbc">HSBC Holdings
                                                                                </option>
                                                                                <option value="loyds">Lloyds Banking
                                                                                    Group</option>
                                                                                <option value="natwest">Nat West Group
                                                                                </option>
                                                                                <option value="Barclays">Barclays
                                                                                </option>
                                                                                <option value="other">Others Bank
                                                                                </option>
                                                                            </select>
                                                                            <label>Select Other Bank</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="flush-headingThree">
                                                        <div className="accordion-button collapsed"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseThree">
                                                            <div className="custom-form-check form-check mb-0">
                                                                <label className="form-check-label" for="wallet"><input
                                                                        className="form-check-input mt-0" type="radio"
                                                                        name="flexRadioDefault" id="wallet" />MD Mart
                                                                    Wallet</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFlushExample">
                                                        <div className="accordion-body">
                                                            <h5 className="text-uppercase mb-4">Select Your Wallet
                                                            </h5>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="custom-form-check form-check">
                                                                        <label className="form-check-label"
                                                                            for="amazon"><input
                                                                                className="form-check-input mt-0"
                                                                                type="radio" name="flexRadioDefault"
                                                                                id="amazon" />Amazon Pay</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="custom-form-check form-check">
                                                                        <input className="form-check-input mt-0"
                                                                            type="radio" name="flexRadioDefault"
                                                                            id="gpay" />
                                                                        <label className="form-check-label"
                                                                            for="gpay">Google Pay</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="custom-form-check form-check">
                                                                        <input className="form-check-input mt-0"
                                                                            type="radio" name="flexRadioDefault"
                                                                            id="airtel" />
                                                                        <label className="form-check-label"
                                                                            for="airtel">Airtel Money</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="custom-form-check form-check">
                                                                        <input className="form-check-input mt-0"
                                                                            type="radio" name="flexRadioDefault"
                                                                            id="paytm" />
                                                                        <label className="form-check-label"
                                                                            for="paytm">Paytm Pay</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="custom-form-check form-check">
                                                                        <input className="form-check-input mt-0"
                                                                            type="radio" name="flexRadioDefault"
                                                                            id="jio" />
                                                                        <label className="form-check-label" for="jio">JIO
                                                                            Money</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="custom-form-check form-check">
                                                                        <input className="form-check-input mt-0"
                                                                            type="radio" name="flexRadioDefault"
                                                                            id="free" />
                                                                        <label className="form-check-label"
                                                                            for="free">Freecharge</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="right-side-summery-box">
                        <div className="summery-box-2">
                            <div className="summery-header">
                                <h3>Order Summery</h3>
                            </div>

                            <ul className="summery-contain">
                                <li>
                                    <img src="/assets/images/product1.webp"
                                        className="img-fluid blur-up lazyloaded checkout-image" alt="img" />
                                    <h4>Double Chocolate <span>X 1</span></h4>
                                    <h4 className="price">₹32.34</h4>
                                </li>

                                <li>
                                    <img src="/assets/images/product2.webp"
                                        className="img-fluid blur-up lazyloaded checkout-image" alt="img" />
                                    <h4>Vanilla Essential <span>X 3</span></h4>
                                    <h4 className="price">₹12.23</h4>
                                </li>

                                <li>
                                    <img src="/assets/images/product3.webp"
                                        className="img-fluid blur-up lazyloaded checkout-image" alt="img" />
                                    <h4>Mixed Berry <span>X 2</span></h4>
                                    <h4 className="price">₹18.27</h4>
                                </li>

                                <li>
                                    <img src="/assets/images/product4.webp"
                                        className="img-fluid blur-up lazyloaded checkout-image" alt="img" />
                                    <h4>Chocolate Peanut Butter <span>X 1</span></h4>
                                    <h4 className="price">₹26.90</h4>
                                </li>

                                <li>
                                    <img src="/assets/images/product5.webp"
                                        className="img-fluid blur-up lazyloaded checkout-image" alt="img" />
                                    <h4>Vanilla Essential <span>X 1</span></h4>
                                    <h4 className="price">₹19.28</h4>
                                </li>

                                <li>
                                    <img src="/assets/images/product3.webp"
                                        className="img-fluid blur-up lazyloaded checkout-image" alt="img" />
                                    <h4>Mixed Berry <span>X 2</span></h4>
                                    <h4 className="price">₹29.69</h4>
                                </li>
                            </ul>

                            <ul className="summery-total">
                                <li>
                                    <h4>Subtotal</h4>
                                    <h4 className="price">₹111.81</h4>
                                </li>

                                <li>
                                    <h4>Shipping</h4>
                                    <h4 className="price">₹8.90</h4>
                                </li>

                                <li>
                                    <h4>Tax</h4>
                                    <h4 className="price">₹29.498</h4>
                                </li>

                                <li>
                                    <h4>Coupon/Code</h4>
                                    <h4 className="price">₹-23.10</h4>
                                </li>

                                <li className="list-total">
                                    <h4>Total (USD)</h4>
                                    <h4 className="price">₹19.28</h4>
                                </li>
                            </ul>
                        </div>

                        <div className="checkout-offer">
                            <div className="offer-title">
                                <div className="offer-icon">
                                    <img src="../assets/images/inner-page/offer.svg" className="img-fluid" alt="img" />
                                </div>
                                <div className="offer-name">
                                    <h6>Available Offers</h6>
                                </div>
                            </div>

                            <ul className="offer-detail">
                                <li>
                                    <p>Combo: BB Royal Almond/Badam Californian, Extra Bold 100 gm...</p>
                                </li>
                                <li>
                                    <p>combo: Royal Cashew Californian, Extra Bold 100 gm + BB Royal Honey 500 gm</p>
                                </li>
                            </ul>
                        </div>

                       <a href='/Placeorder' style={{color:'White'}}> <button className="pro-acc-logout-btn  text-white btn-md w-100 mt-4 fw-bold"> Place Order</button></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Checkout section End --> */}

     <Footer />

      {/* <!-- Edit Profile Start --> */}
    <div className="modal fade theme-modal" id="editProfile" tabindex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel2">Edit Address</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row g-4">
                        

                     

                        <div className="col-12">
                            <form>
                                <div className="form-floating theme-form-floating">
                                    <input type="text" className="form-control" id="address1"
                                        value="8424 James Lane South San Francisco" />
                                    <label for="address1">Add Address</label>
                                </div>
                            </form>
                        </div>

                        <div className="col-xxl-6">
                            <form>
                                <div className="form-floating theme-form-floating">
                                    <input type="text" className="form-control" id="address3" value="94080" />
                                    <label for="address3">Pin Code</label>
                                </div>
                            </form>
                        </div>
                           <div className="col-xxl-6">
                            <form>
                                <div className="form-floating theme-form-floating">
                                    <input className="form-control" type="tel" value="4567891234" name="mobile" id="mobile"
                                        maxlength="10" oninput="javascript: if (this.value.length > this.maxLength) this.value =
                                            this.value.slice(0, this.maxLength);" />
                                    <label for="mobile">Phone</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-animation btn-md fw-bold"
                        data-bs-dismiss="modal">Close</button>
                    <button type="button" data-bs-dismiss="modal"
                        className="btn theme-bg-color btn-md fw-bold text-light">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Edit Profile End --> */}
    </>
  )
}

export default Checkout