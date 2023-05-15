import { useState } from 'react'
import Star from '../images/icon-star.svg'
import ThankYou from "../images/illustration-thank-you.svg"

export default function Rate() {

  const [submitted, setSubmitted] = useState(false)
  const [rating, setRating] = useState("0")
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
                  <RatingButton number={1}/>
                  <RatingButton number={2}/>
                  <RatingButton number={3}/>
                  <RatingButton number={4}/>
                  <RatingButton number={5}/>
                </div>
                <SubmitButton />            
              </div>
          </section>)}
          {submitted && <Rated rating={rating} />}
        </>
    )

function SubmitButton() {
  return (
      <button
      onClick={() => setSubmitted(true)}
        className="submit-btn">
          SUBMIT
      </button>  
  )     
}

function RatingButton({ number }) {
  return (
      <button
        onClick={() => setRating(number)}>
          {number}
      </button> 
  )
}

function Rated({rating}) {
  return (
      <section className="rating-container">
          <div className="rated-wrapper">
              <img className="ty-img" src={ThankYou} alt="thankyouart"/>
              <p className="selected">You selected {rating} out of 5</p>
              <h1>Thank you!</h1>
              <p className="ty-msg">
                  We appreciate you taking the time to give a rating.
                  If you ever need more support, dont hesitate to get in touch!
              </p>
          </div>
      </section>
  )
}
};
