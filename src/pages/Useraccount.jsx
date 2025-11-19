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
        <div className="info-grid">
          {addresses.map((a) => (
            <div className="address-card" key={a.id}>
              <h4>{a.label}</h4>
              <p>{a.name}</p>
              <p>{a.phone}</p>
              <p>{a.line1}</p>
              <p>{a.line2}</p>
              <p>{a.city}, {a.state} - {a.zip}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "payments",
      label: "Saved Payments",
      icon: <FaCreditCard />,
      content: (
        <div className="info-grid">
          {payments.map((p) => (
            <div className="payment-card" key={p.id}>
              <h4>{p.type}</h4>
              <p>Card: {p.number}</p>
              <p>Expiry: {p.expiry}</p>
              <p>Holder: {p.name}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "orders",
      label: "My Orders",
      icon: <FaShoppingBag />,
      content: (
    <div className="pro-orders-grid">
      {[
        {
          id: 1,
          name: "Combat Protein",
          price: 99.99,
          quantity: 1,
          orderNumber: "ORD123456",
          orderDate: "2025-11-15",
          img: "https://cdn.shopify.com/s/files/1/1618/2767/files/2ln_Combat_Protein_chocolate.jpg?v=1754063186",
        },
        {
          id: 2,
          name: "Daily Protein",
          price: 199.99,
          quantity: 2,
          orderNumber: "ORD123457",
          orderDate: "2025-11-17",
          img: "https://images.apollo247.in/pub/media/catalog/product/A/P/APP0048_1-JULY23_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w",
        },
        {
          id: 3,
          name: "Gold Standard Whey Protein",
          price: 79.99,
          quantity: 1,
          orderNumber: "ORD123458",
          orderDate: "2025-11-18",
          img: "https://www.optimumnutrition.co.in/cdn/shop/files/1118910-1118952_combo.png?v=1759919929",
        },
      ].map((order) => (
        <div className="pro-order-card" key={order.id}>
          <img src={order.img} alt={order.name} className="pro-order-img" />
          <div className="pro-order-info">
            <h4>{order.name}</h4>
            <p>Quantity: {order.quantity}</p>
            <p className="pro-price">Price: ${order.price.toFixed(2)}</p>
            <p>Order Id: {order.orderNumber}</p>
            <p>Order Date: {order.orderDate}</p>
            <div className="pro-order-actions">
              <button>Track Order</button>
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
      {[
        {
          id: 1,
          name: "Combat Protein",
          price: 99.99,
          quantity: 1,
          img: "https://cdn.shopify.com/s/files/1/1618/2767/files/2ln_Combat_Protein_chocolate.jpg?v=1754063186",
        },
        {
          id: 2,
          name: "Daily Protein",
          price: 199.99,
          quantity: 2,
          img: "https://images.apollo247.in/pub/media/catalog/product/A/P/APP0048_1-JULY23_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%20400w",
        },
        {
          id: 3,
          name: "Gold Standard Whey Protein",
          price: 79.99,
          quantity: 1,
          img: "https://www.optimumnutrition.co.in/cdn/shop/files/1118910-1118952_combo.png?v=1759919929",
        },
      ].map((item) => (
        <div className="pro-wishlist-card" key={item.id}>
          <img src={item.img} alt={item.name} className="pro-wishlist-img" />
          <div className="pro-wishlist-info">
            <h4>{item.name}</h4>
            <div className="pro-quantity-control">
              <button>-</button>
              <span>{item.quantity}</span>
              <button>+</button>
            </div>
            <p className="pro-price">Price: ${item.price.toFixed(2)}</p>
            <div className="pro-wishlist-actions">
              <button>Add to Cart</button>
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

      <Footer />
    </>
  );
}

export default Useracc;
