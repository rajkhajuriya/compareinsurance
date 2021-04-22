import React from 'react'
import "./aboutsus.css"
import Footer from './footer'
export default function AboutComponent(props) {
    return (
        <React.Fragment>
            <section class="text-center about" style={{ marginTop: "70px" }}>

                <h1>About US</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
                            <span class="fa fa-group"></span>
                            <h2>Section 1</h2>
                           
                        </div>
                        <div class="col-lg-12 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
                            <span class="fa fa-info"></span>
                            <h2>Investment</h2>
                            <p class="lead"><strong>Know More About Investment:</strong>
According to the finance perspective, investment is a sum of money or fund that a person spends in real-time intending to attain its financial benefits in the coming times. Investment is an act of creating and buying assets anticipating a return in various forms such as capital appreciation, dividend, or interest-earning. These returns are profitable as compared to the funds that were initially invested. Investments can be differentiated from other kinds of monetary transactions by analyzing the motive of spending the amount. The amount that you spend as an investment is typical with a motive to earn some kind of benefits in a certain duration of time.
</p>
                        </div>
                        <div class="clearfix visible-md-block visible-sm-block"></div>
                        <div class="col-lg-12 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
                            <span class="fa fa-file"></span>
                            <h2>Section 1</h2>
                        </div>

                    </div>

                </div>
                <Footer />
            </section>
        </React.Fragment>
    )
}
