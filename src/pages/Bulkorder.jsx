import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Bulkorder = () => {
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
                                <img src="../assets/images/grocery/banner/1.jpg"
                                    className="img-fluid bg-img blur-up lazyload" alt="" />
                              
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
                                  src="../assets/images/Img1.jpg"
                                  alt="Fresh Image"
                                  className="resimg"
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
                                                <img src="../assets/svg/3/delivery.svg" className="blur-up lazyload" alt="" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Buy at Wholesale rates</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/leaf.svg" className="blur-up lazyload" alt="" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Genuine products directly from Company</h5>
                                            </div>
                                        </div>
                                    </li>
                                            
                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/delivery.svg" className="blur-up lazyload" alt="" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Start as low as Rs. 56,000</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/leaf.svg" className="blur-up lazyload" alt="" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Huge savings at Checkout</h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                   <h3 style={{marginTop:'20px'}}>Click the buttons below to fill up the form, and our team will reach out to you soon.</h3>
                                   <div style={{display:'flex',margin:'20px 0px'}}>
                                    <div style={{marginRight:'10px'}}>
                                        <button class="btn btn-furniture btn-sm mend-auto">Trainer <i class="fa-solid fa-arrow-right icon"></i></button>
                                    </div>
                                    <div>
                                        <button class="btn btn-furniture btn-sm mend-auto">Retailer <i class="fa-solid fa-arrow-right icon"></i></button>
                                    </div>
                                   </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <Footer />
    </>
  )
}

export default Bulkorder