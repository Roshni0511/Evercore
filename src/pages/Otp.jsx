import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Otp = () => {
  return (
    <>
    <Navbar />
         {/* <!-- Breadcrumb Section Start --> */}
    <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-contain">
                        <h2>OTP</h2>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item active">OTP</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- log in section start --> */}
    <section className="log-in-section otp-section section-b-space">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                    <div className="image-contain">
                        <img src="../assets/images/inner-page/otp.png" className="img-fluid" alt="" />
                    </div>
                </div>

                <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                    <div className="d-flex align-items-center justify-content-center h-100">
                        <div className="log-in-box">
                            <div className="log-in-title">
                                <h3 className="text-title">Please enter the one time password to verify your account</h3>
                                <h5 className="text-content">A code has been sent to <span>*******9897</span></h5>
                            </div>

                            <div id="otp" className="inputs d-flex flex-row justify-content-center">
                                <input className="text-center form-control rounded" type="text" id="first" maxlength="1"
                                    placeholder="0" /> 
                                <input className="text-center form-control rounded" type="text" id="second" maxlength="1"
                                    placeholder="0" />
                                <input className="text-center form-control rounded" type="text" id="third" maxlength="1"
                                    placeholder="0" />
                                <input className="text-center form-control rounded" type="text" id="fourth" maxlength="1"
                                    placeholder="0" />
                                <input className="text-center form-control rounded" type="text" id="fifth" maxlength="1"
                                    placeholder="0" />
                                <input className="text-center form-control rounded" type="text" id="sixth" maxlength="1"
                                    placeholder="0" />
                            </div>

                            <div className="send-box pt-4">
                                <h5>Didn't get the code? <a href="javascript:void(0)" className="theme-color fw-bold">Resend
                                        It</a></h5>
                            </div>

                            <button href="/" className="btn btn-animation w-100 mt-3"
                                type="submit">Validate</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
        
    </section>
    {/* <!-- log in section end --> */}
    <Footer />
   
    </>
  )
}

export default Otp