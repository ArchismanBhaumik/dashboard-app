import React, { useState, useEffect } from "react";
import Sidebar from "./components/sidebar";
import RevenueChart from "./components/revenueLineChart";
import SalesPieChart from "./components/pieChart";
import ErrorBoundary from "./components/errorBoundary";
import UpdateBar from "./components/updateBar";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ProjectionsVsActualsChart from "./components/projectionVsActuals";
import arrow from "./assets/Vector.svg";
import arrowDown from "./assets/arrow.svg";
import MapComponent from "./components/revenueByLocation";
import Header from "./components/searchBar";
import OrderList from "./components/contactsTable";
import {
  Chart as ChartJS,
  CategoryScale, // Register this for x-axis (category)
  LinearScale, // Register this for y-axis (linear values)
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // For pie charts
} from "chart.js";
import ProductTable from "./components/productTable";
// Manually register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Needed for pie charts
);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode was previously enabled
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(savedMode === "true");
      document.body.classList.toggle("dark-mode", savedMode === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    // const customText_order = document.getElementsByClassName("customText-orders")
    // const customText_rev = document.getElementsByClassName("customText-revenue")
    // const customText_growth = document.getElementsByClassName("customText-growth")

    // setDarkMode((prevMode) => !prevMode);
    // document.body.classList.toggle("dark-mode");
    
    // customText_order[0].classList.toggle("dark-mode");
    // customText_rev[0].classList.toggle("dark-mode");
    // customText_growth[0].classList.toggle("dark-mode");
    // localStorage.setItem("darkMode", !darkMode);
    setDarkMode((prevMode) => {
    const newMode = !prevMode;
    document.body.classList.toggle("dark-mode", newMode);

    // Check if elements exist before toggling class
    const customTextOrder = document.getElementsByClassName("customText-orders");
    const customTextRevenue = document.getElementsByClassName("customText-revenue");
    const customTextGrowth = document.getElementsByClassName("customText-growth");

    if (customTextOrder.length > 0) {
      customTextOrder[0].classList.toggle("dark-mode", newMode);
    }
    if (customTextRevenue.length > 0) {
      customTextRevenue[0].classList.toggle("dark-mode", newMode);
    }
    if (customTextGrowth.length > 0) {
      customTextGrowth[0].classList.toggle("dark-mode", newMode);
    }

    localStorage.setItem("darkMode", newMode);
    return newMode;
  })
  };
  return (
    <Router>
    <div className={`dashboard-container ${darkMode ? "dark" : "light"} d-flex`}>
      <ErrorBoundary>
        <Sidebar className="sidebar" />
        <div className="main-content">
          <Header toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div><h3 className="m-2">eCommerce</h3></div>
                  <div>
                    <div className="row p-3">
                      <div className="col-md-7 pt-3">
                        <div className="row">
                          <div className="col-md-6 px-0 mx-0 border-3">
                            <div className="card m-1 customers-card">
                              <div className="card-body p-4 ">
                                <h5 className="customText">Customers</h5>
                                <div className=" d-flex justify-content-between">
                                  <span className="customText fs-1">3,781</span>
                                  <span className="customText py-3 fs-4">
                                    +11 %<img src={arrow} alt="" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 px-0 mx-0 border-3">
                            <div className="card-rev m-1">
                              <div className="card-body p-4">
                                <h5 className="customText-orders">Orders</h5>
                                <div className=" d-flex justify-content-between">
                                  <span className="customText-orders fs-1">1,219</span>
                                  <span className="customText-orders py-3 fs-4">
                                    -0.03 %<img src={arrowDown} alt="" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 px-0 mx-0 border-3">
                            <div className="card-rev m-1">
                              <div className="card-body p-4">
                                <h5 className="customText-revenue">Revenue</h5>
                                <div className=" d-flex justify-content-between">
                                  <span className="customText-revenue fs-1">$695</span>
                                  <span className="customText-revenue py-3 fs-4">
                                    +11 % <img src={arrow} alt="" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 px-0 mx-0 border-3">
                            <div className="m-1 growth-card">
                              <div className="card-body p-4">
                                <h5 className="customText-growth">Growth</h5>
                                <div className=" d-flex justify-content-between">
                                  <span className="customText-growth fs-1">30.1% </span>
                                  <span className="customText-growth py-3 fs-4">
                                    +6.02 % <img src={arrow} alt="" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <ProjectionsVsActualsChart />
                      </div>
                    </div>
                  </div>
                  <div className="charts d-flex">
                    <RevenueChart />
                    <div className="map-box">
                      <MapComponent />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="w-50" style={{ margin: "50px" }}>
                      <ProductTable />
                    </div>
                    <div className="w-50">
                      <div style={{ height: "200px", width: "350px" }}>
                        <SalesPieChart />
                      </div>
                    </div>
                  </div>
                 
                </>
              }
            />
            <Route path="/orders" element={<OrderList />} />
          </Routes>
        </div>
        <Routes>
           <Route
              path="/"
              element={ <UpdateBar darkMode={{darkMode}} />} ></Route>
        </Routes>
      </ErrorBoundary>
    </div>
  </Router>
  );
};

export default App;
