import React from 'react'

const Footer = () => {
  return (
    <>
  <footer className="section-t-space">
        <div className="container-fluid-lg">
            <div className="service-section">
                <div className="row g-3">
                    <div className="col-12">
                        <div className="service-contain">
                            <div className="service-box">
                                <div className="service-image">
                                    <img src="../assets/svg/product.svg" className="blur-up lazyload" alt="" />
                                </div>

                                <div className="service-detail">
                                    <h5>Every Fresh Products</h5>
                                </div>
                            </div>

                            <div className="service-box">
                                <div className="service-image">
                                    <img src="../assets/svg/delivery.svg" className="blur-up lazyload" alt="" />
                                </div>

                                <div className="service-detail">
                                    <h5>Free Delivery For Order Over ₹50</h5>
                                </div>
                            </div>

                            <div className="service-box">
                                <div className="service-image">
                                    <img src="../assets/svg/discount.svg" className="blur-up lazyload" alt="" />
                                </div>

                                <div className="service-detail">
                                    <h5>Daily Mega Discounts</h5>
                                </div>
                            </div>

                            <div className="service-box">
                                <div className="service-image">
                                    <img src="../assets/svg/market.svg" className="blur-up lazyload" alt="" />
                                </div>

                                <div className="service-detail">
                                    <h5>Best Price On The Market</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-footer section-b-space section-t-space">
                <div className="row g-md-4 g-3">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="footer-logo">
                            <div className="theme-logo">
                                <a href="/">
                                    <img src="/assets/images/evercorelogo.png" className="blur-up lazyload" alt="" style={{width:'100px'}}/>
                                </a>
                            </div>

                            <div className="footer-logo-contain">
                                <p>Your trusted source for clean, high-quality protein.</p>

                                <ul className="address">
                                    <li>
                                        <i data-feather="home"></i>
                                        <a href="javascript:void(0)">1418 Riverwood Drive, CA 96052, US</a>
                                    </li>
                                    <li>
                                        <i data-feather="mail"></i>
                                        <a href="javascript:void(0)">support@evercore.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div className="footer-title">
                            <h4>Categories</h4>
                        </div>

                        <div className="footer-contain">
                            <ul>
                                <li>
                                    <a href="/Shop" className="text-content">Biozyme Performance Whey</a>
                                </li>
                                <li>
                                    <a href="/Shop" className="text-content">Biozyme Whey PR</a>
                                </li>
                                <li>
                                    <a href="/Shop" className="text-content">Raw Whey Protein</a>
                                </li>
                                <li>
                                    <a href="/Shop" className="text-content">High Protein Muesli</a>
                                </li>
                                <li>
                                    <a href="/Shop" className="text-content">Biozyme Iso-Zero</a>
                                </li>
                                <li>
                                    <a href="/Shop" className="text-content">Protein Bars</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl col-lg-2 col-sm-3">
                        <div className="footer-title">
                            <h4>Useful Links</h4>
                        </div>

                        <div className="footer-contain">
                            <ul>
                                <li>
                                    <a href="/" className="text-content">Home</a>
                                </li>
                                <li>
                                    <a href="/Shop" className="text-content">Shop</a>
                                </li>
                                <li>
                                    <a href="/Aboutus" className="text-content">About Us</a>
                                </li>
                                <li>
                                    <a href="/Faq" className="text-content">FAQ</a>
                                </li>
                                <li>
                                    <a href="/Blog" className="text-content">Blog</a>
                                </li>
                                <li>
                                    <a href="/Contact" className="text-content">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-2 col-sm-3">
                        <div className="footer-title">
                            <h4>Help Center</h4>
                        </div>

                        <div className="footer-contain">
                            <ul>
                     
                                <li>
                                    <a href="/Useraccount" className="text-content">Your Account</a>
                                </li>
                                <li>
                                    <a href="/Trackorder" className="text-content">Track Order</a>
                                </li>

                                <li>
                                    <a href="/Privacypolicy" className="text-content">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="/Termsandcondition" className="text-content">Terms & Condition</a>
                                </li>
                                <li>
                                    <a href="/Returnpolicy" className="text-content">Return Policy</a>
                                </li>
                                <li>
                                    <a href="/Shippingpolicy" className="text-content">Shipping Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="footer-title">
                            <h4>Contact Us</h4>
                        </div>

                        <div className="footer-contact">
                            <ul>
                                <li>
                                    <div className="footer-number">
                                        <i data-feather="phone"></i>
                                        <div className="contact-number">
                                            <h6 className="text-content">Hotline 24/7 :</h6>
                                            <h5>+91 888 104 2340</h5>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="footer-number">
                                        <i data-feather="mail"></i>
                                        <div className="contact-number">
                                            <h6 className="text-content">Email Address :</h6>
                                            <h5>evercore@hotmail.com</h5>
                                        </div>
                                    </div>
                                </li>

                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sub-footer section-small-space">
                <div className="reserve">
                    <h6 className="text-content">Copyright  © 2025 Evercore All rights reserved. Proudly Powered By<a href='https://successinnovativetechnologiespvtltd.com/' target='_blank' style={{marginLeft:"5px"}}>Success Innovative Technologies Pvt. Ltd.</a></h6>
                </div>


                <div className="social-link">
                    <h6 className="text-content">Stay connected :</h6>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://in.pinterest.com/" target="_blank">
                                <i className="fa-brands fa-pinterest-p"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer