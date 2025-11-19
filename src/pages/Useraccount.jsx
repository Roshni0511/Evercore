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
  FaPlus,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

function Useracc() {
  /* Detect mobile */
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [activeSection, setActiveSection] = useState(
    window.innerWidth <= 768 ? null : "profile"
  );

  /* Address + Payment States */
  const [addresses, setAddresses] = useState([
    { id: 1, label: "Home", name: "John Doe", phone: "+1 234 567 8901", line1: "123 Main St", line2: "Near Park", city: "Springfield", state: "IL", zip: "62704" },
    { id: 2, label: "Work", name: "John Doe", phone: "+1 234 567 8901", line1: "456 Corporate Ave", line2: "2nd Floor", city: "Springfield", state: "IL", zip: "62701" }
  ]);

  const [payments, setPayments] = useState([
    { id: 1, type: "Visa", number: "**** 1234", expiry: "08/26", name: "John Doe" },
    { id: 2, type: "MasterCard", number: "**** 5678", expiry: "03/27", name: "John Doe" },
  ]);

  /* Modal Visibility States */
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "address" or "payment"
  const [selectedItem, setSelectedItem] = useState(null);

  /* Form States */
  const [addressForm, setAddressForm] = useState({
    label: "Home",
    name: "",
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
  });

  const [paymentForm, setPaymentForm] = useState({
    type: "Visa",
    number: "",
    expiry: "",
    name: "",
  });

  /* Handle Resize */
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (mobile) {
        setActiveSection(null);
      } else {
        setActiveSection("profile");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Open Modals */
  const openAddModal = (type) => {
    setModalType(type);
    setSelectedItem(null);

    if(type === "address") {
      setAddressForm({
        label: "Home",
        name: "",
        phone: "",
        line1: "",
        line2: "",
        city: "",
        state: "",
        zip: "",
      });
    } else {
      setPaymentForm({
        type: "Visa",
        number: "",
        expiry: "",
        name: "",
      });
    }

    setShowAddModal(true);
  };

  const openEditModal = (type, item) => {
    setModalType(type);
    setSelectedItem(item);

    if(type === "address") {
      setAddressForm({ ...item });
    } else {
      setPaymentForm({ ...item });
    }

    setShowEditModal(true);
  };

  const openDeleteModal = (type, item) => {
    setModalType(type);
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const closeAllModals = () => {
    setShowAddModal(false);
    setShowEditModal(false);
    setShowDeleteModal(false);
    setSelectedItem(null);
  };

  /* Save / Update Functions */
  const saveAddress = (e) => {
    e.preventDefault();
    if(selectedItem) {
      // Update existing
      setAddresses(addresses.map(a => a.id === selectedItem.id ? addressForm : a));
    } else {
      // Add new
      setAddresses([...addresses, { ...addressForm, id: Date.now() }]);
    }
    closeAllModals();
  };

  const savePayment = (e) => {
    e.preventDefault();
    if(selectedItem) {
      setPayments(payments.map(p => p.id === selectedItem.id ? paymentForm : p));
    } else {
      setPayments([...payments, { ...paymentForm, id: Date.now() }]);
    }
    closeAllModals();
  };

  const confirmDelete = () => {
    if(modalType === "address") {
      setAddresses(addresses.filter(a => a.id !== selectedItem.id));
    } else if(modalType === "payment") {
      setPayments(payments.filter(p => p.id !== selectedItem.id));
    }
    closeAllModals();
  };

  /* Sections Data */
  const sections = [
    {
      id: "profile",
      label: "My Profile",
      icon: <FaUser />,
      content: (
        <div className="info-grid">
          <div className="info-card"><h4>Name</h4><p>John Doe</p></div>
          <div className="info-card"><h4>Email</h4><p>johndoe@example.com</p></div>
          <div className="info-card"><h4>Phone</h4><p>+1 234 567 8901</p></div>
          <div className="info-card"><h4>Member Since</h4><p>January 2022</p></div>
        </div>
      ),
    },
    {
      id: "address",
      label: "My Address",
      icon: <FaMapMarkerAlt />,
      content: (
        <>
          <button className="pro-acc-add-btn" onClick={() => openAddModal("address")}>
            <FaPlus /> Add Address
          </button>

          <div className="info-grid">
            {addresses.map((a) => (
              <div className="address-card" key={a.id}>
                <h4>{a.label}</h4>
                <p>{a.name}</p>
                <p>{a.phone}</p>
                <p>{a.line1}</p>
                <p>{a.line2}</p>
                <p>{a.city}, {a.state} - {a.zip}</p>

                <div className="card-actions">
                  <button className="pro-acc-edit-btn" onClick={() => openEditModal("address", a)}>
                    <FaEdit /> Edit
                  </button>
                  <button className="pro-acc-delete-btn" onClick={() => openDeleteModal("address", a)}>
                    <FaTrash /> Delete
                  </button>
                </div>
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
          <button className="pro-acc-add-btn" onClick={() => openAddModal("payment")}>
            <FaPlus /> Add Payment Method
          </button>

          <div className="info-grid">
            {payments.map((p) => (
              <div className="payment-card" key={p.id}>
                <h4>{p.type}</h4>
                <p>Card: {p.number}</p>
                <p>Expiry: {p.expiry}</p>
                <p>Holder: {p.name}</p>

                <div className="card-actions">
                  <button className="pro-acc-edit-btn" onClick={() => openEditModal("payment", p)}>
                    <FaEdit /> Edit
                  </button>
                  <button className="pro-acc-delete-btn" onClick={() => openDeleteModal("payment", p)}>
                    <FaTrash /> Delete
                  </button>
                </div>
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
      content: <p>Orders section coming soon...</p>,
    },
    {
      id: "wishlist",
      label: "Wishlist",
      icon: <FaHeart />,
      content: <p>Your wishlist items will appear here.</p>,
    },
    {
      id: "policies",
      label: "Policies",
      icon: <FaFileAlt />,
      content: <p>Policies information here.</p>,
    },
  ];

  const handleTabClick = (id) => setActiveSection(id);
  const handleBackClick = () => setActiveSection(null);

  return (
    <>
      <Navbar />

      <div className="pro-acc-dashboard">
        {/* Tabs (Menu) */}
        {(!isMobile || activeSection === null) && (
          <div className="pro-acc-tabs">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`pro-acc-tab ${activeSection === section.id ? "active" : ""}`}
                onClick={() => handleTabClick(section.id)}
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
              <button className="pro-acc-back-btn" onClick={handleBackClick}>
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

      {/* ======================= CENTER MODALS ======================= */}

      {/* Add / Edit Address Modal */}
      {(showAddModal || showEditModal) && modalType === "address" && (
        <div className="pro-acc-modal-overlay">
          <div className="pro-acc-modal-box">
            <h2>{selectedItem ? "Edit Address" : "Add New Address"}</h2>
            <form className="pro-acc-form" onSubmit={saveAddress}>
              <label>Full Name</label>
              <input type="text" className="pro-acc-input" value={addressForm.name} onChange={(e)=>setAddressForm({...addressForm,name:e.target.value})} required/>
              <label>Mobile Number</label>
              <input type="text" className="pro-acc-input" value={addressForm.phone} onChange={(e)=>setAddressForm({...addressForm,phone:e.target.value})} required/>
              <label>House / Flat No.</label>
              <input type="text" className="pro-acc-input" value={addressForm.line1} onChange={(e)=>setAddressForm({...addressForm,line1:e.target.value})} required/>
              <label>Street / Locality</label>
              <input type="text" className="pro-acc-input" value={addressForm.line2} onChange={(e)=>setAddressForm({...addressForm,line2:e.target.value})} />
              <label>City</label>
              <input type="text" className="pro-acc-input" value={addressForm.city} onChange={(e)=>setAddressForm({...addressForm,city:e.target.value})} required/>
              <label>State</label>
              <input type="text" className="pro-acc-input" value={addressForm.state} onChange={(e)=>setAddressForm({...addressForm,state:e.target.value})} required/>
              <label>Pincode</label>
              <input type="text" className="pro-acc-input" value={addressForm.zip} onChange={(e)=>setAddressForm({...addressForm,zip:e.target.value})} required/>
              <label>Address Type</label>
              <select className="pro-acc-input" value={addressForm.label} onChange={(e)=>setAddressForm({...addressForm,label:e.target.value})}>
                <option>Home</option>
                <option>Work</option>
                <option>Other</option>
              </select>
              <div className="pro-acc-modal-buttons">
                <button type="submit" className="pro-acc-modal-save-btn">{selectedItem ? "Update" : "Add"}</button>
                <button type="button" className="pro-acc-modal-close" onClick={closeAllModals}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add / Edit Payment Modal */}
      {(showAddModal || showEditModal) && modalType === "payment" && (
        <div className="pro-acc-modal-overlay">
          <div className="pro-acc-modal-box">
            <h2>{selectedItem ? "Edit Payment Method" : "Add Payment Method"}</h2>
            <form className="pro-acc-form" onSubmit={savePayment}>
              <label>Card Holder Name</label>
              <input type="text" className="pro-acc-input" value={paymentForm.name} onChange={(e)=>setPaymentForm({...paymentForm,name:e.target.value})} required/>
              <label>Card Number</label>
              <input type="text" className="pro-acc-input" value={paymentForm.number} onChange={(e)=>setPaymentForm({...paymentForm,number:e.target.value})} maxLength="16" required/>
              <label>Expiry Date</label>
              <input type="month" className="pro-acc-input" value={paymentForm.expiry} onChange={(e)=>setPaymentForm({...paymentForm,expiry:e.target.value})} required/>
              <label>Payment Type</label>
              <select className="pro-acc-input" value={paymentForm.type} onChange={(e)=>setPaymentForm({...paymentForm,type:e.target.value})}>
                <option>Visa</option>
                <option>MasterCard</option>
                <option>UPI</option>
                <option>PayPal</option>
              </select>
              <div className="pro-acc-modal-buttons">
                <button type="submit" className="pro-acc-modal-save-btn">{selectedItem ? "Update" : "Add"}</button>
                <button type="button" className="pro-acc-modal-close" onClick={closeAllModals}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="pro-acc-modal-overlay">
          <div className="pro-acc-modal-box">
            <h2>Are you sure?</h2>
            <p>Do you really want to delete this item?</p>
            <div className="pro-acc-modal-buttons">
              <button className="pro-acc-delete-btn" onClick={confirmDelete}>Yes, Delete</button>
              <button className="pro-acc-modal-close" onClick={closeAllModals}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Useracc;
