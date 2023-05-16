# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Add solution URL here](https://github.com/abelmorad/interactive-rating-component)
- Live Site URL: [Add live site URL here](https://interactive-rating-component-orpin-nu.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - For Build Tool


### What I learned
I learned how to work with props, state hook and conditional operator. I am still having a hard timing wrapping my head around the concept but I am learning.

To see how you can add code snippets, see below:

```jsx
<h1>Some JSX Code</h1>
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
          {submitted  && <Rated rating={rating} />}
        </>
    )

```

### Continued development

I will keep learning more about React


### Useful resources

- [React Dev](https://react.dev/) - The new react documentation is really helped me understand the concepts of React.
- [Conditional Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) - This is an amazing article which helped me finally understand conditional operator concept. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Sharhabeel Morad](https://abelmorad.github.io/)
- Frontend Mentor - [@abelmorad](https://www.frontendmentor.io/profile/abelmorad)
- Gmail - [Email](abelmorad97@gmail.com)

## Acknowledgments

I would like to thank https://www.youtube.com/@tsbsankara for the video on youtube. It helped me with hiding the Rated component then showing it upon submitting.

