import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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

function Useracc() {
  /* Detect mobile */
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeSection, setActiveSection] = useState(
    window.innerWidth <= 768 ? null : "profile"
  );

  /* Profile */
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 8901",
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
    { id: 1, type: "Visa", number: "**** 1234", expiry: "08/26", name: "John Doe" },
    { id: 2, type: "MasterCard", number: "**** 5678", expiry: "12/25", name: "John Doe" },
  ]);

  /* Orders */
  const [orders] = useState([
    { id: 1, name: "Wireless Headphones", price: "$99.99", image: "https://via.placeholder.com/120", status: "Delivered" },
    { id: 2, name: "Smart Watch", price: "$149.99", image: "https://via.placeholder.com/120", status: "Shipped" },
    { id: 3, name: "Gaming Mouse", price: "$49.99", image: "https://via.placeholder.com/120", status: "Processing" },
  ]);

  /* Wishlist */
  const [wishlist] = useState([
    { id: 1, name: "Bluetooth Speaker", price: "$79.99", image: "https://via.placeholder.com/120" },
    { id: 2, name: "Laptop Stand", price: "$39.99", image: "https://via.placeholder.com/120" },
    { id: 3, name: "LED Desk Lamp", price: "$29.99", image: "https://via.placeholder.com/120" },
  ]);

  /* Modal States */
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const openModal = (type, item = null) => {
    setModalType(type);
    setCurrentItem(item);
    setShowModal(true);
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
      id: "profile",
      label: "My Profile",
      icon: <FaUser />,
      content: (
        <div className="info-grid">
          <div className="pro-acc-info-card">
            <h4>Profile</h4>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>

            <div className="pro-acc-card-actions">
              <button
                className="pro-acc-edit-btn"
                onClick={() => openModal("edit-profile", profile)}
              >
                <FaPencilAlt />
              </button>
            </div>
          </div>
        </div>
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
                  className="pro-acc-edit-btn"
                  onClick={() => openModal("edit-address", a)}
                >
                  <FaPencilAlt />
                </button>

                <button
                  className="pro-acc-remove-btn"
                  onClick={() => setAddresses(addresses.filter(x => x.id !== a.id))}
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
      label: "Saved Payments",
      icon: <FaCreditCard />,
      content: (
        <>
          <button className="pro-acc-add-btn" onClick={() => openModal("add-payment")}>
            + Add
          </button>

          <div className="info-grid">
            {payments.map((p) => (
              <div className="payment-card" key={p.id}>
                <h4>{p.type}</h4>
                <p>Card: {p.number}</p>
                <p>Expiry: {p.expiry}</p>
                <p>Holder: {p.name}</p>

                <button
                  className="pro-acc-edit-btn"
                  onClick={() => openModal("edit-payment", p)}
                >
                 <FaPencilAlt />
                </button>

                <button
                  className="pro-acc-remove-btn"
                  onClick={() => setPayments(payments.filter(x => x.id !== p.id))}
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
                  <button>Track</button>
                  <button>Details</button>
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
                  <button onClick={() => alert(`Added ${item.name} to cart`)}>Add to Cart</button>
                  <button onClick={() => alert(`Removed ${item.name} from wishlist`)}>Remove</button>
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
      content: <p>Policies information here.</p>,
    },
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
          <button className="pro-acc-logout-btn" onClick={() => alert("Logging out...")}>
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
                  {modalType === "add-address" && "Add Address"}
                  {modalType === "edit-address" && "Edit Address"}
                  {modalType === "add-payment" && "Add Payment"}
                  {modalType === "edit-payment" && "Edit Payment"}
                </h5>

                <button type="button" className="btn-close" onClick={closeModal}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              <div className="modal-body">{getModalForm()}</div>

              <div className="modal-footer">
                <button className="btn btn-animation btn-md fw-bold" onClick={closeModal}>
                  Close
                </button>
                <button
                  type="button"
                  className="btn theme-bg-color btn-md fw-bold text-light"
                  onClick={closeModal}
                >
                  Save changes
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
