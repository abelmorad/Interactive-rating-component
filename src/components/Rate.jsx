import { useState } from 'react'
import Star from '../images/icon-star.svg'
import Rated from './Rated'

export default function Rate() {
  
    return (
        <main className="App">
          <section className="rating-container">
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
          </section>
        </main>
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

function ScaleButton({scale}) {

return (
      <button>
        {scale}
      </button>
)
}