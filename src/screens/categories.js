import React from 'react'
import icon1 from "../assets/health-insurance.png";
import icon2 from "../assets/life-insurance.png";
import icon3 from "../assets/travel-insurance.png";
import icon4 from "../assets/car-insurance.png";
import icon5 from "../assets/bike-insurance.png";
import icon6 from "../assets/investment-plans.png";
import "../App.css";
import Navbar from "../components/navbar"
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
export default function Categories() {
    return (
       <React.Fragment>
         
            <div class="container" style={{marginTop:"60px"}}>
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
      </div>  <Navbar/>
      <Footer/>
       </React.Fragment>
    )
}
