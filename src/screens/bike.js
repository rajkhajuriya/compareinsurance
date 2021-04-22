import Axios from 'axios'
import React, { useState } from 'react'
import Footer from '../components/footer'
import Navbar from "../components/navbar"
import "../App.css";
import swal from 'sweetalert';
export default function Bike() {
    const [name, set_name] = useState("")
    const [last_name, set_last_name] = useState("")
    const [email, set_email] = useState("")
    const [mobile, set_mobile] = useState("")




    const onSubmit = (e) => {
        e.preventDefault()

        Axios.post("https://comparepolicy.herokuapp.com/set_data", {
            body: {
                name: name,
                last_name: last_name,
                email: email,
                mobile: mobile
            }
        }).then((res) => {
            console.log(res)
            if (res.data.code == 200) {
                swal("Message", "Thank you.", "success");
            } else {
                alert("Oops!", "Something went wrong! please try again", "error");
            }
        })
    }
    return (
        <div>
            <Navbar />
            <div class="row" >
                <div class="col-md-6" >
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", backgroundColor: "#f2f2f2", padding: "20px", marginTop: "100px", maxHeight: "auto", borderRadius: "30px", marginLeft: "20px", marginRight: "20px" }}>
                        <h5 style={{ textAlign: "center", fontFamily: "revert", fontFamily: "-moz-initial", color: "Black", fontWeight: "bolder", fontSize: 30, color: "black", marginTop: "10px" }}>Bike Insurance</h5><br />
                        <div>
                            <p>According to the guidelines issued for insurance, you are allowed to withdraw your policy before 15 days starting from the day of issuance of the policy. For grabbing more details on the subject you can consider consulting with our advisor at the time of purchase or read the following plan brochure carefully
</p>
                            <p><strong>Know more about Bike Insurance:</strong></p>
                            <ul><li>As per The Motor Vehicle Act, 1988, Bike insurance is compulsory as it protects against third party liability due to injury or damage of property. Therefore, bike insurance covers your third-party or legal liability.</li>
                                <li>Bike insurance safeguards your two-wheeler from any harm incurred due to an accident irrespective of how big or small it is. Bike Insurance helps you in dealing with such expenditures</li>

                                <li>An insurer can also add benefits to the bike insurance plan by accompanying them with additional add ons which provide specified and all-inclusive protection.
</li>
                                <li>
                                By having an insurance plan, one can leverage the “Risk-free” as well as “stress-free” mental peace. It provides relief from the potential financial burden and risk. 

                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div class="col-md-6" style={{ marginTop: "100px", height: "500px" }} >
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h5 style={{ textalign: "center", fontFamily: "-moz-initial", fontWeight: "bolder", fontSize: 30 }}>Contact Us</h5>
                    </div>
                    <input className="input" onChange={(text) => { set_name(text.target.value) }} placeholder="Name" name="name" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} />
                    <input className="input" onChange={(text) => { set_last_name(text.target.value) }} placeholder="Last Name" name="lname" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} />
                    <input className="input" onChange={(text) => { set_email(text.target.value) }} placeholder="Email" name="email" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} />
                    <input maxLength="10" minLength="10" className="input" onChange={(text) => { set_mobile(text.target.value) }} placeholder="Number" name="number" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} /><br />
                    <button className="button" style={{ width: "90%", margin: "20px", height: "50px", borderRadius: "30px" }} onClick={(e) => { onSubmit(e) }}>Submit</button>
                </div>
            </div>

            <Footer />
        </div>

    )
}
