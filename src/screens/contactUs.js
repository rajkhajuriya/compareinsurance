import React, { useState } from 'react'
import Axios from 'axios'
import Footer from '../components/footer'
import Navbar from "../components/navbar"
import swal from 'sweetalert';
import "../App.css"
export default function ContactUs() {

    const [name, set_name] = useState("")
    const [last_name, set_last_name] = useState("")
    const [email, set_email] = useState("")
    const [mobile, set_mobile] = useState("")
    const [isLoading, setisLoading] = useState(0)




    const onSubmit = (e) => {
        e.preventDefault()
     console.log(name,last_name,email,mobile)
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
            <div class="column" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

                <div class="col-md-6" style={{ marginTop: "100px", }} >
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h5 style={{ textalign: "center", fontFamily: "-moz-initial", fontWeight: "bolder", fontSize: 30 }}>Contact Us</h5>
                    </div>
                    <input className="input" onChange={(text) => { set_name(text.target.value) }} value={name} placeholder="Name" name="name" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} />
                    <input className="input" onChange={(text) => { set_last_name(text.target.value) }} value={last_name} placeholder="Last Name" name="lname" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} />
                    <input className="input" onChange={(text) => { set_email(text.target.value) }} value={email} placeholder="Email" name="email" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} />
                    <input maxLength="10" minLength="10" className="input" onChange={(text) => { set_mobile(text.target.value) }} value={mobile} placeholder="Number" name="number" style={{ width: "90%", margin: "20px", height: "50px", padding: "20px", borderRadius: "30px" }} /><br />
                    <button className="button" style={{ width: "90%", margin: "20px", height: "50px", borderRadius: "30px" }} onClick={(e) => { onSubmit(e) }}>Submit</button>
                </div>
            </div>

            <Footer />
        </div>

    )
}