import React from 'react'
import { FaChevronRight, FaNewspaper, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import KpiDropdown from '../components/antd/KpiDropdown'
import UserCharts from '../components/antd/UserCharts'
import BarChartComponent from '../components/charts/BarChartComponent'
import { RiAdvertisementFill } from 'react-icons/ri'

function DashboardScreen() {
  return (
    <>
    <Header />
      <div className="dashboard-section">
        <div className="dashboard-container">

          {/* title */}
          <div className="dashboard-title">
            <h2>Admin Dashboard</h2>
            <button className='form-button'>Export Data</button>
          </div>

          {/* kpi's */}
          <div className='dashboard-kpi-wrapper'>

            {/* kpi item */}
            <div className="dashboard-kpi-item da-kpi-one">
              <div className="thumb-and-content-kpi">
                <div className="kpi-item-icon">
                  <FaUsers />
                </div>
                <div className="kpi-item-header">
                  <h4>Total Users</h4>
                  <div className="kpi-item-body">
                    <h2>00</h2>
                  </div>
                </div>
              </div>
              <div className="see-all">
                <Link to="/chatbot-list">
                  <span>View all users</span>
                  <FaChevronRight />
                </Link>
              </div>
            </div>

            {/* kpi item */}
            <div className="dashboard-kpi-item da-kpi-one">
              <div className="thumb-and-content-kpi">
                <div className="kpi-item-icon">
                <RiAdvertisementFill />
                </div>
                <div className="kpi-item-header">
                  <h4>Total Ads</h4>
                  <div className="kpi-item-body">
                    <h2>00</h2>
                  </div>
                </div>
              </div>
              <div className="see-all">
                <Link to="/chatbot-list">
                  <span>View all ads</span>
                  <FaChevronRight />
                </Link>
              </div>
            </div>

            {/* kpi item */}
            <div className="dashboard-kpi-item da-kpi-one">
              <div className="thumb-and-content-kpi">
                <div className="kpi-item-icon">
                  <FaNewspaper />
                </div>
                <div className="kpi-item-header">
                  <h4>Total Epapers</h4>
                  <div className="kpi-item-body">
                    <h2>00</h2>
                  </div>
                </div>
              </div>
              <div className="see-all">
                <Link to="/chatbot-list">
                  <span>View all Epapers</span>
                  <FaChevronRight />
                </Link>
              </div>
            </div>

            {/* kpi item */}
            <div className="dashboard-kpi-item da-kpi-one">
              <div className="thumb-and-content-kpi">
                <div className="kpi-item-icon">
                  <FaUsers />
                </div>
                <div className="kpi-item-header">
                  <h4>Total Users</h4>
                  <div className="kpi-item-body">
                    <h2>00</h2>
                  </div>
                </div>
              </div>
              <div className="see-all">
                <Link to="/chatbot-list">
                  <span>View all users</span>
                  <FaChevronRight />
                </Link>
              </div>
            </div>
          </div> 

          {/* chart wrap */}
          <div className="dashboard-chart-wrapper">
            {/* item */}
            <div className="dashboard-chart-item">
              <div className="dashboard-kpi-header">
                <span>Existing Users : 200</span>
                <div className="dashboard-dropdown">
                <KpiDropdown />
                </div>
              </div>
              <div className="dashboard-kpi-item-body">
                <BarChartComponent />
              </div>
            </div>

            {/* item */}
            <div className="dashboard-chart-item">
              <div className="dashboard-kpi-header">
                <span>New Users : 200</span>
                <div className="dashboard-dropdown">
                  <KpiDropdown />
                </div>
              </div>
              <div className="dashboard-kpi-item-body">
                <UserCharts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardScreen