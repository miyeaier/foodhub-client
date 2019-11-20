import React, { Component } from "react"
import { withRouter } from "react-router"
import "../css/create-recipe.css"
import { fetchRecipes } from '../modules/requestRecipes'

class Cookbook extends Component {
  state = {
    recipe: null,
    message: null,
    error: false, 
    renderFavorites: false,
  }

  async renderFavorites() {
    const result = this.recipe.favorite
    try {
      await fetchRecipes(result)
      this.props.entryHandler()
    } catch (error) {
      console.log(error)
    }
  }


  render() {
    let favorite


    return (
     <>
        <h1>My Cookbook</h1>
        {favorite}
     </>
    )
  }
}
export default Cookbook