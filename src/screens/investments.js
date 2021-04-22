import Axios from 'axios'
import React, { useState } from 'react'
import Footer from '../components/footer'
import Navbar from "../components/navbar"
import swal from "sweetalert"
import "../App.css"
export default function Investment(props) {
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
                        <h5 style={{ textAlign:"center", fontFamily:"revert",fontFamily: "-moz-initial", color: "Black", fontWeight: "bolder", fontSize: 30,color:"black" , marginTop:"10px" }}>Investment</h5><br/>
                        <div>
                           <p>
                          
                            <b> Know More About Investment:</b>According to the finance perspective, investment is a sum of money or fund that a person spends in real-time intending to attain its financial benefits in the coming times. Investment is an act of creating and buying assets anticipating a return in various forms such as capital appreciation, dividend, or interest-earning. These returns are profitable as compared to the funds that were initially invested. Investments can be differentiated from other kinds of monetary transactions by analyzing the motive of spending the amount. The amount that you spend as an investment is typical with a motive to earn some kind of benefits in a certain duration of time.

                        </p>
                        <div style={{ margin: "10px" }}>
              <strong>Types of Investments:</strong><br />
           <ul>
               <li>ULIP - Unit-Linked Insurance Plan</li>
               <li>Pension Plans</li>
               <li>Long term Investments</li>
               <li>Short term Investments</li>
               <li>Mutual Funds</li>
               <li>SIP - Systematic Investment Plan</li>
           </ul>
          </div>
           
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
