import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Trackorder = () => {
  return (
    <>
     <Navbar />
         {/* <!-- Breadcrumb Section Start --> */}
    <section className="breadcrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-contain">
                        <h2>Order Tracking</h2>
                        <nav>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="/">
                                        <i className="fa-solid fa-house"></i>
                                    </a>
                                </li>
                                <li className="breadcrumb-item active">Order Tracking</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Order Detail Section Start --> */}
    <section className="order-detail">
        <div className="container-fluid-lg">
            <div className="row g-sm-4 g-3">
                <div className="col-xxl-3 col-xl-4 col-lg-6">
                    <div className="order-image">
                        <img src="/assets/images/prd_3977707-MuscleBlaze.webp" className="img-fluid blur-up lazyload" alt="" />
                    </div>
                </div>

                <div className="col-xxl-9 col-xl-8 col-lg-6">
                    <div className="row g-sm-4 g-3">
                        <div className="col-xl-4 col-sm-6">
                            <div className="order-details-contain">
                                <div className="order-tracking-icon">
                                    <i data-feather="package" className="text-content"></i>
                                </div>

                                <div className="order-details-name">
                                    <h5 className="text-content">Tracking Code</h5>
                                    <h2 className="theme-color">MH4285UY</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6">
                            <div className="order-details-contain">
                                <div className="order-tracking-icon">
                                    <i data-feather="truck" className="text-content"></i>
                                </div>

                                <div className="order-details-name">
                                    <h5 className="text-content">Service</h5>
                                    <img src="../assets/images/inner-page/brand-name.svg"
                                        className="img-fluid blur-up lazyload" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6">
                            <div className="order-details-contain">
                                <div className="order-tracking-icon">
                                    <i className="text-content" data-feather="info"></i>
                                </div>

                                <div className="order-details-name">
                                    <h5 className="text-content">Package Info</h5>
                                    <h4>Letter</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6">
                            <div className="order-details-contain">
                                <div className="order-tracking-icon">
                                    <i className="text-content" data-feather="crosshair"></i>
                                </div>

                                <div className="order-details-name">
                                    <h5 className="text-content">From</h5>
                                    <h4>Adajan,surat</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6">
                            <div className="order-details-contain">
                                <div className="order-tracking-icon">
                                    <i className="text-content" data-feather="map-pin"></i>
                                </div>

                                <div className="order-details-name">
                                    <h5 className="text-content">Destination</h5>
                                    <h4>Laxmi Narayan 24</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6">
                            <div className="order-details-contain">
                                <div className="order-tracking-icon">
                                    <i className="text-content" data-feather="calendar"></i>
                                </div>

                                <div className="order-details-name">
                                    <h5 className="text-content">Estimated Time</h5>
                                    <h4>7 Frb, 05:05pm</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 overflow-hidden">
                            <ol className="progtrckr">
                                <li className="progtrckr-done">
                                    <h5>Order Processing</h5>
                                    <h6>05:43 AM</h6>
                                </li>
                                <li className="progtrckr-done">
                                    <h5>Pre-Production</h5>
                                    <h6>01:21 PM</h6>
                                </li>
                                <li className="progtrckr-done">
                                    <h5>In Production</h5>
                                    <h6>Processing</h6>
                                </li>
                                <li className="progtrckr-todo">
                                    <h5>Shipped</h5>
                                    <h6>Pending</h6>
                                </li>
                                <li className="progtrckr-todo">
                                    <h5>Delivered</h5>
                                    <h6>Pending</h6>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Order Detail Section End --> */}

    {/* <!-- Order Table Section Start --> */}
    <section className="order-table-section section-b-space">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table order-tab-table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Order Placed</td>
                                    <td>26 Sep 2021</td>
                                    <td>12:00 AM</td>
                                    <td>Surat, India</td>
                                </tr>

                                <tr>
                                    <td>Preparing to Ship</td>
                                    <td>03 Oct 2021</td>
                                    <td>12:00 AM</td>
                                    <td>Surat, India</td>
                                </tr>

                                <tr>
                                    <td>Shipped</td>
                                    <td>04 Oct 2021</td>
                                    <td>12:00 AM</td>
                                    <td>Surat, India</td>
                                </tr>

                                <tr>
                                    <td>Delivered</td>
                                    <td>10 Nav 2021</td>
                                    <td>12:00 AM</td>
                                    <td>Surat, India</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Order Table Section End --> */}
     <Footer />
    </>
  )
}

export default Trackorder