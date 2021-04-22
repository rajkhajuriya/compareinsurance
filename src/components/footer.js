import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
export default function Footer() {
    return (
        <footer class="site-footer">
      <hr/>
        <div class="container" >
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12"  style={{marginBottom:"10px"}}>
              <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by CompareInsuranceIndia
              </p>
            </div>
           
  
            {/* <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li><a class="facebook" href="#"/><i class="fa fa-facebook"></i></li>
                <li><a class="twitter" href="#"/><i class="fa fa-twitter"></i></li>
                <li><a class="dribbble" href="#"/><i class="fa fa-dribbble"></i></li>
                <li><a class="linkedin" href="#"/><i class="fa fa-linkedin"></i></li>   
              </ul>
            </div> */}
          </div>
        </div>
  </footer>
    )
}
