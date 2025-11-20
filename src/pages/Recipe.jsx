import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Recipe = () => {
  return (
    <>
       <Navbar />
       <main className="recipe-container">
  <h1 className="recipe-title">
    DAIRY-FREE/VEGAN PEANUT BUTTER ICE CREAM
  </h1>

  <div className="recipe-image-wrapper">
    <img src="/Recipe.jpg" alt="Recipe" className="recipe-image" />
  </div>

  <div className="recipe-text">
    <p>
      <strong>Ingredients:</strong> 3 frozen (for 7–8 hours) and chopped ripe bananas, one
      cup almond milk, 1/4 cup cocoa powder, 4 soft pitted dates, 3 tbsp ATOM Peanut butter.
    </p>

    <p>
      <strong>Preparation:</strong> Soak 15–20 almonds in a cup of water overnight. In the
      morning, peel the skin of almonds. Into a blender, add half a cup water, peeled and
      soaked almonds and then grind them to prepare almond milk. Into the same blender add
      cocoa powder, dates and blend them. Now add frozen bananas and ATOM Peanut butter to
      the blender and blend all the ingredients for about 2 minutes, stir and blend again
      until smooth. Transfer into a freezer container and freeze for 6 hours before serving.
    </p>
  </div>
</main>

       <Footer />
    </>
  )
}

export default Recipe
