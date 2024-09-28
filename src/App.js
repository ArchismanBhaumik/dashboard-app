import React, { useState, useEffect } from "react";
import Sidebar from "./components/sidebar";
import RevenueChart from "./components/revenueLineChart";
import SalesPieChart from "./components/pieChart";
import ErrorBoundary from "./components/errorBoundary";
import UpdateBar from "./components/updateBar";
import ProjectionsVsActualsChart from "./components/projectionVsActuals";
import arrow from "./assets/Vector.svg";
import arrowDown from "./assets/arrow.svg";
import MapComponent from "./components/revenueByLocation";
// import Header from "./components/searchBar";
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
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", !darkMode);
  };
  return (
    <div
      className={`dashboard-container ${darkMode ? "dark" : "light"} d-flex`}
    >
      <ErrorBoundary>
        <Sidebar className="sidebar" />
        {/* <Header /> */}
        <div className="main-content">
          <div>
            <div className="row">
              <div className="w-50">
                <div className="row">
                  <div className="col-md-6">
                    <div class="card m-3">
                      <div class="card-body p-4">
                        <h5 class="card-title">Customers</h5>
                        <div className=" d-flex justify-content-between">
                          <span class="card-text fs-1">3,781</span>
                          <span class="card-text py-3 fs-4 ">
                            +11 %<img src={arrow} alt="" />{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="card m-3">
                      <div class="card-body p-4">
                        <h5 class="card-title">Orders</h5>
                        <div className=" d-flex justify-content-between">
                          <span class="card-text fs-1">1,219</span>
                          <span class="card-text py-3 fs-4 ">
                            -0.03 %<img src={arrowDown} alt="" />{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="card m-3">
                      <div class="card-body p-4">
                        <h5 class="card-title">Revenue</h5>
                        <div className=" d-flex justify-content-between">
                          <span class="card-text fs-1">$695</span>
                          <span class="card-text py-3 fs-4 ">
                            +11 % <img src={arrow} alt="" />{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="card m-3">
                      <div class="card-body p-4">
                        <h5 class="card-title">Growth</h5>
                        <div className=" d-flex justify-content-between">
                          <span class="card-text fs-1">30.1% </span>
                          <span class="card-text py-3 fs-4">
                            +6.02 % <img src={arrow} alt="" />{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-50">
                <ProjectionsVsActualsChart />
              </div>
            </div>
          </div>
          <div className="charts justify-content-between d-flex">
            <RevenueChart />
            <div className="dark-mode-toggle">
              <button onClick={toggleDarkMode}>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
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
        </div>
        <UpdateBar />
      </ErrorBoundary>
    </div>
  );
};

export default App;
