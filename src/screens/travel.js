import Axios from 'axios'
import React, { useState } from 'react'
import Footer from '../components/footer'
import qs from "qs"
import Navbar from "../components/navbar"
import "../App.css"
import swal from "sweetalert";
export default function Travel(props) {
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
                        <h5 style={{ textAlign: "center", fontFamily: "revert", fontFamily: "-moz-initial", color: "Black", fontWeight: "bolder", fontSize: 30, color: "black", marginTop: "10px" }}>Travel Insurance</h5><br />
                        <div>
                            <p>According to the guidelines issued for insurance, you are allowed to withdraw your policy before 15 days starting from the day of issuance of the policy. For grabbing more details on the subject you can consider consulting with our advisor at the time of purchase or read the following plan brochure carefully.

</p>
                            <p><strong>Know more about Travel Insurance:</strong>
                            </p>
                            <ul><li>Loss of passport or any other crucial documents in a foreign country can be a disturbing thing. Travel insurance provides reimbursement benefits for expenses of issuing duplicate documents and legal processes in a foreign country.
</li>
                                <li>Legal processes are often difficult to deal with, even in one’s own country. However, travel insurance covers all the legal cost and expenses incurred by any emergency up to the sum assured.
</li>

                                <li>Travel Insurance also includes emergency accommodation. Natural disasters such as earthquakes, floods and storms may force you to look for accommodation. However, arranging emergency accommodations in a foreign country is quite challenging. Travel insurance covers expenses for such emergency situations that may otherwise leave you with no money.
</li>
                                <li>Loss of baggage or any other things can be a mood-spoiler and can severely affect your budget. But having travel insurance can relieve the financial burden on your international trip. Travel Insurance offers compensation for expenses incurred by loss of baggage up to the limited sum assured.
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
