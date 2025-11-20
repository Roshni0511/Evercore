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
                                <h4>About Us</h4>
                                <h2>Your Trusted Online Shopping Destination</h2>
                            </div>

                            <div className="delivery-list">
                                <p className="text-content " style={{textAlign:'justify'}} >
                                    Founded in 2019, our journey began with a simple vision — to make quality products accessible and affordable for everyone.
                                     What started as a small online store has now grown into a trusted eCommerce brand serving thousands of happy customers across the country.
                                     <br /><br />
                                     We believe shopping should be easy, enjoyable, and reliable. That’s why we handpick every product with care,
                                     ensuring the best quality and unbeatable value. From everyday essentials to the latest trends,
                                     we constantly update our collection with new arrivals every month, keeping your shopping experience fresh and exciting.
                                     <br /><br />
                                     Our dedicated team works 24/7 to bring innovation, style, and convenience to your doorstep.
                                     With secure payment options, fast delivery, and a responsive support team,
                                     we’re not just an online store — we’re your trusted shopping partner.
                                </p>
                                <ul className="delivery-box">
                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/delivery.svg" className="blur-up lazyload" alt="" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Free delivery for all orders</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/leaf.svg" className="blur-up lazyload" alt="" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Top Quality Products</h5>
                                            </div>
                                        </div>
                                    </li>
                                            
                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/delivery.svg" className="blur-up lazyload" alt="" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Genuine & Authentic Items</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="../assets/svg/3/leaf.svg" className="blur-up lazyload" alt="" />
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Trusted & Verified</h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
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