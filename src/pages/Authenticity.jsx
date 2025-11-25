import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Authenticity() {
  return (
    <div>
        <Navbar />
          <section className="contact-box-section">
        <div className="container-fluid-lg">
            <div className="row g-lg-5 g-3">
                <div className="col-lg-6">
                      <div className="title title-flex">
                        <div>
                            <h2>How to Authenticate?</h2>
                            <span className="title-leaf">
                                <svg className="icon-width">
                                    <use href="../assets/svg/leaf.svg#leaf"></use>
                                </svg>
                            </span>
                            <p>Watch how to authenticate a muscleblaze product</p>
                        </div>
                      
                    </div>
                    <div className="left-sidebar-box">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-image">
                                    <img src="../assets/images/inner-page/contact-us.png"
                                        className="img-fluid blur-up lazyloaded" alt="img" />
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                  
                    <div className="right-sidebar-box">
                         <h2 style={{marginBottom:'10px'}}>Check Authenticity</h2>
                         <p>Know if your MuscleBlaze product is authentic</p>
                        <div className="row">
                            <div className="col-xxl-6 col-lg-12 col-sm-6">

                                <div className="mb-md-4 mb-3 custom-form">
                                    <label for="exampleFormControlInput" className="form-label">Enter Unique code</label>
                                    <div className="custom-input">
                                        <input type="text" className="form-control" id="exampleFormControlInput"
                                            placeholder="Enter Unique code" />
                                        <i className="fa-solid fa-user"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-lg-12 col-sm-6">

                                <div className="mb-md-4 mb-3 custom-form">
                                    <label for="exampleFormControlInput" className="form-label">Check Unique code here</label>
                                    <div className="custom-input">
                                        <img src="/assets/images/uniquecode.png" alt="img" style={{width:'115px'}}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label for="exampleFormControlInput2" className="form-label">Email Address</label>
                                    <div className="custom-input">
                                        <input type="email" className="form-control" id="exampleFormControlInput2"
                                            placeholder="Enter Email Address" />
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label for="exampleFormControlInput3" className="form-label">Phone Number</label>
                                    <div className="custom-input">
                                        <input type="tel" className="form-control" id="exampleFormControlInput3"
                                            placeholder="Enter Your Phone Number" maxlength="10" oninput="javascript: if (this.value.length > this.maxLength) this.value =
                                            this.value.slice(0, this.maxLength);" />
                                        <i className="fa-solid fa-mobile-screen-button"></i>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                        <button className="btn btn-animation btn-md fw-bold ms-auto">Check Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <section className="fresh-vegetable-section section-lg-space">
        <div className="container-fluid-lg">
            <div className="row gx-xl-5 gy-xl-0 g-3 ratio_148_1">
                

                <div className="col-xl-6 col-12">
                    <div className="fresh-contain p-center-left">
                        <div>
                            <div className="review-title">
                                <h2>The authentication factor: An effort to put your mind at ease</h2>
                            </div>

                            <div className="delivery-list">
                                <p className="text-content " style={{textAlign:'justify'}} >
                                   Amidst various protein supplements of various brands, identifying a true and original product is a tough nut to crack. When you consume these fake supplements, you won’t see any positive results and sometimes you might face health issues. So consuming original supplements is the best. Fake supplements also result in lost trust. We understand the trust you put in us and thus to eliminate the chances of receiving a fake or duplicate product, we initiated a product authenticity mechanism. With our every product, you get a unique authentication code inside the pack which you can use to verify your purchase. You can SMS the code or log in to our website and enter the code to check whether the product you purchased is manufactured by us or not. This saves you from duplicate products and keeps your trust intact.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-12">
                    <div className="row g-sm-4 g-2">
                     <div className="col-12">
                            <div className="fresh-image-2">
                              <div>
                                <img
                                  src="/assets/images/prd_3977707-MuscleBlaze.webp"
                                  alt="Fresh Image"
                                  className="resimg"
                                  width={'80%'}
                                />
                              </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </div>
  )
}
