import React from "react"
import { Divider, Grid, Image, Card, Button, Icon } from "semantic-ui-react"
import { Link } from "react-router-dom"
import '../css/recipe-card.css'

const RecipeCard = props => {
  let recipe = props.recipe
  let linked = props.linked
  let addRecipeToFavorites
  if (props.isSignedIn) {
    addRecipeToFavorites = (
      <Button color="olive" name="save-recipe-to-cookbook" onClick={() => props.setRecipeAsFavorite()}>
        <Icon name= 'plus'/> Add this recipe to your favorites
      </Button>
    )
  }

  let parent = props.recipe.parent
  return (
    <>
      <Grid.Column
        textAlign="justified"
        name={linked ? `recipe-${recipe.id}` : "single-recipe"}
        style={{ marginBottom: "0.5rem" }}
      >
        <Card>
          <Image src={recipe.image} alt="" />
          <Card.Content>
            {linked ? (
              <Link
                id={`recipe-${recipe.id}`}
                to={`/recipe/${recipe.id}`}
              >
                <Card.Header as="h3" name="recipe-title">
                  {recipe.title}
                </Card.Header>
              </Link>
            ) : (
                <Card.Header as="h3" name="recipe-title">
                  {recipe.title}
                </Card.Header>
              )}
            <Divider />
            <Card.Description>
              <p style={{ fontWeight: "bold" }}>Ingredients: </p>
              <p name="recipe-ingredients">{recipe.ingredients}</p>
              <p style={{ fontWeight: "bold" }}>Directions: </p>
              <p name="recipe-directions">{recipe.directions}</p>
            </Card.Description>
            <Divider />
            <Card.Content extra>
              {parent ? (
                <Link
                  id={`recipe-${parent.id}`}
                  to={`/recipe/${parent.id}`}
                >
                  <p name="parent-data">
                    <Icon name='food' size='large' />
                    This recipe {parent.title} was forked from {parent.user_name}
                  </p>
                </Link>
                  ) : ("") }
            </Card.Content>
          </Card.Content>
          {addRecipeToFavorites}
          {props.children}
        </Card>
      </Grid.Column>
    </>
      );
    };
    
export default RecipeCard;