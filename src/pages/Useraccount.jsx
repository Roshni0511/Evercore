import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  FaUser, 
  FaShoppingBag, 
  FaMapMarkerAlt, 
  FaHeart, 
  FaCreditCard, 
  FaFileAlt 
} from 'react-icons/fa';

function Useracc() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeSection, setActiveSection] = useState(
    window.innerWidth <= 768 ? null : 'profile'
  );

  const sections = [
    { id: 'profile', label: 'My Profile', icon: <FaUser />, content: 'Edit your personal information here.' },
    { id: 'orders', label: 'My Orders', icon: <FaShoppingBag />, content: 'Check your order history and status here.' },
    { id: 'address', label: 'My Address', icon: <FaMapMarkerAlt />, content: 'Manage your saved addresses here.' },
    { id: 'wishlist', label: 'Wishlist', icon: <FaHeart />, content: 'View your saved wishlist items here.' },
    { id: 'payments', label: 'Saved Payments', icon: <FaCreditCard />, content: 'Manage your saved payment methods here.' },
    { id: 'policies', label: 'Policies', icon: <FaFileAlt />, content: 'View policies, terms, and conditions here.' },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabClick = (id) => setActiveSection(id);
  const handleBackClick = () => setActiveSection(null);

  return (
    <>
      <Navbar />

      <div className="pro-acc-dashboard">
        {/* Tabs */}
        {(!isMobile || activeSection === null) && (
          <div className="pro-acc-tabs">
            {sections.map(section => (
              <button
                key={section.id}
                id={section.id}
                className={`pro-acc-tab ${activeSection === section.id ? 'active' : ''}`}
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

            {sections.map(section => (
              activeSection === section.id && (
                <div key={section.id} id={`${section.id}-section`} className="pro-acc-section">
                  <h2>{section.label}</h2>
                  <p>{section.content}</p>
                </div>
              )
            ))}
          </div>
        )}

        {/* Logout Button below content */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            className="pro-acc-logout-btn"
            onClick={() => alert('Logging out...')}
          >
            Logout
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Useracc;
