import Axios from 'axios'
import swal from "sweetalert"
import React, { useState } from 'react'
import Footer from '../components/footer'
import qs from "qs"
import Navbar from "../components/navbar"
import "../App.css"
export default function Health(props) {
    const [name,set_name]= useState("")
    const [last_name,set_last_name]= useState("")
    const [email,set_email]= useState("")
    const [mobile,set_mobile]= useState("")
  


   
    const onSubmit = (e) => {
        e.preventDefault()
      
        Axios.post("https://comparepolicy.herokuapp.com/set_data",{
            body:{
                name:name,
                last_name:last_name,
                email:email,
                mobile:mobile
            }
        }).then((res)=>{
            console.log(res)
                if(res.data.code==200){
                    swal("Message", "Thank you.", "success");
                }else{
                    alert("Oops!", "Something went wrong! please try again", "error");
                }
        })
    }
    return (
        <div>
            <Navbar />
            <div class="row" >
                <div class="col-md-6" >
                    <div style={{ display: "flex", justifyContent: "center", flexDirection:"column", backgroundColor: "#f2f2f2",padding:"20px",marginTop:"100px", maxHeight:"auto" , borderRadius:"30px", marginLeft:"20px", marginRight:"20px"}}>
                        <h5 style={{ textAlign:"center", fontFamily:"revert",fontFamily: "-moz-initial", color: "Black", fontWeight: "bolder", fontSize: 30,color:"black" , marginTop:"10px" }}>Health Insurance</h5><br/>
                        <div>
                           <p>According to the guidelines issued for insurance, you are allowed to withdraw your policy before 15 days starting from the day of insurance of the policy. For grabbing more details on the subject you can consider consulting with our advisor at the time of purchase or read the following plan brochure carefully.

Health insurance covers up all your medical expenses and makes sure that the expenses you made personally are reduced to the amount insured.
A health insurance policy secures the chances that are eligible to avail of medical treatment at a collaborated hospital without paying them for the bill amount. Most of the health insurance plans typically cover 30 and 60 days pre and post hospitalization, respectively.
Insurees also get leverage to add value to their base health insurance plan by adding some complimentary products like Critical Illness(CI), Personal Accident (PA), and Top-Up base health insurance policy. All the valuable add-ons are available for the policyholders at very reasonable prices, which adjoin benefits that are not an element of the original base health insurance plan. For instance, A personal accident policy provides coverage for a disability that is usually not covered under the base health policy. It also prevents the covered individual from the need of going through a waiting period for medical checkups.
To cover the medical expenses for their parents and elders, one can also opt for the popular senior-citizen health insurance plans. It secures and covers all the expensive medical treatments that are usually certain to happen due to old age
</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6" style={{ marginTop: "100px" , height:"500px"}} >
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h5 style={{ textalign: "center", fontFamily: "-moz-initial", fontWeight: "bolder", fontSize: 30 }}>Contact Us</h5>
                    </div>
                    <input className="input" onChange={(text)=>{set_name(text.target.value)}} placeholder="Name" name="name" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} />
                    <input className="input" onChange={(text)=>{set_last_name(text.target.value)}} placeholder="Last Name" name="lname" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} />
                    <input className="input" onChange={(text)=>{set_email(text.target.value)}} placeholder="Email" name="email" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} />
                    <input maxLength="10" minLength="10" className="input" onChange={(text)=>{set_mobile(text.target.value)}} placeholder="Number" name="number" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} /><br />
                    <button className="button" style={{ width: "90%", margin: "20px", height: "50px", borderRadius: "30px" }} onClick={(e)=>{onSubmit(e)}}>Submit</button>
                </div>
            </div>

            <Footer />
        </div>

    )
}
