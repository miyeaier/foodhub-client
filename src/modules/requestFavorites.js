import axios from 'axios'
import getCurrentCredentials from './getCredentials'
const apiUrl = 'http://localhost:3000/v1/'

const submitFavorite = async (recipeId) => {
  try {
    let response = await axios.post(apiUrl + `recipes/${recipeId}/favorite`, 
    {},
      {
        headers: getCurrentCredentials()
      }
    )
    return {
      message: response.data.message
    }
  } catch(error) {
    return {
      error: error.response.data.error_message
    }
  }
}

const fetchFavorites = async () => {
  let response = await axios.get(apiUrl + 'favorites')
  return response.data.cookbook.cookbook_recipes
}

export { submitFavorite, fetchFavorites }