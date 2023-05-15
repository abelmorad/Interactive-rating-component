import ThankYou from "../images/illustration-thank-you.svg"

function Rated() {
    return (
        <section className="rating-container">
            <div className="rated-wrapper">
                <img className="ty-img" src={ThankYou} alt="thankyouart"/>
                 <p className="selected">You selected 4 out of 5</p>
                <h1>Thank you!</h1>
                <p className="ty-msg">
                    We appreciate you taking the time to give a rating.
                    If you ever need more support, dont hesitate to get in touch!
                </p>
            </div>
        </section>
    )
}

export default Rated