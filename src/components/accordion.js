import React from 'react'
import "./accordion.css"
export default function Accordion() {
  return (
    <div class="accordion accordion-flush" id="accordionExample">
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <b>How we help you to compare insurance policies</b>
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong> Comparing insurance at Compare Insurance India is a quick and easy process.</strong>You will be furnished by instant and free quotes of products like health insurance, car, bike and travel from superior insurance companies. After careful and easy consideration, choose the right plan according to your needs and budget. Our vision is to help each individual find the best insurance in terms of premium benefits as you and your family future depends on it.

No insurance means a financial burden and emotional discomfort. Fill the details, choose the best, make the payment and get the policy issued instantly with Compare Insurance India. It’s that simple!

Compare Insurance India is 100% independent and displays the fair comparison as we work for customers, not for insurance companies.

Our customer service is unmatched and we are committed to delivering on-time services. We will make sure all the uncertainties are handled with care.

We are tied up with superior insurance companies to conduct the blue-chip insurance product with savings delivered straight to you.

Compare Insurance India is your one-stop solution to your premium needs. The unconditional support, expert advice and unbiased opinion makes you a smart and elegant buyer. You can count on us for any service needs.

      </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
            <b>Benefits of Comparing Insurance with Compare Insurance India.</b>
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div style={{ margin: "10px" }}>
              <strong>Tested and Trusted</strong><br />
            Compare Insurance India is a trustable company with 5-star reviews from over a thousand of people. Customers are our best advocates.
          </div>
            <div style={{ margin: "10px" }}>
              <strong>Fully Explainer Videos</strong><br />
            We not only provide you with facts and specific details but videos to help you understand policies effectively.

           </div>
            <div style={{ margin: "10px" }}>
              <strong>One Click to Compare</strong><br />
            With Compare Insurance India, You can easily compare different premium plans and best coverage on a single webpage with ease.
           </div>
            

          </div>
        </div>
      </div>
    </div>
  )
}
