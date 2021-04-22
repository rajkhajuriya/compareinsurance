import Axios from 'axios'
import React, { useState } from 'react'
import Footer from '../components/footer'
import Navbar from "../components/navbar";
import swal from "sweetalert"
import "../App.css"
export default function Term(props) {
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
                        <h5 style={{ textAlign:"center", fontFamily:"revert",fontFamily: "-moz-initial", color: "Black", fontWeight: "bolder", fontSize: 30,color:"black" , marginTop:"10px" }}>Term Insurance</h5><br/>
                        <div>
                           <p>
                           According to the guidelines issued for insurance, you are allowed to withdraw your policy before 15 days starting from the day of issuance of the policy. For grabbing more details on the subject you can consider consulting with our advisor at the time of purchase or read the following plan brochure carefully.

                        </p>
                        </div>
                        <h6 style={{ textAlign:"center", fontFamily:"revert",fontFamily: "-moz-initial", color: "Black", fontWeight: "bolder", fontSize: 30,color:"black" , marginTop:"10px" }}>Know More About Term Insurance:</h6><br/>
                        <div>
                           <p>
                           Term Insurance is largely a usual protection policy that gives the requisite money help to your family just in case of your unfortunate demise. It's the simplest way to secure your family against a monetary crisis.
Term Insurance is a life assurance plan that covers life risks against any unforeseen scenario. It is the best means of securing your family against any unanticipated money crisis. With the tiny Investment, you'll be able to have a large amount Insured. It helps your family by maintaining the dignity they merit. It'll be there to support and strengthen your family throughout hardship and might additionally assist in living a self-reliant life after you. Insurance plans will cowl the danger of death, malady, or disease functional disability. With the constant, beneficiaries of the insured get the desired money security.


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
