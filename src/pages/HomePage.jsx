import React, { useState } from "react";
import buildingimg from "../assets/building-img.jpg";
import realestateimg from "../assets/real-estate-img.jpg";

const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [propertyPlans, setPropertyPlans] = useState([
    {
      planType: "Luxury",
      deliveryDate: "2025-12-15",
      propertyName: "Sunset Towers",
      location: "Downtown City",
      numberOfBeds: 3,
      launchPrice: "$500,000",
      paymentPlan: "25% down payment, 12 months installment",
      image: buildingimg,
    },
    {
      planType: "Standard",
      deliveryDate: "2024-08-20",
      propertyName: "Greenfield Residences",
      location: "Uptown Area",
      numberOfBeds: 2,
      launchPrice: "$350,000",
      paymentPlan: "10% down payment, 18 months installment",
      image: buildingimg,
    },
    {
      planType: "Economy",
      deliveryDate: "2026-03-10",
      propertyName: "Park View Villas",
      location: "Suburban District",
      numberOfBeds: 1,
      launchPrice: "$200,000",
      paymentPlan: "5% down payment, 24 months installment",
      image: buildingimg,
    },
  ]);

  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.logo}>PropertyRight</div>
        <ul style={styles.navLinks}>
          <li>
            <a style={styles.link} href="#">
              Buy
            </a>
          </li>
          <li>
            <a style={styles.link} href="#">
              Rent
            </a>
          </li>
          <li>
            <a style={styles.link} href="#">
              Commercial
            </a>
          </li>
          <li>
            <a style={styles.link} href="#">
              New Projects
            </a>
          </li>
          <li>
            <a style={styles.link} href="#">
              Find Agent
            </a>
          </li>

          <li
            style={styles.dropdownWrapper}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <a style={styles.link} href="#">
              Explore ▾
            </a>
            {showDropdown && (
              <ul style={styles.dropdown}>
                <li>
                  <a style={styles.dropdownItem} href="#">
                    Neighborhoods
                  </a>
                </li>
                <li>
                  <a style={styles.dropdownItem} href="#">
                    Cities
                  </a>
                </li>
                <li>
                  <a style={styles.dropdownItem} href="#">
                    Trending
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a style={styles.link} href="#">
              Mortgages
            </a>
          </li>
        </ul>
      </nav>

      <div style={styles.imageContainer}>
        <img src={realestateimg} style={styles.image} />
        <div style={styles.searchBarContainer}>
          <input
            type="text"
            placeholder="Search for properties..."
            style={styles.searchBar}
          />
        </div>
      </div>

      <div style={{ padding: "60px" }}>
        <h1 style={{ color: "white" }}>Explore new projects in the UAE</h1>
        <h4 style={{ color: "gray" }}>
          Discover the latest off-plan properties and be informed.
        </h4>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {propertyPlans.map((plan, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "calc(33.33% - 20px)",
                height: "420px",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <img
                src={plan.image}
                alt={plan.propertyName}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2))",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "20px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: "#5A6E87",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "600",
                        width: "fit-content",
                      }}
                    >
                      OFF-PLAN
                    </span>
                    <span
                      style={{
                        backgroundColor: "#BE202E",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "600",
                        width: "fit-content",
                      }}
                    >
                      DELIVERY DATE: Q1 2027
                    </span>
                    <span
                      style={{
                        backgroundColor: "#EC5F67",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "600",
                        width: "fit-content",
                      }}
                    >
                      SALES STARTED: 1 MAR 2025
                    </span>
                  </div>
                </div>
                <div>
                  <h3 style={{ marginBottom: "6px", fontSize: "18px" }}>
                    {plan.propertyName}
                  </h3>
                  <p
                    style={{
                      margin: "4px 0",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span role="img" aria-label="location">
                      📍
                    </span>
                    &nbsp;{plan.location}
                  </p>
                  <p style={{ margin: "2px 0", fontSize: "14px" }}>
                    {plan.numberOfBeds} Beds
                  </p>
                  <p style={{ margin: "2px 0", fontSize: "14px" }}>
                    Launch price: <strong>{plan.launchPrice} AED</strong>
                    <span
                      style={{
                        backgroundColor: "#D3D3D3",
                        color: "#005599",
                        fontSize: "12px",
                        padding: "3px 8px",
                        borderRadius: "10px",
                        marginLeft: "10px",
                      }}
                    >
                      Payment Plan: {plan.paymentPlan}
                    </span>
                  </p>
                  <button
                    style={{
                      marginTop: "12px",
                      backgroundColor: "white",
                      color: "#25D366",
                      border: "none",
                      borderRadius: "10px",
                      width: "100%",
                      padding: "10px",
                      fontSize: "16px",
                      fontWeight: "600",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      style={{ width: "20px", height: "20px" }}
                    />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#003366",
    padding: "16px",
    color: "white",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "24px",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: 500,
    position: "relative",
  },
  dropdownWrapper: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: "40px",
    backgroundColor: "#005599",
    listStyle: "none",
    padding: "8px 0",
    borderRadius: "4px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  dropdownItem: {
    display: "block",
    padding: "8px 16px",
    color: "white",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: "600px",
  },
  searchBarContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    zIndex: 10,
  },
  searchBar: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "25px",
    border: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    color: "#333",
  },
  propertyCard: {
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "10px",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    position: "relative",
    textAlign: "center",
  },
  cardImage: {
    width: "100%",
    height: "350px",
  },
  textOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
    textAlign: "center",
    padding: "10px",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  cardDetails: {
    fontSize: "14px",
    margin: "5px 0",
  },
};

export default HomePage;
