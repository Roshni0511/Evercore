import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { FaTachometerAlt } from "react-icons/fa";

import {
  FaUser,
  FaShoppingBag,
  FaMapMarkerAlt,
  FaHeart,
  FaCreditCard,
  FaFileAlt,
  FaPencilAlt,
  FaTrash,
} from "react-icons/fa";

const giftCardsData = [
  {
    id: 1,
    title: "Amazon Gift Card",
    code: "#AMZ2548",
    amount: 150,
    status: "Active",
    image: "../assets/images/Giftcard.jpg",
  },
  {
    id: 2,
    title: "Flipkart Gift Card",
    code: "#FLP1536",
    amount: 200,
    status: "Pending",
    image: "../assets/images/Giftcard.jpg",
  },
  {
    id: 3,
    title: "Starbucks Gift Card",
    code: "#SBX1366",
    amount: 100,
    status: "Redeemed",
    image: "../assets/images/Giftcard.jpg",
  },
];


function Useracc() {
  /* Detect mobile */
  const pendingOrders = [];
const billingAddress = null;
const shippingAddress = null;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
const [activeSection, setActiveSection] = useState(
    window.innerWidth <= 768 ? null : "dashboard"
  );

  /* 3-dot menu state */
  const [showMenu, setShowMenu] = useState(false);

  /* Profile */
  const defaultProfilePic =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  const [profile, setProfile] = useState({
    name: "Rahul Patel",
    email: "rahulpatel@example.com",
    phone: "+1 234 567 8901",
    gender: "Male",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9mB2UcCmsBggzz-srnpyR3A-I2O8EKR8ow&s",
  });

  /* Address State */
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: "Home",
      line1: "123 Main St",
      city: "Springfield",
      state: "IL",
      country: "United States",
      zip: "62704",
    },
    {
      id: 2,
      label: "Office",
      line1: "456 Corporate Blvd",
      city: "Springfield",
      state: "IL",
      country: "United States",
      zip: "62704",
    },
  ]);

  /* Payments */
  const [payments, setPayments] = useState([
    { id: 1, type: "Visa", number: "**** 1234", expiry: "08/26", name: "Rahul Patel" },
    { id: 2, type: "MasterCard", number: "**** 5678", expiry: "12/25", name: "Rahul Patel" },
  ]);

  /* Orders */
  const [orders] = useState([
    { id: 1, name: "Whey Protein", price: "₹49.99", image: "/assets/images/nav1.png", status: "Delivered" },
    { id: 2, name: "Casein Protein", price: "₹59.99", image: "/assets/images/nav45.png", status: "Shipped" },
    { id: 3, name: "Vegan Protein", price: "₹39.99", image: "/assets/images/nav12.png", status: "Processing" },
  ]);

  /* Wishlist */
  const [wishlist] = useState([
    { id: 1, name: "Protein Bar Pack", price: "₹29.99", image: "/assets/images/nav1.png" },
    { id: 2, name: "Creatine Powder", price: "₹19.99", image: "/assets/images/nav45.png" },
    { id: 3, name: "BCAA Drink", price: "₹24.99", image: "/assets/images/nav12.png" },
  ]);

  /* Modal States */
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const openModal = (type, item = null) => {
    setModalType(type);
    setCurrentItem(item);
    setShowModal(true);
    setShowMenu(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentItem(null);
  };

  /* Handle Resize */
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setActiveSection(mobile ? null : "profile");
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Sections */
  const sections = [
    
    {
  id: "dashboard",
  label: "Dashboard",
 icon: <FaTachometerAlt />,

  content: (
    <div style={{ padding: "20px" }}>
      <div className="dashboard-home">

        {/* TITLE */}
        <div className="title">
          <h2>My Account</h2>
          <span className="title-leaf">
            <svg className="icon-width bg-gray">
              <use href="../assets/svg/leaf.svg#leaf"></use>
            </svg>
          </span>
        </div>

        {/* USER NAME SECTION */}
        <div className="dashboard-user-name">
          <h6 className="text-content">
            Hello, <b className="text-title">{profile.name}</b>
          </h6>
          <p className="text-content">
            From your My Account Dashboard you can view recent account activity and update account information.
          </p>
        </div>

        {/* TOTAL BOXES */}
        <div className="total-box">
          <div className="row g-sm-4 g-3">

  <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
  <a href="">
    <div
      className="total-contain"
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <img
        src="../assets/images/svg/order.svg"
        className="img-1"
        alt="img"
        style={{ width: "45px" }}
      />

      <div className="total-detail">
        <h5 style={{ margin: 0,color:'#000' }}>Total Order</h5>
        <h3 className="text-title" style={{ margin: "5px 0 0 0" }}>
          {orders.length}
        </h3>
      </div>
    </div>
  </a>
</div>

<div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
  <a href="">
    <div
      className="total-contain"
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <img
        src="../assets/images/svg/pending.svg"
        className="img-1"
        alt="img"
        style={{ width: "45px" }}
      />

      <div className="total-detail">
        <h5 style={{ margin: 0,color:'#000'  }}>Total Pending Order</h5>
        <h3 className="text-title" style={{ margin: "5px 0 0 0" }}>
          {pendingOrders.length}
        </h3>
      </div>
    </div>
  </a>
</div>

<div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
  <a href="">
    <div
      className="total-contain"
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <img
        src="../assets/images/svg/wishlist.svg"
        className="img-1"
        alt="img"
        style={{ width: "45px" }}
      />

      <div className="total-detail">
        <h5 style={{ margin: 0 ,color:'#000' }}>Total Wishlist</h5>
        <h3 className="text-title" style={{ margin: "5px 0 0 0" }}>
          {wishlist.length}
        </h3>
      </div>
    </div>
  </a>
</div>


          </div>
        </div>

        {/* ACCOUNT INFORMATION */}
        <div className="dashboard-title" style={{marginTop:'25px'}}>
          <h3>Account Information</h3>
        </div>

        <div className="row g-4">
          {/* CONTACT INFO */}
          <div className="col-xxl-6">
            <div className="dashboard-content-title" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>

              <h4>
                Contact Information{" "}
              </h4>
              </div>
              <div>
                     <p onClick={() => openModal("edit-profile", profile)} style={{color:"#0d6efd",alignItems:'center',marginBottom:"0px"}}>
                     Edit 
                    </p>

              </div>
            </div>
              <hr style={{marginTop:"0px"}} />
            <div className="dashboard-detail">
              <h6 className="text-content" style={{marginBottom:'5px'}}>{profile.name}</h6>
              <h6 className="text-content" style={{marginBottom:'5px'}}>{profile.email}</h6>
              <a     onClick={() => openModal("change-password")} style={{color:'#0d6efd'}}>Change Password</a>
                   
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="col-xxl-6">
            <div className="dashboard-content-title"  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<div>
              <h4>
                Newsletters{" "}
              </h4>
</div>
  <div>

                 <p onClick={() => openModal("edit-profile", profile)} style={{color:"#0d6efd",alignItems:'center',marginBottom:"0px"}}>
                     Edit 
                    </p>
  </div>
            </div>
               <hr style={{marginTop:"0px"}}/>
            <div className="dashboard-detail">
              <h6 className="text-content">
                You are currently not subscribed to any newsletter
              </h6>
            </div>
          </div>

          {/* ADDRESS BOOK */}
          <div className="col-12">
            <div className="dashboard-content-title"  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>

              <h4>
                Address Book{" "}
              </h4>
              </div>
              <div>
           <p onClick={() => openModal("edit-profile", profile)} style={{color:"#0d6efd",alignItems:'center',marginBottom:"0px"}}>
                     Edit 
                    </p>

              </div>
            </div>
               <hr style={{marginTop:"0px"}}/>

            <div className="row g-4">
              <div className="col-xxl-6">
                <div className="dashboard-detail">
                  <h6 className="text-content" style={{marginBottom:'5px'}}>Default Billing Address</h6>
                  <h6 className="text-content" style={{marginBottom:'5px'}}>
                    {billingAddress ? billingAddress : "You have not set a default billing address."}
                  </h6>
                <p onClick={() => openModal("edit-profile", profile)} style={{color:"#0d6efd",alignItems:'center',marginBottom:"0px"}}>
                     Edit Address
                    </p>
                </div>
              </div>

              <div className="col-xxl-6">
                <div className="dashboard-detail">
                  <h6 className="text-content" style={{marginBottom:'5px'}}>Default Shipping Address</h6>
                  <h6 className="text-content" style={{marginBottom:'5px'}}>
                    {shippingAddress ? shippingAddress : "You have not set a default shipping address."}
                  </h6>
                   <p onClick={() => openModal("edit-profile", profile)} style={{color:"#0d6efd",alignItems:'center',marginBottom:"0px"}}>
                     Edit Address
                    </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
},
     {
      id: "profile",
      label: "My Profile",
      icon: <FaUser />,
      content: (
        <>
          <div className="info-grid">
            <div className="profile-card" style={{ position: "relative" }}>
              
              {/* 3 Dot Menu */}
              <div className="profile-menu-wrapper">
                <div
                  className="profile-menu-icon"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  ⋮
                </div>

                {showMenu && (
                  <div className="profile-menu-dropdown">
                    <p onClick={() => openModal("edit-profile", profile)}>
                      <FaPencilAlt /> Edit Profile
                    </p>

                    <p onClick={() => openModal("upload-photo")}>
                      <FaUser /> Upload Image
                    </p>

                    <p
                      onClick={() =>
                        setProfile({ ...profile, profilePic: defaultProfilePic })
                      }
                    >
                      <FaTrash /> Remove Image
                    </p>
                  </div>
                )}
              </div>

              {/* Profile Picture */}
              <div className="profile-icon">
                <img src={profile.profilePic} alt={profile.name} />
              </div>

              {/* Profile Details */}
              <div className="profile-details">
                <h4>{profile.name}</h4>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Phone:</strong> {profile.phone}</p>
                <p><strong>Gender:</strong> {profile.gender}</p>

                <button
                  className="pro-acc-add-btn"
                  onClick={() => openModal("change-password")}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </>
      ),
    },


    {
      id: "address",
      label: "My Address",
      icon: <FaMapMarkerAlt />,
      content: (
        <>
          <button className="pro-acc-add-btn" onClick={() => openModal("add-address")}>
            + Add
          </button>

          <div className="info-grid">
            {addresses.map((a) => (
              <div className="address-card" key={a.id}>
                <h4>{a.label}</h4>
                <p>{a.line1}</p>
                <p>{a.city}, {a.state}</p>
                <p>{a.country}</p>
                <p>Pincode: {a.zip}</p>

                <button
                  className="pro-acc-edit-btn "
                  onClick={() => openModal("edit-address", a)}
                >
                  <FaPencilAlt />
                </button>

                <button
                  className="pro-acc-remove-btn"
                  onClick={() =>
                    setAddresses(addresses.filter((x) => x.id !== a.id))
                  }
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </>
      ),
    },

{
  id: "payments",
  label: "Your Refund",
  icon: <FaCreditCard />,
  content: (
    <>
      <div className="dashboard-card" >
        {/* Title */}
        <div
          className="title title-flex align-items-center justify-content-between"
          style={{ marginBottom: "0px" }}
        >
          <div>
            <h2 style={{ fontSize: "22px" }}>My Refunds</h2>
            <span className="title-leaf">
              <svg className="icon-width bg-gray">
                <use href="../assets/svg/leaf.svg#leaf"></use>
              </svg>
            </span>
          </div>
        </div>

        {/* Responsive Refund Cards */}
        <div className="row g-4 mt-2">

          {/* Refund Item 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="refund-card border rounded-4 p-3 shadow-sm h-100">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/assets/images/nav1.png"
                  className="img-fluid rounded me-3"
                  alt="Product"
                  style={{
                    width: "65px",
                    height: "65px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h6 className="fw-semibold mb-1">Protein Bar Pack</h6>
                  <small className="text-muted">Order ID: #2548</small>
                </div>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">Refund Amount:</span>
                <span className="fw-bold text-success">₹70.21</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">Refund Status:</span>
                <span className="badge bg-success">Approved</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span className="fw-semibold">Refund Date:</span>
                <span className="text-muted">08/05/2025</span>
              </div>

              <div className="d-flex justify-content-between border-top pt-2">
                <a className="text-danger fw-semibold">
                  <i className="far fa-times-circle me-1"></i>Cancel
                </a>
              </div>
            </div>
          </div>

          {/* Refund Item 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="refund-card border rounded-4 p-3 shadow-sm h-100">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/assets/images/nav45.png"
                  className="img-fluid rounded me-3"
                  alt="Product"
                  style={{
                    width: "65px",
                    height: "65px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h6 className="fw-semibold mb-1">Creatine Powder</h6>
                  <small className="text-muted">Order ID: #1536</small>
                </div>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">Refund Amount:</span>
                <span className="fw-bold text-warning">₹70.21</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">Refund Status:</span>
                <span className="badge bg-warning text-dark">Pending</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span className="fw-semibold">Requested On:</span>
                <span className="text-muted">11/09/2025</span>
              </div>

              <div className="d-flex justify-content-between border-top pt-2">
                <a className="text-muted fw-semibold">
                  <i className="far fa-clock me-1"></i>In Process
                </a>
              </div>
            </div>
          </div>

          {/* Refund Item 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="refund-card border rounded-4 p-3 shadow-sm h-100">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/assets/images/nav12.png"
                  className="img-fluid rounded me-3"
                  alt="Product"
                  style={{
                    width: "65px",
                    height: "65px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h6 className="fw-semibold mb-1">BCAA Drink</h6>
                  <small className="text-muted">Order ID: #1366</small>
                </div>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">Refund Amount:</span>
                <span className="fw-bold text-danger">₹70.21</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="fw-semibold">Refund Status:</span>
                <span className="badge bg-danger">Rejected</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span className="fw-semibold">Rejected On:</span>
                <span className="text-muted">10/10/2025</span>
              </div>

              <div className="d-flex justify-content-between border-top pt-2">
                <a className="text-success fw-semibold">
                  <i className="far fa-redo me-1"></i>Reapply
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  ),
},
{
  id: "help",
  label: "Help & Support",
  icon: <FaCreditCard />,
  content: (
    <>
      <div className="dashboard-card">

        <div
          className="title title-flex align-items-center justify-content-between"
          style={{ marginBottom: "0px" }}
        >
          <div>
            <h2>Help & Support</h2>
            <span className="title-leaf">
              <svg className="icon-width bg-gray">
                <use href="../assets/svg/leaf.svg#leaf"></use>
              </svg>
            </span>
          </div>
        </div>

        <div className="faq-accordion mt-4">
          <div className="accordion" id="accordionExample">
            
          {/* 1 */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
        >
          What is Evercore and what do we offer?
          {/* <i className="fa-solid fa-angle-down"></i> */}
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>
            <strong>Evercore</strong> is a premium fitness and nutrition brand
            offering high-quality protein supplements, pre-workouts, BCAAs,
            vitamins, and performance-enhancing products.  
            Our goal is to support your fitness journey with safe, effective,
            and science-backed nutrition.
          </p>
        </div>
      </div>
    </div>

    {/* 2 */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
        >
          How do I place an order on Evercore?
          {/* <i className="fa-solid fa-angle-down"></i> */}
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>
            Simply browse your favorite products, add them to your cart, proceed
            to checkout, enter your delivery information, and complete the
            payment.  
            Your order will be confirmed instantly.
          </p>
        </div>
      </div>
    </div>

    {/* 3 */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
        >
          What payment methods does Evercore accept?
          {/* <i className="fa-solid fa-angle-down"></i> */}
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>
            We accept all major payment modes including  
            <strong>UPI, Debit/Credit Cards, Net Banking, Wallets</strong>, and
            Cash on Delivery (depending on your location).
          </p>
        </div>
      </div>
    </div>

    {/* 4 */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFour">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
        >
          How long does Evercore take to deliver orders?
          {/* <i className="fa-solid fa-angle-down"></i> */}
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>
            Delivery usually takes <strong>2–5 business days</strong> depending
            on your city and product availability.  
            You will receive SMS and email updates for shipment and delivery.
          </p>
        </div>
      </div>
    </div>

    {/* 5 */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFive">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
        >
          How can I track my Evercore order?
          {/* <i className="fa-solid fa-angle-down"></i> */}
        </button>
      </h2>
      <div
        id="collapseFive"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>
            After your order is shipped, you’ll receive a tracking link through
            SMS or email.  
            You can also check order status in the <strong>“My Orders”</strong> section of your account.
          </p>
        </div>
      </div>
    </div>

    {/* 6 */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingSix">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSix"
        >
          What is Evercore’s return and refund policy?
          {/* <i className="fa-solid fa-angle-down"></i> */}
        </button>
      </h2>
      <div
        id="collapseSix"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>
            You can request a return or replacement within
            <strong> 7 days </strong> if the product is damaged, incorrect, or
            sealed and unused.  
            Refunds are processed after quality check.  
            Visit our <a href="/Return">Return Policy</a> page for details.
          </p>
        </div>
      </div>
    </div>

    {/* 7 */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingSeven">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSeven"
        >
          Is my information safe with Evercore?
          {/* <i className="fa-solid fa-angle-down"></i> */}
        </button>
      </h2>
      <div
        id="collapseSeven"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>
            Yes! We follow advanced encryption and security protocols to protect
            your personal and payment information.  
            Learn more in our <a href="/Privacy">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>

    {/* 8 */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingEight">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseEight"
        >
          Do you offer discounts or loyalty rewards?
          {/* <i className="fa-solid fa-angle-down"></i> */}
        </button>
      </h2>
      <div
        id="collapseEight"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>
            Yes! Evercore offers seasonal discounts, exclusive offers, promo
            codes, and loyalty rewards for repeat customers.  
            Follow us on social media for updates.
          </p>
        </div>
      </div>
    </div>

    {/* 9 */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingNine">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNine"
        >
          How can I contact Evercore support?
          {/* <i className="fa-solid fa-angle-down"></i> */}
        </button>
      </h2>
      <div
        id="collapseNine"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>
            You can reach us through the <a href="/contact">Contact Us</a> page,
            email us at <strong>support@evercore.com</strong>,  
            or call between <strong>9 AM – 9 PM</strong>.
          </p>
        </div>
      </div>
    </div>

          </div>
        </div>

      </div>
    </>
  ),
},
{
  id: "gift-card",
  label: "E- Gift Cards",
  icon: <FaCreditCard />,
  content: (
    <>
      <div className="dashboard-card" >

        {/* TITLE */}
        <div
          className="title title-flex align-items-center justify-content-between flex-wrap"
          style={{ marginBottom: "0px" }}
        >
          <div>
            <h2 style={{ fontSize: "22px" }}>My Gift Cards</h2>
            <span className="title-leaf">
              <svg className="icon-width bg-gray">
                <use href="../assets/svg/leaf.svg#leaf"></use>
              </svg>
            </span>
          </div>
        </div>

        {/* GIFT CARDS LIST */}
        <div className="row g-4 mt-2">

          {giftCardsData.map((card) => (
            <div
              key={card.id}
              className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12"
            >
              <div
                className="card h-100 shadow-sm rounded-4 overflow-hidden"
                style={{ border: "1px solid #eee" }}
              >

                {/* IMAGE */}
                <img
                  src="/assets/images/giftcard.jpeg"
                  className="card-img-top"
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    background: "#f8f9fa",
                  }}
                />

                {/* BODY */}
                <div className="card-body">
                  <h5 className="card-title fw-bold" style={{ fontSize: "18px" }}>
                    {card.title}
                  </h5>

                  <p className="card-text text-muted mb-1" style={{ fontSize: "14px" }}>
                    Code: {card.code}
                  </p>

                  <p className="h5 fw-bold text-primary mb-2">
                    ₹{card.amount.toFixed(2)}
                  </p>

                  {/* BADGE */}
                  <span
                    className={`badge mb-3 px-3 py-2 ${
                      card.status === "Active"
                        ? "bg-success"
                        : card.status === "Pending"
                        ? "bg-warning text-dark"
                        : "bg-danger"
                    }`}
                    style={{ fontSize: "13px" }}
                  >
                    {card.status}
                  </span>

                  {/* BUTTONS */}
                  <style>
{`
  @media (max-width: 576px) {
    .gift-btn-wrap {
      flex-direction: column !important;
      gap: 10px !important;
    }
    .gift-btn-wrap button {
      width: 100% !important;
    }
  }
`}
</style>

              {/* BUTTONS */}
<div className="d-flex justify-content-between gift-btn-wrap">

  <button
    className="btn btn-outline-primary btn-sm d-flex align-items-center"
    style={{ flex: "1 1 48%", justifyContent: "center" }}
  >
    <i className="far fa-eye me-1"></i> View
  </button>

  <button
    className={`btn btn-sm d-flex align-items-center justify-content-center ${
      card.status === "Redeemed" || card.status === "Expired"
        ? "btn-secondary disabled"
        : "btn-success"
    }`}
    style={{ flex: "1 1 48%" }}
  >
    <i className="fas fa-gift me-2"></i> Redeem
  </button>
</div>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  ),
}
,
    {
      id: "orders",
      label: "My Orders",
      icon: <FaShoppingBag />,
      content: (
        <div className="pro-orders-grid">
          {orders.map((order) => (
            <div className="pro-order-card" key={order.id}>
              <img src={order.image} alt={order.name} className="pro-order-img" />
              <div className="pro-order-info">
                <h4>{order.name}</h4>
                <p className="price">{order.price}</p>
                <p className={`status pro-status ${order.status.toLowerCase()}`}>{order.status}</p>
                <div className="pro-order-actions">
                 <a href="/Trackorder"> <button>Track</button></a>
                  <a href="/Productdetails"><button>Details</button></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },

    {
      id: "wishlist",
      label: "Wishlist",
      icon: <FaHeart />,
      content: (
        <div className="pro-wishlist-grid">
          {wishlist.map((item) => (
            <div className="pro-wishlist-card" key={item.id}>
              <img src={item.image} alt={item.name} className="pro-wishlist-img" />
              <div className="pro-wishlist-info">
                <h4>{item.name}</h4>
                <p className="price">{item.price}</p>
                <div className="pro-wishlist-actions">
                  <a href="/Cart"><button>Add to Cart</button></a>
                  <button>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },

{
  id: "policies",
  label: "Policies",
  icon: <FaFileAlt />,
  content: (
    <div className="dashboard-card" >
      
      <div
        className="title title-flex align-items-center justify-content-between"
        style={{ marginBottom: "0px" }}
      >
        <div>
          <h2>Privacy Policy</h2>
          <span className="title-leaf">
            <svg className="icon-width bg-gray">
              <use href="../assets/svg/leaf.svg#leaf"></use>
            </svg>
          </span>
        </div>
      </div>

      <div className="faq-accordion mt-4">
        <div className="accordion" id="policyAccordion">


          {/* 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="p1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#policyOne"
              >
                1. Information We Collect
              </button>
            </h2>
            <div
              id="policyOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#policyAccordion"
            >
              <div className="accordion-body">
                <ul >
                  <li>Personal details such as your name, phone number, email and address.</li>
                  <li>Information automatically collected, including device details and IP address.</li>
                  <li>Data received through third-party integrations such as payment systems.</li>
                </ul>
              </div>
            </div>
          </div>


          {/* 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="p2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#policyTwo"
              >
                2. How We Use Your Information
              </button>
            </h2>
            <div
              id="policyTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#policyAccordion"
            >
              <div className="accordion-body">
                <ul >
                  <li>To process orders and deliver services.</li>
                  <li>To improve website performance and user experience.</li>
                  <li>To detect and prevent fraudulent activity.</li>
                </ul>
              </div>
            </div>
          </div>


          {/* 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="p3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#policyThree"
              >
                3. Data Sharing
              </button>
            </h2>
            <div
              id="policyThree"
              className="accordion-collapse collapse"
              data-bs-parent="#policyAccordion"
            >
              <div className="accordion-body">
                <p>
                  We do not sell your personal information. Data is shared only with
                  trusted service providers or when required by law.
                </p>
              </div>
            </div>
          </div>


          {/* 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="p4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#policyFour"
              >
                4. Cookies & Tracking
              </button>
            </h2>
            <div
              id="policyFour"
              className="accordion-collapse collapse"
              data-bs-parent="#policyAccordion"
            >
              <div className="accordion-body">
                <p>
                  Cookies help enhance your experience. You may disable them anytime in
                  your browser settings.
                </p>
              </div>
            </div>
          </div>


          {/* 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="p5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#policyFive"
              >
                5. Security Measures
              </button>
            </h2>
            <div
              id="policyFive"
              className="accordion-collapse collapse"
              data-bs-parent="#policyAccordion"
            >
              <div className="accordion-body">
                <p>
                  We implement strong security practices but no method is completely
                  foolproof.
                </p>
              </div>
            </div>
          </div>


          {/* 6 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="p6">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#policySix"
              >
                6. Your Rights
              </button>
            </h2>
            <div
              id="policySix"
              className="accordion-collapse collapse"
              data-bs-parent="#policyAccordion"
            >
              <div className="accordion-body">
                <p>
                  You may request access, correction or deletion of your personal
                  information.
                </p>
              </div>
            </div>
          </div>


          {/* 7 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="p7">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#policySeven"
              >
                7. Updates to this Policy
              </button>
            </h2>
            <div
              id="policySeven"
              className="accordion-collapse collapse"
              data-bs-parent="#policyAccordion"
            >
              <div className="accordion-body">
                <p>
                  We may revise this policy occasionally. Updated versions will be
                  posted here.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  ),
}

,
  ];

  /* ================================
     FORM GENERATOR
  ================================= */
  const getModalForm = () => {
    if (modalType === "edit-profile") {
      return (
        <div className="row g-4">
          <div className="col-12">
            <div className="form-floating">
              <input type="text" className="form-control" defaultValue={currentItem?.name} id="profileName" />
              <label htmlFor="profileName">Full Name</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input type="email" className="form-control" defaultValue={currentItem?.email} id="profileEmail" />
              <label htmlFor="profileEmail">Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input type="tel" className="form-control" defaultValue={currentItem?.phone} id="profilePhone" />
              <label htmlFor="profilePhone">Phone Number</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <select
                className="form-select"
                defaultValue={currentItem?.gender}
                id="profileGender"
                onChange={(e) =>
                  setProfile({ ...profile, gender: e.target.value })
                }
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="profileGender">Gender</label>
            </div>
          </div>
        </div>
      );
    }

    if (modalType === "upload-photo") {
      return (
        <div>
          <label className="form-label">Select New Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            id="uploadPhotoInput"
          />
        </div>
      );
    }

    if (modalType === "change-password") {
      return (
        <div className="row g-4">
          <div className="col-12">
            <div className="form-floating">
              <input type="password" className="form-control" id="oldPass" />
              <label htmlFor="oldPass">Current Password</label>
            </div>
          </div>

          <div className="col-12">
            <div className="form-floating">
              <input type="password" className="form-control" id="newPass" />
              <label htmlFor="newPass">New Password</label>
            </div>
          </div>

          <div className="col-12">
            <div className="form-floating">
              <input type="password" className="form-control" id="confirmPass" />
              <label htmlFor="confirmPass">Confirm Password</label>
            </div>
          </div>
        </div>
      );
    }

    if (modalType === "add-address" || modalType === "edit-address") {
      return (
        <div className="row g-4">
          <div className="col-12">
            <div className="form-floating">
              <input type="text" className="form-control" defaultValue={currentItem?.line1} id="addrLine1" />
              <label htmlFor="addrLine1">Address</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating">
              <input type="text" className="form-control" defaultValue={currentItem?.city} id="addrCity" />
              <label htmlFor="addrCity">City</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating">
              <input type="text" className="form-control" defaultValue={currentItem?.state} id="addrState" />
              <label htmlFor="addrState">State</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating">
              <select className="form-select" defaultValue={currentItem?.country} id="addrCountry">
                <option value="">Select Country</option>
                <option value="United States">United States</option>
                <option value="India">India</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
              <label htmlFor="addrCountry">Country</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating">
              <input type="text" className="form-control" defaultValue={currentItem?.zip} id="addrZip" />
              <label htmlFor="addrZip">Pincode</label>
            </div>
          </div>
        </div>
      );
    }

    if (modalType === "add-payment" || modalType === "edit-payment") {
      return (
        <div className="row g-4">
          <div className="col-12">
            <div className="form-floating">
              <select className="form-select" defaultValue={currentItem?.type} id="payType">
                <option value="">Select Card Type</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
              </select>
              <label htmlFor="payType">Card Type</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input type="text" className="form-control" defaultValue={currentItem?.number?.replace("**** ", "")} id="payNumber" />
              <label htmlFor="payNumber">Card Number</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating">
              <input type="text" className="form-control" defaultValue={currentItem?.expiry} id="payExpiry" />
              <label htmlFor="payExpiry">Expiry (MM/YY)</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-floating">
              <input type="text" className="form-control" defaultValue={currentItem?.name} id="payHolder" />
              <label htmlFor="payHolder">Card Holder Name</label>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="pro-acc-dashboard">
        
        {/* Tabs */}
        {(!isMobile || activeSection === null) && (
          <div className="pro-acc-tabs">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`pro-acc-tab ${activeSection === section.id ? "active" : ""}`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="pro-acc-tab-icon">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        {(activeSection || !isMobile) && (
          <div className="pro-acc-content">
            {isMobile && activeSection && (
              <button className="pro-acc-back-btn" onClick={() => setActiveSection(null)}>
                ← Back to Menu
              </button>
            )}

            {sections.map(
              (section) =>
                activeSection === section.id && (
                  <div key={section.id} className="pro-acc-section">
                    {section.content}
                  </div>
                )
            )}
          </div>
        )}

        {/* Logout */}
    <div style={{ textAlign: "center", marginTop: "30px" }}>
  <button
    className="pro-acc-logout-btn"
    onClick={() => {
      Swal.fire({
        title: "Logged Out!",
        text: "You have been successfully logged out.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = "/Login"; 
      });
    }}
  >
    Logout
  </button>
</div>
      </div>

      <Footer />

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block theme-modal" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-sm-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {modalType === "edit-profile" && "Edit Profile"}
                  {modalType === "upload-photo" && "Upload New Profile Picture"}
                  {modalType === "change-password" && "Change Password"}
                  {modalType === "add-address" && "Add Address"}
                  {modalType === "edit-address" && "Edit Address"}
                  {modalType === "add-payment" && "Add Payment"}
                  {modalType === "edit-payment" && "Edit Payment"}
                  {modalType === "edit-profile" && "Edit"}
                </h5>

                <button type="button" className="btn-close" onClick={closeModal}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              <div className="modal-body">{getModalForm()}</div>

              {/* SAVE BUTTON */}
              <div className="modal-footer">
                <button className="btn btn-animation  fw-bold" onClick={closeModal}>
                  Close
                </button>

                <button
                  type="button"
                  className="pro-acc-logout-btn  btn-md fw-bold text-light"
                  onClick={() => {
                    if (modalType === "upload-photo") {
                      const fileInput = document.getElementById("uploadPhotoInput");
                      if (fileInput && fileInput.files[0]) {
                        const reader = new FileReader();
                        reader.onload = () => {
                          setProfile({ ...profile, profilePic: reader.result });
                        };
                        reader.readAsDataURL(fileInput.files[0]);
                      }
                    }

                    if (modalType === "change-password") {
                      const oldPass = document.getElementById("oldPass").value;
                      const newPass = document.getElementById("newPass").value;
                      const confirmPass = document.getElementById("confirmPass").value;

                      if (newPass !== confirmPass) {
                        alert("New passwords do not match!");
                        return;
                      }
                      alert("Password changed successfully!");
                    }

                    closeModal();
                  }}
                >
                  Save 
                </button>  
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Useracc;
