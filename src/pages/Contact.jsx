import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
        <Navbar/>
            {/* <!-- Breadcrumb Section Start --> */}
    <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-contain">
                        <h2>Contact Us</h2>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item active">Contact Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End -->/ */}

    {/* <!-- Contact Box Section Start --> */}
    <section className="contact-box-section">
        <div className="container-fluid-lg">
            <div className="row g-lg-5 g-3">
                <div className="col-lg-6">
                    <div className="left-sidebar-box">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-image">
                                    <img src="../assets/images/inner-page/contact-us.png"
                                        className="img-fluid blur-up lazyloaded" alt="img" />
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="contact-title">
                                    <h3>Get In Touch</h3>
                                </div>

                                <div className="contact-detail">
                                    <div className="row g-4">
                                        <div className="col-xxl-6 col-lg-12 col-sm-6">
                                            <div className="contact-detail-box">
                                                <div className="contact-icon">
                                                    <i className="fa-solid fa-phone"></i>
                                                </div>
                                                <div className="contact-detail-title">
                                                    <h4>Phone</h4>
                                                </div>

                                                <div className="contact-detail-contain">
                                                    <p>(+91) 997 877 7693</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xxl-6 col-lg-12 col-sm-6">
                                            <div className="contact-detail-box">
                                                <div className="contact-icon">
                                                    <i className="fa-solid fa-envelope"></i>
                                                </div>
                                                <div className="contact-detail-title">
                                                    <h4>Email</h4>
                                                </div>

                                                <div className="contact-detail-contain">
                                                    <p>hr@successinfotech.co.in</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="contact-detail-box">
                                                <div className="contact-icon">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                </div>
                                                <div className="contact-detail-title">
                                                    <h4>Office</h4>
                                                </div>

                                                <div className="contact-detail-contain">
                                                    <p>Rajhans Platinum Plaza, Adajan,410-412, Palanpur Canal Rd, newar New LP Savani School,Surat,Gujarat 395009</p>
                                                </div>
                                            </div>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="title d-xxl-none d-block">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="right-sidebar-box">
                        <div className="row">
                            <div className="col-xxl-6 col-lg-12 col-sm-6">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label for="exampleFormControlInput" className="form-label">First Name</label>
                                    <div className="custom-input">
                                        <input type="text" className="form-control" id="exampleFormControlInput"
                                            placeholder="Enter First Name" />
                                        <i className="fa-solid fa-user"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-lg-12 col-sm-6">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                                    <div className="custom-input">
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                            placeholder="Enter Last Name" />
                                        <i className="fa-solid fa-user"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-lg-12 col-sm-6">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label for="exampleFormControlInput2" className="form-label">Email Address</label>
                                    <div className="custom-input">
                                        <input type="email" className="form-control" id="exampleFormControlInput2"
                                            placeholder="Enter Email Address" />
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-lg-12 col-sm-6">
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

                            <div className="col-12">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label for="exampleFormControlTextarea" className="form-label">Message</label>
                                    <div className="custom-textarea">
                                        <textarea className="form-control" id="exampleFormControlTextarea"
                                            placeholder="Enter Your Message" rows="6"></textarea>
                                        <i className="fa-solid fa-message"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-animation btn-md fw-bold ms-auto">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Contact Box Section End --> */}

    {/* <!-- Map Section Start --> */}
    <section className="map-section">
        <div className="container-fluid p-0">
            <div className="map-box">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d17881.57658509464!2d72.76882229659682!3d21.204946275636903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRajhans%20Platinum%20Plaza%2C%20Adajan%2C410-412%2C%20Palanpur%20Canal%20Road%2C%20near%20New%20LP%20Savani%20School%2CSurat%2CGujarat%20395009!5e1!3m2!1sen!2sin!4v1764061129262!5m2!1sen!2sin"
                    style={{border:'0px'}} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
    {/* <!-- Map Section End --> */}
        <Footer/>
    </>
  )
}

export default Contact