import React from 'react'
import icon1 from "../assets/health-insurance.png";
import icon2 from "../assets/life-insurance.png";
import icon3 from "../assets/travel-insurance.png";
import icon4 from "../assets/car-insurance.png";
import icon5 from "../assets/bike-insurance.png";
import icon6 from "../assets/investment-plans.png";
import "../App.css";
import Accordion from '../components/accordion';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import Content from '../components/content';
export default function HomeComponent() {
  return (
    <div>
      <div style={{ backgroundColor: "#4370ff", height: "35px", width: "100%", marginTop: "60px" }}>
        <div>
          <h5 style={{ color: "white", padding: "auto", display: "flex", marginTop: "10px", fontFamily: "Lato, Helvetica, Arial", justifyContent: "center", textAlign: "center", alignItems: "center", marginTop: "20px" }}>India's Best Insurance Portal</h5>

        </div>

      </div>
      <div class="container">
        <div class="row">
          <div class="col card shadow p-3 mb-5 bg-white rounded">
            <Link to="/health">
              <div className="card-body align-items-center d-flex justify-content-center" style={{ flexDirection: "column" }}>
                <img src={icon1} height="80" width="80" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} />
                <h6 style={{ margin: "5px" }}><b>Health Insurance</b></h6>
              </div>
            </Link>
          </div>
          <div class="col card shadow p-3 mb-5 bg-white rounded">
            <Link to="/term">
              <div className="card-body align-items-center d-flex justify-content-center" style={{ flexDirection: "column" }}>
                <img src={icon2} height="80" width="80" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} />
                <h6 style={{ margin: "5px" }}><b>Term Insurance</b></h6>
              </div>
            </Link>
          </div>
          <div class="col card shadow p-3 mb-5 bg-white rounded">
            <Link to="/travel">
              <div className="card-body align-items-center d-flex justify-content-center" style={{ flexDirection: "column" }}>
                <img src={icon3} height="80" width="80" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} />
                <h6 style={{ margin: "5px" }}><b>Travel Insurance</b></h6>
              </div>
            </Link>
          </div>
        </div>
        <div class="row">
          <div class="col card shadow p-3 mb-5 bg-white rounded">
            <Link to="/car">
              <div className="card-body align-items-center d-flex justify-content-center" style={{ flexDirection: "column" }}>
                <img src={icon4} height="80" width="80" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} />
                <h6 style={{ margin: "5px" }}><b>Car Insurance</b></h6>
              </div>
            </Link>

          </div>
          <div class="col card shadow p-3 mb-5 bg-white rounded">
            <Link to="/bike">
              <div className="card-body align-items-center d-flex justify-content-center" style={{ flexDirection: "column" }}>
                <img src={icon5} height="80" width="80" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} />
                <h6 style={{ margin: "5px" }}><b>Bike Insurance</b></h6>
              </div>
            </Link>
          </div>
          <div class="col card shadow p-3 mb-5 bg-white rounded">
            <Link to="/investment">
              <div className="card-body align-items-center d-flex justify-content-center" style={{ flexDirection: "column" }}>
                <img src={icon6} height="80" width="80" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }} />
                <h6 style={{ margin: "5px" }}><b>Investment Plans</b></h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#4370ff", height: "20%", width: "100%", marginTop: "35px", color: "white", }}>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", alignItems: "center", flexDirection: "column", padding: '10px' }}>
          <h1 className="content-heading" style={{ marginTop: "20px" }}>Why to Compare Insurance</h1>
          <p style={{ fontFamily: "unset" }}>
          It is crucial to be aware of the different policies and plans available in the market, before purchasing as it can help in finding the best pricing for the coverage offered. Compare Insurance India is an online, easy and convenient platform to compare, select and buy the best insurance solution. Our Algorithm delivers the best of both worlds - best premium quotes and superior coverage. The prime objective of our organisation is to save you and your loved ones mentally and financially at the time of misfortune. It can be done by comparing various insurance plans and selecting the most suitable coverage. Side by side comparison furnishes you with specific details and vast options to choose the feature-rich policy that suits your needs. Say no to agents and extra commissions, the entire process is online and hassle-free. Compare policies with the comfort of your home. Insurance policies come with a host of benefits but vary significantly between insurance providers. So, by comparing insurance quotes, it is effortless to choose a policy that offers the best value.


            </p>
         
        </div>
       
      </div>
    
      {/* <Accordion /> */}
      <Content/>     
      <Footer />
    </div>
  )
}
