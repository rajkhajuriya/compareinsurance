import Axios from 'axios'
import React, { useState } from 'react'
import Footer from '../components/footer'
import qs from "qs"
import Navbar from "../components/navbar"
import "../App.css"
import swal from 'sweetalert';
export default function ContactUs(props) {
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
                        <h5 style={{ textAlign:"center", fontFamily:"revert",fontFamily: "-moz-initial", color: "Black", fontWeight: "bolder", fontSize: 30,color:"black" , marginTop:"10px" }}>Car Insurance</h5><br/>
                        <div>
                            <p>According to the guidelines issued for insurance, you are allowed to withdraw your policy before 15 days starting from the day of insurance of the policy. For grabbing more details on the subject you can consider consulting with our advisor at the time of purchase or read the following plan brochure carefully
</p>
                            <p>Know More About Car Insurance</p>
                            <ul><li>Term life insurance covers the expenses at a fixed premium rate and for a fixed duration of time.</li>
                            <li>If there is any untimely demise of the life that was covered by the insurance during the term of the policy then the nominee of the insurance holder will get the covered amount or benefit. This benefit can be transferred to the nominee following any of the three methods-
                            -One-time payment of the lumpsum amount
                            -Combination of lump sum and monthly payments
                            -Only monthly payments</li>

                            <li>For these benefits, term insurance policies are considered to be absolute protection plans that make sure the financial independence of the family in any scenario of the untimely demise of the insured person.</li>
                            </ul>
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
