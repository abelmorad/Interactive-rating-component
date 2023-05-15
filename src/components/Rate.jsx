import { useState } from 'react'
import Star from '../images/icon-star.svg'
import ThankYou from "../images/illustration-thank-you.svg"

export default function Rate() {
  const [submitted, setSubmitted] = useState(false)
    return (
        <>
          {!submitted && (<section className="rating-container">
              <div className="rating-wrapper">
                <div className="star-container">
                  <img className="star-icon" src={Star} alt="star"/>
                </div>
                <h1>How did we do?</h1>
                <p>
                  Please let us know how we did with your support request. 
                  All feedback is appreciated to help us improve
                  our offering!
                </p>
                <div className="scale-container">
                  <ScaleButton scale={1}/>
                  <ScaleButton scale={2}/>
                  <ScaleButton scale={3}/>
                  <ScaleButton scale={4}/>
                  <ScaleButton scale={5}/>
                </div>
                <SubmitButton />            
              </div>
          </section>)}
          {submitted && <Rated />}
        </>
    )
}

function SubmitButton() {
  return (
      <button
        className="submit-btn">
          SUBMIT
      </button>  
  )     
}

function ScaleButton({ scale }) {
  return (
      <button
        onClick={() => (scale)}>
          {scale}
      </button> 
  )
}


function Rated() {
  return (
      <section className="rating-container">
          <div className="rated-wrapper">
              <img className="ty-img" src={ThankYou} alt="thankyouart"/>
              <p className="selected">You selected out of 5</p>
              <h1>Thank you!</h1>
              <p className="ty-msg">
                  We appreciate you taking the time to give a rating.
                  If you ever need more support, dont hesitate to get in touch!
              </p>
          </div>
      </section>
  )
}
