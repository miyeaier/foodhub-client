import React, { Component } from 'react';
import { fetchRecipes } from '../modules/requestRecipes';
import { Message, Header, Card, Divider, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class ListRecipes extends Component {
  state = {
    recipes: []
  }

  componentDidMount() {
    fetchRecipes()
      .then(result => {
        this.setState({
          recipes: result
        })
      })
  }

  render() {
    let renderListRecipes
    const recipeData = this.state.recipes
    let message

    if (recipeData.length > 0) {
      renderListRecipes = recipeData.map(recipe => {
        return (
          <Card>
            <Image src={recipe.image} alt='' />
              <Card.Content>
                <NavLink id={`recipe_${recipe.id}`} key={recipe.id} to={`/recipe/${recipe.id}`}>
                  <Card.Header as='h1'>{recipe.title}</Card.Header>
                  <Divider />
                  <Card.Description>
                  <p style={{ fontWeight: 'bold'}}>Ingredients:</p>
                  <p>{recipe.ingredients}</p>
                  <p style={{ fontWeight: 'bold'}}>Directions:</p>
                  <p>{recipe.directions}</p>
                  </Card.Description>
                </NavLink>
              </Card.Content>
            </Card>
        )
      })
    } else {
      message = (
        <Message style={{ color: 'red' }}>
          <Header
            as='p'
            id="message"
            style={{ color: 'green' }}>
            There are no recipes
        </Header>
        </Message>
      )
    }
    return (
      <>
        {renderListRecipes &&
          <div id="list">
            {renderListRecipes}
          </div>
        }
        {message}
      </>
    )
  }
}
export default ListRecipes;